import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Réalisations & Portfolio Web | Lannkin — Agence Web Laval",
  description:
    "Découvrez nos réalisations web : sites vitrine, multipages, onepage et boutiques e-commerce. Portfolio de l'agence web Lannkin à Laval, Québec. +10 ans d'expérience.",
};

export default function RealisationsPage() {
  const multiPagesCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "multipages").length;
  const onePageCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "onepage").length;
  const ecommerceCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "ecommerce").length;

  return (
    <main>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-20 lg:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp" overlay={0.55} />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Nos Réalisations
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-[#DDDDDD]">
                De Laval à Montréal, découvrez les projets web que nous avons créés pour des
                entreprises québécoises : sites vitrine, multipages, onepage et boutiques
                e-commerce.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                <span className="flex items-center gap-1.5 text-sm text-[#CCCCCC]">
                  <span className="text-accent">★</span> 4,9/5 sur Google
                </span>
                <span className="flex items-center gap-1.5 text-sm text-[#CCCCCC]">
                  <span className="text-accent">✓</span> {PORTFOLIO_PROJECTS.length} projets
                  réalisés
                </span>
                <span className="flex items-center gap-1.5 text-sm text-[#CCCCCC]">
                  <span className="text-accent">◆</span> +10 ans d&apos;expérience
                </span>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Portfolio Grid with filters */}
      <PortfolioGrid />

      {/* SEO Text Section */}
      <section className="bg-surface-light py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Agence web à Laval : notre portfolio de réalisations
            </h2>
            <div className="mt-6 grid gap-8 text-muted sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="mb-2 font-semibold text-white">
                  Sites multipages ({multiPagesCount} projets)
                </h3>
                <p className="text-sm leading-relaxed">
                  Nos sites multipages sont conçus pour les entreprises qui ont besoin d&apos;une
                  présence web complète : pages services, équipe, blogue et formulaires de contact.
                  Idéal pour les PME de Laval et de la Rive-Nord cherchant à dominer leur marché
                  local sur Google.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">
                  Sites onepage ({onePageCount} projets)
                </h3>
                <p className="text-sm leading-relaxed">
                  Les landing pages et sites onepage sont parfaits pour les lancements de produit,
                  les événements et les entreprises locales qui veulent convertir rapidement. Notre
                  agence web conçoit des pages à fort taux de conversion pour le marché québécois.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">
                  Boutiques e-commerce ({ecommerceCount} projets)
                </h3>
                <p className="text-sm leading-relaxed">
                  De Shopify à WooCommerce, nous créons des boutiques en ligne performantes pour
                  les marques québécoises qui veulent vendre au Canada et à l&apos;international.
                  Intégration logistique, SEO e-commerce et campagnes Shopping incluses.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-surface p-8">
              <h2 className="font-heading text-xl font-bold text-white">
                Pourquoi confier votre projet web à Lannkin ?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Fondée à Laval, Lannkin est une agence de conception web et marketing digital avec
                plus de 10 ans d&apos;expérience. Notre portfolio reflète notre approche : chaque
                site web est conçu pour générer des résultats mesurables — plus de visiteurs, plus
                de leads, plus de ventes. Qu&apos;il s&apos;agisse d&apos;un site vitrine pour un
                commerce local de Laval, d&apos;un site multipage pour une PME de Montréal ou
                d&apos;une boutique e-commerce nationale, nous livrons des projets qui performent
                sur Google et convertissent vos visiteurs en clients.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Certifiés Google Partner, nous maîtrisons l&apos;ensemble de l&apos;écosystème
                digital : conception web, SEO, Google Ads, Facebook Ads, et création de contenu.
                Cette approche 360° est ce qui distingue notre portfolio : les sites que nous créons
                ne sont pas seulement beaux, ils attirent du trafic qualifié et transforment les
                visiteurs en clients.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Démarrer votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/conception-web/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Nos services web
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
