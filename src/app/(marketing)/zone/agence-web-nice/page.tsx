import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Nice | Sites Web, SEO & Marketing | Lannkin",
  description:
    "Agence web à Nice et en Provence-Alpes-Côte d'Azur. Sites web performants, SEO local, Google Ads et marketing digital pour entreprises niçoises. Devis gratuit.",
  keywords: ["agence web trois-rivières", "conception site web trois rivières", "seo trois-rivières", "google ads mauricie", "marketing digital trois rivières"],
  alternates: { canonical: "/zone/agence-web-nice/" },
};

export default function AgenceWebTroisRivieresPage() {
  const zone = getZoneBySlug("agence-web-nice")!;
  return <ZonePageTemplate zone={zone} />;
}
