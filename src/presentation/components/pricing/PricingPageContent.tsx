"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

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
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function PricingPageContent({
  title,
  subtitle,
  plans,
  serviceHref,
  parallaxImage = "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.png",
  youtubeIds,
  youtubeTitle = "Ressources vidéo",
}: PricingPageContentProps) {
  return (
    <main>
      {/* Hero — parallax 3D, compact 2-col */}
      <section className="parallax-section relative overflow-hidden py-12 lg:py-16">
        <ParallaxBg src={parallaxImage} overlay={0.65} />
        <div className="relative z-10">
          <Container>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">

              {/* Left — Title + subtitle */}
              <div className="flex-1">
                <h1 style={{ color: "#FFFFFF" }} className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "#DDDDDD" }}>
                  {subtitle}
                </p>
                <a
                  href="#forfaits"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Voir les forfaits
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Right — Reassurance card */}
              <div className="shrink-0 lg:w-72">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                      <span className="text-xl">⭐</span>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#FFFFFF" }}>4,9 / 5 sur Google</p>
                        <p className="text-xs" style={{ color: "#CCCCCC" }}>54+ avis vérifiés</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                      <span className="text-xl">🔵</span>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#FFFFFF" }}>Google Partner</p>
                        <p className="text-xs" style={{ color: "#CCCCCC" }}>Certifié depuis 2015</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3">
                      <span className="text-xl">◆</span>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#FFFFFF" }}>+10 ans d&apos;expérience</p>
                        <p className="text-xs" style={{ color: "#CCCCCC" }}>100k+$/mois de budgets gérés</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-xs" style={{ color: "#AAAAAA" }}>
                    Prix en CAD, avant taxes
                  </p>
                </div>
              </div>

            </div>
          </Container>
        </div>
      </section>

      {/* Thin separator + anchor */}
      <div id="forfaits" className="border-t border-accent/20 bg-surface">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-muted">Choisissez votre forfait</p>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="inline-block h-1 w-1 rounded-full bg-accent/40" />
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Pricing Cards */}
      <section className="bg-surface pb-16 pt-8 lg:pb-24">
        <Container>
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
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 lg:p-8",
                  plan.highlighted
                    ? "border-accent/30 shadow-[0_0_40px_rgba(73,143,109,0.08)]"
                    : "border-white/[0.06] hover:border-accent/20",
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-on-accent">
                    Populaire
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="font-heading text-xl font-bold text-white">
                    {plan.name}
                  </h2>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-heading text-4xl font-bold text-accent">
                      {formatPrice(plan.price)}
                    </span>
                    {plan.priceUnit === "month" && (
                      <span className="text-sm text-muted">/mois</span>
                    )}
                    {plan.priceUnit === "one-shot" && (
                      <span className="text-sm text-muted">unique</span>
                    )}
                  </div>
                  {plan.setupFee && (
                    <p className="mt-1 text-sm text-muted">
                      + {formatPrice(plan.setupFee)} frais d&apos;installation
                    </p>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="text-sm leading-relaxed text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div>
                  <Link
                    href={plan.paymentLink ?? "/devis-gratuit/"}
                    target={plan.paymentLink ? "_blank" : undefined}
                    rel={plan.paymentLink ? "noopener noreferrer" : undefined}
                    className={cn(
                      "flex items-center justify-center gap-2 rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200",
                      plan.highlighted
                        ? "bg-accent text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] hover:brightness-110"
                        : "border border-white/10 text-white hover:border-accent/30 hover:text-accent",
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                  </Link>
                  {plan.paymentLink && (
                    <p className="mt-2 flex items-center justify-center gap-1 text-xs text-muted/60">
                      <ShieldCheck className="h-3 w-3" />
                      Paiement sécurisé via Stripe
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-surface-light py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Un projet sur mesure ?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Nos forfaits sont adaptables. Contactez-nous pour un devis
              personnalisé qui correspond exactement à vos besoins.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/devis-gratuit/" size="lg">
                Devis gratuit
              </Button>
              <Button href={serviceHref} variant="secondary" size="lg">
                Voir le service
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* YouTube Videos */}
      {youtubeIds && youtubeIds.length > 0 && (
        <section className="bg-surface py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 font-heading text-2xl font-bold text-white sm:text-3xl text-center">
                {youtubeTitle}
              </h2>
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
                    className="overflow-hidden rounded-xl border border-white/[0.06] bg-surface-light"
                  >
                    <div className="relative aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title="Vidéo YouTube"
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
