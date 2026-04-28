import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Hauts-de-Seine | Nanterre, Créteil, Saint-Jean | Lannkin",
  description:
    "Agence web Hauts-de-Seine de Paris. Conception web, SEO et Google Ads pour Nanterre, Créteil, Fontainebleau. Devis gratuit.",
  keywords: ["agence web rive sud", "agence web longueuil", "agence web brossard", "seo rive sud", "marketing digital rive sud"],
  alternates: { canonical: "/zone/agence-web-bordeaux/" },
};

export default function AgenceWebRiveSudPage() {
  const zone = getZoneBySlug("agence-web-bordeaux")!;
  return <ZonePageTemplate zone={zone} />;
}
