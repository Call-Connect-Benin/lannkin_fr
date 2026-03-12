import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };
const QUALITY = 85;

const SITES = [
  { slug: "quadventure-agadir", url: "https://quadventure-agadir.com/" },
  { slug: "alltouchdisplay", url: "https://www.alltouchdisplay.com/" },
  { slug: "artisans-marceau-paris", url: "https://www.lesartisansmarceau.fr/" },
  { slug: "vigilante-4x4", url: "https://vigilante4x4.com/" },
  { slug: "essence-design-lausanne", url: "https://www.essencedesign.com/" },
  { slug: "rotho-ecommerce-allemagne", url: "https://rotho.com/" },
];

async function captureScreenshots() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`  Capturing ${site.url}...`);

    try {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
      // Wait a bit for animations/lazy content
      await new Promise((r) => setTimeout(r, 2000));

      const pngBuffer = await page.screenshot({ type: "png", fullPage: false });
      await page.close();

      // Convert to WebP with sharp
      await sharp(pngBuffer).webp({ quality: QUALITY }).toFile(outputPath);

      const size = fs.statSync(outputPath).size;
      console.log(`    → ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`    ✗ Failed: ${err.message}`);
    }
  }

  await browser.close();
  console.log("\nDone!");
}

captureScreenshots().catch(console.error);
