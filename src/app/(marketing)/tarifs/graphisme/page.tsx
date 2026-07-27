import type { Metadata } from "next";

import { PRICING_GRAPHISME } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Graphisme | Lannkin",
  description:
    "Logo dès 500 €, identité visuelle à 1 000 €, brochure à 450 €. Fichiers vectoriels inclus. Révisions illimitées sur Logo Premium.",
};

export default function TarifsGraphismePage() {
  return (
    <PricingPageContent
      title="Tarifs Graphisme"
      subtitle="Du logo essentiel à l'identité visuelle complète, donnez une image professionnelle à votre marque. Fichiers vectoriels, charte graphique et brand book inclus selon le forfait."
      plans={PRICING_GRAPHISME}
      serviceHref="/services/graphisme/"
      parallaxImage="/images/rendu3D/rendu3d-diamant-cubes-flottants.webp"
    />
  );
}
