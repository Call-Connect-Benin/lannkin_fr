import type { Metadata } from "next";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Création Site Web Multipage Laval & Québec | Portfolio Lannkin",
  description:
    "Agence web à Laval spécialisée en sites multipages : vitrine, PME, entreprise. Conception web professionnelle au Québec. Portfolio de réalisations, devis gratuit.",
  alternates: {
    canonical: "https://lannkin.ca/realisations/multipages/",
  },
  openGraph: {
    title: "Création Site Web Multipage Laval & Québec | Portfolio Lannkin",
    description:
      "Sites web multipages pour PME et entreprises à Laval et au Québec. Conception web professionnelle, SEO local et résultats mesurables. +187 % de leads pour nos clients.",
    url: "https://lannkin.ca/realisations/multipages/",
  },
};

const multiPagesCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "multipages").length;

const INCLUS = [
  "Architecture multipage optimisée pour le SEO local",
  "Design responsive adapté à tous les appareils",
  "Pages services, équipe, blogue et contact",
  "Formulaires de contact avec CRM ou courriel",
  "Vitesse de chargement < 2 s (PageSpeed 90+)",
  "Hébergement canadien ou international au choix",
];

export default function RealisationsMultipagesPage() {
  return (
    <main>
      <RealisationsBanner
        currentCategory="multipages"
        title="Création de sites web multipages à Laval"
        description="Sites vitrine, sites PME, sites institutionnels — notre agence web à Laval conçoit des sites multipages modernes et optimisés pour le SEO local, pour les entreprises du Québec et de la Rive-Nord."
        stats={[
          { value: "+187 %", label: "de leads qualifiés (client Laval)" },
          { value: `${multiPagesCount} projets`, label: "multipages livrés" },
          { value: "Google Partner", label: "SEO certifié depuis 2015" },
        ]}
      />

      {/* Separator */}
      <div id="projets" className="border-t border-accent/20 bg-surface">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-muted">Nos réalisations — sites multipages</p>
            <Link href="/realisations/" className="text-xs text-muted hover:text-accent transition-colors">
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      {/* Portfolio Grid — pre-filtered on multipages */}
      <PortfolioGrid initialFilter="multipages" />

      {/* SEO Content Section */}
      <section className="bg-surface-light py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Agence web à Laval — Conception de sites multipages pour PME québécoises
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="text-sm leading-relaxed text-muted space-y-4">
                <p>
                  Un <strong className="text-white">site web multipage à Laval</strong> est la solution
                  idéale pour les PME, professionnels et entreprises locales qui veulent une présence web
                  complète. Contrairement à une simple page, un site multipage permet de détailler chaque
                  service, de présenter votre équipe, de publier un blogue et d&apos;optimiser chaque page
                  sur des mots-clés locaux différents.
                </p>
                <p>
                  Notre <strong className="text-white">agence web de Laval</strong> conçoit des sites
                  vitrine et multipages pour toutes les industries : concessionnaires auto, cliniques de
                  santé, entrepreneurs en construction, cabinets de services professionnels, restaurants,
                  cuisinistes, et bien plus.
                </p>
                <p>
                  Chaque site est pensé pour <strong className="text-white">dominer le SEO local</strong> :
                  ciblage géographique Laval, Rive-Nord, Montréal, balisage Schema local, et intégration
                  Google My Business pour maximiser la visibilité dans la recherche locale.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-white">Inclus dans chaque site multipage :</h3>
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

            {/* Local SEO block */}
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-surface p-8">
              <h2 className="font-heading text-xl font-bold text-white">
                Conception web Laval, Rive-Nord, Montréal — Votre site web qui génère des leads
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Fondée à <strong className="text-white">Laval (Québec)</strong> en 2015, Lannkin conçoit
                des sites web pour les entreprises de la région : Laval, Boisbriand, Blainville,
                Terrebonne, Sainte-Thérèse, Repentigny, Montréal et partout en province.
                Nos sites multipages sont développés avec les technologies les plus performantes
                (Next.js, WordPress) et optimisés pour la recherche locale.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Un <strong className="text-white">site vitrine multipage à Laval</strong> n&apos;est
                pas seulement une carte de visite en ligne — c&apos;est un outil de génération de leads.
                Nous configurons chaque site avec un formulaire de contact optimisé, un suivi des
                conversions Google Analytics 4 et une stratégie SEO locale pour attirer des clients
                de votre ville et de votre secteur.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Démarrer votre projet web
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/tarifs/conception-web/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/30 hover:text-accent"
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>

            {/* Related categories */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link
                href="/realisations/ecommerce/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Boutiques e-commerce
              </Link>
              <Link
                href="/realisations/onepage/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Sites onepage
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
