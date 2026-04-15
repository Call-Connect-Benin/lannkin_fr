import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Marketing Digital Paris | Google Ads, SEO, Réseaux Sociaux | Ekolink",
  description:
    "Agence marketing digital 360° à Paris. Google Ads, Facebook Ads, SEO, réseaux sociaux et lead generation pour PME parisiennes. Devis gratuit.",
  keywords: [
    "agence marketing paris",
    "agence marketing digital paris",
    "marketing digital paris",
    "google ads paris",
    "facebook ads paris",
    "lead generation paris",
  ],
  alternates: { canonical: "/zone/agence-marketing-paris/" },
};

export default function AgenceMarketingParisPage() {
  const zone = getZoneBySlug("agence-marketing-paris")!;
  return <ZonePageTemplate zone={zone} />;
}
