import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import sharp from "sharp";

const OUTPUT_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

const SITES = [
  { slug: "peinture-excel-pro", domain: "peintureexcelpro.com" },
  { slug: "rasage-corporel", domain: "rasagecorporeladomicile.ca" },
  { slug: "ethique-service-nettoyage", domain: "ethiqueservicenettoyage.ca" },
  { slug: "bout-de-choux", domain: "boutdechouboutique.com" },
];

async function capture() {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });

  for (const site of SITES) {
    const outputPath = path.join(OUTPUT_DIR, `${site.slug}.webp`);
    const waybackUrl = `https://web.archive.org/web/2024/${site.domain}`;
    console.log(`  Wayback Machine: ${site.domain}`);

    try {
      const page = await browser.newPage();
      await page.setViewport(VIEWPORT);
      await page.goto(waybackUrl, { waitUntil: "networkidle2", timeout: 45000 });
      await new Promise((r) => setTimeout(r, 4000));

      // Cacher la barre Wayback Machine
      await page.evaluate(() => {
        const wb = document.getElementById("wm-ipp-base");
        if (wb) wb.style.display = "none";
        const wb2 = document.getElementById("wm-ipp");
        if (wb2) wb2.style.display = "none";
        const donationBanner = document.querySelector(".donation-banner");
        if (donationBanner) donationBanner.style.display = "none";
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

  // Vérifier lesquels existent maintenant
  const still = SITES.filter(s => !fs.existsSync(path.join(OUTPUT_DIR, `${s.slug}.webp`)));
  if (still.length === 0) {
    console.log("\nTous les 4 screenshots captures !");
  } else {
    console.log(`\nManquants: ${still.map(s => s.slug).join(", ")}`);
  }
}

capture().catch(console.error);
