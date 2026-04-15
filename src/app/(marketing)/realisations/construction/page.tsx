import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Construction & Rénovation France | Portfolio Ekolink",
  description:
    "Portfolio Ekolink : sites web pour entrepreneurs en construction, rénovation, plomberie, maçonnerie et métiers du bâtiment en France. SEO local et Google Ads.",
  alternates: {
    canonical: "https://ekolink.fr/realisations/construction/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "construction").length;

export default function RealisationsConstructionPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Construction & Rénovation"
        description="De l'entrepreneur général au maître électricien, Ekolink conçoit des sites web qui génèrent des demandes de soumission et dominent le SEO local pour les métiers du bâtiment en France."
        stats={[
          { value: `${count} projets`, label: "dans le bâtiment" },
          { value: "+187 %", label: "de leads (client rénovation)" },
          { value: "Google Partner", label: "SEO certifié" },
        ]}
      />

      <div className="border-t border-white/[0.06]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
              Réalisations — Construction & Rénovation
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

      <PortfolioGrid initialSectorFilter="construction" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Agence web pour entrepreneurs en construction en France
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              La construction est l&apos;un des secteurs les plus compétitifs en ligne : chaque
              entrepreneur cherche à apparaître en premier sur Google lorsqu&apos;un propriétaire
              tape « entrepreneur rénovation [ville] ». Ekolink conçoit des sites web pensés pour
              ce marché — avec des pages services détaillées, des galeries de réalisations
              convaincantes et des formulaires de soumission optimisés pour convertir.
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
                href="/realisations/immobilier/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
              >
                → Immobilier
              </Link>
              <Link
                href="/realisations/services-menagers/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
              >
                → Services ménagers
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
