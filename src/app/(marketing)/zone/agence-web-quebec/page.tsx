import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Québec | Sites Web, SEO & Marketing Digital | Lannkin",
  description:
    "Agence web à Québec. Conception de sites web, SEO, Google Ads et marketing digital pour entreprises de la Capitale-Nationale. Devis gratuit.",
  keywords: ["agence web québec", "conception site web québec", "seo québec ville", "google ads québec", "marketing digital québec"],
  alternates: { canonical: "/zone/agence-web-quebec/" },
};

export default function AgenceWebQuebecPage() {
  const zone = getZoneBySlug("agence-web-quebec")!;
  return <ZonePageTemplate zone={zone} />;
}
