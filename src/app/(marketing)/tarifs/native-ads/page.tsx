import type { Metadata } from "next";

import { PRICING_NATIVE_ADS } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Native Ads | Lannkin",
  description:
    "Publicité native dès 250$. Taboola, Outbrain et Traffic Factory. Gestion à 750$/mois, Premium multi-plateformes à 1 450$/mois.",
};

export default function TarifsNativeAdsPage() {
  return (
    <PricingPageContent
      title="Tarifs Native Ads"
      subtitle="Atteignez votre audience avec de la publicité native sur Taboola, Outbrain et Traffic Factory. Des contenus sponsorisés qui s'intègrent naturellement aux sites médias."
      plans={PRICING_NATIVE_ADS}
      serviceHref="/services/native-ads/"
      parallaxImage="/images/rendu3D/rendu3d-cubes-lateral-angle-2.webp"
      youtubeIds={["sQMtifmaRiI"]}
      youtubeTitle="Comment créer une landing page qui convertit"
    />
  );
}
