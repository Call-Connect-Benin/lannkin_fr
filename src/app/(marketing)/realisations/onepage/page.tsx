import type { Metadata } from "next";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Création Landing Page & Site Onepage Paris | Portfolio Ekolink",
  description:
    "Agence landing page à Paris : conception de sites onepage et pages de destination à fort taux de conversion pour PME françaises. Devis gratuit.",
  alternates: {
    canonical: "https://ekolink.fr/realisations/onepage/",
  },
  openGraph: {
    title: "Création Landing Page & Site Onepage Paris | Portfolio Ekolink",
    description:
      "Landing pages et sites onepage à fort taux de conversion pour Paris et le France. Taux de conversion moyen : 7,8 %. Portfolio et devis gratuit.",
    url: "https://ekolink.fr/realisations/onepage/",
  },
};

const onePageCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "onepage").length;

const INCLUS = [
  "Copywriting orienté conversion inclus",
  "Intégration Google Ads & Meta Ads dès le lancement",
  "Formulaire multi-étapes ou paiement Stripe",
  "Preuve sociale : avis Google, témoignages, logos clients",
  "A/B testing et optimisation du taux de conversion",
  "Hébergement haute performance (< 1 s de chargement)",
];

export default function RealisationsOnepagePage() {
  return (
    <main>
      <RealisationsBanner
        currentCategory="onepage"
        title="Landing pages & sites onepage à Paris"
        description="Des pages de destination qui convertissent — notre agence crée des sites onepage et landing pages pour les entreprises françaises qui veulent générer des leads et des ventes rapidement."
        stats={[
          { value: "7,8 %", label: "taux de conversion (vs 2,5 % industrie)" },
          { value: `${onePageCount} projets`, label: "onepage & landing pages livrés" },
          { value: "4,9/5", label: "sur Google (54 avis)" },
        ]}
      />

      {/* Separator */}
      <div id="projets" className="border-t border-accent/20 bg-surface">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-muted">Nos réalisations — sites onepage & landing pages</p>
            <Link href="/realisations/" className="text-xs text-muted hover:text-accent transition-colors">
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      {/* Portfolio Grid — pre-filtered on onepage */}
      <PortfolioGrid initialFilter="onepage" />

      {/* SEO Content Section */}
      <section className="bg-surface-light py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Création de landing pages et sites onepage à Paris, France
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="text-sm leading-relaxed text-muted space-y-4">
                <p>
                  Une <strong className="text-white">landing page à Paris</strong> est la solution
                  la plus rapide et la plus rentable pour tester un produit, lancer un service ou
                  générer des leads avec Google Ads ou Facebook Ads. Contrairement à un site complet,
                  une page de destination est conçue avec un seul objectif : convertir le visiteur
                  en prospect ou en client.
                </p>
                <p>
                  Notre agence de <strong className="text-white">création de sites onepage en France</strong>
                  {" "}combine copywriting persuasif, design épuré et optimisation technique pour créer
                  des pages qui performent. Nos landing pages affichent des taux de conversion bien
                  au-dessus de la moyenne de l&apos;industrie.
                </p>
                <p>
                  Que vous soyez une <strong className="text-white">entreprise locale à Paris</strong>,
                  une startup française ou une PME cherchant à lancer une campagne publicitaire,
                  nous créons votre page de destination en 5 à 10 jours ouvrables.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-white">Inclus dans chaque landing page :</h3>
                <ul className="space-y-2">
                  {INCLUS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Block */}
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-surface p-8">
              <h2 className="font-heading text-xl font-bold text-white">
                Landing page Paris — Combinez publicité et page de destination pour un ROI maximal
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                La combinaison <strong className="text-white">Google Ads + landing page optimisée</strong>
                {" "}est la stratégie la plus efficace pour acquérir des clients rapidement à Paris et
                dans la grande région de Paris. Nos clients voient souvent un retour positif dès
                le premier mois de campagne, grâce à nos pages conçues spécifiquement pour chaque
                source de trafic publicitaire.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Nous gérons tout : conception de la landing page, rédaction du contenu, configuration
                des campagnes Google Ads et Meta Ads, suivi des conversions et optimisation continue.
                Une solution <strong className="text-white">clé en main</strong> pour les entrepreneurs
                et PME du France.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Créer ma landing page
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs/google-ads/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Tarifs Google Ads
                </Link>
              </div>
            </div>

            {/* Related categories */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link
                href="/realisations/multipages/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Sites multipages
              </Link>
              <Link
                href="/realisations/ecommerce/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Boutiques e-commerce
              </Link>
              <Link
                href="/realisations/international/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
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
