import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence SEO Laval | Référencement Naturel Google | Lannkin",
  description:
    "Agence SEO à Laval. Audit technique, backlinks, maillage interne et optimisation on-page pour dominer Google localement. Devis gratuit en 24h.",
  keywords: ["agence seo laval", "référencement naturel laval", "seo local laval", "audit seo laval", "expert seo laval"],
  alternates: { canonical: "/zone/agence-seo-laval/" },
};

export default function AgenceSeoLavalPage() {
  const zone = getZoneBySlug("agence-seo-laval")!;
  return <ZonePageTemplate zone={zone} />;
}
