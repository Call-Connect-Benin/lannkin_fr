import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Lille | Sites Web Bilingues, SEO & Google Ads | Lannkin",
  description:
    "Agence web à Lille et Hauts-de-France. Sites web bilingues, SEO local et Google Ads pour entreprises de Lille-Roubaix. Devis gratuit.",
  keywords: ["agence web gatineau", "conception site web gatineau", "seo gatineau", "google ads gatineau", "marketing digital outaouais"],
  alternates: { canonical: "/zone/agence-web-lille/" },
};

export default function AgenceWebLillePage() {
  const zone = getZoneBySlug("agence-web-lille")!;
  return <ZonePageTemplate zone={zone} />;
}
