import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Gatineau | Sites Web Bilingues, SEO & Google Ads | Lannkin",
  description:
    "Agence web à Gatineau et Outaouais. Sites web bilingues, SEO local et Google Ads pour entreprises de Gatineau-Ottawa. Devis gratuit.",
  keywords: ["agence web gatineau", "conception site web gatineau", "seo gatineau", "google ads gatineau", "marketing digital outaouais"],
  alternates: { canonical: "/zone/agence-web-gatineau/" },
};

export default function AgenceWebGatineauPage() {
  const zone = getZoneBySlug("agence-web-gatineau")!;
  return <ZonePageTemplate zone={zone} />;
}
