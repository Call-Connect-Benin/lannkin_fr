/**
 * Capture screenshots des 11 nouveaux projets portfolio
 * et les convertit en WebP optimisé.
 */
import puppeteer from "puppeteer";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const DEST_DIR = path.resolve("public/images/portfolio");
const VIEWPORT = { width: 1280, height: 800 };

const sites = [
  { slug: "christian-olivier-ducharme", url: "https://www.christianolivierducharme.com/" },
  { slug: "creations-boreales-du-lac", url: "https://www.creationsborealesdulac.ca/" },
  { slug: "metal-plus", url: "https://www.metalplus.ca/" },
  { slug: "installation-lgagne", url: "https://installationlgagne.ca/" },
  { slug: "construction-veloce", url: "https://constructionveloce.ca/" },
  { slug: "andleikay-garderie-24h", url: "https://andleikaygarderie24h.ca/" },
  { slug: "kagalexo", url: "https://www.kagalexo.com/" },
  { slug: "dcg-electrique", url: "https://www.dcgelectrique.ca/" },
  { slug: "yves-baillargeon", url: "https://www.yvesbaillargeon.ca/" },
  { slug: "myriame-chic-salon", url: "https://www.myriamechicsalon.ca/" },
  { slug: "fenide-dieujuste", url: "https://www.fenidedieujuste.com/" },
];

if (!fs.existsSync(DEST_DIR)) fs.mkdirSync(DEST_DIR, { recursive: true });

async function capture(browser, site) {
  const dest = path.join(DEST_DIR, `${site.slug}.webp`);
  if (fs.existsSync(dest)) {
    console.log(`  = ${site.slug} already exists, skipping`);
    return true;
  }

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
  );

  try {
    await page.goto(site.url, { waitUntil: "networkidle2", timeout: 30000 });
    // Wait a bit for animations/lazy loading
    await new Promise((r) => setTimeout(r, 2000));

    const buf = await page.screenshot({ type: "png", fullPage: false });
    const optimized = await sharp(buf)
      .resize(1280, 800, { fit: "cover" })
      .webp({ quality: 80 })
      .toBuffer();

    fs.writeFileSync(dest, optimized);
    const sizeKB = (optimized.length / 1024).toFixed(0);
    console.log(`  + ${site.slug}.webp (${sizeKB} KB)`);
    return true;
  } catch (err) {
    console.log(`  x ${site.slug}: ${err.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  let success = 0;
  let failed = 0;

  for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    console.log(`[${i + 1}/${sites.length}] ${site.url}`);
    const ok = await capture(browser, site);
    if (ok) success++;
    else failed++;
  }

  await browser.close();
  console.log(`\nDone: ${success} captured, ${failed} failed`);
}

main().catch(console.error);
