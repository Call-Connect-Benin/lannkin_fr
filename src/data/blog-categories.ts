import type { BlogCategory } from "@/domain/entities/blog-post";

// ============================================================
// BLOG CATEGORIES — 12 catégories
// ============================================================

export interface BlogCategoryData {
  slug: BlogCategory;
  name: string;
  description: string;
  icon: string;
  image: string;
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
  color: string;
}

export const BLOG_CATEGORIES: BlogCategoryData[] = [
  {
    slug: "google-ads",
    name: "Google Ads",
    description:
      "Guides, tutoriels et stratégies Google Ads. Search, Display, Shopping, YouTube, Performance Max. Optimisation ROI et scripts avancés.",
    icon: "Target",
    image: "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
    relatedServices: ["google-ads"],
    metaTitle: "Blog Google Ads | Guides & Stratégies | Lannkin",
    metaDescription:
      "Articles et guides Google Ads par Lannkin. Stratégies Search, Display, Shopping, YouTube. Conseils d'optimisation et scripts anti-fraude.",
    color: "#4285F4",
  },
  {
    slug: "facebook-ads",
    name: "Facebook & Meta Ads",
    description:
      "Stratégies Facebook Ads, Instagram Ads et Meta. Ciblage, créatifs, Pixel, API Conversions et retargeting dynamique.",
    icon: "Facebook",
    image: "/images/rendu3D/rendu3d-diamant-cubes-flottants.webp",
    relatedServices: ["facebook-ads", "tiktok-ads"],
    metaTitle: "Blog Facebook Ads | Stratégies Meta | Lannkin",
    metaDescription:
      "Articles Facebook Ads et Instagram Ads. Stratégies de ciblage, optimisation créatifs, Pixel Meta et retargeting avancé.",
    color: "#1877F2",
  },
  {
    slug: "seo",
    name: "SEO & Référencement",
    description:
      "Guides SEO complets : référencement local, backlinks, maillage interne, SEO technique, on-page et migration. Dominez Google naturellement.",
    icon: "Search",
    image: "/images/rendu3D/rendu3d-cube-vert-minimaliste.webp",
    relatedServices: ["seo", "google-my-business"],
    metaTitle: "Blog SEO | Référencement Naturel | Lannkin",
    metaDescription:
      "Articles SEO et référencement naturel. Guides backlinks, maillage interne, SEO local et technique. Améliorez votre positionnement Google.",
    color: "#fff",
  },
  {
    slug: "conception-web",
    name: "Conception Web",
    description:
      "Tendances web design, UX/UI, WordPress, Shopify, Next.js et headless CMS. Bonnes pratiques de développement web moderne.",
    icon: "Monitor",
    image: "/images/rendu3D/rendu3d-cubes-lateral-angle.webp",
    relatedServices: ["conception-web", "developpement-saas"],
    metaTitle: "Blog Conception Web | Design & Développement | Lannkin",
    metaDescription:
      "Articles conception web, design UX/UI, WordPress, Shopify et Next.js. Tendances et bonnes pratiques développement web.",
    color: "#85353e",
  },
  {
    slug: "intelligence-artificielle",
    name: "Intelligence Artificielle",
    description:
      "L'IA au service du marketing et du business. Agents IA, chatbots, automatisation, RAG, prompt engineering et outils IA pour PME.",
    icon: "Brain",
    image: "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
    relatedServices: ["intelligence-artificielle", "vibe-coding"],
    metaTitle: "Blog IA | Intelligence Artificielle pour PME | Lannkin",
    metaDescription:
      "Articles sur l'IA pour les entreprises. Agents IA, chatbots, automatisation, RAG et prompt engineering. L'IA accessible aux PME.",
    color: "#FF6B6B",
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Stratégies e-commerce, Shopify, WooCommerce, optimisation du taux de conversion, Google Shopping et marketing de rétention.",
    icon: "ShoppingCart",
    image: "/images/rendu3D/rendu3d-cubes-rocket-closeup.webp",
    relatedServices: ["conception-web", "google-ads", "facebook-ads"],
    metaTitle: "Blog E-commerce | Stratégies de Vente en Ligne | Lannkin",
    metaDescription:
      "Articles e-commerce, Shopify, WooCommerce. Optimisation conversions, Google Shopping et stratégies de croissance boutique en ligne.",
    color: "#FF9F43",
  },
  {
    slug: "reseaux-sociaux",
    name: "Réseaux Sociaux",
    description:
      "Stratégies réseaux sociaux, community management, TikTok, LinkedIn, Snapchat et Pinterest. Croissance organique et payante.",
    icon: "Share2",
    image: "/images/rendu3D/rendu3d-ovni-cubes-fond-rose.webp",
    relatedServices: [
      "facebook-ads",
      "tiktok-ads",
      "linkedin-ads",
      "snapchat-ads",
      "pinterest-ads",
    ],
    metaTitle: "Blog Réseaux Sociaux | Stratégies Social Media | Lannkin",
    metaDescription:
      "Articles réseaux sociaux, TikTok, LinkedIn, Snapchat, Pinterest. Stratégies community management et croissance social media.",
    color: "#E91E63",
  },
  {
    slug: "google-my-business",
    name: "Google My Business",
    description:
      "Optimisation Google Business Profile, gestion d'avis, SEO local, Google Maps marketing et stratégie de visibilité locale.",
    icon: "MapPin",
    image: "/images/rendu3D/rendu3d-cube-vert-macro.webp",
    relatedServices: ["google-my-business", "seo"],
    metaTitle: "Blog Google My Business | SEO Local | Lannkin",
    metaDescription:
      "Articles Google My Business et SEO local. Optimisation fiche GMB, gestion avis, Google Maps et stratégie de visibilité locale.",
    color: "#34A853",
  },
  {
    slug: "graphisme",
    name: "Graphisme & Branding",
    description:
      "Tendances design graphique, création de logo, identité visuelle, branding et communication print. L'art de la marque forte.",
    icon: "Palette",
    image: "/images/rendu3D/rendu3d-rouge-vert-dramatic.webp",
    relatedServices: ["graphisme"],
    metaTitle: "Blog Graphisme | Branding & Identité Visuelle | Lannkin",
    metaDescription:
      "Articles graphisme, création de logo et identité visuelle. Tendances design, branding et communication visuelle pour entreprises.",
    color: "#9B59B6",
  },
  {
    slug: "marketing-digital",
    name: "Marketing Digital",
    description:
      "Actualités et stratégies marketing digital. Growth hacking, email marketing, analytics, CRO et tendances du marché français.",
    icon: "TrendingUp",
    image: "/images/rendu3D/rendu3d-cubes-verts-logo-lk.webp",
    relatedServices: ["lead-generation", "google-ads", "seo"],
    metaTitle: "Blog Marketing Digital | Stratégies & Tendances | Lannkin",
    metaDescription:
      "Articles marketing digital, growth hacking, email marketing et analytics. Stratégies de croissance pour PME françaises.",
    color: "#2ECC71",
  },
  {
    slug: "vibe-coding",
    name: "Vibe Coding",
    description:
      "Le futur du développement web. Lovable, Bolt, Cursor, Claude Code, v0, Windsurf et Replit. Tutoriels, comparatifs et bonnes pratiques du coding assisté par IA.",
    icon: "Sparkles",
    image: "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
    relatedServices: ["vibe-coding", "conception-web"],
    metaTitle: "Blog Vibe Coding | CMS IA & Développement | Lannkin",
    metaDescription:
      "Articles vibe coding, Lovable, Bolt, Cursor, Claude Code. Tutoriels et comparatifs des outils de développement assisté par IA.",
    color: "#00D4FF",
  },
  {
    slug: "odoo",
    name: "Odoo",
    description:
      "Guides Odoo : implantation ERP, CRM, e-commerce, migration et personnalisation. Tout savoir sur la plateforme open-source #1.",
    icon: "Building2",
    image: "/images/rendu3D/rendu3d-trio-cubes-flottants.webp",
    relatedServices: ["odoo"],
    metaTitle: "Blog Odoo | ERP, CRM & E-commerce | Lannkin",
    metaDescription:
      "Articles Odoo, implantation ERP, CRM et e-commerce. Guides migration, personnalisation et bonnes pratiques Odoo pour PME.",
    color: "#714B67",
  },
];

// ============================================================
// Helpers
// ============================================================

export function getBlogCategoryBySlug(
  slug: string,
): BlogCategoryData | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export function getBlogCategoriesByService(
  serviceSlug: string,
): BlogCategoryData[] {
  return BLOG_CATEGORIES.filter((c) =>
    c.relatedServices.includes(serviceSlug),
  );
}

export function getAllBlogCategorySlugs(): BlogCategory[] {
  return BLOG_CATEGORIES.map((c) => c.slug);
}
