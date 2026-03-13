/**
 * Corrige tous les fichiers MDX :
 * 1. Remplace les placeholders %%IMG%%...%%END%% par des images locales
 * 2. Ajoute coverImage au front matter (première image trouvée)
 */
import fs from "fs";
import path from "path";

const BLOG_DIR = path.resolve("content/blog");
const IMAGES_DIR = path.resolve("public/images/blog");

function slugifyUrl(url) {
  try {
    const parsed = new URL(url);
    return path.basename(parsed.pathname);
  } catch {
    return url.split("/").pop() || "image.jpg";
  }
}

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
let fixedPlaceholders = 0;
let addedCovers = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  const slug = file.replace(/\.mdx$/, "");
  const articleImgDir = path.join(IMAGES_DIR, slug);
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  // 1. Remplacer les placeholders %%IMG%%...%%END%%
  content = content.replace(/%%IMG%%(.+?)%%ALT%%(.*?)%%END%%/g, (match, src, alt) => {
    const origFilename = slugifyUrl(src);
    const baseName = origFilename.replace(/\.[^.]+$/, "");
    const webpFilename = `${baseName}.webp`;
    const localFile = path.join(articleImgDir, webpFilename);

    if (fs.existsSync(localFile)) {
      modified = true;
      return `![${alt}](/images/blog/${slug}/${webpFilename})`;
    }

    // Essayer aussi les noms tronqués (img-hash)
    if (fs.existsSync(articleImgDir)) {
      const localFiles = fs.readdirSync(articleImgDir);
      // Chercher par correspondance partielle du nom
      for (const lf of localFiles) {
        if (lf.startsWith(baseName.substring(0, 20))) {
          modified = true;
          return `![${alt}](/images/blog/${slug}/${lf})`;
        }
      }
    }

    // Image pas trouvée, supprimer le placeholder
    modified = true;
    return "";
  });

  if (modified) {
    fixedPlaceholders++;
  }

  // 2. Nettoyer les lignes vides multiples
  content = content.replace(/\n{4,}/g, "\n\n\n");

  // 3. Ajouter coverImage si pas déjà présent
  if (!content.includes("coverImage:")) {
    // Chercher la première image markdown
    const imgMatch = content.match(/!\[.*?\]\(([^)]+)\)/);
    if (imgMatch) {
      const imgPath = imgMatch[1];
      // Insérer avant le --- de fermeture du front matter
      content = content.replace(
        /^(---\n[\s\S]*?readTime: "[^"]*")\n---/,
        `$1\ncoverImage: "${imgPath}"\n---`
      );
      addedCovers++;
    }
  }

  fs.writeFileSync(filePath, content, "utf-8");
}

console.log(`${fixedPlaceholders} fichiers avec placeholders corrigés`);
console.log(`${addedCovers} coverImages ajoutées`);
