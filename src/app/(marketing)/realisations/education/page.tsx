import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Éducation & Garde d'Enfants France | Portfolio Lannkin",
  description:
    "Portfolio Lannkin : sites web pour garderies, CPE, écoles privées et services éducatifs en France. Inscription en ligne, calendriers et SEO local pour le secteur de l'éducation.",
  alternates: {
    canonical: "https://lannkin.com/realisations/education/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "education").length;

export default function RealisationsEducationPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Éducation & Petite enfance"
        description="Lannkin conçoit des sites web rassurants et professionnels pour garderies, CPE, services de garde et établissements éducatifs en France. Inscription en ligne, calendriers et présentation de l'équipe."
        stats={[
          { value: `${count} projets`, label: "en éducation" },
          { value: "Inscription", label: "en ligne intégrée" },
          { value: "SEO local", label: "par arrondissement" },
        ]}
      />

      <div className="border-t border-[#2d2d2d]/[0.08]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "#6B7280" }}>
              Réalisations — Éducation & Petite enfance
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

      <PortfolioGrid initialSectorFilter="education" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Site web pour garderie et services éducatifs en France
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Les parents choisissent une garderie ou un CPE en partie grâce à son site web. Lannkin
              crée des sites web chaleureux et professionnels pour les services de garde et
              établissements éducatifs français : présentation de l&apos;équipe, galeries photos,
              formulaires d&apos;inscription en ligne et calendriers d&apos;activités. Nous
              optimisons également votre présence sur Google pour que les parents de votre quartier
              vous trouvent facilement.
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
                href="/realisations/tourisme/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Tourisme
              </Link>
              <Link
                href="/realisations/construction/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Construction
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

