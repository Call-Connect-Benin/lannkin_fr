import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Avocats & Notaires Laval | Cabinet Juridique | Lannkin",
  description:
    "Agence marketing pour cabinets d'avocats et notaires à Laval. Google Ads juridique, SEO droit, réputation en ligne, génération de mandats qualifiés. Devis gratuit.",
  keywords: [
    "marketing digital avocat laval",
    "google ads cabinet juridique montréal",
    "seo droit québec",
    "publicité notaire laval",
    "génération mandats avocat québec",
    "site web cabinet avocat montréal",
  ],
  alternates: { canonical: "/secteurs/juridique/" },
};

const BENEFITS = [
  "Google Ads juridique conforme aux règles du Barreau du Québec et de la Chambre des notaires",
  "SEO de positionnement d'expert pour 'avocat divorce laval', 'notaire testament montréal' et plus",
  "Génération de mandats qualifiés — prospects qui ont déjà compris leur besoin et sont prêts à agir",
  "LinkedIn Ads B2B pour cibler les entreprises ayant des besoins juridiques récurrents",
  "Site web professionnel avec biographies d'avocats, domaines de pratique et consultation en ligne",
  "Gestion de la réputation en ligne : avis Google, Avvo, 411.ca — votre crédibilité protégée",
];

export default function JuridiquePage() {
  const sector = getSectorBySlug("juridique")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
