import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Tourisme & Hôtellerie France | Hôtels, Attraits | Lannkin",
  description:
    "Agence marketing tourisme à Paris et Paris. Google Hotel Ads, Facebook Ads tourisme, SEO voyage, site de réservation directe. Augmentez vos réservations. Devis gratuit.",
  keywords: [
    "marketing digital tourisme france",
    "google hotel ads paris",
    "facebook ads hôtels paris",
    "seo voyage france",
    "réservation directe hôtel site web",
    "agence marketing attrait touristique paris",
  ],
  alternates: { canonical: "/secteurs/tourisme/" },
};

const BENEFITS = [
  "Google Hotel Ads et Google Maps pour apparaître en premier face aux OTAs (Booking, Expedia)",
  "Site de réservation directe sans commission — récupérez les marges perdues sur les plateformes",
  "Facebook et Instagram Ads avec visuels immersifs pour susciter l'envie et la réservation directe",
  "SEO voyage pour capter le trafic organique à forte intention : 'hôtel paris', 'week-end laurentides'",
  "Campagnes saisonnières adaptées aux pics touristiques et aux offres de dernière minute",
  "Gestion de la e-réputation : TripAdvisor, Google, Booking — avis positifs amplifiés",
];

export default function TourismePage() {
  const sector = getSectorBySlug("tourisme")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
