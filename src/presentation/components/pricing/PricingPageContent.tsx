"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import type { PricingPlan } from "@/domain/entities/pricing";
import { cn } from "@/lib/utils";
import { Container } from "@/presentation/components/ui/Container";
import { Button } from "@/presentation/components/ui/Button";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

interface PricingPageContentProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  serviceHref: string;
  parallaxImage?: string;
  youtubeIds?: string[];
  youtubeTitle?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function PricingPageContent({
  title,
  subtitle,
  plans,
  serviceHref,
  parallaxImage = "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp",
  youtubeIds,
  youtubeTitle = "Ressources video",
}: PricingPageContentProps) {
  const FALLBACK_LINK = "/devis-gratuit/";
  const monthlyPlans = plans.filter((plan) => plan.priceUnit === "month");
  const minPrice = Math.min(...plans.map((plan) => plan.price));
  const maxPrice = Math.max(...plans.map((plan) => plan.price));
  const highlightedPlan = plans.find((plan) => plan.highlighted);

  const heroStats = [
    { value: `${plans.length}`, label: "forfaits proposes" },
    { value: formatPrice(minPrice), label: "ticket d'entree" },
    {
      value: monthlyPlans.length > 0 ? `${monthlyPlans.length}` : "0",
      label: "plans mensuels",
    },
    {
      value: highlightedPlan ? highlightedPlan.name : formatPrice(maxPrice),
      label: highlightedPlan ? "offre recommandee" : "niveau premium",
    },
  ];

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <section className="parallax-section relative overflow-hidden pb-16 pt-10 lg:pb-20 lg:pt-16">
        <ParallaxBg src={parallaxImage} overlay={0.82} />

        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -left-12 top-10 h-64 w-64 rounded-full bg-[rgba(133,53,62,0.06)] blur-[120px]" />
          <div className="absolute right-[8%] top-0 h-[28rem] w-[28rem] rounded-full bg-[rgba(73,143,109,0.10)] blur-[150px]" />
        </div>

        <div className="relative z-10">
          <Container>
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_24rem]">
              <div className="max-w-3xl">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
                  style={{
                    borderColor: "rgba(73,143,109,0.24)",
                    backgroundColor: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span className="font-mono text-xs font-medium text-[#2d2d2d]">
                    Tarification detaillee, lisible et orientee decision
                  </span>
                </div>

                <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-[4rem] lg:leading-[0.98]">
                  {title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72">
                  {subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#forfaits"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                  >
                    Voir les forfaits
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Button href={serviceHref} variant="secondary" size="md">
                    Voir le service
                  </Button>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border p-4"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.58)",
                        borderColor: "rgba(45,45,45,0.08)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                      }}
                    >
                      <p className="font-heading text-2xl font-bold text-[#2d2d2d]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/48">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-[1.75rem] border p-5 shadow-[0_24px_60px_rgba(45,45,45,0.08)]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.94) 100%)",
                  borderColor: "rgba(45,45,45,0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }}
              >
                <div className="space-y-3">
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      Repere
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/72">
                      Cette page vous aide a comparer rapidement les niveaux
                      d'accompagnement avant de passer a un devis sur mesure.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-white/80 p-4">
                    <div className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <div>
                        <p className="text-sm font-semibold text-[#2d2d2d]">
                          Offre a surveiller
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#2d2d2d]/66">
                          {highlightedPlan
                            ? `${highlightedPlan.name} est actuellement la formule mise en avant sur cette categorie.`
                            : "Chaque formule est presentee sans mise en avant particuliere."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[rgba(45,45,45,0.06)] bg-[#ede9e1]/88 p-4">
                    <p className="text-sm font-semibold text-[#2d2d2d]">
                      Prix affiches
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#2d2d2d]/66">
                      Prix en euros, TVA non incluse. Paiement securise via
                      Stripe quand un lien de reglement est disponible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section id="forfaits" className="pb-16 pt-2 lg:pb-24">
        <Container>
          <div
            className="overflow-hidden rounded-[2rem] border p-4 shadow-[0_24px_60px_rgba(45,45,45,0.06)] sm:p-6"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.70) 0%, rgba(247,245,240,0.96) 100%)",
              borderColor: "rgba(45,45,45,0.08)",
            }}
          >
            <div className="mb-6 flex flex-col gap-4 border-b border-[rgba(45,45,45,0.08)] pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
                  Grille tarifaire
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d]">
                  Choisissez le niveau d&apos;accompagnement adapte
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/66 sm:text-base">
                  Chaque carte met en avant le positionnement du plan, les
                  prestations incluses et l&apos;appel a l&apos;action associe.
                </p>
              </div>
              <div className="rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/72 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/45">
                  Comparaison
                </p>
                <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">
                  {plans.length} options sur cette page
                </p>
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "grid gap-6",
                plans.length === 3 && "lg:grid-cols-3",
                plans.length === 4 && "sm:grid-cols-2 lg:grid-cols-4",
                plans.length === 5 && "sm:grid-cols-2 lg:grid-cols-3",
                plans.length <= 2 && "mx-auto max-w-3xl lg:grid-cols-2",
                plans.length > 5 && "sm:grid-cols-2 lg:grid-cols-3",
              )}
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  variants={cardVariants}
                  className={cn(
                    "relative flex flex-col overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 lg:p-7",
                    plan.highlighted
                      ? "border-accent/25 shadow-[0_18px_50px_rgba(73,143,109,0.10)]"
                      : "border-[rgba(45,45,45,0.08)] hover:-translate-y-1 hover:border-accent/22 hover:shadow-[0_18px_45px_rgba(45,45,45,0.08)]",
                  )}
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.86) 0%, rgba(247,245,240,0.98) 100%)",
                  }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
                    aria-hidden
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(73,143,109,0.10), transparent 34%), radial-gradient(circle at bottom left, rgba(133,53,62,0.05), transparent 28%)",
                      opacity: plan.highlighted ? 1 : 0,
                    }}
                  />

                  {plan.highlighted && (
                    <div className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-on-accent">
                      {plan.badge ?? "Populaire"}
                    </div>
                  )}

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2d2d2d]/44">
                          Plan 0{index + 1}
                        </p>
                        <h3 className="mt-2 font-heading text-[1.9rem] font-bold leading-[1.05] text-[#2d2d2d]">
                          {plan.name}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 rounded-2xl border border-[rgba(45,45,45,0.07)] bg-white/84 p-4">
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#2d2d2d]/56">
                        Budget
                      </p>
                      <div className="mt-2 flex items-end gap-2">
                        <span className="font-heading text-[2.2rem] font-bold leading-none text-accent">
                          {formatPrice(plan.price)}
                        </span>
                        {plan.priceUnit === "month" && (
                          <span className="pb-1 text-sm text-[#2d2d2d]/60">
                            /mois
                          </span>
                        )}
                        {plan.priceUnit === "one-shot" && (
                          <span className="pb-1 text-sm text-[#2d2d2d]/60">
                            paiement unique
                          </span>
                        )}
                      </div>
                      {plan.setupFee && (
                        <p className="mt-2 text-sm text-[#2d2d2d]/62">
                          + {formatPrice(plan.setupFee)} de mise en place
                        </p>
                      )}
                    </div>

                    <ul className="mt-5 flex-1 space-y-3 rounded-2xl border border-[rgba(45,45,45,0.07)] bg-[#ede9e1]/78 p-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm leading-relaxed text-[#2d2d2d]/80">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6">
                      <a
                        href={plan.paymentLink ?? FALLBACK_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-200",
                          plan.highlighted
                            ? "bg-accent text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] hover:brightness-110"
                            : "border border-[rgba(45,45,45,0.12)] bg-white/75 text-[#2d2d2d] hover:border-accent/30 hover:text-accent",
                        )}
                      >
                        {plan.cta}
                        <ArrowRight className="h-4 w-4 shrink-0" />
                      </a>
                      <p className="mt-2 flex items-center justify-center gap-1 text-xs text-[#2d2d2d]/52">
                        <ShieldCheck className="h-3 w-3" />
                        Paiement securise via Stripe
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden pb-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-0 top-0 h-full w-[42%]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(73,143,109,0.10),transparent_68%)]" />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="grid gap-6 rounded-[2rem] border p-6 shadow-[0_20px_50px_rgba(45,45,45,0.07)] lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Besoin d&apos;une variation sur mesure
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                On peut ajuster le cadre, combiner les options ou construire une
                proposition specifique.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#2d2d2d]/68">
                Si votre contexte sort du standard, nous pouvons croiser
                plusieurs briques, ajuster les livrables et recalibrer le
                niveau d&apos;accompagnement.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:w-72">
              <Button href="/devis-gratuit/" size="lg">
                Devis gratuit
              </Button>
              <a
                href={serviceHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[rgba(45,45,45,0.14)] bg-white/70 px-6 py-3.5 text-sm font-medium text-[#2d2d2d] transition-colors hover:border-accent/30 hover:text-accent"
              >
                Explorer le service
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>

      {youtubeIds && youtubeIds.length > 0 && (
        <section className="pb-20">
          <Container>
            <div
              className="rounded-[2rem] border p-6 shadow-[0_20px_45px_rgba(45,45,45,0.05)] lg:p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,245,240,0.96) 100%)",
                borderColor: "rgba(45,45,45,0.08)",
              }}
            >
              <div className="mx-auto mb-8 max-w-3xl text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Ressources
                </p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
                  {youtubeTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/64 sm:text-base">
                  Quelques contenus utiles pour prolonger la reflexion avant de
                  passer a l&apos;action.
                </p>
              </div>

              <div
                className={cn(
                  "grid gap-6",
                  youtubeIds.length === 1 && "mx-auto max-w-2xl",
                  youtubeIds.length === 2 && "sm:grid-cols-2",
                  youtubeIds.length >= 3 && "sm:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {youtubeIds.map((id) => (
                  <div
                    key={id}
                    className="overflow-hidden rounded-[1.5rem] border border-[rgba(45,45,45,0.08)] bg-white/80 shadow-[0_14px_35px_rgba(45,45,45,0.04)]"
                  >
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title="Video YouTube"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 h-full w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
