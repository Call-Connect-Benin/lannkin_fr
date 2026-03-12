import type { Metadata } from "next";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Agence Web Internationale Laval Canada | Portfolio Projets Internationaux Lannkin",
  description:
    "Agence web bilingue à Laval (Canada) : création de sites web et stratégies digitales pour les entreprises internationales. France, Suisse, USA, Maroc. Portfolio et devis.",
  alternates: {
    canonical: "https://lannkin.ca/realisations/international/",
  },
  openGraph: {
    title: "Agence Web Internationale Laval Canada | Portfolio Lannkin",
    description:
      "Portfolio international de Lannkin : sites web et stratégies digitales en France, Suisse, USA, Maroc et Allemagne. Agence web canadienne bilingue.",
    url: "https://lannkin.ca/realisations/international/",
  },
};

const internationalCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "international").length;

const INCLUS = [
  "Sites web bilingues français/anglais",
  "SEO international : Google.fr, Google.ca, Google.com",
  "Hébergement selon la localisation cible (EU/CA/US)",
  "Respect des normes RGPD (Europe) et LPRPDE (Canada)",
  "Traduction et localisation du contenu",
  "Campagnes Google Ads et Meta Ads internationales",
];

export default function RealisationsInternationalPage() {
  return (
    <main>
      <RealisationsBanner
        currentCategory="international"
        title="Agence web internationale basée au Canada"
        description="De Laval à Paris, de Montréal à Lausanne — notre agence web canadienne accompagne les entreprises d'Europe, des États-Unis, du Maroc et du Canada dans leur présence digitale internationale."
        stats={[
          { value: "40+ pays", label: "clients générés via nos sites" },
          { value: `${internationalCount} projets`, label: "internationaux livrés" },
          { value: "FR / EN / DE", label: "sites bilingues et multilingues" },
        ]}
      />

      {/* Separator */}
      <div id="projets" className="border-t border-accent/20 bg-surface">
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-muted">Nos réalisations — projets internationaux</p>
            <Link href="/realisations/" className="text-xs text-muted hover:text-accent transition-colors">
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      {/* Portfolio Grid — pre-filtered on international */}
      <PortfolioGrid initialFilter="international" />

      {/* SEO Content Section */}
      <section className="bg-surface-light py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
              Agence web canadienne pour projets internationaux — Laval, Québec
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="text-sm leading-relaxed text-muted space-y-4">
                <p>
                  Lannkin est une <strong className="text-white">agence web bilingue basée à Laval, Canada</strong>,
                  avec une expertise reconnue pour les projets web internationaux. Notre équipe maîtrise
                  le SEO en français, anglais et allemand, et comprend les spécificités de chaque marché :
                  Google France, Google Suisse, Google Maroc, Google.com pour le marché américain.
                </p>
                <p>
                  Pour les <strong className="text-white">entreprises françaises, européennes ou américaines</strong>
                  {" "}qui souhaitent faire appel à une agence web au Canada, Lannkin offre un avantage
                  unique : des tarifs compétitifs en dollars canadiens, une expertise technique de premier
                  niveau et une compréhension culturelle des marchés francophones et anglophones.
                </p>
                <p>
                  Pour les <strong className="text-white">entreprises québécoises et canadiennes</strong>
                  {" "}qui veulent percer à l&apos;international, nous créons des sites web adaptés aux
                  marchés cibles avec SEO international, hébergement optimisé et campagnes publicitaires
                  multilingues.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-white">Nos services pour projets internationaux :</h3>
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

            {/* Markets block */}
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-surface p-8">
              <h2 className="font-heading text-xl font-bold text-white">
                Marchés internationaux couverts par notre agence
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { flag: "🇨🇦", title: "Canada", desc: "Québec, Ontario, Alberta — SEO .ca et campagnes bilingues" },
                  { flag: "🇫🇷", title: "France", desc: "Paris, Lyon, Marseille — SEO Google.fr, RGPD" },
                  { flag: "🇨🇭", title: "Suisse", desc: "Suisse romande et alémanique — .ch, multilingue" },
                  { flag: "🇲🇦", title: "Maroc", desc: "Casablanca, Agadir — tourisme, commerce, B2B" },
                  { flag: "🇺🇸", title: "États-Unis", desc: "Google.com, campagnes USD, marché anglophone" },
                  { flag: "🇩🇪", title: "Europe DACH", desc: "Allemagne, Autriche — e-commerce, Google Shopping" },
                ].map((market) => (
                  <div key={market.title} className="rounded-xl border border-white/[0.06] p-4">
                    <p className="text-lg">{market.flag}</p>
                    <p className="mt-1 font-semibold text-white text-sm">{market.title}</p>
                    <p className="mt-1 text-xs text-muted">{market.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                >
                  Discuter de votre projet international
                  <ArrowRight className="h-4 w-4" />
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
                href="/realisations/onepage/"
                className="rounded-xl border border-white/[0.06] bg-surface p-4 text-sm font-semibold text-white transition-all hover:border-accent/20 hover:text-accent"
              >
                → Sites onepage
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
