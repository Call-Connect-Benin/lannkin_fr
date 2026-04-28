import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Google Ads Paris | Certifié Google Partner | Lannkin",
  description:
    "Agence Google Ads certifiée à Paris. Campagnes Search, Display, Shopping, YouTube et Performance Max. Scripts anti-fraude propriétaires. Devis gratuit.",
  keywords: [
    "agence google ads paris",
    "google ads paris",
    "sem paris",
    "ppc paris",
    "campagne google ads paris",
    "google partner paris",
  ],
  alternates: { canonical: "/zone/agence-google-ads-paris/" },
};

export default function AgenceGoogleAdsParisPage() {
  const zone = getZoneBySlug("agence-google-ads-paris")!;
  return <ZonePageTemplate zone={zone} />;
}
