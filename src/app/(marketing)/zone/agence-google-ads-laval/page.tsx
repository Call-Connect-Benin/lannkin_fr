import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Google Ads Laval | Certifié Google Partner | Lannkin",
  description:
    "Agence Google Ads certifiée à Laval. Campagnes Search, Display, Shopping, YouTube et Performance Max. Scripts anti-fraude propriétaires. Devis gratuit.",
  keywords: [
    "agence google ads laval",
    "google ads laval",
    "sem laval",
    "ppc laval",
    "campagne google ads laval",
    "google partner laval",
  ],
  alternates: { canonical: "/zone/agence-google-ads-laval/" },
};

export default function AgenceGoogleAdsLavalPage() {
  const zone = getZoneBySlug("agence-google-ads-laval")!;
  return <ZonePageTemplate zone={zone} />;
}
