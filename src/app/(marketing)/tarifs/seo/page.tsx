import type { Metadata } from "next";

import { PRICING_SEO } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs SEO | Lannkin",
  description:
    "Référencement naturel dès 300 €. Audit SEO, backlinks à 400€/mois, maillage interne à 500€/mois. Dominez les résultats Google.",
};

export default function TarifsSeoPage() {
  return (
    <PricingPageContent
      title="Tarifs SEO"
      subtitle="Améliorez votre positionnement Google avec nos services de référencement naturel. De l'audit technique à la stratégie de backlinks, chaque forfait est conçu pour des résultats mesurables."
      plans={PRICING_SEO}
      serviceHref="/services/seo/"
      parallaxImage="/images/rendu3D/rendu3d-cube-vert-macro.webp"
      youtubeIds={["1owrwmEiPIg"]}
      youtubeTitle="Comprendre le SEO avec Lannkin"
    />
  );
}
