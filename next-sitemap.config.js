/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ekolink.fr",
  generateRobotsTxt: true,
  trailingSlash: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
};
