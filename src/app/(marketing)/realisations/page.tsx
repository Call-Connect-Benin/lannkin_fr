import type { Metadata } from "next";

import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";

export const metadata: Metadata = {
  title: "Portfolio Agence Web Paris | Lannkin",
  description:
    "Portfolio de l'agence web Lannkin à Paris. Sites vitrine, multipages, onepage et e-commerce. +10 ans d'expérience, +50 projets livrés en France.",
};

export default function RealisationsPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Nos Réalisations"
        description="Découvrez les projets web que nous avons créés pour des entreprises françaises : sites vitrine, multipages, onepage et boutiques e-commerce."
      />

      <PortfolioGrid showFilters={false} showQuickView={false} showTopDivider={false} />
    </main>
  );
}
