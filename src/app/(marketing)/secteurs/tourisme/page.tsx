import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Tourisme & Hôtellerie Québec | Hôtels, Attraits | Lannkin",
  description:
    "Agence marketing tourisme à Laval et Montréal. Google Hotel Ads, Facebook Ads tourisme, SEO voyage, site de réservation directe. Augmentez vos réservations. Devis gratuit.",
  keywords: [
    "marketing digital tourisme québec",
    "google hotel ads montréal",
    "facebook ads hôtels laval",
    "seo voyage québec",
    "réservation directe hôtel site web",
    "agence marketing attrait touristique montréal",
  ],
  alternates: { canonical: "/secteurs/tourisme/" },
};

const BENEFITS = [
  "Google Hotel Ads et Google Maps pour apparaître en premier face aux OTAs (Booking, Expedia)",
  "Site de réservation directe sans commission — récupérez les marges perdues sur les plateformes",
  "Facebook et Instagram Ads avec visuels immersifs pour susciter l'envie et la réservation directe",
  "SEO voyage pour capter le trafic organique à forte intention : 'hôtel laval', 'week-end laurentides'",
  "Campagnes saisonnières adaptées aux pics touristiques et aux offres de dernière minute",
  "Gestion de la e-réputation : TripAdvisor, Google, Booking — avis positifs amplifiés",
];

export default function TourismePage() {
  const sector = getSectorBySlug("tourisme")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
