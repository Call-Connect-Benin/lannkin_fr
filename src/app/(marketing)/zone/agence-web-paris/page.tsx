import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Paris | Sites Web, SEO & Google Ads | Lannkin",
  description:
    "Agence web à Paris certifiée Google Partner. Conception de sites web, SEO, Google Ads et marketing digital pour PME parisiennes depuis 2015. Devis gratuit en 24h.",
  keywords: [
    "agence web paris",
    "conception site web paris",
    "google ads paris",
    "seo paris",
    "marketing digital paris",
    "agence marketing paris",
  ],
  alternates: { canonical: "/zone/agence-web-paris/" },
};

export default function AgenceWebParisPage() {
  const zone = getZoneBySlug("agence-web-paris")!;
  return <ZonePageTemplate zone={zone} />;
}
