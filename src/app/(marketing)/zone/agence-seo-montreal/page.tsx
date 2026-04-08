import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence SEO Montréal | Référencement Local & National | Lannkin",
  description:
    "Agence SEO à Montréal. Référencement naturel local et national, audit technique, backlinks et contenu optimisé pour PME montréalaises. Devis gratuit.",
  keywords: ["agence seo montréal", "référencement naturel montréal", "seo local montréal", "audit seo montréal", "expert seo montréal"],
  alternates: { canonical: "/zone/agence-seo-montreal/" },
};

export default function AgenceSeoMontrealPage() {
  const zone = getZoneBySlug("agence-seo-montreal")!;
  return <ZonePageTemplate zone={zone} />;
}
