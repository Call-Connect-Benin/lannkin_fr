import type { Metadata } from "next";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { PortfolioGrid } from "@/presentation/components/portfolio/PortfolioGrid";
import { RealisationsBanner } from "@/presentation/components/portfolio/RealisationsBanner";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Agence Web Internationale Paris | Portfolio Projets Internationaux Lannkin",
  description:
    "Agence web bilingue à Paris (France) : création de sites web et stratégies digitales pour les entreprises internationales. France, Suisse, USA, Maroc. Portfolio et devis.",
  alternates: {
    canonical: "https://lannkin.fr/realisations/international/",
  },
  openGraph: {
    title: "Agence Web Internationale Paris | Portfolio Lannkin",
    description:
      "Portfolio international de Lannkin : sites web et stratégies digitales en France, Suisse, USA, Maroc et Allemagne. Agence web française bilingue.",
    url: "https://lannkin.fr/realisations/international/",
  },
};

const internationalCount = PORTFOLIO_PROJECTS.filter((p) => p.category === "international").length;

const INCLUS = [
  "Sites web bilingues français/anglais",
  "SEO international : Google.fr, Google.com, Google.de",
  "Hébergement selon la localisation cible (EU/CA/US)",
  "Respect des normes RGPD et des bonnes pratiques internationales",
  "Traduction et localisation du contenu",
  "Campagnes Google Ads et Meta Ads internationales",
];

export default function RealisationsInternationalPage() {
  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <RealisationsBanner
        currentCategory="international"
        title="Agence web internationale basée en France"
        description="De Paris à Lausanne — notre agence web française accompagne les entreprises d'Europe, des États-Unis et du Maroc dans leur présence digitale internationale."
        stats={[
          { value: "40+ pays", label: "clients générés via nos sites" },
          { value: `${internationalCount} projets`, label: "internationaux livrés" },
          { value: "FR / EN / DE", label: "sites bilingues et multilingues" },
        ]}
      />

      {/* Separator */}
      <div id="projets" className="border-t border-accent/20" style={{ backgroundColor: "#ede9e1" }}>
        <Container>
          <div className="flex items-center justify-between py-3">
            <p className="text-xs text-[#6B7280]">Nos réalisations — projets internationaux</p>
            <Link href="/realisations/" className="text-xs text-[#6B7280] hover:text-accent transition-colors">
              ← Voir tous les projets
            </Link>
          </div>
        </Container>
      </div>

      {/* Portfolio Grid — pre-filtered on international */}
      <PortfolioGrid initialFilter="international" />

      {/* SEO Content Section */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#f7f5f0" }}>
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              Agence web française pour projets internationaux — Paris, France
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="space-y-4 text-sm leading-relaxed text-[#6B7280]">
                <p>
                  Lannkin est une <strong className="text-[#2d2d2d]">agence web bilingue basée à Paris, France</strong>,
                  avec une expertise reconnue pour les projets web internationaux. Notre équipe maîtrise
                  le SEO en français, anglais et allemand, et comprend les spécificités de chaque marché :
                  Google France, Google Suisse, Google Maroc, Google.com pour le marché américain.
                </p>
                <p>
                  Pour les <strong className="text-[#2d2d2d]">entreprises françaises, européennes ou américaines</strong>
                  {" "}qui souhaitent faire appel à une agence web en France, Lannkin offre un avantage
                  unique : des tarifs compétitifs en euros, une expertise technique de premier
                  niveau et une compréhension culturelle des marchés francophones et anglophones.
                </p>
                <p>
                  Pour les <strong className="text-[#2d2d2d]">entreprises françaises</strong>
                  {" "}qui veulent percer à l&apos;international, nous créons des sites web adaptés aux
                  marchés cibles avec SEO international, hébergement optimisé et campagnes publicitaires
                  multilingues.
                </p>
              </div>
              <div>
                <h3 className="mb-4 font-semibold text-[#2d2d2d]">Nos services pour projets internationaux :</h3>
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

            {/* Markets block */}
            <div className="mt-10 rounded-2xl border p-8" style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.72)" }}>
              <h2 className="font-heading text-xl font-bold text-[#2d2d2d]">
                Marchés internationaux couverts par notre agence
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[                  { flag: "🇫🇷", title: "France", desc: "Paris, Lyon, Marseille — SEO Google.fr, RGPD" },
                  { flag: "🇨🇭", title: "Suisse", desc: "Suisse romande et alémanique — .ch, multilingue" },
                  { flag: "🇲🇦", title: "Maroc", desc: "Casablanca, Agadir — tourisme, commerce, B2B" },
                  { flag: "🇺🇸", title: "États-Unis", desc: "Google.com, campagnes USD, marché anglophone" },
                  { flag: "🇩🇪", title: "Europe DACH", desc: "Allemagne, Autriche — e-commerce, Google Shopping" },
                ].map((market) => (
                  <div
                    key={market.title}
                    className="rounded-xl border p-4"
                    style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(237,233,225,0.62)" }}
                  >
                    <p className="text-lg">{market.flag}</p>
                    <p className="mt-1 text-sm font-semibold text-[#2d2d2d]">{market.title}</p>
                    <p className="mt-1 text-xs text-[#6B7280]">{market.desc}</p>
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
                className="rounded-xl border p-4 text-sm font-semibold text-[#2d2d2d] transition-all hover:border-accent/20 hover:text-accent"
                style={{ borderColor: "rgba(45,45,45,0.08)", backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                → Sites multipages
              </Link>
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
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
