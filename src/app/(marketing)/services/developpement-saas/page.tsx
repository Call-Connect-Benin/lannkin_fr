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
  title: "Développement SaaS & Applications sur-mesure | Lannkin Paris",
  description:
    "Studio parisien de développement SaaS. Applications web, mobiles, MVPs, APIs — une architecture pensée pour scaler. Premier appel offert.",
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
    title: "Cadrage produit",
    description:
      "On creuse votre problème, on challenge le scope et on pose les bons fondamentaux techniques avant la première ligne de code.",
  },
  {
    step: "02",
    title: "Design orienté usage",
    description:
      "Prototypes cliquables, parcours utilisateurs, interface calibrée pour l'activation et la rétention — pas juste pour le show.",
  },
  {
    step: "03",
    title: "Itérations courtes",
    description:
      "Sprints de deux semaines, démos régulières, code review et tests automatisés. Vous voyez le produit avancer semaine après semaine.",
  },
  {
    step: "04",
    title: "Mise en production & suivi",
    description:
      "Déploiement maîtrisé, observabilité, optimisations continues. On reste à vos côtés pour itérer avec les vrais utilisateurs.",
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
  "Architecture multi-tenant prête à scaler",
  "Authentification robuste (SSO, OAuth, 2FA)",
  "Facturation et abonnements Stripe clé en main",
  "Tableau de bord analytics en temps réel",
  "API REST ou GraphQL entièrement documentée",
  "CI/CD et tests automatisés dès le premier commit",
  "Maintenance et support après la mise en ligne",
  "Code source 100 % vous appartient",
];

export default function DeveloppementSaasPage() {
  const subServices = getSubServices("developpement-saas");

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      {/* Hero */}
      <section className="parallax-section relative overflow-hidden py-24 sm:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-rocket-cubes-gris.webp" overlay={0.85} />
        <div className="relative z-10">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Link
                href="/services/"
                className="mb-6 inline-flex items-center gap-1 text-sm text-[#2d2d2d]/70 transition-colors hover:text-accent"
              >
                &larr; Tous les services
              </Link>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Rocket className="h-7 w-7" />
                </div>
                <div>
                  <h1 className="font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl lg:text-6xl">
                    Votre produit{" "}
                    <span className="text-accent">SaaS</span>, livré pour durer.
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/70">
                    Studio parisien spécialisé en plateformes SaaS, applications mobiles
                    et MVPs de startups. On transforme une idée en produit solide,
                    bâti pour encaisser la croissance — pas juste pour la démo.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/devis-gratuit/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
                >
                  Parler de mon projet
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/sites-immersifs-3d/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2d2d2d]/[0.10] bg-white/5 px-6 py-3 text-base font-medium text-[#2d2d2d] backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Voir le 3D immersif
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Sub-services */}
      <section className="bg-[#ede9e1] border-y border-[#2d2d2d]/[0.08] py-24">
        <Container>
          <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
            Nos terrains de jeu
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
            Quatre piliers pour donner corps à votre idée
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
                <h3 className="font-heading text-xl font-semibold text-[#2d2d2d] transition-colors group-hover:text-accent">
                  {sub.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/70">
                  {sub.shortDescription}
                </p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Explorer
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
            Notre méthode
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
            De l&apos;idée à la mise en ligne, en quatre temps
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="relative">
                <span className="font-mono text-5xl font-bold text-accent/10">
                  {step.step}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-[#2d2d2d]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages */}
      <section className="bg-[#ede9e1] border-y border-[#2d2d2d]/[0.08] py-24">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-accent">
                Pourquoi Lannkin
              </h2>
              <p className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
                Un studio qui pense produit, pas juste code
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#2d2d2d]/70">
                Plus de dix ans à construire des produits digitaux qui tiennent la
                charge. On ne livre pas un dépôt Git : on livre un business en ordre
                de marche, prêt à accueillir ses premiers utilisateurs.
              </p>
              <Link
                href="/devis-gratuit/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-base font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Recevoir une estimation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-4">
              {ADVANTAGES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-base text-[#2d2d2d]">{item}</span>
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
            Sous le capot
          </h2>
          <p className="mb-12 max-w-2xl font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
            Des technologies modernes, choisies pour durer
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="glass flex flex-col items-center gap-2 rounded-xl px-4 py-6 text-center"
              >
                <Cloud className="h-5 w-5 text-accent" />
                <span className="font-heading text-sm font-semibold text-[#2d2d2d]">
                  {tech.name}
                </span>
                <span className="text-xs text-[#2d2d2d]/70">{tech.category}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#ede9e1] border-y border-[#2d2d2d]/[0.08] py-24">
        <Container>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center sm:p-12">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl">
              On transforme votre idée en produit&nbsp;?
            </h2>
            <p className="mt-4 text-lg text-[#2d2d2d]/70">
              Premier échange stratégique offert. On repart ensemble avec un plan
              d&apos;action concret, des ordres de grandeur budget, et aucune
              obligation d&apos;aller plus loin.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/devis-gratuit/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-on-accent shadow-[0_0_20px_rgba(73,143,109,0.15)] transition-all duration-200 hover:brightness-110"
              >
                Lancer mon projet
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
