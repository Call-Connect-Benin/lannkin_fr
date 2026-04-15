import type { Metadata } from "next";

import { PRICING_RESEAUX_SOCIAUX } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Réseaux Sociaux | Ekolink",
  description:
    "Publicité sociale dès 500€/mois. TikTok, LinkedIn, Snapchat et Pinterest Ads. Ciblage avancé et création de contenu inclus.",
};

export default function TarifsReseauxSociauxPage() {
  return (
    <PricingPageContent
      title="Tarifs Réseaux Sociaux"
      subtitle="Touchez votre audience sur TikTok, LinkedIn, Snapchat et Pinterest. Chaque plateforme a ses forces : nous créons et gérons vos campagnes pour un impact maximal."
      plans={PRICING_RESEAUX_SOCIAUX}
      serviceHref="/services/tiktok-ads/"
      parallaxImage="/images/rendu3D/rendu3d-trio-cubes-flottants.webp"
    />
  );
}
