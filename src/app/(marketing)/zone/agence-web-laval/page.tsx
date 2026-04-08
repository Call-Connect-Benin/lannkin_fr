import type { Metadata } from "next";

import { getZoneBySlug } from "@/data/zones";
import { ZonePageTemplate } from "@/presentation/components/zone/ZonePageTemplate";

export const metadata: Metadata = {
  title: "Agence Web Laval | Sites Web, SEO & Google Ads | Lannkin",
  description:
    "Agence web à Laval certifiée Google Partner. Conception de sites web, SEO, Google Ads et marketing digital pour PME lavalloises depuis 2015. Devis gratuit en 24h.",
  keywords: [
    "agence web laval",
    "conception site web laval",
    "google ads laval",
    "seo laval",
    "marketing digital laval",
    "agence marketing laval",
  ],
  alternates: { canonical: "/zone/agence-web-laval/" },
};

export default function AgenceWebLavalPage() {
  const zone = getZoneBySlug("agence-web-laval")!;
  return <ZonePageTemplate zone={zone} />;
}
