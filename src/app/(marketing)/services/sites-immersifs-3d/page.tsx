import type { Metadata } from "next";

import {
  ArrowRight,
  Box,
  CheckCircle2,
  Code2,
  ExternalLink,
  Eye,
  Film,
  FolderOpen,
  Layers,
  RotateCw,
  Sparkles,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getSubServices } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";
import { HeroVideoScroll } from "@/presentation/components/hero/HeroVideoScroll";

export const metadata: Metadata = {
  title: "Sites Immersifs 3D | Three.js WebGL React Three Fiber | LANNKIN Paris",
  description:
    "Agence parisienne spécialisée en web 3D. Three.js, WebGL, React Three Fiber. Configurateurs, visites virtuelles, portfolios interactifs. Devis sous 24h.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  RotateCw: <RotateCw className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  Box: <Box className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Atom: <Code2 className="h-6 w-6" />,
  View: <Eye className="h-6 w-6" />,
  Film: <Film className="h-6 w-6" />,
  Store: <Store className="h-6 w-6" />,
  FolderOpen: <FolderOpen className="h-6 w-6" />,
};

const USE_CASES = [
  {
    title: "E-commerce & Retail",
    description:
      "Configurateurs produit, vues 360° et essayages virtuels pour réduire les retours d'environ 40 % et faire grimper le panier moyen.",
    icon: <Store className="h-6 w-6" />,
  },
  {
    title: "Immobilier & Architecture",
    description:
      "Visites immersives 360°, maquettes interactives et showrooms numériques qui font vendre avant même le premier coup de pioche.",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    title: "Automobile & Industrie",
    description:
      "Configurateurs véhicules, démonstrations de pièces et modules de formation immersifs compatibles WebXR.",
    icon: <RotateCw className="h-6 w-6" />,
  },
  {
    title: "Agences & Créatifs",
    description:
      "Portfolios interactifs, landing pages immersives et sites d'agence qui racontent une histoire au lieu de la décrire.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];

const TECH_FEATURES = [
  "Three.js et React Three Fiber (R3F)",
  "Shaders GLSL écrits à la main",
  "Post-processing et effets bloom",
  "Systèmes de particules et physique",
  "Animations pilotées par le scroll",
  "Optimisation mobile et LOD adaptatif",
  "Formats glTF 2.0 et compression Draco",
  "Compatibilité WebXR et réalité augmentée",
];

const STATS = [
  { value: "×3", label: "Engagement face aux sites statiques" },
  { value: "−40 %", label: "Retours produit grâce au configurateur" },
  { value: "85 %", label: "Préfèrent l'expérience 3D interactive" },
  { value: "60 ips", label: "Fluidité ciblée sur mobile" },
];

export default function SitesImmersifs3dPage() {
  const subServices = getSubServices("sites-immersifs-3d");

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* ═══════════════════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp" overlay={0.85} />
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-secondary/5 blur-[120px]" />
          </div>
          <Container>
            <div className="mx-auto max-w-4xl">
              <Link
                href="/services/"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#2d2d2d]/70 transition-colors hover:text-accent"
              >
                &larr; Retour aux services
              </Link>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Box className="h-7 w-7" />
                </div>
                <div>
                  <h1 className="font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
                    Le web en{" "}
                    <span className="text-accent">volume</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/70">
                    Donnez du relief à votre site. Avec Three.js, WebGL et
                    React Three Fiber, nous imaginons des expériences
                    interactives qui captent l&apos;attention et restent
                    gravées dans les mémoires.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
                >
                  Parler de votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/developpement-saas/"
                  className="bg-white border border-[#2d2d2d]/[0.08] inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium text-[#2d2d2d] transition-colors hover:text-accent"
                >
                  Découvrir nos SaaS
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. STATS
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-[#2d2d2d]/[0.08] bg-[#ede9e1] py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[#2d2d2d]/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. CASE STUDY — Montecarlo Designs (preuve sociale)
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24">
        <Container>
          <div className="mb-12">
            <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
              Zoom sur un projet
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Montecarlo Designs, le mobilier de luxe en 3D
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#2d2d2d]/70">
              Modélisation complète sous Blender de tables en marbre pour un
              e-commerce haut-de-gamme monégasque. Intégration WebGL et GLB
              pour un atout SEO rare sur ce marché.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Rendu 3D */}
            <div className="overflow-hidden rounded-2xl border border-[#2d2d2d]/[0.08]">
              <Image
                src="/images/services/conception de site web/shopify/rendu3Dmonaco.webp"
                alt="Rendu 3D Blender — table en marbre Montecarlo Designs Monaco"
                width={800}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Détails */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="glass rounded-xl p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-[#2d2d2d]">
                  Modélisation Blender sur-mesure
                </h3>
                <p className="text-sm leading-relaxed text-[#2d2d2d]/70">
                  Chaque pièce de mobilier a été sculptée à la main sous
                  Blender, sans recours à l&apos;IA générative. Un travail
                  d&apos;orfèvre pour une fidélité visuelle irréprochable sur
                  chaque produit.
                </p>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="mb-2 font-heading text-lg font-semibold text-[#2d2d2d]">
                  SEO 3D — format GLB indexable
                </h3>
                <p className="text-sm leading-relaxed text-[#2d2d2d]/70">
                  Les modèles sont exportés en WebGL et GLB, un format
                  directement indexé par Google et affiché dans les résultats
                  de recherche. Un différenciateur décisif pour le luxe en
                  ligne.
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-[#2d2d2d]/[0.08]">
                  <Image
                    src="/images/services/conception de site web/shopify/montecarloglb.png"
                    alt="Modèle 3D GLB indexé par Google — Montecarlo Designs"
                    width={600}
                    height={340}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/realisations/montecarlo-designs/"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
                >
                  Voir l&apos;étude complète
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://montecarlo-designs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#2d2d2d]/[0.10] px-5 py-2.5 text-sm font-medium text-[#2d2d2d]/70 transition-colors hover:text-[#2d2d2d]"
                >
                  Visiter le site
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. USE CASES
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-[#2d2d2d]/[0.08] bg-[#ede9e1] py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Secteurs activés
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
            La 3D, au service de chaque marché.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {USE_CASES.map((useCase) => (
              <div key={useCase.title} className="glass rounded-xl p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {useCase.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#2d2d2d]">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/70">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. SUB-SERVICES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
              Nos champs d&apos;intervention
            </h2>
            <p className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Dix leviers pour des parcours en volume
            </p>
          </div>

          {/* Scroll-controlled 3D video showcase */}
          <HeroVideoScroll>
            <Container>
              <div className="text-center">
                <h3 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
                  L&apos;immersion démarre maintenant
                </h3>
                <p className="mt-3 text-base text-[#2d2d2d]/70">
                  Faites défiler : la scène se dévoile exactement comme
                  elle le ferait pour vos futurs visiteurs.
                </p>
              </div>
            </Container>
          </HeroVideoScroll>

          <div className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/sites-immersifs-3d/${sub.slug}/`}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  {ICON_MAP[sub.icon] ?? <Code2 className="h-6 w-6" />}
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#2d2d2d] transition-colors group-hover:text-accent">
                  {sub.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/70">
                  {sub.shortDescription}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Approfondir
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. TECH & FEATURES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                Notre stack technique
              </h2>
              <p className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Des outils 3D à la pointe
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#2d2d2d]/70">
                Nous sélectionnons les technologies web 3D les plus
                performantes pour garantir des scènes fluides sur desktop,
                mobile et casques immersifs.
              </p>
              <Link
                href="/devis-gratuit/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Demander une démo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-4">
              {TECH_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-base text-[#2d2d2d]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. CTA FINAL
      ═══════════════════════════════════════════════════════ */}
      <section className="border-y border-[#2d2d2d]/[0.08] bg-[#ede9e1] py-24">
        <Container>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              Prêt à marquer les esprits ?
            </h2>
            <p className="mt-4 text-lg text-[#2d2d2d]/70">
              Partagez-nous votre vision. Nous la traduirons en une
              expérience 3D qui convertit — premier échange stratégique
              offert.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Lancer mon projet 3D
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/60 bg-transparent px-8 py-4 text-lg font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
              >
                Prendre contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
