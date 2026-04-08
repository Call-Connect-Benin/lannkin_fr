import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Commerce de Détail Laval | Boutiques, Magasins | Lannkin",
  description:
    "Agence marketing commerce de détail à Laval. Stratégies omnicanal, Google Shopping, Facebook Shops, SEO local pour boutiques et magasins. Devis gratuit.",
  keywords: [
    "marketing digital commerce détail laval",
    "google shopping boutique montréal",
    "facebook shops québec",
    "seo local magasin laval",
    "publicité boutique mode laval",
    "omnicanal commerce québec",
  ],
  alternates: { canonical: "/secteurs/commerce-detail/" },
};

const BENEFITS = [
  "Stratégies omnicanal : on-line et off-line synchronisés pour maximiser chaque point de contact client",
  "Google Shopping avec flux produit optimisé pour apparaître avec prix et image avant les clics",
  "Facebook Shops et Instagram Shopping : achat directement depuis le fil social sans friction",
  "SEO local pour 'boutique [produit] laval', 'magasin [catégorie] montréal-nord' à forte intention",
  "Campagnes de fidélisation : cartes fidélité digitales, offres exclusives, email marketing ciblé",
  "Analyse de performance complète : panier moyen, coût d'acquisition, LTV par canal",
];

export default function CommerceDetailPage() {
  const sector = getSectorBySlug("commerce-detail")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
