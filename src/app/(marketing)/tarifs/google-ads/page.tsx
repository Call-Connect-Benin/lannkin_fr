import type { Metadata } from "next";

import { PRICING_GOOGLE_ADS } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Google Ads | Lannkin",
  description:
    "Gestion Google Ads dès 250 €. Tags à 250 €, Medium à 500€/mois, Premium à 750€/mois. Search, Display, Shopping et YouTube.",
};

export default function TarifsGoogleAdsPage() {
  return (
    <PricingPageContent
      title="Tarifs Google Ads"
      subtitle="Des forfaits adaptés à votre budget publicitaire. Du tracking initial à la gestion premium de vos campagnes Search, Display, Shopping et YouTube."
      plans={PRICING_GOOGLE_ADS}
      serviceHref="/services/google-ads/"
      parallaxImage="/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp"
      youtubeIds={["7-roIfvYlz4", "8x2GnzA-IWA", "-jGUN3meqpo"]}
      youtubeTitle="Apprenez Google Ads avec Lannkin"
    />
  );
}
