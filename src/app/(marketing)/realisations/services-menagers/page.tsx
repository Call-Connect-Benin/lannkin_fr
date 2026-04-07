import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Services Ménagers Québec | Portfolio Lannkin",
  description:
    "Portfolio Lannkin : sites web et landing pages pour services d'entretien ménager résidentiel et commercial au Québec. Conception web, Google Ads et SEO local.",
  alternates: {
    canonical: "https://lannkin.ca/realisations/services-menagers/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "services-menagers").length;

export default function RealisationsServicesMenagersPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Services ménagers"
        description="Lannkin crée des landing pages et sites web haute conversion pour les services d'entretien ménager résidentiel et commercial au Québec — avec formulaires de réservation et campagnes Google Ads."
        stats={[
          { value: `${count} projets`, label: "en services ménagers" },
          { value: "Google Ads", label: "ROI-positif dès le lancement" },
          { value: "Landing page", label: "optimisée pour la conversion" },
        ]}
      />

      <div className="border-t border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Réalisations — Services ménagers
            </p>
            <Link
              href="/realisations/"
              className="text-xs transition-colors hover:text-[#498f6d]"
              style={{ color: "rgba(255,255,255,0.35)" }}
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
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Landing page entretien ménager — Générer des réservations en ligne
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
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
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
              >
                → Construction
              </Link>
              <Link
                href="/realisations/immobilier/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
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
