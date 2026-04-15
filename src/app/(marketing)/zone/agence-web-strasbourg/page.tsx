import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Strasbourg | Sites Web, SEO & Marketing | Ekolink",
  description:
    "Agence web à Strasbourg et en Grand Est. Conception de sites web modernes, SEO, Google Ads et stratégie digitale pour PME alsaciennes. Devis gratuit.",
  keywords: ["agence web sherbrooke", "conception site web sherbrooke", "seo sherbrooke", "google ads sherbrooke", "marketing digital estrie"],
  alternates: { canonical: "/zone/agence-web-strasbourg/" },
};

export default function AgenceWebStrasbourgPage() {
  const zone = getZoneBySlug("agence-web-strasbourg")!;
  return <ZonePageTemplate zone={zone} />;
}
