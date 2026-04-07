import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Courtiers Immobiliers Québec | Portfolio Lannkin",
  description:
    "Portfolio Lannkin : sites web pour courtiers immobiliers au Québec. Intégration Centris/MLS, pages propriétés, prise de rendez-vous et SEO local immobilier.",
  alternates: {
    canonical: "https://lannkin.ca/realisations/immobilier/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "immobilier").length;

export default function RealisationsImmobilierPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Courtage Immobilier"
        description="Lannkin conçoit des sites web pour courtiers immobiliers au Québec : intégration Centris/MLS, pages achat/vente, témoignages et SEO local pour dominer votre marché."
        stats={[
          { value: `${count} projets`, label: "en immobilier" },
          { value: "Centris/MLS", label: "intégration native" },
          { value: "SEO local", label: "par secteur et ville" },
        ]}
      />

      <div className="border-t border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Réalisations — Immobilier
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

      <PortfolioGrid initialSectorFilter="immobilier" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Site web immobilier — Se démarquer en ligne au Québec
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Dans le marché immobilier québécois, votre présence digitale est votre première
              impression. Lannkin crée des sites web professionnels pour courtiers immobiliers
              avec intégration Centris, pages dédiées par secteur géographique et stratégie SEO
              locale pour attirer acheteurs et vendeurs directement depuis Google.
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
                href="/secteurs/immobilier/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
              >
                → Secteur Immobilier
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
