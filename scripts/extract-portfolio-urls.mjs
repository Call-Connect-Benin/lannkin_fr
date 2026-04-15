import puppeteer from "puppeteer";

async function extractUrls() {
  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("https://www.ekolink.fr/portfolio/", { waitUntil: "networkidle2", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 5000));

  // Get full page HTML structure to understand the layout
  const html = await page.evaluate(() => {
    return document.body.innerHTML.substring(0, 50000);
  });

  // Look for all external links (non-ekolink)
  const externalLinks = await page.evaluate(() => {
    const anchors = document.querySelectorAll("a");
    return [...anchors]
      .map((a) => ({ text: a.textContent.trim().substring(0, 100), href: a.href }))
      .filter((l) => !l.href.includes("ekolink.fr") && !l.href.includes("mailto") && l.href.startsWith("http"));
  });

  console.log("=== LIENS EXTERNES ===");
  externalLinks.forEach((l) => console.log(l.href + " | " + l.text));

  // Look for images in the portfolio section
  const images = await page.evaluate(() => {
    const imgs = document.querySelectorAll("img");
    return [...imgs]
      .map((img) => ({ src: img.src, alt: img.alt }))
      .filter((i) => i.src && !i.src.includes("data:"));
  });

  console.log("\n=== IMAGES ===");
  images.forEach((i) => console.log(i.src + " | " + i.alt));

  await browser.close();
}

extractUrls().catch(console.error);
