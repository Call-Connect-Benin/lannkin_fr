import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

const SITES = [
  { slug: "peinture-excel-pro", url: "https://www.peintureexcelpro.com/" },
  { slug: "peinture-excel-pro", url: "https://peintureexcelpro.com/" },
  { slug: "mtl-luxe", url: "https://www.mtlluxe.ca/" },
  { slug: "mtl-luxe", url: "https://mtlluxe.ca/" },
  { slug: "rasage-corporel", url: "https://www.rasagecorporeladomicile.ca/" },
  { slug: "rasage-corporel", url: "https://rasagecorporeladomicile.ca/" },
  { slug: "ethique-service-nettoyage", url: "https://www.ethiqueservicenettoyage.ca/" },
  { slug: "ethique-service-nettoyage", url: "https://ethiqueservicenettoyage.ca/" },
  { slug: "bout-de-choux", url: "https://boutdechouboutique.com/" },
  { slug: "bout-de-choux", url: "https://www.boutdechouboutique.com/" },
];

async function capture() {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const captured = new Set();

  for (const site of SITES) {
    if (captured.has(site.slug)) continue;
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`  Tentative: ${site.url}`);
    try {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(site.url, { waitUntil: "networkidle2", timeout: 20000 });
      await new Promise((r) => setTimeout(r, 2000));
      const png = await page.screenshot({ type: "png", fullPage: false });
      await page.close();
      await sharp(png).webp({ quality: 85 }).toFile(outputPath);
      const size = fs.statSync(outputPath).size;
      console.log(`    -> ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)`);
      captured.add(site.slug);
    } catch (err) {
      console.log(`    x Echec: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\nCaptures reussies: ${captured.size}/5`);
  console.log("Manquants:", ["peinture-excel-pro","mtl-luxe","rasage-corporel","ethique-service-nettoyage","bout-de-choux"].filter(s => !captured.has(s)).join(", ") || "aucun");
}

capture().catch(console.error);
