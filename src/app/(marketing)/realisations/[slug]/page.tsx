import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight, Check, ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.seoTitle,
    description: project.seoDescription,
  };
}

const PARALLAX_IMAGES: Record<string, string> = {
  multipages: "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  onepage: "/images/rendu3D/rendu3d-cube-vert-rocket-embed.webp",
  ecommerce: "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
};

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PORTFOLIO_PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category,
  ).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-12 lg:py-16">
        <ParallaxBg
          src={PARALLAX_IMAGES[project.category] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"}
          overlay={0.6}
        />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/realisations/"
                className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Retour aux réalisations
              </Link>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  {project.categoryLabel}
                </span>
                <span className="text-sm text-white/50">{project.sector}</span>
                <span className="text-sm text-white/50">{project.year}</span>
              </div>
              <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#DDDDDD]">
                {project.shortDescription}
              </p>
              {/* Services */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-white/20 px-3 py-1 text-xs font-medium text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {/* External link */}
              {project.externalUrl && (
                <div className="mt-6">
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-accent/40 hover:bg-white/10 hover:text-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visiter le site
                  </a>
                </div>
              )}
            </div>
          </Container>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Placeholder image */}
                <div className="flex h-56 items-center justify-center rounded-2xl bg-surface-light lg:h-72">
                  <span className="font-heading text-7xl font-bold text-accent/15">
                    {project.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-white">À propos du projet</h2>
                  <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-white">Le défi</h2>
                  <p className="mt-3 leading-relaxed text-muted">{project.challenge}</p>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold text-white">Notre solution</h2>
                  <p className="mt-3 leading-relaxed text-muted">{project.solution}</p>
                </div>

                {/* Technologies */}
                <div>
                  <h2 className="font-heading text-xl font-bold text-white">Technologies</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/[0.08] bg-surface-light px-3 py-1.5 text-sm font-medium text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar: Results */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-accent/20 bg-surface-light p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <h3 className="font-heading font-bold text-white">Résultats</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        <span className="text-sm leading-relaxed text-white">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-surface-light p-6">
                  <h3 className="mb-3 font-heading font-bold text-white">
                    Un projet similaire ?
                  </h3>
                  <p className="mb-4 text-sm text-muted">
                    Discutons de votre projet et voyons comment nous pouvons obtenir des résultats
                    similaires pour votre entreprise.
                  </p>
                  <Link
                    href="/devis-gratuit/"
                    className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-all duration-200 hover:brightness-110"
                  >
                    Devis gratuit
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SEO Text */}
      <section className="bg-surface-light py-12 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-xl font-bold text-white">
              {project.categoryLabel === "Multipages" && (
                <>Site web multipage pour {project.sector} — réalisation Lannkin</>
              )}
              {project.categoryLabel === "Onepage" && (
                <>Landing page et site onepage pour {project.sector} — réalisation Lannkin</>
              )}
              {project.categoryLabel === "E-commerce" && (
                <>Boutique e-commerce {project.sector} — réalisation Lannkin</>
              )}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Ce projet illustre notre expertise en{" "}
              {project.categoryLabel === "Multipages" && "conception de sites web multipages"}{" "}
              {project.categoryLabel === "Onepage" && "création de landing pages et sites onepage"}{" "}
              {project.categoryLabel === "E-commerce" && "développement de boutiques e-commerce"}{" "}
              pour des entreprises québécoises. Lannkin, agence web basée à Laval, conçoit des
              sites web performants qui génèrent des résultats concrets : plus de trafic organique,
              plus de leads et plus de ventes. Notre approche combine design moderne, optimisation
              SEO et intégration marketing pour maximiser le retour sur investissement de chaque
              projet.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Vous avez un projet web similaire pour votre entreprise au Québec ou au Canada ?
              Contactez notre équipe à Laval pour une consultation gratuite. Nous analysons votre
              marché, votre concurrence et vos objectifs pour vous proposer la solution digitale la
              plus adaptée à votre budget.
            </p>
          </div>
        </Container>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="bg-surface py-12 lg:py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 font-heading text-xl font-bold text-white">
                Autres réalisations {project.categoryLabel.toLowerCase()}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/realisations/${rel.slug}/`}
                    className="group rounded-xl border border-white/[0.06] bg-surface-light p-5 transition-all duration-200 hover:border-accent/20"
                  >
                    <p className="mb-1 text-xs text-muted">{rel.sector}</p>
                    <h3 className="font-heading font-bold text-white group-hover:text-accent">
                      {rel.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    {rel.results[0] && (
                      <p className="mt-3 text-xs font-semibold text-accent">{rel.results[0]}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
