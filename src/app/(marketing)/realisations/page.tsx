import type { Metadata } from "next";

import { ArrowRight, ArrowUpRight, BadgeCheck, Layers3 } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Portfolio Agence Web Paris | Lannkin",
  description:
    "Portfolio de l'agence web Lannkin a Paris. Sites vitrine, multipages, onepage et e-commerce. +10 ans d'experience, +50 projets livres en France.",
};

const multiPagesCount = PORTFOLIO_PROJECTS.filter((project) => project.category === "multipages").length;
const onePageCount = PORTFOLIO_PROJECTS.filter((project) => project.category === "onepage").length;
const ecommerceCount = PORTFOLIO_PROJECTS.filter((project) => project.category === "ecommerce").length;

const PORTFOLIO_INSIGHTS = [
  {
    title: `Sites multipages (${multiPagesCount})`,
    body:
      "Des architectures plus riches, pensees pour des entreprises qui doivent presenter plusieurs services, rassurer et gagner en profondeur SEO.",
  },
  {
    title: `Sites onepage (${onePageCount})`,
    body:
      "Des pages de conversion plus nerveuses, utiles pour des lancements, des offres locales ou des activations publicitaires a retour rapide.",
  },
  {
    title: `Boutiques e-commerce (${ecommerceCount})`,
    body:
      "Des projets plus denses, centres sur le catalogue, la conversion, la logistique et la croissance internationale des marques.",
  },
];

export default function RealisationsPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Nos Realisations"
        description="Decouvrez les projets web que nous avons crees pour des entreprises francaises : sites vitrine, multipages, onepage et boutiques e-commerce."
        stats={[
          { value: "4,9/5", label: "sur Google" },
          { value: `${PORTFOLIO_PROJECTS.length} projets`, label: "realises" },
          { value: "+10 ans", label: "d'experience" },
        ]}
      />

      <PortfolioGrid showFilters={true} />

      <section className="pb-20 pt-2">
        <Container>
          <div
            className="overflow-hidden rounded-[2rem] border p-5 shadow-[0_24px_60px_rgba(45,45,45,0.06)] sm:p-6 lg:p-8"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,245,240,0.96) 100%)",
              borderColor: "rgba(45,45,45,0.08)",
            }}
          >
            <div className="mb-8 grid gap-6 border-b border-[rgba(45,45,45,0.08)] pb-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Lecture portfolio
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                  Une selection pensee pour montrer plus qu&apos;une simple liste
                  de sites.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#2d2d2d]/66 sm:text-base">
                  Notre portfolio melange des projets vitrines, des onepages a
                  fort enjeu de conversion et des e-commerces plus ambitieux.
                  L&apos;objectif n&apos;est pas seulement de montrer de beaux ecrans,
                  mais de faire sentir la diversite des contextes traites.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white/78 p-4 lg:w-72">
                <div className="flex items-start gap-3">
                  <Layers3 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-[#2d2d2d]">
                      Structure de lecture
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#2d2d2d]/64">
                      Le haut de grille met en avant les projets les plus
                      demonstratifs pour casser l&apos;effet catalogue.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {PORTFOLIO_INSIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white/76 p-5"
                >
                  <p className="font-heading text-xl font-bold text-[#2d2d2d]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/66">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 rounded-[1.75rem] border border-[rgba(45,45,45,0.08)] bg-[#ede9e1]/72 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#2d2d2d]">
                      Pourquoi confier votre projet web a Lannkin ?
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#2d2d2d]/68 sm:text-base">
                      Fondee a Paris, Lannkin accompagne les entreprises avec une
                      approche qui relie design, conversion, SEO et acquisition.
                      Chaque projet presente ici a ete pense pour produire un
                      resultat concret: plus de credibilite, plus de trafic,
                      plus de leads ou plus de ventes.
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#2d2d2d]/68 sm:text-base">
                      C&apos;est cette vision plus large qui distingue notre{" "}
                      <Link
                        href="/"
                        className="font-medium text-[#2d2d2d] underline decoration-[rgba(45,45,45,0.25)] underline-offset-4"
                      >
                        agence web a Paris
                      </Link>
                      : les realisations ne sont pas seulement propres visuellement,
                      elles sont integrees dans une logique de croissance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:w-72">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                >
                  Demarrer votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/conception-web/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.16)] bg-white/78 px-5 py-3.5 text-sm font-semibold text-[#2d2d2d] transition-colors duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Voir nos services web
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
