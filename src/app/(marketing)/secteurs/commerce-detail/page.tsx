import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Commerce de Détail Paris | Boutiques, Magasins | Ekolink",
  description:
    "Agence marketing commerce de détail à Paris. Stratégies omnicanal, Google Shopping, Facebook Shops, SEO local pour boutiques et magasins. Devis gratuit.",
  keywords: [
    "marketing digital commerce détail paris",
    "google shopping boutique paris",
    "facebook shops france",
    "seo local magasin paris",
    "publicité boutique mode paris",
    "omnicanal commerce france",
  ],
  alternates: { canonical: "/secteurs/commerce-detail/" },
};

const BENEFITS = [
  "Stratégies omnicanal : on-line et off-line synchronisés pour maximiser chaque point de contact client",
  "Google Shopping avec flux produit optimisé pour apparaître avec prix et image avant les clics",
  "Facebook Shops et Instagram Shopping : achat directement depuis le fil social sans friction",
  "SEO local pour 'boutique [produit] paris', 'magasin [catégorie] paris-nord' à forte intention",
  "Campagnes de fidélisation : cartes fidélité digitales, offres exclusives, email marketing ciblé",
  "Analyse de performance complète : panier moyen, coût d'acquisition, LTV par canal",
];

export default function CommerceDetailPage() {
  const sector = getSectorBySlug("commerce-detail")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
