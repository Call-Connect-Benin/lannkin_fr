/**
 * Télécharge les featured images (images à la une) de WordPress
 * pour tous les articles du blog Next.js, et met à jour le coverImage.
 */
import fs from "fs";
import path from "path";
import https from "https";
import sharp from "sharp";

const WP_API = "https://www.lannkin.fr/wp-json/wp/v2";
const BLOG_DIR = path.resolve("content/blog");
const IMAGES_DIR = path.resolve("public/images/blog");
const DELAY_MS = 2000;

const HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "application/json",
  "Referer": "https://www.lannkin.fr/blog/",
};

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: HEADERS, timeout: 15000 }, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => {
        try { resolve(JSON.parse(Buffer.concat(chunks).toString())); }
        catch (e) { reject(e); }
      });
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
  });
}

function downloadFile(url) {
  return new Promise((resolve, reject) => {
    const client = https;
    const req = client.get(url, {
      timeout: 30000,
      headers: {
        "User-Agent": HEADERS["User-Agent"],
        "Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
        "Referer": "https://www.lannkin.fr/blog/",
      },
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const chunks = [];
      res.on("data", c => chunks.push(c));
      res.on("end", () => resolve(Buffer.concat(chunks)));
      res.on("error", reject);
    });
    req.on("error", reject);
    req.on("timeout", () => { req.destroy(); reject(new Error("Timeout")); });
  });
}

async function main() {
  // 1. Lire les slugs des articles Next.js
  const mdxFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
  const localSlugs = new Set(mdxFiles.map(f => f.replace(/\.mdx$/, "")));
  console.log(`${localSlugs.size} articles dans Next.js\n`);

  // 2. Récupérer tous les posts WordPress avec featured_media
  let allPosts = [];
  let page = 1;
  while (true) {
    try {
      const posts = await fetchJSON(`${WP_API}/posts?per_page=100&page=${page}&_fields=slug,featured_media,title`);
      if (!posts.length) break;
      allPosts = allPosts.concat(posts);
      page++;
      await sleep(1000);
    } catch {
      break;
    }
  }
  console.log(`${allPosts.length} posts WordPress récupérés\n`);

  // 3. Filtrer ceux qui existent localement et ont un featured_media
  const toProcess = allPosts.filter(p => localSlugs.has(p.slug) && p.featured_media > 0);
  console.log(`${toProcess.length} articles avec featured_media à traiter\n`);

  let downloaded = 0;
  let failed = 0;
  let skipped = 0;

  for (let i = 0; i < toProcess.length; i++) {
    const post = toProcess[i];
    const slug = post.slug;
    const title = post.title?.rendered || slug;
    console.log(`[${i + 1}/${toProcess.length}] ${slug}`);

    try {
      // Récupérer l'URL de l'image via l'API media
      await sleep(DELAY_MS);
      const media = await fetchJSON(`${WP_API}/media/${post.featured_media}?_fields=source_url,media_details`);
      const sourceUrl = media.source_url;

      if (!sourceUrl) {
        console.log("  x Pas d'URL source");
        failed++;
        continue;
      }

      // Dossier de destination
      const articleDir = path.join(IMAGES_DIR, slug);
      if (!fs.existsSync(articleDir)) fs.mkdirSync(articleDir, { recursive: true });

      const destFile = path.join(articleDir, "featured.webp");

      // Skip si déjà téléchargé
      if (fs.existsSync(destFile)) {
        console.log("  = Déjà téléchargé");
        skipped++;
        // Mettre à jour le MDX quand même
        updateMdxCover(slug, `/images/blog/${slug}/featured.webp`);
        continue;
      }

      // Télécharger
      await sleep(DELAY_MS);
      const buffer = await downloadFile(sourceUrl);

      // Convertir en WebP optimisé
      const optimized = await sharp(buffer)
        .resize(800, null, { withoutEnlargement: true })
        .webp({ quality: 75 })
        .toBuffer();

      fs.writeFileSync(destFile, optimized);
      const sizeKB = (optimized.length / 1024).toFixed(0);
      console.log(`  + featured.webp (${sizeKB} KB)`);

      // Mettre à jour le coverImage dans le MDX
      updateMdxCover(slug, `/images/blog/${slug}/featured.webp`);
      downloaded++;

    } catch (err) {
      console.log(`  x ${err.message}`);
      failed++;
    }
  }

  console.log(`\nTerminé: ${downloaded} téléchargées, ${skipped} déjà présentes, ${failed} échecs`);
}

function updateMdxCover(slug, newCoverPath) {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) return;

  let content = fs.readFileSync(mdxPath, "utf-8");

  if (content.includes("coverImage:")) {
    // Remplacer le coverImage existant
    content = content.replace(
      /coverImage: "[^"]*"/,
      `coverImage: "${newCoverPath}"`
    );
  } else {
    // Ajouter coverImage avant le --- de fermeture
    content = content.replace(
      /^(---\n[\s\S]*?readTime: "[^"]*")\n---/,
      `$1\ncoverImage: "${newCoverPath}"\n---`
    );
  }

  fs.writeFileSync(mdxPath, content, "utf-8");
}

main().catch(console.error);
