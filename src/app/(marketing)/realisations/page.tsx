import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Réalisations & Portfolio Web | Lannkin — Agence Web Laval",
  description:
    "Découvrez nos réalisations web : sites vitrine, multipages, onepage et boutiques e-commerce. Portfolio de l'agence web Lannkin à Laval, Québec. +10 ans d'expérience.",
};

const multiPagesCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "multipages").length;
const onePageCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "onepage").length;
const ecommerceCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "ecommerce").length;

export default function RealisationsPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Nos Réalisations"
        description="De Laval à Montréal, découvrez les projets web que nous avons créés pour des entreprises québécoises : sites vitrine, multipages, onepage et boutiques e-commerce."
        stats={[
          { value: "4,9/5", label: "sur Google" },
          { value: `${PORTFOLIO_PROJECTS.length} projets`, label: "réalisés" },
          { value: "+10 ans", label: "d'expérience" },
        ]}
      />

      {/* Portfolio Grid */}
      <PortfolioGrid />

      {/* SEO Text Section */}
      <section className="pb-20 pt-4">
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
        />
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl" style={{ color: "#FFFFFF" }}>
              Agence web à Laval : notre portfolio de réalisations
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: `Sites multipages (${multiPagesCount} projets)`,
                  body: `Nos sites multipages sont conçus pour les entreprises qui ont besoin d'une présence web complète : pages services, équipe, blogue et formulaires de contact. Idéal pour les PME de Laval et de la Rive-Nord cherchant à dominer leur marché local sur Google.`,
                },
                {
                  title: `Sites onepage (${onePageCount} projets)`,
                  body: `Les landing pages et sites onepage sont parfaits pour les lancements de produit, les événements et les entreprises locales qui veulent convertir rapidement. Notre agence web conçoit des pages à fort taux de conversion pour le marché québécois.`,
                },
                {
                  title: `Boutiques e-commerce (${ecommerceCount} projets)`,
                  body: `De Shopify à WooCommerce, nous créons des boutiques en ligne performantes pour les marques québécoises qui veulent vendre au Canada et à l'international. Intégration logistique, SEO e-commerce et campagnes Shopping incluses.`,
                },
              ].map(({ title, body }) => (
                <div key={title}>
                  <h3 className="mb-2 font-heading text-sm font-bold" style={{ color: "#FFFFFF" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl p-8" style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}>
              <h2 className="font-heading text-lg font-bold" style={{ color: "#FFFFFF" }}>
                Pourquoi confier votre projet web à Lannkin ?
              </h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Fondée à Laval, Lannkin est une{" "}
                <Link href="/" style={{ color: "#498f6d" }} className="underline-offset-2 hover:underline">
                  agence web à Laval
                </Link>{" "}
                spécialisée en conception web et marketing digital avec plus de 10 ans
                d&apos;expérience. Notre portfolio reflète notre approche : chaque site web est
                conçu pour générer des résultats mesurables — plus de visiteurs, plus de leads,
                plus de ventes. Qu&apos;il s&apos;agisse d&apos;un site vitrine pour un commerce
                local de Laval, d&apos;un site multipage pour une PME de Montréal ou d&apos;une
                boutique e-commerce nationale, nous livrons des projets qui performent sur Google
                et convertissent vos visiteurs en clients.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                Certifiés Google Partner, nous maîtrisons l&apos;ensemble de l&apos;écosystème
                digital : conception web, SEO, Google Ads, Facebook Ads, et création de contenu.
                Cette approche 360° est ce qui distingue notre{" "}
                <Link href="/" style={{ color: "#498f6d" }} className="underline-offset-2 hover:underline">
                  agence web à Laval
                </Link>{" "}
                : les sites que nous créons ne sont pas seulement beaux, ils attirent du trafic
                qualifié et transforment les visiteurs en clients.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
                >
                  Démarrer votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/conception-web/"
                  className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.60)" }}
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
