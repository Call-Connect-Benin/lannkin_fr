import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };
const QUALITY = 85;

const SITES = [
  { slug: "plomberie-slb", url: "https://www.plomberieslb.ca/" },
  { slug: "peinture-excel-pro", url: "https://www.peintureexcelpro.com/" },
  { slug: "mtl-luxe", url: "https://www.mtlluxe.ca/" },
  { slug: "constructions-guillen", url: "https://www.constructionsguillen.com/" },
  { slug: "nettoyage-ideal", url: "https://www.nettoyageideal.com/" },
  { slug: "rasage-corporel", url: "https://www.rasagecorporeladomicile.ca/" },
  { slug: "reno-st-georges", url: "https://www.renostgeorges.ca/" },
  { slug: "groupe-lariviere", url: "https://www.groupelariviere.ca/" },
  { slug: "peinture-pro", url: "https://www.peinture-pro.ca/" },
  { slug: "coffre-a-jouets", url: "https://lecoffreajouets.net/" },
  { slug: "nettoyage-leblanc", url: "https://www.nettoyageleblanc.ca/" },
  { slug: "bout-de-choux", url: "https://boutdechouboutique.com/" },
  { slug: "ethique-service-nettoyage", url: "https://www.ethiqueservicenettoyage.ca/" },
  { slug: "constructeurs-de-qualite", url: "https://www.constructeursdequalite.ca/" },
  { slug: "ture-beau-menage", url: "https://www.turebeaumenage.com/" },
  { slug: "cuisine-innovex", url: "https://www.cuisineinnovex.com/" },
  { slug: "boiseries-sem", url: "https://www.boiseriessem.ca/" },
  { slug: "scs-entretien", url: "https://www.scsentretien.ca/" },
  { slug: "maconnerie-baka", url: "https://www.maconnerie-baka.com/" },
  { slug: "patrenov", url: "https://www.patrenov.com/" },
  { slug: "construction-fontes", url: "https://www.constructionfontes.com/" },
];

async function captureScreenshots() {
  console.log("Lancement du navigateur...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`  Capture de ${site.url}...`);

    try {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
      await new Promise((r) => setTimeout(r, 2000));

      const pngBuffer = await page.screenshot({ type: "png", fullPage: false });
      await page.close();

      await sharp(pngBuffer).webp({ quality: QUALITY }).toFile(outputPath);

      const size = fs.statSync(outputPath).size;
      console.log(`    -> ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`    x Echec: ${err.message}`);
    }
  }

  await browser.close();
  console.log("\nTermine !");
}

captureScreenshots().catch(console.error);
