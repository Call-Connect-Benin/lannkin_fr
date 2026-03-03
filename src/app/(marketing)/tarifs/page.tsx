import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  PRICING_CATEGORIES,
  getHighlightedPlan,
  getPricingByCategory,
} from "@/data/pricing";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { Container } from "@/presentation/components/ui/Container";
import { Button } from "@/presentation/components/ui/Button";

export const metadata: Metadata = {
  title: "Tarifs Transparents | Lannkin",
  description:
    "Tous nos tarifs web, SEO, Google Ads, Meta Ads, graphisme et Odoo. Prix clairs dès 50$/mois. Comparez nos forfaits et choisissez le vôtre.",
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function getPriceRange(category: string): string {
  const plans = getPricingByCategory(category);
  if (plans.length === 0) return "";
  const prices = plans.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return `${formatPrice(min)}`;
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export default function TarifsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              {PRICING_CATEGORIES.length} catégories
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tarifs <span className="text-accent">transparents</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Des prix clairs pour chaque service. Pas de frais cachés,
              pas de surprises. Choisissez le forfait adapté à vos objectifs.
            </p>
            <p className="mt-2 text-sm text-muted">
              Tous les prix sont en dollars canadiens (CAD), avant taxes.
            </p>
          </div>
        </Container>
      </section>

      {/* Categories Grid */}
      <section className="border-t border-white/5 bg-surface-light pb-20 pt-16 lg:pb-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING_CATEGORIES.map((cat) => {
              const highlighted = getHighlightedPlan(cat.slug);
              const priceRange = getPriceRange(cat.slug);
              const planCount = getPricingByCategory(cat.slug).length;

              return (
                <Link
                  key={cat.slug}
                  href={`/tarifs/${cat.slug}/`}
                  className="group glass relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.06)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <LucideIcon name={cat.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-white">
                    {cat.name}
                  </h2>
                  {priceRange && (
                    <p className="mt-2 font-heading text-lg font-semibold text-accent">
                      {priceRange}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-muted">
                    {planCount} forfait{planCount > 1 ? "s" : ""} disponible
                    {planCount > 1 ? "s" : ""}
                  </p>
                  {highlighted && (
                    <p className="mt-3 text-sm text-white/70">
                      Populaire : <span className="font-medium text-white">{highlighted.name}</span> à{" "}
                      {formatPrice(highlighted.price)}
                      {highlighted.priceUnit === "month" ? "/mois" : ""}
                    </p>
                  )}
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                    Voir les forfaits
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Besoin d&apos;un forfait sur mesure ?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Combinez plusieurs services ou adaptez un forfait existant.
              Contactez-nous pour un devis personnalisé gratuit.
            </p>
            <div className="mt-8">
              <Button href="/devis-gratuit/" size="lg">
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
