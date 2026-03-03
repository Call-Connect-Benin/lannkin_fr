import type { Zone } from "@/domain/entities/zone";

// ============================================================
// ZONES — 16 pages géolocalisées
// ============================================================

export const ZONES: Zone[] = [
  {
    slug: "agence-web-laval",
    city: "Laval",
    region: "Laval",
    title: "Agence Web à Laval",
    description:
      "Votre agence web locale à Laval. Conception de sites web, SEO, Google Ads et marketing digital. Siège social de Lannkin S.A., à votre service depuis 2015.",
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
    slug: "agence-marketing-laval",
    city: "Laval",
    region: "Laval",
    title: "Agence Marketing Digital à Laval",
    description:
      "Agence marketing digital 360° à Laval. Paid media, SEO, réseaux sociaux, lead generation et stratégie de croissance pour entreprises lavalloises.",
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
    slug: "agence-seo-laval",
    city: "Laval",
    region: "Laval",
    title: "Agence SEO à Laval",
    description:
      "Experts en référencement naturel à Laval. Audit SEO, backlinks, maillage interne et optimisation technique pour dominer Google dans votre marché local.",
    relatedServices: [
      "seo",
      "google-my-business",
      "conception-web",
      "google-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-google-ads-laval",
    city: "Laval",
    region: "Laval",
    title: "Agence Google Ads à Laval",
    description:
      "Spécialistes Google Ads certifiés à Laval. Campagnes Search, Display, Shopping, YouTube. Scripts anti-fraude propriétaires et optimisation ROI garantie.",
    relatedServices: [
      "google-ads",
      "seo",
      "lead-generation",
      "conception-web",
      "facebook-ads",
    ],
  },
  {
    slug: "agence-web-montreal",
    city: "Montréal",
    region: "Grand Montréal",
    title: "Agence Web à Montréal",
    description:
      "Agence web à Montréal par Lannkin. Conception de sites web modernes, e-commerce, applications web et marketing digital pour entreprises montréalaises.",
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
    slug: "agence-marketing-montreal",
    city: "Montréal",
    region: "Grand Montréal",
    title: "Agence Marketing Digital à Montréal",
    description:
      "Agence marketing digital à Montréal. Stratégies de croissance, paid media multi-plateformes, SEO et lead generation pour PME et startups montréalaises.",
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
    slug: "agence-seo-montreal",
    city: "Montréal",
    region: "Grand Montréal",
    title: "Agence SEO à Montréal",
    description:
      "Référencement naturel à Montréal. Stratégie SEO locale et nationale, backlinks de qualité, contenu optimisé et audit technique pour PME montréalaises.",
    relatedServices: [
      "seo",
      "google-my-business",
      "conception-web",
      "google-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-web-longueuil",
    city: "Longueuil",
    region: "Rive-Sud",
    title: "Agence Web à Longueuil",
    description:
      "Agence web Rive-Sud : Longueuil, Brossard, Saint-Hubert. Sites web, marketing digital, SEO et Google Ads pour entreprises de la Rive-Sud de Montréal.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-rive-nord",
    city: "Rive-Nord",
    region: "Rive-Nord",
    title: "Agence Web Rive-Nord",
    description:
      "Agence web Rive-Nord : Laval, Terrebonne, Blainville, Saint-Jérôme. Sites web modernes, marketing digital et SEO pour entreprises de la Rive-Nord.",
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
    slug: "agence-web-rive-sud",
    city: "Rive-Sud",
    region: "Rive-Sud",
    title: "Agence Web Rive-Sud",
    description:
      "Agence web Rive-Sud de Montréal : Longueuil, Brossard, Saint-Jean-sur-Richelieu. Conception web, marketing digital et SEO pour entreprises Rive-Sud.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-quebec",
    city: "Québec",
    region: "Capitale-Nationale",
    title: "Agence Web à Québec",
    description:
      "Agence web à Québec par Lannkin. Conception de sites web, SEO, Google Ads et marketing digital pour entreprises de la région de Québec.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-web-gatineau",
    city: "Gatineau",
    region: "Outaouais",
    title: "Agence Web à Gatineau",
    description:
      "Agence web à Gatineau et Outaouais. Sites web bilingues, SEO local, Google Ads et marketing digital pour entreprises de Gatineau-Ottawa.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-sherbrooke",
    city: "Sherbrooke",
    region: "Estrie",
    title: "Agence Web à Sherbrooke",
    description:
      "Agence web à Sherbrooke et en Estrie. Conception de sites web modernes, SEO, Google Ads et stratégie digitale pour PME estriennes.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "lead-generation",
    ],
  },
  {
    slug: "agence-web-trois-rivieres",
    city: "Trois-Rivières",
    region: "Mauricie",
    title: "Agence Web à Trois-Rivières",
    description:
      "Agence web à Trois-Rivières et en Mauricie. Sites web performants, SEO local, Google Ads et marketing digital pour entreprises trifluviennes.",
    relatedServices: [
      "conception-web",
      "seo",
      "google-ads",
      "facebook-ads",
      "google-my-business",
    ],
  },
  {
    slug: "agence-web-terrebonne",
    city: "Terrebonne",
    region: "Lanaudière",
    title: "Agence Web à Terrebonne",
    description:
      "Agence web à Terrebonne, Mascouche et Lanaudière. Sites web sur mesure, SEO, Google Ads et marketing digital pour entreprises lanaudoises.",
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
    slug: "agence-traffic-laval",
    city: "Laval",
    region: "Laval",
    title: "Agence Traffic à Laval",
    description:
      "Experts en acquisition de trafic web à Laval. Google Ads, Facebook Ads, Native Ads (Taboola, Outbrain, Traffic Factory), SEO et stratégie multi-canal pour maximiser votre visibilité en ligne.",
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
