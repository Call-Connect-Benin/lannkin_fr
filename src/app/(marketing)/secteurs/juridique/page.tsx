import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Avocats & Notaires Paris | Cabinet Juridique | Ekolink",
  description:
    "Agence marketing pour cabinets d'avocats et notaires à Paris. Google Ads juridique, SEO droit, réputation en ligne, génération de mandats qualifiés. Devis gratuit.",
  keywords: [
    "marketing digital avocat paris",
    "google ads cabinet juridique paris",
    "seo droit france",
    "publicité notaire paris",
    "génération mandats avocat france",
    "site web cabinet avocat paris",
  ],
  alternates: { canonical: "/secteurs/juridique/" },
};

const BENEFITS = [
  "Google Ads juridique conforme aux règles du Barreau et des ordres professionnels concernés",
  "SEO de positionnement d'expert pour 'avocat divorce paris', 'notaire testament paris' et plus",
  "Génération de mandats qualifiés — prospects qui ont déjà compris leur besoin et sont prêts à agir",
  "LinkedIn Ads B2B pour cibler les entreprises ayant des besoins juridiques récurrents",
  "Site web professionnel avec biographies d'avocats, domaines de pratique et consultation en ligne",
  "Gestion de la réputation en ligne : avis Google, Avvo, 411.ca — votre crédibilité protégée",
];

export default function JuridiquePage() {
  const sector = getSectorBySlug("juridique")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
