import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Trois-Rivières | Sites Web, SEO & Marketing | Lannkin",
  description:
    "Agence web à Trois-Rivières et en Mauricie. Sites web performants, SEO local, Google Ads et marketing digital pour entreprises trifluviennes. Devis gratuit.",
  keywords: ["agence web trois-rivières", "conception site web trois rivières", "seo trois-rivières", "google ads mauricie", "marketing digital trois rivières"],
  alternates: { canonical: "/zone/agence-web-trois-rivieres/" },
};

export default function AgenceWebTroisRivieresPage() {
  const zone = getZoneBySlug("agence-web-trois-rivieres")!;
  return <ZonePageTemplate zone={zone} />;
}
