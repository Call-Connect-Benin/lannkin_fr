import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArrowLeft, ArrowRight, Check, ExternalLink, TrendingUp } from "lucide-react";
import Link from "next/link";

import { PORTFOLIO_PROJECTS } from "@/data/portfolio";
import { Container } from "@/presentation/components/ui/Container";

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

const CATEGORY_3D: Record<string, string> = {
  multipages: "/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp",
  onepage: "/images/rendu3D/rendu3d-cube-vert-rocket-embed.webp",
  ecommerce: "/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp",
  international: "/images/rendu3D/rendu3d-orbite-planete-fond-rouge.webp",
};

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = PORTFOLIO_PROJECTS.filter(
    (p) => p.slug !== project.slug && p.category === project.category,
  ).slice(0, 3);

  const bg3d = CATEGORY_3D[project.category] ?? "/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp";

  return (
    <main style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}>

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pb-16 pt-10">

        {/* 3D background diagonal */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-[62%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bg3d}
              alt=""
              className="h-full w-full object-cover object-center"
              style={{ opacity: 0.18 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(108deg, #0C0C0C 16%, rgba(12,12,12,0.7) 38%, transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #0C0C0C 0%, transparent 15%, transparent 85%, #0C0C0C 100%)",
              }}
            />
          </div>
        </div>

        {/* Halo */}
        <div
          className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-y-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(73,143,109,0.07)" }}
          aria-hidden
        />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/realisations/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span className="hover:text-white transition-colors" style={{ color: "inherit" }}>
              Retour aux réalisations
            </span>
          </Link>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              {/* Tags */}
              <div className="mb-5 flex flex-wrap items-center gap-2.5">
                <span
                  className="rounded-full px-3 py-1 font-mono text-xs font-semibold"
                  style={{ backgroundColor: "rgba(73,143,109,0.18)", color: "#498f6d" }}
                >
                  {project.categoryLabel}
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {project.sector}
                </span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.25)" }}>
                  · {project.year}
                </span>
              </div>

              <h1
                className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3rem] lg:leading-tight"
                style={{ color: "#FFFFFF" }}
              >
                {project.name}
              </h1>

              {/* Ligne accent */}
              <div
                className="mt-5 h-px w-14"
                style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
              />

              <p
                className="mt-4 max-w-xl text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.58)" }}
              >
                {project.shortDescription}
              </p>

              {/* Services */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="rounded-md px-3 py-1 text-xs font-medium"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA externe */}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110 self-start"
                style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
              >
                <ExternalLink className="h-4 w-4" />
                Visiter le site
              </a>
            )}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTENU PRINCIPAL
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-20 pt-2">
        {/* Séparateur */}
        <div
          className="mb-14 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
        />

        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">

            {/* ── Colonne gauche : contenu ── */}
            <div className="space-y-10 lg:col-span-2">

              {/* Aperçu du site */}
              {project.previewImage ? (
                <div
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.previewImage}
                    alt={`Aperçu du site ${project.name}`}
                    className="h-72 w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] lg:h-80"
                  />
                  {/* Gradient bas */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24"
                    style={{
                      background: "linear-gradient(to top, rgba(12,12,12,0.85), transparent)",
                    }}
                  />
                  <div className="absolute bottom-4 left-5">
                    <span
                      className="rounded-lg px-3 py-1.5 text-xs font-medium"
                      style={{ backgroundColor: "rgba(12,12,12,0.7)", color: "rgba(255,255,255,0.60)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      Aperçu du projet
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl lg:h-72"
                  style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bg3d}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ opacity: 0.12 }}
                  />
                  <span
                    className="relative font-heading text-8xl font-black"
                    style={{ color: "rgba(73,143,109,0.20)" }}
                  >
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}

              {/* À propos */}
              <ContentBlock title="À propos du projet" body={project.description} />

              {/* Le défi */}
              <ContentBlock title="Le défi" body={project.challenge} />

              {/* Notre solution */}
              <ContentBlock title="Notre solution" body={project.solution} />

              {/* Technologies */}
              <div>
                <h2
                  className="mb-4 font-heading text-lg font-bold"
                  style={{ color: "#FFFFFF" }}
                >
                  Technologies utilisées
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg px-3 py-1.5 text-sm font-medium"
                      style={{
                        backgroundColor: "#141414",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Sidebar droite ── */}
            <div className="space-y-5">

              {/* Résultats */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(73,143,109,0.10) 0%, rgba(73,143,109,0.04) 100%)",
                  border: "1px solid rgba(73,143,109,0.20)",
                }}
              >
                <div className="mb-5 flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(73,143,109,0.15)", color: "#498f6d" }}
                  >
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading font-bold" style={{ color: "#FFFFFF" }}>
                    Résultats obtenus
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: "rgba(73,143,109,0.18)", color: "#498f6d" }}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA projet similaire */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="mb-2 font-heading font-bold" style={{ color: "#FFFFFF" }}>
                  Un projet similaire ?
                </h3>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Notre équipe analyse votre marché et vous propose une solution
                  adaptée à votre secteur et votre budget.
                </p>
                <Link
                  href="/devis-gratuit/"
                  className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all duration-200 hover:brightness-110"
                  style={{ backgroundColor: "#498f6d", color: "#FFFFFF" }}
                >
                  Devis gratuit
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/contact/"
                  className="mt-2.5 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-medium transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.50)" }}
                >
                  Nous contacter
                </Link>
              </div>

              {/* Infos projet */}
              <div
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3 className="mb-4 font-heading font-bold" style={{ color: "#FFFFFF" }}>
                  Détails du projet
                </h3>
                <dl className="space-y-3">
                  {[
                    { label: "Client", value: project.client },
                    { label: "Secteur", value: project.sector },
                    { label: "Année", value: String(project.year) },
                    { label: "Type", value: project.categoryLabel },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start justify-between gap-3">
                      <dt className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {label}
                      </dt>
                      <dd className="text-right text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TEXTE SEO
      ═══════════════════════════════════════════════════════ */}
      <section className="pb-16">
        <div
          className="mb-12 h-px w-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
        />
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-lg font-bold" style={{ color: "#FFFFFF" }}>
              {project.categoryLabel === "Multipages" && (
                <>Site web multipage pour {project.sector} — réalisation Lannkin</>
              )}
              {project.categoryLabel === "Onepage" && (
                <>Landing page et site onepage pour {project.sector} — réalisation Lannkin</>
              )}
              {project.categoryLabel === "E-commerce" && (
                <>Boutique e-commerce {project.sector} — réalisation Lannkin</>
              )}
              {project.categoryLabel === "International" && (
                <>Projet international {project.sector} — réalisation Lannkin</>
              )}
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Ce projet illustre notre expertise en{" "}
              {project.categoryLabel === "Multipages" && "conception de sites web multipages"}{" "}
              {project.categoryLabel === "Onepage" && "création de landing pages et sites onepage"}{" "}
              {project.categoryLabel === "E-commerce" && "développement de boutiques e-commerce"}{" "}
              {project.categoryLabel === "International" && "développement de solutions internationales"}{" "}
              pour des entreprises québécoises.{" "}
              <Link href="/" style={{ color: "#498f6d" }} className="underline-offset-2 hover:underline">
                Lannkin, agence web à Laval
              </Link>
              , conçoit des sites web performants qui génèrent des résultats concrets : plus de
              trafic organique, plus de leads et plus de ventes.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              Vous avez un projet web similaire ? Contactez notre{" "}
              <Link href="/" style={{ color: "#498f6d" }} className="underline-offset-2 hover:underline">
                agence web à Laval
              </Link>{" "}
              pour une consultation gratuite. Nous analysons votre marché, votre concurrence et
              vos objectifs pour vous proposer la solution digitale la plus adaptée à votre budget.
            </p>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROJETS SIMILAIRES
      ═══════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section className="pb-20">
          <div
            className="mb-12 h-px w-full"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
          />
          <Container>
            <h2 className="mb-8 font-heading text-xl font-bold" style={{ color: "#FFFFFF" }}>
              Autres réalisations —{" "}
              <span style={{ color: "#498f6d" }}>{project.categoryLabel}</span>
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/realisations/${rel.slug}/`}
                  className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {/* Miniature si disponible */}
                  {rel.previewImage && (
                    <div className="mb-4 h-32 overflow-hidden rounded-xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.previewImage}
                        alt={rel.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        style={{ opacity: 0.75 }}
                      />
                    </div>
                  )}
                  <p className="mb-1 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                    {rel.sector}
                  </p>
                  <h3
                    className="font-heading font-bold transition-colors group-hover:text-[#498f6d]"
                    style={{ color: "#FFFFFF" }}
                  >
                    {rel.name}
                  </h3>
                  <p
                    className="mt-1.5 line-clamp-2 text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    {rel.shortDescription}
                  </p>
                  {rel.results[0] && (
                    <p className="mt-3 text-xs font-semibold" style={{ color: "#498f6d" }}>
                      {rel.results[0]}
                    </p>
                  )}
                  <div
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ color: "#498f6d" }}
                  >
                    Voir le projet <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}

// ─── Composant bloc contenu ───────────────────────────────────────────────────

function ContentBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2
        className="mb-3 font-heading text-lg font-bold"
        style={{ color: "#FFFFFF" }}
      >
        {title}
      </h2>
      <div
        className="h-px w-8 mb-4"
        style={{ background: "linear-gradient(to right, rgba(73,143,109,0.5), transparent)" }}
      />
      <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
        {body}
      </p>
    </div>
  );
}
