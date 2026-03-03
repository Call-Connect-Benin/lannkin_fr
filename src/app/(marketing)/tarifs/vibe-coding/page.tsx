import type { Metadata } from "next";

import { PRICING_VIBE_CODING } from "@/data/pricing";
import { PricingPageContent } from "@/presentation/components/pricing";

export const metadata: Metadata = {
  title: "Tarifs Vibe Coding & CMS IA | Lannkin",
  description:
    "Développement IA dès 149$/mois. Lovable, Bolt, Cursor et Claude Code. Formation vibe coding à 500$. Apps web sur mesure.",
};

export default function TarifsVibeCodingPage() {
  return (
    <PricingPageContent
      title="Tarifs Vibe Coding & CMS IA"
      subtitle="Créez votre site ou application web avec les meilleurs outils IA du marché. De Lovable à Claude Code, nous exploitons la puissance de l'IA pour livrer plus vite et à moindre coût."
      plans={PRICING_VIBE_CODING}
      serviceHref="/services/vibe-coding/"
    />
  );
}
