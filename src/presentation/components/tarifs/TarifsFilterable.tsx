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
              className="group relative overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_18px_45px_rgba(45,45,45,0.10)]"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(247,245,240,0.98) 100%)",
                borderColor: "rgba(45,45,45,0.08)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(73,143,109,0.10), transparent 34%), radial-gradient(circle at bottom left, rgba(133,53,62,0.05), transparent 28%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: "rgba(73,143,109,0.12)",
                      color: "#2d2d2d",
                    }}
                  >
                    <LucideIcon name={category.icon} className="h-6 w-6" />
                  </div>
                  <div className="rounded-full border border-[rgba(45,45,45,0.10)] bg-white/90 px-3 py-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#2d2d2d]/62">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#2d2d2d]/56">
                    Categorie
                  </p>
                  <h2 className="mt-2 font-heading text-[1.75rem] font-bold leading-[1.08] text-[#2d2d2d] transition-colors group-hover:text-accent sm:text-[1.9rem]">
                    {category.name}
                  </h2>
                </div>

                <div className="mt-7 grid grid-cols-[1fr_auto] gap-4 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-white/92 p-4 shadow-[0_10px_24px_rgba(45,45,45,0.04)]">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#2d2d2d]/58">
                      Fourchette
                    </p>
                    <p className="mt-2 font-heading text-[1.9rem] font-bold leading-none text-[#2d2d2d]">
                      {priceRange}
                    </p>
                  </div>
                  <div className="border-l border-[rgba(45,45,45,0.08)] pl-4">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#2d2d2d]/58">
                      Offres
                    </p>
                    <p className="mt-2 text-2xl font-bold leading-none text-accent">
                      {planCount}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex-1 rounded-2xl border border-[rgba(45,45,45,0.08)] bg-[#ede9e1]/88 p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#2d2d2d]/58">
                    Reco rapide
                  </p>
                  {highlighted ? (
                    <p className="mt-2 text-base leading-relaxed text-[#2d2d2d]/82">
                      <span className="font-semibold text-[#2d2d2d]">
                        {highlighted.name}
                      </span>
                      {" "}a{" "}
                      <span className="font-semibold text-accent">
                        {formatPrice(highlighted.price)}
                      </span>
                      {highlighted.priceUnit === "month" ? "/mois" : ""}
                    </p>
                  ) : (
                    <p className="mt-2 text-base leading-relaxed text-[#2d2d2d]/68">
                      Ouvrez la categorie pour voir les forfaits detaillees et
                      les options de conversion associees.
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[rgba(45,45,45,0.08)] pt-4">
                  <span className="text-base font-medium text-[#2d2d2d]/72">
                    Voir le detail des forfaits
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
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
