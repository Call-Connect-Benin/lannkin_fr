import type { Zone } from "@/domain/entities/zone";

// ============================================================
// ZONES — 16 pages géolocalisées
// ============================================================

export const ZONES: Zone[] = [
  {
    slug: "agence-web-paris",
    city: "Paris",
    region: "Île-de-France",
    title: "Agence Web à Paris",
    description:
      "Votre agence web locale à Paris. Conception de sites web, SEO, Google Ads et marketing digital. Siège social d'Ekolink S.A.S., à votre service depuis 2015.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "graphisme",
      "google-my-business",
    ],
  },
  {
    slug: "agence-marketing-paris",
    city: "Paris",
    region: "Île-de-France",
    title: "Agence Marketing Digital à Paris",
    description:
      "Agence marketing digital 360° à Paris. Paid media, SEO, réseaux sociaux, lead generation et stratégie de croissance pour entreprises parisiennes.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "seo",
      "lead-generation",
      "conception-web",
      "tiktok-ads",
    ],
  },
  {
    slug: "agence-seo-paris",
    city: "Paris",
    region: "Île-de-France",
    title: "Agence SEO à Paris",
    description:
      "Experts en référencement naturel à Paris. Audit SEO, backlinks, maillage interne et optimisation technique pour dominer Google dans votre marché local.",
    relatedServices: [
      "seo",
      "google-my-business",
      "conception-web",
      "google-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-google-ads-paris",
    city: "Paris",
    region: "Île-de-France",
    title: "Agence Google Ads à Paris",
    description:
      "Spécialistes Google Ads certifiés à Paris. Campagnes Search, Display, Shopping, YouTube. Scripts anti-fraude propriétaires et optimisation ROI garantie.",
    relatedServices: [
      "google-ads",
      "seo",
      "lead-generation",
      "conception-web",
      "facebook-ads",
    ],
  },
  {
    slug: "agence-web-lyon",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    title: "Agence Web à Lyon",
    description:
      "Agence web à Lyon par Ekolink. Conception de sites web modernes, e-commerce, applications web et marketing digital pour entreprises lyonnaises.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "graphisme",
      "developpement-saas",
    ],
  },
  {
    slug: "agence-marketing-lyon",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    title: "Agence Marketing Digital à Lyon",
    description:
      "Agence marketing digital à Lyon. Stratégies de croissance, paid media multi-plateformes, SEO et lead generation pour PME et startups lyonnaises.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "seo",
      "lead-generation",
      "linkedin-ads",
      "tiktok-ads",
    ],
  },
  {
    slug: "agence-seo-lyon",
    city: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    title: "Agence SEO à Lyon",
    description:
      "Référencement naturel à Lyon. Stratégie SEO locale et nationale, backlinks de qualité, contenu optimisé et audit technique pour PME lyonnaises.",
    relatedServices: [
      "seo",
      "google-my-business",
      "conception-web",
      "google-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-web-marseille",
    city: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    title: "Agence Web à Marseille",
    description:
      "Agence web à Marseille et PACA. Sites web, marketing digital, SEO et Google Ads pour entreprises marseillaises.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-toulouse",
    city: "Toulouse",
    region: "Occitanie",
    title: "Agence Web à Toulouse",
    description:
      "Agence web à Toulouse et Occitanie. Sites web modernes, marketing digital et SEO pour entreprises toulousaines.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
      "graphisme",
    ],
  },
  {
    slug: "agence-web-bordeaux",
    city: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    title: "Agence Web à Bordeaux",
    description:
      "Agence web à Bordeaux et Nouvelle-Aquitaine. Conception web, marketing digital et SEO pour entreprises bordelaises.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-nantes",
    city: "Nantes",
    region: "Pays de la Loire",
    title: "Agence Web à Nantes",
    description:
      "Agence web à Nantes par Ekolink. Conception de sites web, SEO, Google Ads et marketing digital pour entreprises de la région nantaise.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-web-lille",
    city: "Lille",
    region: "Hauts-de-France",
    title: "Agence Web à Lille",
    description:
      "Agence web à Lille et Hauts-de-France. Sites web performants, SEO local, Google Ads et marketing digital pour entreprises lilloises.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-strasbourg",
    city: "Strasbourg",
    region: "Grand Est",
    title: "Agence Web à Strasbourg",
    description:
      "Agence web à Strasbourg et Grand Est. Conception de sites web modernes, SEO, Google Ads et stratégie digitale pour PME alsaciennes.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-web-nice",
    city: "Nice",
    region: "Provence-Alpes-Côte d'Azur",
    title: "Agence Web à Nice",
    description:
      "Agence web à Nice et Côte d'Azur. Sites web sur mesure, SEO, Google Ads et marketing digital pour entreprises niçoises.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
      "graphisme",
    ],
  },
  {
    slug: "agence-web-rennes",
    city: "Rennes",
    region: "Bretagne",
    title: "Agence Web à Rennes",
    description:
      "Agence web à Rennes et en Bretagne. Sites web sur mesure, SEO, Google Ads et marketing digital pour entreprises bretonnes.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
      "graphisme",
    ],
  },
  {
    slug: "agence-traffic-paris",
    city: "Paris",
    region: "Île-de-France",
    title: "Agence Traffic à Paris",
    description:
      "Experts en acquisition de trafic web à Paris. Google Ads, Facebook Ads, Native Ads (Taboola, Outbrain, Traffic Factory), SEO et stratégie multi-canal pour maximiser votre visibilité en ligne.",
    relatedServices: [
      "google-ads",
      "facebook-ads",
      "native-ads",
      "seo",
      "tiktok-ads",
      "linkedin-ads",
      "bing-ads",
      "lead-generation",
    ],
  },
];

// ============================================================
// Helpers
// ============================================================

export function getZoneBySlug(slug: string): Zone | undefined {
  return ZONES.find((z) => z.slug === slug);
}

export function getZonesByCity(city: string): Zone[] {
  return ZONES.filter((z) => z.city === city);
}

export function getZonesByRegion(region: string): Zone[] {
  return ZONES.filter((z) => z.region === region);
}

export function getAllZoneSlugs(): string[] {
  return ZONES.map((z) => z.slug);
}
