import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

const SITES = [
  // Boiseries Sem via Wayback Machine (site en maintenance)
  {
    slug: "boiseries-sem",
    url: "https://web.archive.org/web/2024/boiseriessem.ca",
    isWayback: true,
  },
  // Les autres avec fermeture des popups cookies
  { slug: "scs-entretien", url: "https://www.scsentretien.ca/" },
  { slug: "reno-st-georges", url: "https://www.renostgeorges.ca/" },
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
    ],
    protocolTimeout: 180000,
  });

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`\n  Capture: ${site.url}`);

    try {
      const page = await browser.newPage();

      await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, "webdriver", { get: () => false });
        Object.defineProperty(navigator, "languages", { get: () => ["fr-CA", "fr", "en-US", "en"] });
      });

      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
      );
      await page.setViewport(VIEWPORT);

      await page.goto(site.url, { waitUntil: "networkidle2", timeout: 60000 });
      console.log("    Attente du chargement (10s)...");
      await new Promise((r) => setTimeout(r, 10000));

      if (site.isWayback) {
        // Cacher la barre Wayback
        await page.evaluate(() => {
          const wb = document.getElementById("wm-ipp-base");
          if (wb) wb.style.display = "none";
          const wb2 = document.getElementById("wm-ipp");
          if (wb2) wb2.style.display = "none";
          const donationBanner = document.querySelector(".donation-banner");
          if (donationBanner) donationBanner.style.display = "none";
        });
      } else {
        // Fermer les popups de cookies : cliquer sur "Accepter" ou "X"
        try {
          // Essayer de cliquer sur les boutons Accepter courants
          const clicked = await page.evaluate(() => {
            // Chercher tous les boutons avec texte "Accepter" ou "OK"
            const buttons = Array.from(document.querySelectorAll("button, a.cmplz-btn, .cc-btn"));
            for (const btn of buttons) {
              const text = btn.textContent.trim().toLowerCase();
              if (text.includes("accepter") || text.includes("accept") || text === "ok") {
                btn.click();
                return true;
              }
            }
            // Essayer le X de fermeture
            const closeButtons = document.querySelectorAll("[aria-label='close-dialog'], .cmplz-close, [data-cky-tag='close-button']");
            for (const btn of closeButtons) {
              btn.click();
              return true;
            }
            return false;
          });
          if (clicked) {
            console.log("    Cookie popup fermé");
            await new Promise((r) => setTimeout(r, 1000));
          }

          // Aussi cacher les banners qui restent
          await page.evaluate(() => {
            const selectors = [
              ".cookie-notice", "#cookie-notice", "#cookie-law-info-bar",
              ".cmplz-cookiebanner", ".cc-window", "#moove_gdpr_cookie_info_bar",
              "[class*='cookie-consent']", "[class*='cookie-banner']",
              ".elementor-popup-modal",
            ];
            for (const sel of selectors) {
              document.querySelectorAll(sel).forEach((el) => el.style.display = "none");
            }
            // Retirer le backdrop/overlay
            document.querySelectorAll(".cmplz-overlay, .cc-overlay").forEach(el => el.style.display = "none");
          });
        } catch (e) {
          console.log("    (pas de cookie popup détecté)");
        }
      }

      await new Promise((r) => setTimeout(r, 1000));

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
