import type { Metadata } from "next";

import { PRICING_GMB } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Google My Business | Ekolink",
  description:
    "Gestion fiche Google dès 50€/mois. Optimisation GMB, Google Posts, gestion d'avis et QR Code à 200$. SEO local garanti.",
};

export default function TarifsGoogleMyBusinessPage() {
  return (
    <PricingPageContent
      title="Tarifs Google My Business"
      subtitle="Optimisez votre présence locale sur Google Maps et la recherche locale. De la gestion de base à la création complète de votre fiche avec stratégie d'avis clients."
      plans={PRICING_GMB}
      serviceHref="/services/google-my-business/"
      parallaxImage="/images/rendu3D/rendu3d-flatlay-fond-vert.webp"
      youtubeIds={["F0yg_aHoWe0"]}
      youtubeTitle="Maîtrisez Google My Business"
    />
  );
}
