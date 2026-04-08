import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Services Professionnels Laval | Avocats, Comptables, Consultants | Lannkin",
  description:
    "Agence marketing B2B à Laval. LinkedIn Ads, Google Ads services professionnels, lead generation qualifiée, site vitrine premium pour consultants et professionnels. Devis gratuit.",
  keywords: [
    "marketing digital services professionnels laval",
    "linkedin ads b2b montréal",
    "google ads comptable laval",
    "génération leads consultant québec",
    "seo services professionnels montréal",
    "site web consultant laval",
  ],
  alternates: { canonical: "/secteurs/services-professionnels/" },
};

const BENEFITS = [
  "LinkedIn Ads B2B pour cibler les décideurs par industrie, taille d'entreprise et poste",
  "Google Ads avec ciblage par intention forte : 'comptable cpa laval', 'consultant rh montréal'",
  "Génération de leads qualifiés avec formulaires multi-étapes pour filtrer les prospects sérieux",
  "Positionnement d'expert via content marketing et SEO : articles de blogue, études de cas",
  "Site vitrine premium avec témoignages clients, études de cas et prise de rendez-vous en ligne",
  "Suivi de performance rigoureux : coût par lead, taux de conversion, ROI par canal",
];

export default function ServicesProfessionnelsPage() {
  const sector = getSectorBySlug("services-professionnels")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
