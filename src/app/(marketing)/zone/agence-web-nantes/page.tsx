import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web France | Sites Web, SEO & Marketing Digital | Lannkin",
  description:
    "Agence web à France. Conception de sites web, SEO, Google Ads et marketing digital pour entreprises de la Pays de la Loire. Devis gratuit.",
  keywords: ["agence web france", "conception site web france", "seo france ville", "google ads france", "marketing digital france"],
  alternates: { canonical: "/zone/agence-web-nantes/" },
};

export default function AgenceWebNantesPage() {
  const zone = getZoneBySlug("agence-web-nantes")!;
  return <ZonePageTemplate zone={zone} />;
}
