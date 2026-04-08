import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Beauté & Esthétique Laval | Salons, Spas, Barbiers | Lannkin",
  description:
    "Agence marketing beauté à Laval. Instagram Ads, booking en ligne, avis Google, identité de marque pour salons de coiffure, spas et esthéticiennes. Devis gratuit.",
  keywords: [
    "marketing digital salon coiffure laval",
    "instagram ads esthétique montréal",
    "seo spa laval",
    "booking en ligne salon beauté québec",
    "publicité barbier laval",
    "marketing esthéticienne montréal",
  ],
  alternates: { canonical: "/secteurs/beaute/" },
};

const BENEFITS = [
  "Instagram et Facebook Ads avec visuels soignés pour mettre en valeur vos prestations beauté",
  "Booking en ligne intégré au site — clients autonomes, agenda optimisé, moins de no-shows",
  "Gestion des avis Google pour bâtir une réputation solide et attirer de nouveaux clients",
  "Identité visuelle cohérente (logo, couleurs, templates) pour se démarquer dans un marché saturé",
  "SEO local pour 'salon coiffure laval', 'spa montréal', 'barbier laval' et plus encore",
  "Campagnes de fidélisation : promotions, cartes-cadeaux et programmes de référencement client",
];

export default function BeautePage() {
  const sector = getSectorBySlug("beaute")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
