"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";

import {
  PRICING_CATEGORIES,
  getHighlightedPlan,
  getPricingByCategory,
} from "@/data/pricing";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function getPriceRange(category: string): string {
  const plans = getPricingByCategory(category);
  if (plans.length === 0) return "";
  const prices = plans.map((plan) => plan.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return `${formatPrice(min)}`;
  return `${formatPrice(min)} - ${formatPrice(max)}`;
}

export function TarifsFilterable() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());
  const hasSelection = selected.size > 0;

  const toggle = (slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const clearAll = () => setSelected(new Set());

  const filteredCategories = useMemo(
    () =>
      hasSelection
        ? PRICING_CATEGORIES.filter((category) => selected.has(category.slug))
        : PRICING_CATEGORIES,
    [hasSelection, selected],
  );

  return (
    <div>
      <div
        className="relative mb-8 overflow-hidden rounded-[1.75rem] border p-4 sm:p-5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(237,233,225,0.95) 100%)",
          borderColor: "rgba(45,45,45,0.08)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at top right, rgba(73,143,109,0.08), transparent 34%), radial-gradient(circle at bottom left, rgba(133,53,62,0.05), transparent 28%)",
          }}
        />

        <div className="relative z-10">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                {hasSelection ? "Votre selection" : "Filtrer par service"}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#2d2d2d]/66">
                Activez un ou plusieurs leviers pour afficher un ensemble de
                categories plus resserre et accelerer la comparaison.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/75 px-3 py-1.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#2d2d2d]/55">
                  {hasSelection
                    ? `${selected.size} filtres actifs`
                    : "Tous les services affiches"}
                </span>
              </div>
              {hasSelection && (
                <button
                  type="button"
                  onClick={clearAll}
                  aria-label="Effacer tous les filtres"
                  className="inline-flex items-center gap-1 rounded-full border border-[rgba(45,45,45,0.12)] bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2d2d2d]/72 transition-all hover:border-accent/25 hover:text-accent"
                >
                  <X className="h-3 w-3" />
                  Effacer
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {PRICING_CATEGORIES.map((category) => {
              const isActive = selected.has(category.slug);

              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => toggle(category.slug)}
                  aria-pressed={isActive}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all duration-150 active:scale-95 sm:px-4"
                  style={{
                    borderColor: isActive
                      ? "rgba(73,143,109,0.44)"
                      : "rgba(45,45,45,0.10)",
                    background: isActive
                      ? "rgba(73,143,109,0.16)"
                      : "rgba(255,255,255,0.65)",
                    color: isActive ? "#2d2d2d" : "rgba(45,45,45,0.75)",
                    boxShadow: isActive
                      ? "0 10px 30px rgba(73,143,109,0.10)"
                      : "none",
                  }}
                >
                  {isActive ? (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-on-accent">
                      <Check className="h-2.5 w-2.5" />
                    </span>
                  ) : (
                    <LucideIcon
                      name={category.icon}
                      className="h-3.5 w-3.5 text-[#2d2d2d]/60"
                    />
                  )}
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredCategories.map((category, index) => {
          const highlighted = getHighlightedPlan(category.slug);
          const priceRange = getPriceRange(category.slug);
          const planCount = getPricingByCategory(category.slug).length;

          return (
            <Link
              key={category.slug}
              href={`/tarifs/${category.slug}/`}
              className="group relative overflow-hidden rounded-[1.75rem] border p-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_45px_rgba(45,45,45,0.10)] sm:p-6"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                borderColor: "rgba(45,45,45,0.08)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-[1.75rem] bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(73,143,109,0.08), transparent 34%), radial-gradient(circle at bottom left, rgba(133,53,62,0.04), transparent 28%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 transition-colors duration-200 group-hover:bg-accent/18">
                    <LucideIcon name={category.icon} className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#2d2d2d]/38">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-5 font-heading text-xl font-bold leading-tight text-[#2d2d2d] transition-colors duration-200 group-hover:text-accent sm:mt-6 sm:text-[1.65rem]">
                  {category.name}
                </h2>

                <div className="mt-3 flex items-baseline gap-2.5">
                  <span className="font-heading text-lg font-bold text-[#2d2d2d] sm:text-[1.3rem]">
                    {priceRange}
                  </span>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                    {planCount} offres
                  </span>
                </div>

                <div className="mt-5 flex-1 rounded-xl bg-[#ede9e1]/80 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#2d2d2d]/48">
                    Recommande
                  </p>
                  {highlighted ? (
                    <p className="mt-2 text-sm leading-snug text-[#2d2d2d]/78">
                      <span className="font-semibold text-[#2d2d2d]">
                        {highlighted.name}
                      </span>
                      {" — "}
                      <span className="font-semibold text-accent">
                        {formatPrice(highlighted.price)}
                        {highlighted.priceUnit === "month" ? "/mois" : ""}
                      </span>
                    </p>
                  ) : (
                    <p className="mt-2 text-sm text-[#2d2d2d]/58">
                      Voir les forfaits disponibles
                    </p>
                  )}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#2d2d2d]/55 transition-colors duration-200 group-hover:text-accent">
                    Explorer les forfaits
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#2d2d2d]/6 text-[#2d2d2d]/55 transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-accent group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
