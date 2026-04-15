import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence SEO Paris | Référencement Local & National | Ekolink",
  description:
    "Agence SEO à Paris. Référencement naturel local et national, audit technique, backlinks et contenu optimisé pour PME parisiennes. Devis gratuit.",
  keywords: ["agence seo paris", "référencement naturel paris", "seo local paris", "audit seo paris", "expert seo paris"],
  alternates: { canonical: "/zone/agence-seo-lyon/" },
};

export default function AgenceSeoMontrealPage() {
  const zone = getZoneBySlug("agence-seo-lyon")!;
  return <ZonePageTemplate zone={zone} />;
}
