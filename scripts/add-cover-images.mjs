/**
 * Extrait la première image de chaque article MDX
 * et l'ajoute comme coverImage dans le front matter.
 */
import fs from "fs";
import path from "path";

const BLOG_DIR = path.resolve("content/blog");

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
let updated = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");

  // Skip si coverImage déjà présent
  if (content.includes("coverImage:")) continue;

  // Chercher la première image markdown dans le contenu
  const imgMatch = content.match(/!\[.*?\]\(([^)]+)\)/);
  if (!imgMatch) continue;

  const imgPath = imgMatch[1];

  // Ajouter coverImage au front matter (avant le --- de fermeture)
  content = content.replace(
    /^(---\n[\s\S]*?)(readTime: "[^"]*")\n---/,
    `$1$2\ncoverImage: "${imgPath}"\n---`
  );

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`+ ${file}: ${imgPath}`);
  updated++;
}

console.log(`\n${updated} articles mis à jour avec coverImage.`);
