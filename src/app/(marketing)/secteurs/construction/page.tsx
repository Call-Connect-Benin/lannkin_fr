import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Construction & Rénovation Laval | Entrepreneurs, Électriciens | Lannkin",
  description:
    "Agence marketing spécialisée construction à Laval. Google Ads local, génération de soumissions, SEO entrepreneur général, plombier, électricien. Devis gratuit.",
  keywords: [
    "marketing digital construction laval",
    "google ads entrepreneur général montréal",
    "seo électricien laval",
    "génération leads rénovation québec",
    "publicité plombier montréal",
    "agence web construction laval",
  ],
  alternates: { canonical: "/secteurs/construction/" },
};

const BENEFITS = [
  "Google Ads Local ciblé par zone géographique et type de service (électricité, plomberie, rénovation)",
  "Landing pages optimisées pour la génération de soumissions qualifiées — pas de curieux",
  "SEO local pour vos mots-clés prioritaires : 'électricien laval', 'entrepreneur général montréal'",
  "Portfolio de réalisations en ligne pour valoriser vos chantiers et rassurer les prospects",
  "Fiches Google My Business optimisées avec photos de chantiers, avis clients et Q&A",
  "Campagnes saisonnières adaptées aux pics de demande (printemps, automne) pour maximiser le budget",
];

export default function ConstructionPage() {
  const sector = getSectorBySlug("construction")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
