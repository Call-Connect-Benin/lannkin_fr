/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lannkin.ca",
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
