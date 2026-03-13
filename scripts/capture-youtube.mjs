import puppeteer from "puppeteer";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const DEST = path.resolve("public/images/ressources");
if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

const channels = [
  { slug: "albert-lanne-ads", url: "https://www.youtube.com/@AlbertLanneAds" },
  { slug: "lannkin-france", url: "https://www.youtube.com/@LannkinFrance" },
  { slug: "lannkin-canada", url: "https://www.youtube.com/@LannkinCanada" },
];

const browser = await puppeteer.launch({
  headless: "new",
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-blink-features=AutomationControlled",
  ],
});

for (const ch of channels) {
  console.log(`Capturing ${ch.url}`);
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
  );

  // Force dark mode via cookie before navigating
  await page.setCookie({
    name: "PREF",
    value: "f6=400",
    domain: ".youtube.com",
  });

  // Also force dark color scheme via media emulation
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: "dark" },
  ]);

  try {
    await page.goto(ch.url, { waitUntil: "load", timeout: 90000 });
    await new Promise((r) => setTimeout(r, 5000));

    // Dismiss cookie consent if present
    try {
      const btn = await page.evaluateHandle(() => {
        const buttons = [...document.querySelectorAll("button")];
        return buttons.find(
          (b) =>
            b.textContent.includes("Accept") ||
            b.textContent.includes("Accepter") ||
            b.textContent.includes("Tout accepter") ||
            b.textContent.includes("Reject") ||
            b.textContent.includes("Tout refuser")
        );
      });
      if (btn && btn.asElement()) {
        await btn.asElement().click();
        await new Promise((r) => setTimeout(r, 2000));
      }
    } catch (e) {
      // ignore
    }

    const buf = await page.screenshot({ type: "png", fullPage: false });
    const optimized = await sharp(buf)
      .resize(1280, 800, { fit: "cover" })
      .webp({ quality: 82 })
      .toBuffer();

    const dest = path.join(DEST, `${ch.slug}.webp`);
    fs.writeFileSync(dest, optimized);
    console.log(`  + ${ch.slug}.webp (${(optimized.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.log(`  x ${ch.slug}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
console.log("Done");
