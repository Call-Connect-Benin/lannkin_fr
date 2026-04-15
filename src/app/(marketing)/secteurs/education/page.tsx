import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Éducation & Formation Paris | Recrutement Étudiants | Ekolink",
  description:
    "Agence marketing spécialisée éducation à Paris. Google Ads formation, lead gen étudiants, LinkedIn Ads, site web avec inscription en ligne. Devis gratuit.",
  keywords: [
    "marketing digital école paris",
    "google ads centre de formation paris",
    "recrutement étudiants publicité france",
    "linkedin ads formation professionnelle",
    "seo école privée paris",
    "site web inscription en ligne formation",
  ],
  alternates: { canonical: "/secteurs/education/" },
};

const BENEFITS = [
  "Google Ads formation avec ciblage par programme, région et profil de l'apprenant (adulte, étudiant)",
  "LinkedIn Ads B2B pour promouvoir les formations continues auprès des professionnels en poste",
  "Entonnoirs de recrutement étudiants : landing page → formulaire → suivi CRM automatisé",
  "SEO pour les recherches 'formation [métier] paris', 'cours [discipline] paris' à fort volume",
  "Facebook Ads ciblé par tranche d'âge et intérêts pour les formations grand public",
  "Site web avec formulaire d'inscription en ligne, calendrier de sessions et témoignages d'alumni",
];

export default function EducationPage() {
  const sector = getSectorBySlug("education")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
