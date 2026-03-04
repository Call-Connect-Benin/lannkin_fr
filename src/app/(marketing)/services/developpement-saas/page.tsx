import type { Metadata } from "next";

import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Globe,
  Plug,
  Rocket,
  Smartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { getSubServices } from "@/data/services";
import { Container } from "@/presentation/components/ui/Container";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

export const metadata: Metadata = {
  title: "Développement SaaS & Applications | LANNKIN Laval",
  description:
    "Développement SaaS et applications à Laval. Apps web, mobiles, MVPs startup, APIs. De l'idée au produit scalable. Devis gratuit.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-6 w-6" />,
  Smartphone: <Smartphone className="h-6 w-6" />,
  Zap: <Zap className="h-6 w-6" />,
  Plug: <Plug className="h-6 w-6" />,
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Découverte & Stratégie",
    description:
      "Analyse de vos besoins, étude de marché, définition du scope fonctionnel et choix technologiques.",
  },
  {
    step: "02",
    title: "Design UX/UI",
    description:
      "Wireframes, prototypes interactifs et design d'interface pensé pour la conversion et la rétention.",
  },
  {
    step: "03",
    title: "Développement Agile",
    description:
      "Sprints de 2 semaines, code review, CI/CD, tests automatisés. Vous suivez chaque avancée en temps réel.",
  },
  {
    step: "04",
    title: "Lancement & Scale",
    description:
      "Déploiement, monitoring, optimisation des performances. Puis itération basée sur les retours utilisateurs.",
  },
];

const TECH_STACK = [
  { name: "Next.js / React", category: "Frontend" },
  { name: "TypeScript", category: "Langage" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Base de données" },
  { name: "Prisma", category: "ORM" },
  { name: "Stripe", category: "Paiements" },
  { name: "Vercel", category: "Déploiement" },
  { name: "AWS / GCP", category: "Cloud" },
  { name: "Docker", category: "Containers" },
  { name: "React Native", category: "Mobile" },
  { name: "Redis", category: "Cache" },
  { name: "Resend", category: "Emails" },
];

const ADVANTAGES = [
  "Architecture multi-tenant scalable",
  "Authentification sécurisée (SSO, OAuth, 2FA)",
  "Billing et abonnements Stripe intégrés",
  "Dashboard analytics temps réel",
  "API RESTful et/ou GraphQL documentée",
  "CI/CD et tests automatisés dès le jour 1",
  "Support et maintenance post-lancement",
  "Code source 100% propriétaire",
];

export default function DeveloppementSaasPage() {
  const subServices = getSubServices("developpement-saas");

  return (
    <main>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-rocket-cubes-gris.png" overlay={0.55} />
        <div className="relative z-10">
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
                  <Rocket className="h-7 w-7" />
                </div>
                <div>
                  <h1 className="font-heading text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                    Développement{" "}
                    <span className="text-accent">SaaS</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#CCCCCC]">
                    De l&apos;idée au produit scalable. Nous développons des applications
                    SaaS, mobiles et MVPs qui transforment votre vision en business
                    rentable — avec une architecture pensée pour la croissance.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
                >
                  Discuter de votre projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/sites-immersifs-3d/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-[#FFFFFF] backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Explorer le 3D immersif
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-surface-light border-y border-white/5 py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Nos expertises
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            4 piliers pour concrétiser votre produit digital
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/services/developpement-saas/${sub.slug}/`}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.08)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  {ICON_MAP[sub.icon] ?? <Code2 className="h-6 w-6" />}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-accent">
                  {sub.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {sub.shortDescription}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Découvrir
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Notre processus
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Du concept au déploiement en 4 étapes
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-mono text-5xl font-bold text-accent/10">
                  {step.step}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <section className="bg-surface-light border-y border-white/5 py-24">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                Pourquoi Lannkin
              </h2>
              <p className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ce qui fait la différence
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                10+ ans d&apos;expérience en développement produit. Nous ne
                construisons pas juste du code — nous construisons des business.
              </p>
              <Link
                href="/devis-gratuit/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Obtenir une estimation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-4">
              {ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-base text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Stack technique
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies modernes et éprouvées
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="glass flex flex-col items-center gap-2 rounded-xl px-4 py-6 text-center"
              >
                <Cloud className="h-5 w-5 text-accent" />
                <span className="font-heading text-sm font-semibold text-white">
                  {tech.name}
                </span>
                <span className="text-xs text-muted">{tech.category}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-surface-light border-y border-white/5 py-24">
        <Container>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à lancer votre produit SaaS?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Discutons de votre idée. Premier appel stratégique offert —
              on vous donne un plan d&apos;action concret, sans engagement.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Démarrer mon projet
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
