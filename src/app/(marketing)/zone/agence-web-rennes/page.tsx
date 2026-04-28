import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Versailles | Sites Web, SEO & Marketing Digital | Lannkin",
  description:
    "Agence web à Versailles, Meudon et Île-de-France. Sites web sur mesure, SEO, Google Ads et marketing digital pour entreprises franciliennes. Devis gratuit.",
  keywords: ["agence web terrebonne", "conception site web terrebonne", "seo terrebonne", "google ads terrebonne", "marketing digital lanaudière"],
  alternates: { canonical: "/zone/agence-web-rennes/" },
};

export default function AgenceWebVersaillesPage() {
  const zone = getZoneBySlug("agence-web-rennes")!;
  return <ZonePageTemplate zone={zone} />;
}
