import type { Metadata } from "next";

import Link from "next/link";

import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Construction & Rénovation France | Portfolio Lannkin",
  description:
    "Portfolio Lannkin : sites web pour entrepreneurs en construction, rénovation, plomberie, maçonnerie et métiers du bâtiment en France. SEO local et Google Ads.",
  alternates: {
    canonical: "https://lannkin.com/realisations/construction/",
  },
};


export default function RealisationsConstructionPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Construction & Rénovation"
        description="De l'entrepreneur général au maître électricien, Lannkin conçoit des sites web qui génèrent des demandes de soumission et dominent le SEO local pour les métiers du bâtiment en France."
      />

      <div className="border-t border-[#2d2d2d]/[0.08]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "#6B7280" }}>
              Réalisations — Construction & Rénovation
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

      <PortfolioGrid initialSectorFilter="construction" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Agence web pour entrepreneurs en construction en France
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              La construction est l&apos;un des secteurs les plus compétitifs en ligne : chaque
              entrepreneur cherche à apparaître en premier sur Google lorsqu&apos;un propriétaire
              tape « entrepreneur rénovation [ville] ». Lannkin conçoit des sites web pensés pour
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
              </Link>
              <Link
                href="/realisations/immobilier/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Immobilier
              </Link>
              <Link
                href="/realisations/services-menagers/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
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

