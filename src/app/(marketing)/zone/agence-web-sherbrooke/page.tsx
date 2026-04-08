import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Sherbrooke | Sites Web, SEO & Marketing | Lannkin",
  description:
    "Agence web à Sherbrooke et en Estrie. Conception de sites web modernes, SEO, Google Ads et stratégie digitale pour PME estriennes. Devis gratuit.",
  keywords: ["agence web sherbrooke", "conception site web sherbrooke", "seo sherbrooke", "google ads sherbrooke", "marketing digital estrie"],
  alternates: { canonical: "/zone/agence-web-sherbrooke/" },
};

export default function AgenceWebSherbrookePage() {
  const zone = getZoneBySlug("agence-web-sherbrooke")!;
  return <ZonePageTemplate zone={zone} />;
}
