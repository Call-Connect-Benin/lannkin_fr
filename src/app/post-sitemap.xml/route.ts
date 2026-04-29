import { getAllPosts } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/constants";

function getSiteUrl() {
  return SITE_CONFIG.url.replace(/\/$/, "");
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const posts = getAllPosts();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
    .map(
      (post) => `  <url>
    <loc>${siteUrl}/blog/${post.slug}/</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
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
