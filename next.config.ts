import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Anciennes pages de services (WordPress) → nouvelle page services
      {
        source: "/agence-web/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-web",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-google-ads/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-google-ads",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-seo/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-seo",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-facebook-ads/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/agence-facebook-ads",
        destination: "/services/",
        permanent: true,
      },
      // Ancienne page graphisme
      {
        source: "/graphisme/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/graphisme",
        destination: "/services/",
        permanent: true,
      },
      // Ancienne page formation (avec faute de frappe aussi)
      {
        source: "/formation/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/formation",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/formalion/",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/formalion",
        destination: "/services/",
        permanent: true,
      },
      // Ancienne page home WordPress
      {
        source: "/home/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
