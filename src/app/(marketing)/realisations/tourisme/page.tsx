import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Tourisme & Hôtellerie France | Portfolio Ekolink",
  description:
    "Portfolio Ekolink : sites web pour agences de voyages, hébergements touristiques, pourvoiries et activités de plein air en France. Réservation en ligne et SEO tourisme.",
  alternates: {
    canonical: "https://ekolink.fr/realisations/tourisme/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "tourisme").length;

export default function RealisationsTourismePage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Tourisme & Aventure"
        description="Ekolink crée des sites web immersifs pour le secteur touristique : agences de voyages, pourvoiries, hébergements et activités de plein air. Réservation en ligne, galeries et SEO pour attirer des voyageurs du monde entier."
        stats={[
          { value: `${count} projets`, label: "en tourisme" },
          { value: "Réservation", label: "en ligne intégrée" },
          { value: "Multilingue", label: "FR / EN / ES" },
        ]}
      />

      <div className="border-t border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Réalisations — Tourisme & Aventure
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

      <PortfolioGrid initialSectorFilter="tourisme" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Site web pour le secteur touristique — Se démarquer en ligne
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Le tourisme est un secteur où la première impression est décisive. Ekolink conçoit des
              sites web visuellement captivants pour les opérateurs touristiques : agences de
              voyages, pourvoiries, hébergements et activités d&apos;aventure. Intégration de
              calendriers de disponibilité, réservation en ligne, galeries photos immersives et
              stratégie SEO pour attirer des voyageurs locaux et internationaux.
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
                href="/realisations/international/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
              >
                → Projets internationaux
              </Link>
              <Link
                href="/realisations/education/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
              >
                → Éducation & Enfance
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
