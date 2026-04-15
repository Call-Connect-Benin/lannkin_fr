import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Immobilier Paris & Paris | Courtiers, Agents | Ekolink",
  description:
    "Agence marketing immobilier à Paris. Génération de leads acheteurs et vendeurs, Facebook Ads ciblés, SEO local. Stratégies data-driven pour courtiers. Devis gratuit.",
  keywords: [
    "marketing digital immobilier paris",
    "génération leads acheteurs vendeurs paris",
    "google ads immobilier france",
    "seo courtier immobilier paris",
    "facebook ads immobilier paris",
  ],
  alternates: { canonical: "/secteurs/immobilier/" },
};

const BENEFITS = [
  "Génération de leads acheteurs et vendeurs qualifiés avec coût par lead maîtrisé",
  "Facebook Ads avec ciblage démographique ultra-précis par revenu, âge, secteur géographique",
  "Landing pages avec offre d'évaluation gratuite pour capter les vendeurs en amont du marché",
  "SEO local pour les quartiers et villes cibles : 'courtier paris', 'maison à vendre paris-nord'",
  "Intégration avec les outils CRM immobiliers pour automatiser le suivi des prospects",
  "Campagnes de remarketing pour relancer les visiteurs qui ont consulté des listings",
];

export default function ImmobilierPage() {
  const sector = getSectorBySlug("immobilier")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
