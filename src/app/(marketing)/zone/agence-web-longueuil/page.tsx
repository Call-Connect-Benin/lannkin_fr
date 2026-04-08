import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Longueuil | Sites Web, SEO & Google Ads | Lannkin",
  description:
    "Agence web à Longueuil et Rive-Sud. Sites web modernes, SEO local et Google Ads pour entreprises longueuillaises. Devis gratuit.",
  keywords: ["agence web longueuil", "conception site web longueuil", "seo longueuil", "google ads longueuil", "marketing digital longueuil"],
  alternates: { canonical: "/zone/agence-web-longueuil/" },
};

export default function AgenceWebLongueuilPage() {
  const zone = getZoneBySlug("agence-web-longueuil")!;
  return <ZonePageTemplate zone={zone} />;
}
