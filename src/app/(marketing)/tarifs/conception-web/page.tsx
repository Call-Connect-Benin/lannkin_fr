import type { Metadata } from "next";

import { PRICING_CONCEPTION_WEB } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Conception Web | Ekolink",
  description:
    "Sites web dès 99€/mois. Vitrine, multi-pages, e-commerce ou SEO MasterSite. Hébergement et SSL inclus. Prix transparents.",
};

export default function TarifsConceptionWebPage() {
  return (
    <PricingPageContent
      title="Tarifs Conception Web"
      subtitle="Du site vitrine one-page à la boutique e-commerce, choisissez le forfait qui correspond à votre projet. Tous nos sites sont responsifs, optimisés SEO et livrés avec hébergement inclus."
      plans={PRICING_CONCEPTION_WEB}
      serviceHref="/services/conception-web/"
      parallaxImage="/images/rendu3D/rendu3d-cube-vert-minimaliste.webp"
      youtubeIds={["jAowTOGtOaQ"]}
      youtubeTitle="Découvrez nos créations 3D interactives"
    />
  );
}
