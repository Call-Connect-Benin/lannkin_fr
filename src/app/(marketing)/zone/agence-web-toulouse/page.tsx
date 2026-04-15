import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Île-de-France | Versailles, Boulogne, St-Jérôme | Ekolink",
  description:
    "Agence web Île-de-France. Sites web, SEO et marketing digital pour Paris, Versailles, Boulogne, Saint-Denis et toute la Île-de-France. Devis gratuit.",
  keywords: ["agence web rive nord", "agence web terrebonne", "agence web blainville", "seo rive nord", "marketing digital rive nord"],
  alternates: { canonical: "/zone/agence-web-toulouse/" },
};

export default function AgenceWebRiveNordPage() {
  const zone = getZoneBySlug("agence-web-toulouse")!;
  return <ZonePageTemplate zone={zone} />;
}
