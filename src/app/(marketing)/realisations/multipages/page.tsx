import type { Metadata } from "next";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Création Site Web Multipage Paris & France | Portfolio Lannkin",
  description:
    "Agence web à Paris spécialisée en sites multipages : vitrine, PME, entreprise. Conception web professionnelle en France. Portfolio de réalisations, devis gratuit.",
  alternates: {
    canonical: "https://lannkin.com/realisations/multipages/",
  },
  openGraph: {
    title: "Création Site Web Multipage Paris & France | Portfolio Lannkin",
    description:
      "Sites web multipages pour PME et entreprises à Paris et en France. Conception web professionnelle, SEO local et résultats mesurables. +187 % de leads pour nos clients.",
    url: "https://lannkin.com/realisations/multipages/",
  },
};

const multiPagesCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "multipages").length;

const INCLUS = [
  "Architecture multipage optimisée pour le SEO local",
  "Design responsive adapté à tous les appareils",
  "Pages services, équipe, blogue et contact",
  "Formulaires de contact avec CRM ou courriel",
  "Vitesse de chargement < 2 s (PageSpeed 90+)",
  "Hébergement français ou international au choix",
];

export default function RealisationsMultipagesPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <RealisationsBanner
        currentCategory="multipages"
        title="Création de sites web multipages à Paris"
        description="Sites vitrine, sites PME, sites institutionnels — notre agence web à Paris conçoit des sites multipages modernes et optimisés pour le SEO local, pour les entreprises d'Île-de-France et de toute la France."
        stats={[
          { value: "+187 %", label: "de leads qualifiés (client Paris)" },
          { value: `${multiPagesCount} projets`, label: "multipages livrés" },
          { value: "Google Partner", label: "SEO certifié depuis 2015" },
        ]}
      />

      {/* Separator */}
      <div id="projets" className="border-t border-accent/20" style={{ backgroundColor: "#ede9e1" }}>
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-[#6B7280]">Nos réalisations — sites multipages</p>
            <Link href="/realisations/" className="text-xs text-[#6B7280] hover:text-accent transition-colors">
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      {/* Portfolio Grid — pre-filtered on multipages */}
      <PortfolioGrid initialFilter="multipages" />

      {/* SEO Content Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Agence web à Paris — Conception de sites multipages pour PME françaises
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="space-y-4 text-sm leading-relaxed text-[#6B7280]">
                <p>
                  Un <strong className="text-[#2d2d2d]">site web multipage à Paris</strong> est la solution
                  idéale pour les PME, professionnels et entreprises locales qui veulent une présence web
                  complète. Contrairement à une simple page, un site multipage permet de détailler chaque
                  service, de présenter votre équipe, de publier un blogue et d&apos;optimiser chaque page
                  sur des mots-clés locaux différents.
                </p>
                <p>
                  Notre <strong className="text-[#2d2d2d]">agence web de Paris</strong> conçoit des sites
                  vitrine et multipages pour toutes les industries : concessionnaires auto, cliniques de
                  santé, entrepreneurs en construction, cabinets de services professionnels, restaurants,
                  cuisinistes, et bien plus.
                </p>
                <p>
                  Chaque site est pensé pour <strong className="text-[#2d2d2d]">dominer le SEO local</strong> :
                  ciblage géographique Paris, Île-de-France, balisage Schema local, et intégration
                  Google My Business pour maximiser la visibilité dans la recherche locale.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-[#2d2d2d]">Inclus dans chaque site multipage :</h3>
                <ul className="space-y-2">
                  {INCLUS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span className="text-sm text-[#6B7280]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Local SEO block */}
            <div className="mt-10 rounded-2xl border p-8" style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.72)" }}>
              <h2 className="font-heading text-xl font-bold text-[#2d2d2d]">
                Conception web à Paris et en Île-de-France — Votre site web qui génère des leads
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">
                Fondée à <strong className="text-[#2d2d2d]">Paris (France)</strong> en 2015, Lannkin conçoit
                des sites web pour les entreprises de la région : Paris, Neuilly, Boulogne,
                Versailles, Saint-Germain, Repentigny, Paris et partout en province.
                Nos sites multipages sont développés avec les technologies les plus performantes
                (Next.js, WordPress) et optimisés pour la recherche locale.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Un <strong className="text-[#2d2d2d]">site vitrine multipage à Paris</strong> n&apos;est
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
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-semibold text-[#2d2d2d] transition-all duration-200 hover:border-accent/30 hover:text-accent"
                  style={{ borderColor: "rgba(45,45,45,0.10)", backgroundColor: "rgba(255,255,255,0.64)" }}
                >
                  Voir les tarifs
                </Link>
              </div>
            </div>

            {/* Related categories */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Link
                href="/realisations/ecommerce/"
                className="rounded-xl border p-4 text-sm font-semibold text-[#2d2d2d] transition-all hover:border-accent/20 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                → Boutiques e-commerce
              </Link>
              <Link
                href="/realisations/onepage/"
                className="rounded-xl border p-4 text-sm font-semibold text-[#2d2d2d] transition-all hover:border-accent/20 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                → Sites onepage
              </Link>
              <Link
                href="/realisations/international/"
                className="rounded-xl border p-4 text-sm font-semibold text-[#2d2d2d] transition-all hover:border-accent/20 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.7)" }}
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

