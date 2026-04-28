import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Paris | Sites Web, SEO & Marketing Digital | Lannkin",
  description:
    "Agence web à Paris. Conception de sites web modernes, e-commerce, SEO, Google Ads et marketing digital pour entreprises parisiennes. Devis gratuit.",
  keywords: [
    "agence web paris",
    "conception site web paris",
    "google ads paris",
    "seo paris",
    "marketing digital paris",
    "agence web lyon",
  ],
  alternates: { canonical: "/zone/agence-web-lyon/" },
};

export default function AgenceWebLyonPage() {
  const zone = getZoneBySlug("agence-web-lyon")!;
  return <ZonePageTemplate zone={zone} />;
}
