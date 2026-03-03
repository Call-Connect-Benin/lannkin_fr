import type { Metadata } from "next";

import { PRICING_FACEBOOK_ADS } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Facebook & Meta Ads | Lannkin",
  description:
    "Publicité Meta dès 199$. Page Pro, Pixel, gestion Facebook et Instagram Ads. Standard à 500$/mois, Premium à 900$/mois.",
};

export default function TarifsFacebookAdsPage() {
  return (
    <PricingPageContent
      title="Tarifs Facebook & Meta Ads"
      subtitle="De la création de votre page professionnelle à la gestion de campagnes publicitaires sur Facebook, Instagram et Messenger. Maximisez votre ROI sur l'écosystème Meta."
      plans={PRICING_FACEBOOK_ADS}
      serviceHref="/services/facebook-ads/"
    />
  );
}
