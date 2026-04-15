import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Agence E-Commerce Paris & Paris | Shopify, Google Shopping, SEO | Ekolink",
  description:
    "Agence e-commerce certifiée Shopify Partner à Paris. Google Shopping, Facebook Shops, SEO produit, optimisation du taux de conversion. Faites croître votre boutique en ligne.",
  keywords: [
    "agence ecommerce paris",
    "shopify partner paris",
    "google shopping france",
    "seo ecommerce paris",
    "agence web ecommerce france",
    "optimisation taux conversion boutique en ligne",
  ],
  alternates: { canonical: "/secteurs/ecommerce/" },
};

const BENEFITS = [
  "Shopify Partner certifié — création, migration et optimisation de boutiques performantes",
  "Google Shopping et Performance Max configurés pour maximiser votre ROAS dès le premier mois",
  "Remarketing dynamique pour relancer les paniers abandonnés et augmenter le taux de retour",
  "SEO produit et catégories pour générer du trafic organique durable sans dépendre de la pub",
  "Tracking complet : GA4, Meta Pixel, Shopify Analytics — visibilité totale sur vos performances",
  "Stratégies email marketing et automatisation post-achat pour fidéliser vos clients",
];

export default function EcommercePage() {
  const sector = getSectorBySlug("ecommerce")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
