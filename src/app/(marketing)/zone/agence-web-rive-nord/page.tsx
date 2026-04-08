import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Rive-Nord | Terrebonne, Blainville, St-Jérôme | Lannkin",
  description:
    "Agence web Rive-Nord. Sites web, SEO et marketing digital pour Laval, Terrebonne, Blainville, Saint-Jérôme et toute la Rive-Nord. Devis gratuit.",
  keywords: ["agence web rive nord", "agence web terrebonne", "agence web blainville", "seo rive nord", "marketing digital rive nord"],
  alternates: { canonical: "/zone/agence-web-rive-nord/" },
};

export default function AgenceWebRiveNordPage() {
  const zone = getZoneBySlug("agence-web-rive-nord")!;
  return <ZonePageTemplate zone={zone} />;
}
