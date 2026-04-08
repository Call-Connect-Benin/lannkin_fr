import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Marketing Digital Montréal | Paid Media, SEO, Lead Gen | Lannkin",
  description:
    "Agence marketing digital à Montréal. Google Ads, Meta Ads, SEO et lead generation pour PME et startups montréalaises. Devis gratuit.",
  keywords: ["agence marketing montréal", "agence marketing digital montréal", "google ads montréal", "facebook ads montréal", "seo montréal"],
  alternates: { canonical: "/zone/agence-marketing-montreal/" },
};

export default function AgenceMarketingMontrealPage() {
  const zone = getZoneBySlug("agence-marketing-montreal")!;
  return <ZonePageTemplate zone={zone} />;
}
