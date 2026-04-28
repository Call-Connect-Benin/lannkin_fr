/**
 * Télécharge toutes les images des articles WordPress
 * et met à jour les fichiers MDX avec les chemins locaux.
 */
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import sharp from "sharp";

const WP_API = "https://www.lannkin.fr/wp-json/wp/v2";
const BLOG_DIR = path.resolve("content/blog");
const IMAGES_DIR = path.resolve("public/images/blog");

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const request = client.get(url, { timeout: 30000 }, (res) => {
      // Suivre les redirections
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} pour ${url}`));
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });
    request.on("error", reject);
    request.on("timeout", () => {
      request.destroy();
      reject(new Error(`Timeout pour ${url}`));
    });
  });
}

function extractImages(html) {
  const images = [];
  // Trouver toutes les balises <img>
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    let src = match[0];
    // Extraire src
    const srcMatch = src.match(/src=["']([^"']+)["']/);
    if (srcMatch) {
      const url = srcMatch[1];
      // Extraire alt
      const altMatch = src.match(/alt=["']([^"']*)["']/);
      const alt = altMatch ? altMatch[1] : "";
      images.push({ url, alt });
    }
  }
  return images;
}

function slugifyUrl(url) {
  // Extraire le nom du fichier depuis l'URL
  try {
    const parsed = new URL(url);
    const filename = path.basename(parsed.pathname);
    return filename;
  } catch {
    return url.split("/").pop() || "image.jpg";
  }
}

async function convertToWebp(buffer, outputPath) {
  try {
    await sharp(buffer)
      .webp({ quality: 80 })
      .toFile(outputPath);
    return true;
  } catch (err) {
    // Si sharp échoue, sauvegarder tel quel
    console.log(`    ! Conversion WebP échouée, sauvegarde originale`);
    const origPath = outputPath.replace(/\.webp$/, path.extname(outputPath));
    fs.writeFileSync(origPath, buffer);
    return false;
  }
}

async function main() {
  console.log("Téléchargement des images des articles WordPress\n");

  // Créer le dossier images
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  // Récupérer tous les articles avec contenu complet
  let allPosts = [];
  let page = 1;
  while (true) {
    const url = `${WP_API}/posts?per_page=100&page=${page}&_fields=id,slug,content,featured_media`;
    console.log(`Fetching posts page ${page}...`);
    const res = await fetch(url);
    if (!res.ok) break;
    const posts = await res.json();
    if (posts.length === 0) break;
    allPosts = allPosts.concat(posts);
    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1");
    if (page >= totalPages) break;
    page++;
  }
  console.log(`${allPosts.length} articles trouvés\n`);

  // Pour chaque article, télécharger les images
  let totalImages = 0;
  let downloaded = 0;
  let failed = 0;

  for (const post of allPosts) {
    const slug = post.slug;
    const images = extractImages(post.content.rendered);

    if (images.length === 0) continue;

    console.log(`\n${slug} (${images.length} images)`);

    // Créer un sous-dossier par article
    const articleImgDir = path.join(IMAGES_DIR, slug);
    if (!fs.existsSync(articleImgDir)) {
      fs.mkdirSync(articleImgDir, { recursive: true });
    }

    const imageMap = []; // { originalUrl, localPath, alt }

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      totalImages++;

      // Déterminer le nom de fichier local
      const origFilename = slugifyUrl(img.url);
      const baseName = origFilename.replace(/\.[^.]+$/, "");
      const webpFilename = `${baseName}.webp`;
      const localPath = path.join(articleImgDir, webpFilename);
      const relativePath = `/images/blog/${slug}/${webpFilename}`;

      // Skip si déjà téléchargé
      if (fs.existsSync(localPath)) {
        console.log(`  ⊘ ${origFilename} (déjà téléchargé)`);
        imageMap.push({ originalUrl: img.url, localPath: relativePath, alt: img.alt });
        downloaded++;
        continue;
      }

      try {
        const buffer = await downloadFile(img.url);
        await convertToWebp(buffer, localPath);
        const size = fs.statSync(localPath).size;
        console.log(`  + ${webpFilename} (${(size / 1024).toFixed(0)} KB)`);
        imageMap.push({ originalUrl: img.url, localPath: relativePath, alt: img.alt });
        downloaded++;
      } catch (err) {
        console.log(`  x ${origFilename}: ${err.message}`);
        failed++;
      }
    }

    // Mettre à jour le fichier MDX
    const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (fs.existsSync(mdxPath) && imageMap.length > 0) {
      let mdxContent = fs.readFileSync(mdxPath, "utf-8");

      // Ajouter les images dans le contenu MDX
      // Trouver les endroits où les images ont été supprimées et les remettre
      for (const img of imageMap) {
        // L'image n'est probablement pas dans le MDX car on l'a supprimée
        // On va chercher si elle est déjà là
        if (!mdxContent.includes(img.localPath)) {
          // Ajouter l'image après le front matter si c'est la première, ou à la fin du contenu
        }
      }

      // Approche: re-générer le MDX avec les images
      // On va re-convertir le HTML en Markdown en gardant les images cette fois
    }
  }

  console.log(`\n\nRésultat: ${downloaded} images téléchargées, ${failed} échecs sur ${totalImages} total`);

  // Maintenant, regénérer les MDX avec les images
  console.log("\nMise à jour des fichiers MDX avec les images locales...");
  await regenerateMdxWithImages(allPosts);
}

async function regenerateMdxWithImages(posts) {
  const TurndownService = (await import("turndown")).default;
  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  // Règle pour les images : utiliser le chemin local
  turndown.addRule("localImages", {
    filter: "img",
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      const alt = node.getAttribute("alt") || "";

      if (!src) return "";

      // Déterminer le chemin local
      const origFilename = slugifyUrl(src);
      const baseName = origFilename.replace(/\.[^.]+$/, "");
      const webpFilename = `${baseName}.webp`;

      // Trouver le slug du post parent
      // On va matcher par le contexte
      return `%%IMG%%${src}%%ALT%%${alt}%%END%%`;
    },
  });

  // Garder les iframes
  turndown.addRule("iframe", {
    filter: "iframe",
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      if (src.includes("youtube")) {
        return `\n\n<iframe src="${src}" width="100%" height="400" frameBorder="0" allowFullScreen></iframe>\n\n`;
      }
      return "";
    },
  });

  const CATEGORY_MAP = {
    92: "google-ads", 93: "ecommerce", 94: "marketing-digital",
    91: "conception-web", 69: "graphisme", 68: "marketing-digital",
    67: "seo", 66: "marketing-digital", 57: "reseaux-sociaux",
    58: "conception-web", 56: "marketing-digital", 95: "google-my-business",
    1: "marketing-digital",
  };
  const CATEGORY_PRIORITY = [
    "google-ads", "ecommerce", "seo", "google-my-business",
    "reseaux-sociaux", "graphisme", "conception-web", "marketing-digital",
  ];

  function mapCategory(ids) {
    const mapped = ids.map((id) => CATEGORY_MAP[id]).filter(Boolean);
    if (mapped.length === 0) return "marketing-digital";
    for (const cat of CATEGORY_PRIORITY) {
      if (mapped.includes(cat)) return cat;
    }
    return mapped[0];
  }

  function cleanExcerpt(html) {
    return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ")
      .replace(/&hellip;/g, "...").replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, "–").replace(/&#8212;/g, "—")
      .replace(/&#038;/g, "&").replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
      .replace(/\[&hellip;\]/g, "...").replace(/\[\.\.\.\]/g, "...")
      .trim().substring(0, 300);
  }

  // Refetch posts with excerpt
  const res = await fetch(`${WP_API}/posts?per_page=100&_fields=slug,title,excerpt,date,categories,content,tags`);
  const fullPosts = await res.json();

  let updated = 0;
  for (const post of fullPosts) {
    const slug = post.slug;
    const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const articleImgDir = path.join(IMAGES_DIR, slug);

    // Convertir HTML en Markdown
    let content = turndown.turndown(post.content.rendered);

    // Remplacer les placeholders d'images par les chemins locaux
    content = content.replace(/%%IMG%%(.+?)%%ALT%%(.+?)%%END%%/g, (match, src, alt) => {
      const origFilename = slugifyUrl(src);
      const baseName = origFilename.replace(/\.[^.]+$/, "");
      const webpFilename = `${baseName}.webp`;
      const localFile = path.join(articleImgDir, webpFilename);

      if (fs.existsSync(localFile)) {
        return `![${alt}](/images/blog/${slug}/${webpFilename})`;
      }
      // Image pas téléchargée, ne pas inclure
      return "";
    });

    // Nettoyer
    content = content.replace(/\n{4,}/g, "\n\n\n").replace(/^\s+$/gm, "").trim();

    const title = post.title.rendered
      .replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, "–").replace(/&#8212;/g, "—")
      .replace(/&#038;/g, "&").replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">");

    const excerpt = cleanExcerpt(post.excerpt.rendered);
    const date = post.date.split("T")[0];
    const category = mapCategory(post.categories);
    const words = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(words / 200))} min`;

    const frontMatter = [
      "---",
      `title: "${title.replace(/"/g, '\\"')}"`,
      `excerpt: "${excerpt.replace(/"/g, '\\"')}"`,
      `date: "${date}"`,
      `category: "${category}"`,
      `tags: []`,
      `author: "Équipe Lannkin"`,
      `readTime: "${readTime}"`,
      "---",
    ].join("\n");

    const mdxContent = `${frontMatter}\n\n${content}\n`;
    fs.writeFileSync(mdxPath, mdxContent, "utf-8");
    updated++;
  }

  console.log(`${updated} fichiers MDX mis à jour avec les images locales.`);
}

main().catch(console.error);
