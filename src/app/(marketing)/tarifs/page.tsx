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

export const metadata: Metadata = {
  title: "Tarifs Agence Web Québec | Lannkin",
  description:
    "Tarifs transparents : site web, SEO, Google Ads, Meta Ads et graphisme dès 50$/mois. Comparez nos forfaits marketing digital. Prix clairs, sans surprise.",
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
    <main style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-14 pt-12">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[60%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp"
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.20 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(108deg, #0C0C0C 18%, rgba(12,12,12,0.65) 40%, transparent 62%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0C0C0C 0%, transparent 20%, transparent 80%, #0C0C0C 100%)" }} />
          </div>
        </div>
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.08)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
            >
              <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>
                {PRICING_CATEGORIES.length} catégories · Pas de frais cachés
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]" style={{ color: "#FFFFFF" }}>
              Tarifs <span style={{ color: "#498f6d" }}>transparents</span>
            </h1>
            <div className="mt-5 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Des prix clairs pour chaque service. Pas de surprises, pas de frais cachés.
              Choisissez le forfait adapté à vos objectifs et votre budget.
            </p>
            <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              Tous les prix sont en dollars canadiens (CAD), avant taxes.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GRILLE CATÉGORIES
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-20 pt-4">
        <div className="mb-14 h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRICING_CATEGORIES.map((cat) => {
              const highlighted = getHighlightedPlan(cat.slug);
              const priceRange = getPriceRange(cat.slug);
              const planCount = getPricingByCategory(cat.slug).length;

              return (
                <Link
                  key={cat.slug}
                  href={`/tarifs/${cat.slug}/`}
                  className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
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
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold opacity-0 transition-all duration-200 group-hover:opacity-100" style={{ color: "#498f6d" }}>
                    Voir les forfaits
                    <ArrowRight className="h-3 w-3" />
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ border: "1px solid rgba(73,143,109,0.25)" }} />
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-24">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[45%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cube-verre-flou-blanc.webp"
              alt=""
              className="h-full w-full object-cover object-left"
              style={{ opacity: 0.08 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to left, transparent, #0C0C0C 55%)" }} />
          </div>
        </div>
        <Container className="relative z-10">
          <div
            className="mx-auto max-w-2xl rounded-2xl p-10 text-center sm:p-14"
            style={{
              background: "linear-gradient(135deg, rgba(73,143,109,0.09) 0%, rgba(73,143,109,0.03) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#FFFFFF" }}>
              Besoin d&apos;un forfait sur mesure ?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>
              Combinez plusieurs services ou adaptez un forfait existant.
              Notre équipe vous propose un devis personnalisé gratuit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-medium transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.55)" }}
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
