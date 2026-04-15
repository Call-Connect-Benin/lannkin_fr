import type { Metadata } from "next";

import { getSectorBySlug } from "@/data/sectors";
import { SectorPageTemplate } from "@/presentation/components/secteurs/SectorPageTemplate";

export const metadata: Metadata = {
  title: "Marketing Digital Restaurant & Restauration Paris | Google Ads, Réseaux Sociaux | Ekolink",
  description:
    "Agence marketing spécialisée restauration à Paris. Google Ads local, gestion réseaux sociaux, avis Google, site web avec menu et réservation. Remplissez vos tables. Devis gratuit.",
  keywords: [
    "marketing digital restaurant paris",
    "google ads restaurant paris",
    "réseaux sociaux restauration france",
    "seo restaurant paris",
    "gestion avis google restaurant",
    "site web restaurant paris",
  ],
  alternates: { canonical: "/secteurs/restaurant-restauration/" },
};

const BENEFITS = [
  "Google Ads Local pour apparaître en premier sur 'restaurant paris', 'restaurant italien paris-nord'",
  "Gestion de vos avis Google et TripAdvisor — réputation en ligne protégée et valorisée",
  "Réseaux sociaux food photography : contenus appétissants qui génèrent réservations et livraisons",
  "Site web avec menu interactif, réservation en ligne et commande directe (sans commission externe)",
  "Campagnes Facebook et Instagram ciblées par quartier pour remplir les soirées creuses",
  "Promotions saisonnières et événements spéciaux (Saint-Valentin, fêtes) amplifiés par le digital",
];

export default function RestaurantPage() {
  const sector = getSectorBySlug("restaurant-restauration")!;
  return <SectorPageTemplate sector={sector} benefits={BENEFITS} />;
}
