/**
 * Optimise toutes les images du blog :
 * - Redimensionne à max 800px de large (suffisant pour le blog)
 * - Qualité WebP 70
 * - Cible : < 50 KB par image
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("public/images/blog");
const MAX_WIDTH = 800;
const QUALITY = 70;

async function optimizeAll() {
  const dirs = fs.readdirSync(IMAGES_DIR).filter(d =>
    fs.statSync(path.join(IMAGES_DIR, d)).isDirectory()
  );

  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for (const dir of dirs) {
    const dirPath = path.join(IMAGES_DIR, dir);
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".webp"));

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const sizeBefore = fs.statSync(filePath).size;
      totalBefore += sizeBefore;

      try {
        const buffer = fs.readFileSync(filePath);
        const metadata = await sharp(buffer).metadata();

        let pipeline = sharp(buffer);

        // Redimensionner si plus large que MAX_WIDTH
        if (metadata.width && metadata.width > MAX_WIDTH) {
          pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }

        const optimized = await pipeline
          .webp({ quality: QUALITY, effort: 6 })
          .toBuffer();

        // Sauvegarder seulement si plus petit
        if (optimized.length < sizeBefore) {
          fs.writeFileSync(filePath, optimized);
          const sizeAfter = optimized.length;
          totalAfter += sizeAfter;
          const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(0);
          if (sizeBefore > 50000) {
            console.log(`  ${dir}/${file}: ${(sizeBefore/1024).toFixed(0)} KB -> ${(sizeAfter/1024).toFixed(0)} KB (-${saved}%)`);
          }
        } else {
          totalAfter += sizeBefore;
        }
        count++;
      } catch (err) {
        totalAfter += sizeBefore;
        console.log(`  x ${file}: ${err.message}`);
      }
    }
  }

  console.log(`\n${count} images traitées`);
  console.log(`Avant: ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Après: ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Économie: ${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%`);
}

optimizeAll().catch(console.error);
