import type { Metadata } from "next";

import Link from "next/link";

import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Sites Web Salon Coiffure & Beauté France | Portfolio Lannkin",
  description:
    "Portfolio Lannkin : sites web pour salons de coiffure, instituts de beauté, spas et esthétiques en France. Réservation en ligne, SEO local et Google Ads beauté.",
  alternates: {
    canonical: "https://lannkin.com/realisations/beaute/",
  },
};


export default function RealisationsBeautePage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Sites web — Beauté & Bien-être"
        description="Lannkin conçoit des sites web élégants pour salons de coiffure, instituts de beauté, spas et esthétiques en France. Réservation en ligne, galeries photos et SEO local pour attirer de nouveaux clients."
      />

      <div className="border-t border-[#2d2d2d]/[0.08]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "#6B7280" }}>
              Réalisations — Beauté & Bien-être
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

      <PortfolioGrid initialSectorFilter="beaute" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Agence web pour salons de beauté en France
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Dans le secteur de la beauté, votre site web est votre vitrine. Lannkin crée des sites
              web modernes et élégants pour salons de coiffure, instituts d&apos;esthétique, spas et
              cliniques de beauté. Nous intégrons des systèmes de réservation en ligne, des galeries
              photos professionnelles et une stratégie SEO locale pour que vos clients vous trouvent
              sur Google quand ils cherchent un salon près de chez eux.
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
                href="/realisations/services-menagers/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Services ménagers
              </Link>
              <Link
                href="/secteurs/beaute-bien-etre/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Secteur Beauté
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

