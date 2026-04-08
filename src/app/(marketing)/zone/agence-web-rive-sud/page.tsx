import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Rive-Sud | Longueuil, Brossard, Saint-Jean | Lannkin",
  description:
    "Agence web Rive-Sud de Montréal. Conception web, SEO et Google Ads pour Longueuil, Brossard, Saint-Jean-sur-Richelieu. Devis gratuit.",
  keywords: ["agence web rive sud", "agence web longueuil", "agence web brossard", "seo rive sud", "marketing digital rive sud"],
  alternates: { canonical: "/zone/agence-web-rive-sud/" },
};

export default function AgenceWebRiveSudPage() {
  const zone = getZoneBySlug("agence-web-rive-sud")!;
  return <ZonePageTemplate zone={zone} />;
}
