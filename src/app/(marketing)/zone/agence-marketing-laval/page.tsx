import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Marketing Digital Laval | Google Ads, SEO, Réseaux Sociaux | Lannkin",
  description:
    "Agence marketing digital 360° à Laval. Google Ads, Facebook Ads, SEO, réseaux sociaux et lead generation pour PME lavalloises. Devis gratuit.",
  keywords: [
    "agence marketing laval",
    "agence marketing digital laval",
    "marketing digital laval",
    "google ads laval",
    "facebook ads laval",
    "lead generation laval",
  ],
  alternates: { canonical: "/zone/agence-marketing-laval/" },
};

export default function AgenceMarketingLavalPage() {
  const zone = getZoneBySlug("agence-marketing-laval")!;
  return <ZonePageTemplate zone={zone} />;
}
