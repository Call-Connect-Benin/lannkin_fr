import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Montréal | Sites Web, SEO & Marketing Digital | Lannkin",
  description:
    "Agence web à Montréal. Conception de sites web modernes, e-commerce, SEO, Google Ads et marketing digital pour entreprises montréalaises. Devis gratuit.",
  keywords: [
    "agence web montréal",
    "conception site web montréal",
    "google ads montréal",
    "seo montréal",
    "marketing digital montréal",
    "agence marketing montreal",
  ],
  alternates: { canonical: "/zone/agence-web-montreal/" },
};

export default function AgenceWebMontrealPage() {
  const zone = getZoneBySlug("agence-web-montreal")!;
  return <ZonePageTemplate zone={zone} />;
}
