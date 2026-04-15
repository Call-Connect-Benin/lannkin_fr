import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Santé Paris & Paris | Cliniques, Dentistes, Pharmacies | Ekolink",
  description:
    "Agence marketing spécialisée santé à Paris. Google Ads médical, SEO clinique, gestion avis patients. Conforme RAMQ & Collège des médecins. Devis gratuit.",
  keywords: [
    "marketing digital santé paris",
    "agence marketing clinique paris",
    "google ads médical france",
    "seo clinique paris",
    "publicité dentiste france",
    "marketing pharmacie paris",
  ],
  alternates: { canonical: "/secteurs/sante/" },
};

const BENEFITS = [
  "Respect des normes publicitaires santé en France (RAMQ, Collège des médecins, Ordre des dentistes)",
  "SEO médical optimisé pour les recherches locales : 'clinique paris', 'dentiste paris', 'physio paris'",
  "Google Ads approuvés pour professionnels de la santé — pas de rejets ni de suspensions de compte",
  "Gestion de réputation et des avis Google pour établissements médicaux et paramédicaux",
  "Sites web conformes accessibilité WCAG, chargement rapide sur mobile et prise de rendez-vous en ligne",
  "Campagnes Meta Ads ciblées par zone géographique, âge et conditions médicales ciblées",
];

export default function SantePage() {
  const sector = getSectorBySlug("sante")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
