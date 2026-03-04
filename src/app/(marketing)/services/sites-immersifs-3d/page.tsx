import type { Metadata } from "next";

import {
  ArrowRight,
  Box,
  CheckCircle2,
  Code2,
  Eye,
  Film,
  FolderOpen,
  Layers,
  RotateCw,
  Sparkles,
  Store,
} from "lucide-react";
import Link from "next/link";

import { getSubServices } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Sites Immersifs 3D | Three.js WebGL React Three Fiber | LANNKIN Laval",
  description:
    "Sites immersifs et 3D à Laval. Three.js, WebGL, React Three Fiber. Configurateurs 3D, visites virtuelles, showrooms. Devis gratuit.",
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
      "Configurateurs produit 3D, vues 360° et essayages virtuels qui réduisent les retours de 40%.",
    icon: <Store className="h-6 w-6" />,
  },
  {
    title: "Immobilier & Architecture",
    description:
      "Visites virtuelles 360°, maquettes interactives et showrooms qui vendent avant la construction.",
    icon: <Eye className="h-6 w-6" />,
  },
  {
    title: "Automobile & Industrie",
    description:
      "Configurateurs véhicules, visualisation de pièces et formations immersives en WebXR.",
    icon: <RotateCw className="h-6 w-6" />,
  },
  {
    title: "Agences & Créatifs",
    description:
      "Portfolios 3D interactifs, landing pages immersives et sites d'agence qui marquent les esprits.",
    icon: <Sparkles className="h-6 w-6" />,
  },
];

const TECH_FEATURES = [
  "Three.js / React Three Fiber (R3F)",
  "Shaders GLSL personnalisés",
  "Post-processing & bloom effects",
  "Particle systems & physics",
  "Scroll-driven animations",
  "Optimisation mobile & LOD",
  "glTF / GLTF 2.0 & Draco compression",
  "WebXR / AR prêt pour le futur",
];

const STATS = [
  { value: "3x", label: "Plus d'engagement vs sites classiques" },
  { value: "-40%", label: "Retours produit avec configurateur 3D" },
  { value: "85%", label: "Des visiteurs préfèrent le 3D interactif" },
  { value: "60fps", label: "Performance ciblée sur mobile" },
];

export default function SitesImmersifs3dPage() {
  const subServices = getSubServices("sites-immersifs-3d");

  return (
    <main>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-lateral.png" overlay={0.55} />
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-secondary/5 blur-[120px]" />
          </div>
          <Container>
            <div className="mx-auto max-w-4xl">
              <Link
                href="/services/"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#CCCCCC] transition-colors hover:text-accent"
              >
                &larr; Tous les services
              </Link>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Box className="h-7 w-7" />
                </div>
                <div>
                  <h1 className="font-heading text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                    Sites Immersifs{" "}
                    <span className="text-accent">3D</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#CCCCCC]">
                    Créez des expériences web qui transcendent le scroll classique.
                    Three.js, WebGL, React Three Fiber — nous transformons votre site
                    en une expérience que vos visiteurs n&apos;oublieront pas.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
                >
                  Discuter de votre projet 3D
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/developpement-saas/"
                  className="glass-dark inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium text-[#FFFFFF] transition-colors hover:text-accent"
                >
                  Explorer le SaaS
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-surface-light py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sub-services */}
      <section className="py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Nos expertises 3D
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            10 spécialités pour des expériences immersives
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/sites-immersifs-3d/${sub.slug}/`}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  {ICON_MAP[sub.icon] ?? <Code2 className="h-6 w-6" />}
                </div>
                <h3 className="font-heading text-lg font-semibold text-white transition-colors group-hover:text-accent">
                  {sub.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {sub.shortDescription}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="border-y border-white/5 bg-surface-light py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Cas d&apos;usage
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            La 3D au service de votre industrie
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {USE_CASES.map((useCase) => (
              <div key={useCase.title} className="glass rounded-xl p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {useCase.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {useCase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech & Features */}
      <section className="py-24">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                Technologies
              </h2>
              <p className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Stack 3D de pointe
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Nous utilisons les technologies les plus avancées du web 3D pour
                créer des expériences performantes sur tous les appareils.
              </p>
              <Link
                href="/devis-gratuit/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Obtenir une démo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-4">
              {TECH_FEATURES.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-base text-white">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-y border-white/5 bg-surface-light py-24">
        <Container>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à impressionner vos visiteurs?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Montrez-nous votre vision. Nous la transformerons en une expérience 3D
              qui convertit — premier call stratégique offert.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Démarrer mon projet 3D
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-accent/60 bg-transparent px-8 py-4 text-lg font-semibold text-accent transition-colors hover:border-accent hover:bg-accent/10"
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
