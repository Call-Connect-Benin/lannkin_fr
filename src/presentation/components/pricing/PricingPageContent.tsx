"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import type { PricingPlan } from "@/domain/entities/pricing";
import { cn } from "@/lib/utils";
import { Container } from "@/presentation/components/ui/Container";
import { Button } from "@/presentation/components/ui/Button";

interface PricingPageContentProps {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  serviceHref: string;
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
}: PricingPageContentProps) {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
            <p className="mt-2 text-sm text-muted">
              Tous les prix sont en dollars canadiens (CAD), avant taxes.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="border-t border-white/5 bg-surface-light pb-20 pt-16 lg:pb-28">
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

                <Link
                  href="/devis-gratuit/"
                  className={cn(
                    "block rounded-lg py-3 text-center text-sm font-semibold transition-all duration-200",
                    plan.highlighted
                      ? "bg-accent text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] hover:brightness-110"
                      : "border border-white/10 text-white hover:border-accent/30 hover:text-accent",
                  )}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
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
    </main>
  );
}
