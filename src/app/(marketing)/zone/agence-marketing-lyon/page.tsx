import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Marketing Digital Paris | Paid Media, SEO, Lead Gen | Lannkin",
  description:
    "Agence marketing digital à Paris. Google Ads, Meta Ads, SEO et lead generation pour PME et startups parisiennes. Devis gratuit.",
  keywords: ["agence marketing paris", "agence marketing digital paris", "google ads paris", "facebook ads paris", "seo paris"],
  alternates: { canonical: "/zone/agence-marketing-lyon/" },
};

export default function AgenceMarketingLyonPage() {
  const zone = getZoneBySlug("agence-marketing-lyon")!;
  return <ZonePageTemplate zone={zone} />;
}
