import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

// Sites dont le CSS n'avait pas chargé lors de la première capture
const SITES = [
  { slug: "boiseries-sem", url: "https://www.boiseriessem.ca/" },
  { slug: "scs-entretien", url: "https://www.scsentretien.ca/" },
  { slug: "reno-st-georges", url: "https://www.renostgeorges.ca/" },
  { slug: "peinture-pro", url: "https://www.peinture-pro.ca/" },
  { slug: "ture-beau-menage", url: "https://www.turebeaumenage.com/" },
  { slug: "nettoyage-leblanc", url: "https://www.nettoyageleblanc.ca/" },
  { slug: "nettoyage-ideal", url: "https://www.nettoyageideal.com/" },
];

async function capture() {
  console.log("Lancement du navigateur...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`\n  Capture de ${site.url}...`);

    try {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);

      // Naviguer et attendre que le réseau soit complètement inactif
      await page.goto(site.url, { waitUntil: "networkidle0", timeout: 45000 });

      // Attendre 8 secondes de plus pour le CSS/JS asynchrone
      console.log("    Attente du chargement CSS (8s)...");
      await new Promise((r) => setTimeout(r, 8000));

      // Forcer le scroll pour déclencher les lazy-loads
      await page.evaluate(() => {
        window.scrollTo(0, 100);
        window.scrollTo(0, 0);
      });
      await new Promise((r) => setTimeout(r, 2000));

      // Fermer les popups/banners de cookies si présents
      await page.evaluate(() => {
        const selectors = [
          ".cookie-banner", ".cookie-notice", ".cc-banner",
          "[class*='cookie']", "[class*='consent']",
          "[id*='cookie']", "[id*='consent']",
          ".popup-overlay", ".modal-overlay",
        ];
        for (const sel of selectors) {
          document.querySelectorAll(sel).forEach((el) => {
            el.style.display = "none";
          });
        }
      });
      await new Promise((r) => setTimeout(r, 500));

      const png = await page.screenshot({ type: "png", fullPage: false });
      await page.close();

      await sharp(png).webp({ quality: 85 }).toFile(outputPath);
      const size = fs.statSync(outputPath).size;
      console.log(`    -> ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.log(`    x Echec: ${err.message}`);
    }
  }

  await browser.close();
  console.log("\nTerminé !");
}

capture().catch(console.error);
