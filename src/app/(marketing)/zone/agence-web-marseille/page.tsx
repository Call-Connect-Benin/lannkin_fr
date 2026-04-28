import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Nanterre | Sites Web, SEO & Google Ads | Lannkin",
  description:
    "Agence web à Nanterre et Hauts-de-Seine. Sites web modernes, SEO local et Google Ads pour entreprises longueuillaises. Devis gratuit.",
  keywords: ["agence web longueuil", "conception site web longueuil", "seo longueuil", "google ads longueuil", "marketing digital longueuil"],
  alternates: { canonical: "/zone/agence-web-marseille/" },
};

export default function AgenceWebNanterrePage() {
  const zone = getZoneBySlug("agence-web-marseille")!;
  return <ZonePageTemplate zone={zone} />;
}
