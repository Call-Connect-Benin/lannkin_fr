import type { Metadata } from "next";

import { AuditGoogleAdsLP } from "./AuditGoogleAdsLP";

export const metadata: Metadata = {
  title: "Audit Google Ads gratuit : Détectez vos clics frauduleux | Ekolink",
  description:
    "Découvrez combien vous perdez en clics frauduleux sur Google Ads. "
    + "Notre audit gratuit analyse 90 jours de données et identifie les clics robots, "
    + "hors zone et le budget gaspillé. Récupérez votre argent via Google.",
  keywords: [
    "audit google ads",
    "clics frauduleux google ads",
    "fraude clics google ads",
    "remboursement google ads",
    "clics robots",
    "trafic invalide",
    "budget gaspillé google ads",
  ],
  openGraph: {
    title: "Audit Google Ads gratuit : Détectez vos clics frauduleux",
    description:
      "Découvrez combien vous perdez en clics frauduleux. Audit 90 jours gratuit.",
    type: "website",
  },
};

export default function AuditGoogleAdsPage() {
  return <AuditGoogleAdsLP />;
}
