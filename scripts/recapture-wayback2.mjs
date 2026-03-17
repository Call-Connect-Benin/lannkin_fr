import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

// Sites dont le CSS ne charge pas en direct — on passe par Wayback Machine
const SITES = [
  { slug: "boiseries-sem", domain: "boiseriessem.ca" },
  { slug: "scs-entretien", domain: "scsentretien.ca" },
  { slug: "reno-st-georges", domain: "renostgeorges.ca" },
  { slug: "peinture-pro", domain: "peinture-pro.ca" },
  { slug: "ture-beau-menage", domain: "turebeaumenage.com" },
  { slug: "nettoyage-leblanc", domain: "nettoyageleblanc.ca" },
  { slug: "nettoyage-ideal", domain: "nettoyageideal.com" },
];

async function capture() {
  console.log("Lancement du navigateur...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const results = { success: [], failed: [] };

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    const waybackUrl = `https://web.archive.org/web/2024/${site.domain}`;
    console.log(`\n  Wayback Machine: ${site.domain}`);
    console.log(`  URL: ${waybackUrl}`);

    try {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(waybackUrl, { waitUntil: "networkidle2", timeout: 60000 });

      // Attendre que la page charge complètement
      console.log("    Attente du chargement (6s)...");
      await new Promise((r) => setTimeout(r, 6000));

      // Cacher la barre Wayback Machine et les banners
      await page.evaluate(() => {
        const wb = document.getElementById("wm-ipp-base");
        if (wb) wb.style.display = "none";
        const wb2 = document.getElementById("wm-ipp");
        if (wb2) wb2.style.display = "none";
        const donationBanner = document.querySelector(".donation-banner");
        if (donationBanner) donationBanner.style.display = "none";
        // Wayback banner top
        const wmTop = document.getElementById("wm-ipp-print");
        if (wmTop) wmTop.style.display = "none";
      });
      await new Promise((r) => setTimeout(r, 500));

      const png = await page.screenshot({ type: "png", fullPage: false });
      await page.close();

      await sharp(png).webp({ quality: 85 }).toFile(outputPath);
      const size = fs.statSync(outputPath).size;
      console.log(`    -> ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)`);
      results.success.push(site.slug);
    } catch (err) {
      console.log(`    x Echec: ${err.message}`);
      results.failed.push(site.slug);
    }
  }

  await browser.close();
  console.log(`\nResultats: ${results.success.length}/7 captures reussies`);
  if (results.failed.length > 0) {
    console.log(`Echecs: ${results.failed.join(", ")}`);
  }
}

capture().catch(console.error);
