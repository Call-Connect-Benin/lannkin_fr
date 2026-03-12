import type { Metadata } from "next";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Création Boutique E-commerce Laval & Québec | Portfolio Lannkin",
  description:
    "Agence e-commerce à Laval : création de boutiques en ligne Shopify, WooCommerce et sur mesure. Portfolio de réalisations e-commerce au Québec et au Canada. Devis gratuit.",
  alternates: {
    canonical: "https://lannkin.ca/realisations/ecommerce/",
  },
  openGraph: {
    title: "Création Boutique E-commerce Laval & Québec | Portfolio Lannkin",
    description:
      "Découvrez nos réalisations e-commerce à Laval et au Québec : Shopify, WooCommerce, boutiques B2B. +420 % de revenus pour nos clients e-commerce.",
    url: "https://lannkin.ca/realisations/ecommerce/",
  },
};

const ecommerceCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "ecommerce").length;

const WHY_US = [
  "Shopify Partner certifié — thèmes sur mesure en Liquid",
  "Intégration Google Shopping & Meta Catalogue",
  "SEO e-commerce pour le marché québécois et canadien",
  "Optimisation du taux de conversion (A/B testing)",
  "Automatisation marketing : Klaviyo, Mailchimp, Omnisend",
  "Support et maintenance post-lancement inclus",
];

export default function RealisationsEcommercePage() {
  return (
    <main>
      {/* Hero compact 2-col */}
      <section className="parallax-section relative overflow-hidden py-12 lg:py-16">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.png" overlay={0.65} />
        <div className="relative z-10">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
              {/* Left */}
              <div className="flex-1 rounded-2xl border border-white/[0.08] bg-black/80 p-6">
                <nav className="mb-3 flex items-center gap-2 text-sm" style={{ color: "#AAAAAA" }}>
                  <Link href="/realisations/" className="hover:text-accent transition-colors">Réalisations</Link>
                  <span>/</span>
                  <span style={{ color: "#FFFFFF" }}>E-commerce</span>
                </nav>
                <h1
                  className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                  style={{ color: "#FFFFFF" }}
                >
                  Création de boutiques<br className="hidden sm:block" /> e-commerce à Laval
                </h1>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "#DDDDDD" }}>
                  Shopify, WooCommerce ou sur mesure — notre agence e-commerce de Laval crée
                  des boutiques en ligne performantes pour les entreprises québécoises et canadiennes
                  qui veulent vendre plus.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projets"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                  >
                    Voir nos projets
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/devis-gratuit/"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:border-accent/40"
                    style={{ color: "#FFFFFF" }}
                  >
                    Devis gratuit
                  </Link>
                </div>
              </div>

              {/* Right — Stats */}
              <div className="shrink-0 lg:w-64">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                      <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>+420 %</p>
                      <p className="text-xs mt-0.5" style={{ color: "#CCCCCC" }}>de revenus e-commerce (client réel)</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                      <p className="text-2xl font-bold" style={{ color: "#FFFFFF" }}>{ecommerceCount} projets</p>
                      <p className="text-xs mt-0.5" style={{ color: "#CCCCCC" }}>e-commerce livrés</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                      <p className="text-sm font-bold" style={{ color: "#FFFFFF" }}>🟢 Shopify Partner</p>
                      <p className="text-xs mt-0.5" style={{ color: "#CCCCCC" }}>Certifié depuis 2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Separator */}
      <div id="projets" className="border-t border-accent/20 bg-surface">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-muted">Nos réalisations e-commerce</p>
            <Link href="/realisations/" className="text-xs text-muted hover:text-accent transition-colors">
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      {/* Portfolio Grid — pre-filtered on ecommerce */}
      <PortfolioGrid initialFilter="ecommerce" />

      {/* SEO Content Section */}
      <section className="bg-surface-light py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Agence e-commerce à Laval — Créer votre boutique en ligne au Québec
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="text-sm leading-relaxed text-muted space-y-4">
                <p>
                  Lannkin est une <strong className="text-white">agence e-commerce basée à Laval, Québec</strong>.
                  Depuis plus de 10 ans, nous concevons des boutiques en ligne pour les entreprises québécoises
                  et canadiennes qui souhaitent vendre leurs produits sur internet — au Québec, au Canada
                  ou à l&apos;international.
                </p>
                <p>
                  Que vous cherchiez à <strong className="text-white">créer une boutique en ligne à Laval</strong>,
                  à migrer votre site existant vers Shopify, ou à optimiser votre e-commerce pour augmenter
                  vos conversions, notre équipe maîtrise l&apos;ensemble des outils et plateformes :
                  Shopify, Shopify Plus, WooCommerce, Next.js Commerce.
                </p>
                <p>
                  Nos boutiques en ligne sont conçues pour <strong className="text-white">performer sur Google</strong> :
                  structure SEO e-commerce, pages produits optimisées, données structurées Product schema,
                  intégration Google Shopping et stratégies Google Ads avec suivi précis des conversions.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-white">Ce qui est inclus dans nos projets e-commerce :</h3>
                <ul className="space-y-2">
                  {WHY_US.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Local SEO block */}
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-surface p-8">
              <h2 className="font-heading text-xl font-bold text-white">
                Création e-commerce Laval, Montréal, Rive-Nord — Notre zone de service
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Basée à <strong className="text-white">Laval (Québec)</strong>, notre agence accompagne
                les entreprises de la grande région de Montréal dans leur transformation digitale :
                Laval, Montréal, Rive-Nord (Terrebonne, Blainville, Boisbriand, Sainte-Thérèse),
                Rive-Sud (Brossard, Longueuil, Saint-Hubert) et partout au Canada.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Nos boutiques e-commerce sont livrées avec une <strong className="text-white">stratégie
                d&apos;acquisition complète</strong> : SEO local, Google Shopping, campagnes Facebook/Instagram Ads
                et automatisation par courriel. L&apos;objectif est simple : générer des ventes dès le
                lancement, pas seulement un beau site.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Lancer votre boutique en ligne
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs/conception-web/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>

            {/* Related categories */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link
                href="/realisations/multipages/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Sites multipages
              </Link>
              <Link
                href="/realisations/onepage/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Sites onepage
              </Link>
              <Link
                href="/realisations/international/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Projets internationaux
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
