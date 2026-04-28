import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Services Ménagers France | Portfolio Lannkin",
  description:
    "Portfolio Lannkin : sites web et landing pages pour services d'entretien ménager résidentiel et commercial en France. Conception web, Google Ads et SEO local.",
  alternates: {
    canonical: "https://lannkin.fr/realisations/services-menagers/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "services-menagers").length;

export default function RealisationsServicesMenagersPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Services ménagers"
        description="Lannkin crée des landing pages et sites web haute conversion pour les services d'entretien ménager résidentiel et commercial en France — avec formulaires de réservation et campagnes Google Ads."
        stats={[
          { value: `${count} projets`, label: "en services ménagers" },
          { value: "Google Ads", label: "ROI-positif dès le lancement" },
          { value: "Landing page", label: "optimisée pour la conversion" },
        ]}
      />

      <div className="border-t border-[#2d2d2d]/[0.08]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "#6B7280" }}>
              Réalisations — Services ménagers
            </p>
            <Link
              href="/realisations/"
              className="text-xs transition-colors hover:text-[#498f6d]"
              style={{ color: "#6B7280" }}
            >
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      <PortfolioGrid initialSectorFilter="services-menagers" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Landing page entretien ménager — Générer des réservations en ligne
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Pour les services d&apos;entretien ménager, la clé est la conversion rapide : un
              visiteur doit pouvoir demander une soumission en moins de 30 secondes. Lannkin
              conçoit des landing pages et sites web optimisés pour ce marché, combinés à des
              campagnes Google Ads géolocalisées pour générer des réservations dès le premier jour.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#fff" }}
              >
                Démarrer votre projet
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/realisations/construction/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Construction
              </Link>
              <Link
                href="/realisations/immobilier/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Immobilier
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
