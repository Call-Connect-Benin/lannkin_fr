import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PRICING_CATEGORIES } from "@/data/pricing";
import { Container } from "@/presentation/components/ui/Container";
import { TarifsFilterable } from "@/presentation/components/tarifs/TarifsFilterable";

export const metadata: Metadata = {
  title: "Tarifs Agence Web France | Ekolink",
  description:
    "Tarifs transparents : site web, SEO, Google Ads, Meta Ads et graphisme dès 50€/mois. Comparez nos forfaits marketing digital. Prix clairs, sans surprise.",
};

export default function TarifsPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", color: "#fff" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-8 pt-10">
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
          className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.08)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.28)", backgroundColor: "rgba(73,143,109,0.09)" }}
            >
              <span className="font-mono text-xs font-medium" style={{ color: "#fff" }}>
                {PRICING_CATEGORIES.length} catégories · Pas de frais cachés
              </span>
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]" style={{ color: "#fff" }}>
              Tarifs <span style={{ color: "#fff" }}>transparents</span>
            </h1>
            <div className="mt-5 h-px w-14" style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }} />
            <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Des prix clairs pour chaque service. Pas de surprises, pas de frais cachés.
              Activez les filtres pour voir uniquement les services qui vous intéressent.
            </p>
            <p className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              Tous les prix sont en euros (CAD), avant taxes.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FILTRES + GRILLE CATÉGORIES
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-12 pt-2">
        <div className="mb-6 h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />
        <Container>
          <TarifsFilterable />
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-16 pt-4">
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
            className="mx-auto max-w-2xl rounded-2xl p-8 text-center sm:p-12"
            style={{
              background: "linear-gradient(135deg, rgba(73,143,109,0.09) 0%, rgba(73,143,109,0.03) 100%)",
              border: "1px solid rgba(73,143,109,0.18)",
            }}
          >
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: "#fff" }}>
              Besoin d&apos;un forfait sur mesure ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base" style={{ color: "rgba(255,255,255,0.52)" }}>
              Combinez plusieurs services ou adaptez un forfait existant.
              Notre équipe vous propose un devis personnalisé gratuit.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110 sm:px-8 sm:py-3.5"
                style={{ backgroundColor: "#498f6d", color: "#fff" }}
              >
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-medium transition-colors sm:px-8 sm:py-3.5"
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
