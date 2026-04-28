/**
 * Retry téléchargement images WordPress avec délai entre chaque requête
 * pour éviter le rate limiting (HTTP 429)
 */
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";
import sharp from "sharp";

const WP_API = "https://www.lannkin.fr/wp-json/wp/v2";
const BLOG_DIR = path.resolve("content/blog");
const IMAGES_DIR = path.resolve("public/images/blog");
const DELAY_MS = 3000; // 3 secondes entre chaque requête

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    const request = client.get(url, {
      timeout: 30000,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
        "Accept-Language": "fr-CA,fr;q=0.9,en;q=0.8",
        "Referer": "https://www.lannkin.fr/blog/",
      },
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });
    request.on("error", reject);
    request.on("timeout", () => { request.destroy(); reject(new Error("Timeout")); });
  });
}

function slugifyUrl(url) {
  try {
    const parsed = new URL(url);
    return path.basename(parsed.pathname);
  } catch {
    return url.split("/").pop() || "image.jpg";
  }
}

function extractImages(html) {
  const images = [];
  const imgRegex = /src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const url = match[1];
    if (url.includes("lannkin.fr/wp-content/uploads")) {
      images.push(url);
    }
  }
  return [...new Set(images)]; // Dédupliquer
}

async function main() {
  console.log("Retry téléchargement images WordPress (avec délais)\n");

  // Récupérer tous les articles
  const res = await fetch(`${WP_API}/posts?per_page=100&_fields=slug,content`);
  const posts = await res.json();
  console.log(`${posts.length} articles\n`);

  // Collecter toutes les images manquantes
  const missing = [];
  for (const post of posts) {
    const urls = extractImages(post.content.rendered);
    for (const url of urls) {
      const origFilename = slugifyUrl(url);
      const baseName = origFilename.replace(/\.[^.]+$/, "");
      const webpFilename = `${baseName}.webp`;
      const articleDir = path.join(IMAGES_DIR, post.slug);
      const localPath = path.join(articleDir, webpFilename);

      if (!fs.existsSync(localPath)) {
        missing.push({ slug: post.slug, url, localPath, articleDir, webpFilename });
      }
    }
  }

  console.log(`${missing.length} images manquantes à télécharger\n`);

  let downloaded = 0;
  let failed = 0;

  for (let i = 0; i < missing.length; i++) {
    const img = missing[i];
    console.log(`[${i + 1}/${missing.length}] ${img.slug}/${img.webpFilename}`);

    if (!fs.existsSync(img.articleDir)) {
      fs.mkdirSync(img.articleDir, { recursive: true });
    }

    try {
      const buffer = await downloadFile(img.url);
      try {
        await sharp(buffer).webp({ quality: 80 }).toFile(img.localPath);
      } catch {
        // Si conversion WebP échoue, sauvegarder tel quel
        fs.writeFileSync(img.localPath, buffer);
      }
      const size = fs.statSync(img.localPath).size;
      console.log(`  + OK (${(size / 1024).toFixed(0)} KB)`);
      downloaded++;
    } catch (err) {
      console.log(`  x ${err.message}`);
      failed++;
    }

    // Délai entre chaque requête pour éviter le 429
    if (i < missing.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log(`\nTerminé: ${downloaded} téléchargées, ${failed} échecs`);

  // Re-mettre à jour les MDX
  if (downloaded > 0) {
    console.log("\nMise à jour des fichiers MDX...");
    await updateMdx(posts);
  }
}

async function updateMdx(posts) {
  const TurndownService = (await import("turndown")).default;
  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
  });

  turndown.addRule("localImages", {
    filter: "img",
    replacement: (content, node) => {
      const src = node.getAttribute("src") || "";
      const alt = node.getAttribute("alt") || "";
      if (!src) return "";
      return `%%IMG%%${src}%%ALT%%${alt}%%END%%`;
    },
  });

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

  // Refetch with all fields
  const res2 = await fetch(`${WP_API}/posts?per_page=100&_fields=slug,title,excerpt,date,categories,content`);
  const fullPosts = await res2.json();

  for (const post of fullPosts) {
    const slug = post.slug;
    const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
    const articleImgDir = path.join(IMAGES_DIR, slug);

    let content = turndown.turndown(post.content.rendered);

    content = content.replace(/%%IMG%%(.+?)%%ALT%%(.+?)%%END%%/g, (match, src, alt) => {
      const origFilename = slugifyUrl(src);
      const baseName = origFilename.replace(/\.[^.]+$/, "");
      const webpFilename = `${baseName}.webp`;
      const localFile = path.join(articleImgDir, webpFilename);

      if (fs.existsSync(localFile)) {
        return `![${alt}](/images/blog/${slug}/${webpFilename})`;
      }
      return "";
    });

    content = content.replace(/\n{4,}/g, "\n\n\n").replace(/^\s+$/gm, "").trim();

    const title = post.title.rendered
      .replace(/&amp;/g, "&").replace(/&#8217;/g, "'").replace(/&#8216;/g, "'")
      .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
      .replace(/&#8211;/g, "–").replace(/&#8212;/g, "—")
      .replace(/&#038;/g, "&").replace(/&quot;/g, '"')
      .replace(/&lt;/g, "<").replace(/&gt;/g, ">");

    const excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").replace(/\s+/g, " ")
      .replace(/&hellip;/g, "...").replace(/&amp;/g, "&")
      .replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
      .replace(/&#038;/g, "&").replace(/&quot;/g, '"')
      .replace(/\[&hellip;\]/g, "...").trim().substring(0, 300);

    const date = post.date.split("T")[0];
    const mapped = post.categories.map((id) => CATEGORY_MAP[id]).filter(Boolean);
    let category = "marketing-digital";
    for (const cat of CATEGORY_PRIORITY) {
      if (mapped.includes(cat)) { category = cat; break; }
    }

    const words = content.split(/\s+/).length;
    const readTime = `${Math.max(1, Math.ceil(words / 200))} min`;

    const frontMatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"\nexcerpt: "${excerpt.replace(/"/g, '\\"')}"\ndate: "${date}"\ncategory: "${category}"\ntags: []\nauthor: "Équipe Lannkin"\nreadTime: "${readTime}"\n---`;

    fs.writeFileSync(mdxPath, `${frontMatter}\n\n${content}\n`, "utf-8");
  }
  console.log(`${fullPosts.length} MDX mis à jour.`);
}

main().catch(console.error);
