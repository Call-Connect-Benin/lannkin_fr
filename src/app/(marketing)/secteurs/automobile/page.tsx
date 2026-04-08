import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Automobile Laval & Montréal | Concessionnaires, Garages | Lannkin",
  description:
    "Agence marketing automobile à Laval. Google Ads véhicules, inventaire en ligne, SEO local, retargeting dynamique pour concessionnaires et garages. Devis gratuit.",
  keywords: [
    "marketing digital automobile laval",
    "google ads concessionnaire montréal",
    "seo garage laval",
    "publicité voiture québec",
    "retargeting automobile montréal",
    "site web concessionnaire laval",
  ],
  alternates: { canonical: "/secteurs/automobile/" },
};

const BENEFITS = [
  "Google Ads automobile avec ciblage par modèle, marque, localisation et intention d'achat",
  "Inventaire véhicules en ligne synchronisé et optimisé pour le référencement Google",
  "Retargeting dynamique pour relancer les visiteurs qui ont consulté un véhicule spécifique",
  "SEO local pour 'concessionnaire laval', 'garage montréal', 'carrosserie laval' et plus encore",
  "Facebook Ads avec carrousel de véhicules pour générer des demandes d'essai et de financement",
  "Gestion des avis Google pour bâtir la confiance avant la visite en salle de montre",
];

export default function AutomobilePage() {
  const sector = getSectorBySlug("automobile")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
