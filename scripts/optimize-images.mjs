import fs from "fs";
import path from "path";
import sharp from "sharp";

const RENDER_DIR = path.resolve("public/images/rendu3D");
const MAX_WIDTH = 1920;
const QUALITY = 85;

async function optimizeImages() {
  const files = fs.readdirSync(RENDER_DIR).filter((f) => f.endsWith(".png"));
  console.log(`Found ${files.length} PNG files to optimize...\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const inputPath = path.join(RENDER_DIR, file);
    const outputPath = path.join(RENDER_DIR, file.replace(".png", ".webp"));

    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let pipeline = image;
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    await pipeline.webp({ quality: QUALITY }).toFile(outputPath);

    const optimizedSize = fs.statSync(outputPath).size;
    totalOptimized += optimizedSize;

    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    console.log(
      `  ${file} → ${file.replace(".png", ".webp")}  ` +
        `${(originalSize / 1024 / 1024).toFixed(1)} MB → ${(optimizedSize / 1024).toFixed(0)} KB  ` +
        `(-${savings}%)`
    );
  }

  console.log(
    `\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB → ${(totalOptimized / 1024 / 1024).toFixed(1)} MB  ` +
      `(-${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`
  );
}

optimizeImages().catch(console.error);
