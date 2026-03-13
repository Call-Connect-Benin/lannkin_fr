import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

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
  console.log("Lancement du navigateur (mode stealth)...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
      "--disable-features=IsolateOrigins,site-per-process",
    ],
    protocolTimeout: 120000,
  });

  const results = { success: [], failed: [] };

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`\n  Capture: ${site.url}`);

    try {
      const page = await browser.newPage();

      // Masquer la détection headless
      await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, "webdriver", { get: () => false });
        Object.defineProperty(navigator, "languages", { get: () => ["fr-CA", "fr", "en-US", "en"] });
        Object.defineProperty(navigator, "platform", { get: () => "Win32" });
      });

      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
      );
      await page.setViewport(VIEWPORT);

      // Naviguer avec timeout plus long
      await page.goto(site.url, { waitUntil: "networkidle0", timeout: 60000 });

      // Attendre le CSS et les polices (12 secondes)
      console.log("    Attente longue (12s)...");
      await new Promise((r) => setTimeout(r, 12000));

      // Vérifier si on est sur une page de sécurité WAF
      const pageContent = await page.evaluate(() => document.body.innerText.substring(0, 200));
      if (pageContent.includes("Test de sécurité") || pageContent.includes("HTTP 429") || pageContent.includes("Ralentissez")) {
        console.log("    x Page bloquée par WAF");
        await page.close();
        results.failed.push(site.slug);
        continue;
      }

      // Vérifier si le CSS est chargé (au moins quelques feuilles de style)
      const stylesheetCount = await page.evaluate(() => document.styleSheets.length);
      console.log(`    Stylesheets chargées: ${stylesheetCount}`);

      const png = await page.screenshot({ type: "png", fullPage: false });
      await page.close();

      await sharp(png).webp({ quality: 85 }).toFile(outputPath);
      const size = fs.statSync(outputPath).size;
      console.log(`    -> ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)`);

      // Si le fichier est trop petit (< 15 KB), le CSS n'a probablement pas chargé
      if (size < 15000) {
        console.log("    ! Probablement sans CSS (fichier trop petit)");
        results.failed.push(site.slug);
      } else {
        results.success.push(site.slug);
      }
    } catch (err) {
      console.log(`    x Echec: ${err.message}`);
      results.failed.push(site.slug);
    }
  }

  await browser.close();
  console.log(`\nResultats: ${results.success.length}/${SITES.length} captures correctes`);
  if (results.failed.length > 0) {
    console.log(`Echecs/mauvaise qualite: ${results.failed.join(", ")}`);
  }
}

capture().catch(console.error);
