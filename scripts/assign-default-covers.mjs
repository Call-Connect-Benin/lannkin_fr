/**
 * Assigne une image de couverture unique (rendu 3D) à chaque article
 * qui n'en a pas encore.
 */
import fs from "fs";
import path from "path";

const BLOG_DIR = path.resolve("content/blog");

// 11 images uniques pour les 11 articles sans cover
const COVERS = [
  "/images/rendu3D/rendu3d-cadre-verre-closeup.webp",
  "/images/rendu3D/rendu3d-cube-vert-rocket-embed.webp",
  "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  "/images/rendu3D/rendu3d-rocket-cubes-gris.webp",
  "/images/rendu3D/rendu3d-cubes-rocket-fond-vert.webp",
  "/images/rendu3D/rendu3d-flatlay-fond-vert.webp",
  "/images/rendu3D/rendu3d-trio-cubes-flottants.webp",
  "/images/rendu3D/rendu3d-rouge-vert-dramatic.webp",
  "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
  "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
  "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
];

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"));
let idx = 0;

for (const file of files) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, "utf-8");

  if (content.includes("coverImage:")) continue;
  if (idx >= COVERS.length) break;

  const cover = COVERS[idx++];
  content = content.replace(
    /^(---\n[\s\S]*?readTime: "[^"]*")\n---/,
    `$1\ncoverImage: "${cover}"\n---`
  );

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`+ ${file} → ${path.basename(cover)}`);
}

console.log(`\n${idx} articles mis à jour.`);
