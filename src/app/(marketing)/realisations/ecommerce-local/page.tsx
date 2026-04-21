import type { Metadata } from "next";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS, getSectorSlug } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Création Boutique E-commerce Paris & France | Portfolio Ekolink",
  description:
    "Portfolio Ekolink : boutiques en ligne pour commerces locaux français. Shopify, WooCommerce, vente en ligne locale — SEO e-commerce et Google Shopping.",
  alternates: {
    canonical: "https://ekolink.fr/realisations/ecommerce-local/",
  },
};

const count = PORTFOLIO_PROJECTS.filter((p) => getSectorSlug(p.sector) === "ecommerce-local").length;

export default function RealisationsEcommerceLocalPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0" }}>
      <RealisationsBanner
        currentCategory="tous"
        title="Boutiques en ligne — Commerce local"
        description="Ekolink conçoit des boutiques en ligne performantes pour les commerces locaux français : Shopify, WooCommerce, vente locale et livraison en région. SEO e-commerce et intégration Google Shopping inclus."
        stats={[
          { value: `${count} projets`, label: "e-commerce locaux" },
          { value: "+420 %", label: "de revenus (client réel)" },
          { value: "Shopify Partner", label: "certifié depuis 2015" },
        ]}
      />

      <div className="border-t border-[#2d2d2d]/[0.08]">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs" style={{ color: "#6B7280" }}>
              Réalisations — E-commerce local
            </p>
            <Link
              href="/realisations/"
              className="text-xs transition-colors hover:text-[#498f6d]"
              style={{ color: "#6B7280" }}
            >
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      <PortfolioGrid initialSectorFilter="ecommerce-local" />

      <section className="pb-20 pt-4">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Boutique en ligne pour commerce local en France
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              Vendre en ligne n&apos;est plus réservé aux grandes marques. Ekolink aide les commerces
              locaux français à lancer leur boutique en ligne avec Shopify ou WooCommerce : catalogue
              produits, paiement sécurisé, livraison locale et intégration Google Shopping pour
              apparaître dans les résultats d&apos;achat. Nous accompagnons les petits et moyens
              commerces à travers Paris, l'Île-de-France et partout en France.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: "#498f6d", color: "#fff" }}
              >
                Démarrer votre projet
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/realisations/ecommerce/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Tous les e-commerces
              </Link>
              <Link
                href="/realisations/international/"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-200"
                style={{ borderColor: "rgba(45,45,45,0.18)", color: "#6B7280" }}
              >
                → Projets internationaux
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
