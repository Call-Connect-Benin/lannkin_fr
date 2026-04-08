import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Terrebonne | Sites Web, SEO & Marketing Digital | Lannkin",
  description:
    "Agence web à Terrebonne, Mascouche et Lanaudière. Sites web sur mesure, SEO, Google Ads et marketing digital pour entreprises lanaudoises. Devis gratuit.",
  keywords: ["agence web terrebonne", "conception site web terrebonne", "seo terrebonne", "google ads terrebonne", "marketing digital lanaudière"],
  alternates: { canonical: "/zone/agence-web-terrebonne/" },
};

export default function AgenceWebTerrebonnePage() {
  const zone = getZoneBySlug("agence-web-terrebonne")!;
  return <ZonePageTemplate zone={zone} />;
}
