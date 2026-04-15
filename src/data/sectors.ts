import type { Sector } from "@/domain/entities/sector";

// ============================================================
// SECTEURS — 12 secteurs d'activité ciblés
// ============================================================

export const SECTORS: Sector[] = [
  {
    slug: "restaurant-restauration",
    title: "Restaurant & Restauration",
    description:
      "Stratégies marketing digital pour restaurants, bars, traiteurs et food trucks à Paris et Paris. Google Ads local, réseaux sociaux, avis Google et site web appétissant.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "google-my-business",
      "conception-web",
      "graphisme",
      "seo",
    ],
    icon: "UtensilsCrossed",
  },
  {
    slug: "immobilier",
    title: "Immobilier",
    description:
      "Marketing digital immobilier : génération de leads acheteurs et vendeurs, Google Ads immobilier, site web avec listings, SEO local et campagnes Facebook ciblées.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "lead-generation",
      "conception-web",
      "seo",
      "google-my-business",
    ],
    icon: "Home",
  },
  {
    slug: "sante",
    title: "Santé & Bien-être",
    description:
      "Solutions marketing pour cliniques, dentistes, pharmacies, physiothérapeutes et spas. Respect des normes publicitaires santé, SEO médical et gestion de réputation.",
    relatedServices: [
      "google-ads",
      "seo",
      "google-my-business",
      "conception-web",
      "lead-generation",
      "graphisme",
    ],
    icon: "Heart",
  },
  {
    slug: "construction",
    title: "Construction & Rénovation",
    description:
      "Marketing digital pour entrepreneurs généraux, électriciens, plombiers et rénovateurs. Google Ads local, SEO construction, site portfolio et génération de soumissions.",
    relatedServices: [
      "google-ads",
      "seo",
      "google-my-business",
      "lead-generation",
      "conception-web",
      "graphisme",
    ],
    icon: "Hammer",
  },
  {
    slug: "commerce-detail",
    title: "Commerce de détail",
    description:
      "Stratégies omnicanal pour boutiques, magasins et détaillants. E-commerce, Google Shopping, Facebook Shops, SEO local et fidélisation client digitale.",
    relatedServices: [
      "conception-web",
      "google-ads",
      "facebook-ads",
      "seo",
      "google-my-business",
      "graphisme",
    ],
    icon: "ShoppingBag",
  },
  {
    slug: "services-professionnels",
    title: "Services professionnels",
    description:
      "Marketing digital pour avocats, comptables, consultants et coachs. LinkedIn Ads B2B, Google Ads services, lead generation qualifiée et site vitrine premium.",
    relatedServices: [
      "google-ads",
      "linkedin-ads",
      "lead-generation",
      "seo",
      "conception-web",
      "google-my-business",
    ],
    icon: "Briefcase",
  },
  {
    slug: "beaute",
    title: "Beauté & Esthétique",
    description:
      "Marketing digital pour salons de coiffure, spas, esthéticiennes et barbiers. Instagram Ads, gestion avis Google, booking en ligne et design de marque beauté.",
    relatedServices: [
      "facebook-ads",
      "google-my-business",
      "conception-web",
      "graphisme",
      "seo",
      "lead-generation",
    ],
    icon: "Sparkles",
  },
  {
    slug: "automobile",
    title: "Automobile",
    description:
      "Marketing digital pour concessionnaires, garages, carrosseries et détaillants auto. Google Ads automobile, inventaire en ligne, SEO local et retargeting dynamique.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "conception-web",
      "seo",
      "google-my-business",
      "native-ads",
    ],
    icon: "Car",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    description:
      "Stratégies de croissance e-commerce : Shopify, WooCommerce, Google Shopping, Facebook Shops, email marketing, optimisation du taux de conversion et SEO produit.",
    relatedServices: [
      "conception-web",
      "google-ads",
      "facebook-ads",
      "seo",
      "lead-generation",
      "graphisme",
    ],
    icon: "ShoppingCart",
  },
  {
    slug: "education",
    title: "Éducation & Formation",
    description:
      "Marketing digital pour écoles, centres de formation, coachs et e-learning. Google Ads éducation, lead gen étudiants, LinkedIn Ads et site web avec inscription en ligne.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "linkedin-ads",
      "conception-web",
      "lead-generation",
      "seo",
    ],
    icon: "GraduationCap",
  },
  {
    slug: "tourisme",
    title: "Tourisme & Hôtellerie",
    description:
      "Marketing digital pour hôtels, auberges, agences de voyages et attractions touristiques. Google Hotel Ads, Facebook Ads tourisme, SEO voyage et site de réservation.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "conception-web",
      "seo",
      "google-my-business",
      "graphisme",
    ],
    icon: "Plane",
  },
  {
    slug: "juridique",
    title: "Juridique",
    description:
      "Marketing digital pour cabinets d'avocats et notaires en France. Google Ads juridique, SEO droit, réputation en ligne, génération de mandats et site professionnel.",
    relatedServices: [
      "google-ads",
      "seo",
      "google-my-business",
      "lead-generation",
      "conception-web",
      "linkedin-ads",
    ],
    icon: "Scale",
  },
];

// ============================================================
// Helpers
// ============================================================

export function getSectorBySlug(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}

export function getSectorsByService(serviceSlug: string): Sector[] {
  return SECTORS.filter((s) => s.relatedServices.includes(serviceSlug));
}

export function getAllSectorSlugs(): string[] {
  return SECTORS.map((s) => s.slug);
}
