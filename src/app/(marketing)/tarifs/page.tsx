import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Layers3,
  Sparkles,
} from "lucide-react";

import { ALL_PRICING, PRICING_CATEGORIES } from "@/data/pricing";
import { Container } from "@/presentation/components/ui/Container";
import { TarifsFilterable } from "@/presentation/components/tarifs/TarifsFilterable";

export const metadata: Metadata = {
  title: "Tarifs Agence Web France | Lannkin",
  description:
    "Tarifs transparents : site web, SEO, Google Ads, Meta Ads et graphisme des 50 EUR/mois. Comparez nos forfaits marketing digital. Prix clairs, sans surprise.",
};

const monthlyPlans = ALL_PRICING.filter((plan) => plan.priceUnit === "month");
const minMonthlyPrice = Math.min(...monthlyPlans.map((plan) => plan.price));
const highlightedPlans = ALL_PRICING.filter((plan) => plan.highlighted).length;

const HERO_STATS = [
  { value: `${PRICING_CATEGORIES.length}`, label: "categories actives" },
  { value: `${ALL_PRICING.length}+`, label: "forfaits compares" },
  { value: `${minMonthlyPrice} EUR`, label: "entree de gamme mensuelle" },
  { value: `${highlightedPlans}`, label: "offres recommandees" },
];

const GUIDES = [
  {
    title: "Filtrez par besoin",
    body:
      "Isolez une categorie ou composez un combo de services pour comparer uniquement ce qui compte pour votre projet.",
  },
  {
    title: "Reperez vite le bon niveau",
    body:
      "Chaque carte resume la fourchette, le volume d'offres et le forfait le plus recommande dans la categorie.",
  },
  {
    title: "Passez ensuite au detail",
    body:
      "Cliquez sur une categorie pour ouvrir sa page dediee et voir les prestations, options et appels a l'action associes.",
  },
];

const CTA_POINTS = [
  "Audit du besoin et cadrage du budget",
  "Assemblage possible de plusieurs services",
  "Devis personnalise sous 24h",
];

export default function TarifsPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <section className="relative overflow-hidden pb-14 pt-10 lg:pb-20 lg:pt-16">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[rgba(133,53,62,0.07)] blur-[120px]" />
          <div className="absolute right-[8%] top-10 h-[32rem] w-[32rem] rounded-full bg-[rgba(73,143,109,0.10)] blur-[150px]" />
          <div className="absolute inset-y-0 right-0 w-[58%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.18 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, #f7f5f0 14%, rgba(247,245,240,0.70) 38%, transparent 64%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #f7f5f0 0%, transparent 18%, transparent 82%, #f7f5f0 100%)",
              }}
            />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_28rem]">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                style={{
                  borderColor: "rgba(73,143,109,0.26)",
                  backgroundColor: "rgba(73,143,109,0.08)",
                }}
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono text-xs font-medium text-[#2d2d2d]">
                  Grille tarifaire claire, modulaire et sans frais caches
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl font-heading text-5xl font-bold tracking-tight text-[#2d2d2d] lg:text-[4.4rem] lg:leading-[0.96]">
                Un comparateur de tarifs pense comme une
                <span className="text-accent"> page de decision</span>.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                Explorez rapidement les categories, comparez les fourchettes,
                identifiez l&apos;offre la plus pertinente et basculez vers un
                devis sur mesure si votre besoin sort du cadre.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#grille-tarifs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Parcourir les tarifs
                </a>
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
                >
                  Demander un devis adapte
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border p-4"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.52)",
                      borderColor: "rgba(45,45,45,0.08)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                    }}
                  >
                    <p className="font-heading text-2xl font-bold text-[#2d2d2d]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-[2rem] border p-5 shadow-[0_24px_70px_rgba(45,45,45,0.10)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.94) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                }}
              >
                <div className="rounded-[1.5rem] bg-[#ede9e1] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                        Lecture rapide
                      </p>
                      <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                        Ce que vous trouvez ici
                      </h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-accent">
                      <Layers3 className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {GUIDES.map((item, index) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border bg-white/78 p-4"
                        style={{ borderColor: "rgba(45,45,45,0.06)" }}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-xs font-semibold text-accent">
                            0{index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#2d2d2d]">
                              {item.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-[#2d2d2d]/66">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-accent/14 bg-accent/8 p-4">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm leading-relaxed text-[#2d2d2d]/72">
                        Les prix affiches servent de repere clair. Si votre
                        projet combine plusieurs leviers, nous construisons un
                        assemblage sur mesure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-6">
        <Container>
          <div className="grid gap-4 border-y border-[rgba(45,45,45,0.08)] py-6 lg:grid-cols-3">
            {GUIDES.map((item, index) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ede9e1] font-mono text-xs font-semibold text-accent">
                  0{index + 1}
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-[#2d2d2d]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#2d2d2d]/64">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="grille-tarifs" className="relative pb-16 pt-4 lg:pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute left-1/2 top-0 h-40 w-[70rem] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(73,143,109,0.08),transparent_70%)]" />
        </div>

        <Container className="relative z-10">
          <div
            className="overflow-hidden rounded-[2rem] border p-4 shadow-[0_24px_60px_rgba(45,45,45,0.06)] sm:p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,245,240,0.96) 100%)",
              borderColor: "rgba(45,45,45,0.08)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          >
            <div className="mb-6 flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  Navigation tarifaire
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d]">
                  Comparez les categories sans sortir du flux
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/66 sm:text-base">
                  Le panneau ci-dessous sert de hub visuel: filtrez, scannez
                  les fourchettes et entrez ensuite dans la categorie qui vous
                  interesse vraiment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/70 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/45">
                    Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                    Categories + recommandations
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/70 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/45">
                    Usage
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                    Selection mono ou multi-services
                  </p>
                </div>
              </div>
            </div>

            <TarifsFilterable />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-0 top-0 h-full w-[42%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp"
              alt=""
              className="h-full w-full object-cover object-left"
              style={{ opacity: 0.15 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to left, rgba(247,245,240,0.15), #f7f5f0 62%)",
              }}
            />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid gap-6 rounded-[2rem] border p-6 shadow-[0_20px_50px_rgba(45,45,45,0.07)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Besoin d&apos;un assemblage sur mesure
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Quand le forfait standard ne suffit pas, on compose votre
                combinaison ideale.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#2d2d2d]/68">
                Cumul de leviers, besoins de production, accompagnement plus
                dense, cadrage business: nous pouvons sortir de la grille et
                construire une proposition qui colle vraiment au contexte.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {CTA_POINTS.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border bg-white/75 px-4 py-4 text-sm font-medium text-[#2d2d2d]"
                    style={{ borderColor: "rgba(45,45,45,0.08)" }}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:w-72">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
              >
                Parler a l&apos;equipe
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
