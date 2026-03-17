import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

const SITES = [
  { slug: "peinture-excel-pro", url: "https://www.peintureexcelpro.com/" },
  { slug: "ethique-service-nettoyage", url: "https://www.ethiqueservicenettoyage.ca/" },
  { slug: "rasage-corporel", url: "https://www.rasagecorporeladomicile.ca/" },
  { slug: "bout-de-choux", url: "https://boutdechouboutique.com/" },
  { slug: "constructions-guillen", url: "https://www.constructionsguillen.com/" },
  { slug: "mtl-luxe", url: "https://mtlluxe.ca/" },
  { slug: "patrenov", url: "https://www.patrenov.com/" },
];

async function dismissCookies(page) {
  try {
    const clicked = await page.evaluate(() => {
      // Chercher les boutons d'acceptation
      const buttons = Array.from(document.querySelectorAll("button, a, [role='button']"));
      for (const btn of buttons) {
        const text = btn.textContent.trim().toLowerCase();
        if (
          text.includes("accepter") || text.includes("accept") ||
          text.includes("j'accepte") || text.includes("tout autoriser") ||
          text === "ok"
        ) {
          btn.click();
          return "clicked: " + text;
        }
      }
      return false;
    });
    if (clicked) {
      console.log(`    Cookie: ${clicked}`);
      await new Promise((r) => setTimeout(r, 1500));
    }

    // Cacher les banners restants
    await page.evaluate(() => {
      const selectors = [
        ".cookie-notice", "#cookie-notice", "#cookie-law-info-bar",
        ".cmplz-cookiebanner", ".cc-window", "#moove_gdpr_cookie_info_bar",
        "[class*='cookie-consent']", "[class*='cookie-banner']",
        ".elementor-popup-modal", "#CybotCookiebotDialog",
        "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
        "[data-cookieconsent]", ".cc_banner-wrapper",
      ];
      for (const sel of selectors) {
        document.querySelectorAll(sel).forEach((el) => (el.style.display = "none"));
      }
      // Retirer les overlays
      document.querySelectorAll(".cmplz-overlay, .cc-overlay, .modal-backdrop").forEach(
        (el) => (el.style.display = "none")
      );
    });
  } catch (e) {
    // ignore
  }
}

async function capture() {
  console.log("Lancement du navigateur (mode stealth)...\n");
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-blink-features=AutomationControlled",
    ],
    protocolTimeout: 180000,
  });

  const results = { success: [], failed: [] };

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    console.log(`  ${site.slug} (${site.url})`);

    try {
      const page = await browser.newPage();
      await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, "webdriver", { get: () => false });
        Object.defineProperty(navigator, "languages", {
          get: () => ["fr-CA", "fr", "en-US", "en"],
        });
      });
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
      );
      await page.setViewport(VIEWPORT);

      await page.goto(site.url, { waitUntil: "networkidle0", timeout: 60000 });
      console.log("    Attente CSS (12s)...");
      await new Promise((r) => setTimeout(r, 12000));

      // Vérifier si page WAF
      const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 300));
      if (bodyText.includes("Test de sécurité") || bodyText.includes("HTTP 429")) {
        console.log("    x Bloqué par WAF — passage via Wayback Machine...");
        await page.goto(
          `https://web.archive.org/web/2024/https://${new URL(site.url).hostname}/`,
          { waitUntil: "networkidle2", timeout: 60000 }
        );
        await new Promise((r) => setTimeout(r, 8000));
        await page.evaluate(() => {
          ["wm-ipp-base", "wm-ipp", "wm-ipp-print"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.style.display = "none";
          });
          const d = document.querySelector(".donation-banner");
          if (d) d.style.display = "none";
        });
      } else {
        await dismissCookies(page);
      }

      await new Promise((r) => setTimeout(r, 1000));

      const png = await page.screenshot({ type: "png", fullPage: false });
      await page.close();

      await sharp(png).webp({ quality: 85 }).toFile(outputPath);
      const size = fs.statSync(outputPath).size;
      console.log(`    -> ${site.slug}.webp (${(size / 1024).toFixed(0)} KB)\n`);
      results.success.push(site.slug);
    } catch (err) {
      console.log(`    x Echec: ${err.message}\n`);
      results.failed.push(site.slug);
    }
  }

  await browser.close();
  console.log(`Resultats: ${results.success.length}/${SITES.length} captures`);
  if (results.failed.length > 0) {
    console.log(`Echecs: ${results.failed.join(", ")}`);
  }
}

capture().catch(console.error);
