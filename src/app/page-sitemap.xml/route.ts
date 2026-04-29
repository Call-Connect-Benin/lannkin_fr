import fs from "fs";
import path from "path";

import { getAllPosts } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";

function getSiteUrl() {
  return SITE_CONFIG.url.replace(/\/$/, "");
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

function readSitemapUrls() {
  const sitemapPath = path.join(process.cwd(), "public", "sitemap-0.xml");

  if (!fs.existsSync(sitemapPath)) return [];

  const xml = fs.readFileSync(sitemapPath, "utf8");
  return [...xml.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>/g)].map((match) => ({
    loc: match[1],
    lastmod: match[2],
  }));
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const postPaths = new Set(getAllPosts().map((post) => `/blog/${post.slug}/`));

  const pageEntries = readSitemapUrls().filter(({ loc }) => {
    const pathname = new URL(loc).pathname;
    if (pathname === "/blog/") return false;
    if (pathname.startsWith("/blog/")) return false;
    return !postPaths.has(pathname);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageEntries
    .map(
      ({ loc, lastmod }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
