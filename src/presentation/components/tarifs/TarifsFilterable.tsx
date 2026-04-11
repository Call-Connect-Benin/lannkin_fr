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
  const prices = plans.map((p) => p.price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  if (min === max) return `${formatPrice(min)}`;
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export function TarifsFilterable() {
  // Set vide = état par défaut, affiche tous les services.
  // Set non vide = combo de services sélectionnés.
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
        ? PRICING_CATEGORIES.filter((c) => selected.has(c.slug))
        : PRICING_CATEGORIES,
    [selected, hasSelection],
  );

  return (
    <div>
      {/* ── Filtres ── */}
      <div
        className="mb-6 rounded-2xl border px-3 py-3 sm:px-4 sm:py-4"
        style={{
          backgroundColor: "rgba(17,17,17,0.95)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        {/* En-tête */}
        <div className="mb-2.5 flex items-center justify-between gap-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider sm:text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            {hasSelection ? "Votre combo" : "Filtrer par service"}
            {hasSelection && (
              <span className="ml-2 font-mono normal-case tracking-normal" style={{ color: "#498f6d" }}>
                {selected.size} sélectionné{selected.size > 1 ? "s" : ""}
              </span>
            )}
          </p>
          {hasSelection && (
            <button
              type="button"
              onClick={clearAll}
              aria-label="Effacer tous les filtres"
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:brightness-110 active:scale-95"
              style={{
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.72)",
                backgroundColor: "rgba(255,255,255,0.04)",
              }}
            >
              <X className="h-3 w-3" />
              Effacer
            </button>
          )}
        </div>

        {/* Puces filtres — tous visibles, wrap automatique */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {PRICING_CATEGORIES.map((cat) => {
            const isActive = selected.has(cat.slug);

            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => toggle(cat.slug)}
                aria-pressed={isActive}
                className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium leading-none transition-all duration-150 active:scale-95 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs"
                style={{
                  borderColor: isActive
                    ? "rgba(73,143,109,0.60)"
                    : "rgba(255,255,255,0.10)",
                  backgroundColor: isActive
                    ? "rgba(73,143,109,0.22)"
                    : "rgba(255,255,255,0.02)",
                  color: isActive ? "#498f6d" : "rgba(255,255,255,0.55)",
                }}
              >
                {isActive && <Check className="h-3 w-3" />}
                <LucideIcon name={cat.icon} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Astuce */}
        {!hasSelection && (
          <p className="mt-2.5 text-[10px] leading-relaxed sm:text-xs" style={{ color: "rgba(255,255,255,0.32)" }}>
            Cliquez sur un ou plusieurs services pour composer votre combo. Par défaut, tous les services sont affichés.
          </p>
        )}
      </div>

      {/* ── Résultats ── */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((cat) => {
          const highlighted = getHighlightedPlan(cat.slug);
          const priceRange = getPriceRange(cat.slug);
          const planCount = getPricingByCategory(cat.slug).length;

          return (
            <Link
              key={cat.slug}
              href={`/tarifs/${cat.slug}/`}
              className="group relative flex flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] sm:p-6"
              style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
              >
                <LucideIcon name={cat.icon} className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-lg font-bold transition-colors group-hover:text-[#498f6d]" style={{ color: "#FFFFFF" }}>
                {cat.name}
              </h2>
              {priceRange && (
                <p className="mt-2 font-heading text-base font-semibold" style={{ color: "#498f6d" }}>
                  {priceRange}
                </p>
              )}
              <p className="mt-1 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                {planCount} forfait{planCount > 1 ? "s" : ""} disponible{planCount > 1 ? "s" : ""}
              </p>
              {highlighted && (
                <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Populaire :{" "}
                  <span className="font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                    {highlighted.name}
                  </span>{" "}
                  à {formatPrice(highlighted.price)}
                  {highlighted.priceUnit === "month" ? "/mois" : ""}
                </p>
              )}
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-200 group-hover:opacity-100" style={{ color: "#498f6d" }}>
                Voir les forfaits
                <ArrowRight className="h-3 w-3" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ border: "1px solid rgba(73,143,109,0.25)" }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
