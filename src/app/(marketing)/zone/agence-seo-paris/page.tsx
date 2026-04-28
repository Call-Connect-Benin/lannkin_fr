import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence SEO Paris | Référencement Naturel Google | Lannkin",
  description:
    "Agence SEO à Paris. Audit technique, backlinks, maillage interne et optimisation on-page pour dominer Google localement. Devis gratuit en 24h.",
  keywords: ["agence seo paris", "référencement naturel paris", "seo local paris", "audit seo paris", "expert seo paris"],
  alternates: { canonical: "/zone/agence-seo-paris/" },
};

export default function AgenceSeoParisPage() {
  const zone = getZoneBySlug("agence-seo-paris")!;
  return <ZonePageTemplate zone={zone} />;
}
