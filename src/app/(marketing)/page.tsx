import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Globe2,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
  Zap,
} from "lucide-react";

import {
  BLOG_PREVIEW,
  COMMUNITY,
  CTA_SECTION,
  FEATURED_SERVICES,
  FOOTPRINT,
  HERO,
  NATIVE_ADS,
  OFFERS_SPOTLIGHT,
  PAID_LANDSCAPE,
  PRICING_PREVIEW,
  RND_SCRIPTS,
  SECTORS_PREVIEW,
  SHORT_FORM_VIDEO,
  TESTIMONIALS,
  WHY_LANNKIN,
} from "@/data/homepage";
import { GoogleMapsWidget } from "@/presentation/components/layout/GoogleMapsWidget";
import { LeadCaptureForm } from "@/presentation/components/forms/LeadCaptureForm";
import ShowcaseCards from "@/presentation/components/home/ShowcaseCards";
import { Button } from "@/presentation/components/ui";
import { Container } from "@/presentation/components/ui/Container";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";

export const metadata: Metadata = {
  title: "Agence Marketing Digital Paris | Lannkin",
  description:
    "Agence marketing digital basee a Paris. Referencement, Google Ads, creation web et IA pour les PME francaises. Devis gratuit sous 24h, resultats mesurables. Parlons de votre projet avec Lannkin.",
};

const CLIENT_LOGOS = Array.from(
  { length: 29 },
  (_, i) => `logo-client-${String(i + 1).padStart(2, "0")}.png`,
);

const QUICK_PROOFS = [
  "Google Partner et expertises multi-plateformes",
  "Offres express a partir de 200EUR",
  "R&D interne pour scripts et optimisations",
] as const;

function SectionIntro({
  badge,
  title,
  subtitle,
  align = "left",
  tone = "light",
}: {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className="font-mono text-xs font-semibold uppercase tracking-[0.24em]"
        style={{ color: dark ? "#7cc59f" : "#498f6d" }}
      >
        {badge}
      </p>
      <h2
        className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        style={{ color: dark ? "#FFFFFF" : "#2d2d2d" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base leading-relaxed sm:text-lg"
          style={{ color: dark ? "rgba(255,255,255,0.74)" : "rgba(45,45,45,0.68)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function OfferCard({
  title,
  price,
  description,
  bullets,
  href,
  accent,
}: (typeof OFFERS_SPOTLIGHT.items)[number]) {
  const tones = {
    green: {
      card: "linear-gradient(145deg, rgba(73,143,109,0.14), rgba(73,143,109,0.04))",
      pill: "rgba(73,143,109,0.12)",
      border: "rgba(73,143,109,0.18)",
    },
    paper: {
      card: "linear-gradient(145deg, rgba(255,255,255,0.92), rgba(237,233,225,0.7))",
      pill: "rgba(45,45,45,0.06)",
      border: "rgba(45,45,45,0.10)",
    },
    dark: {
      card: "linear-gradient(145deg, rgba(45,45,45,0.98), rgba(45,45,45,0.88))",
      pill: "rgba(255,255,255,0.1)",
      border: "rgba(255,255,255,0.08)",
    },
  } as const;

  const palette = tones[accent];
  const dark = accent === "dark";

  return (
    <div
      className="flex h-full flex-col rounded-[28px] p-6 shadow-[0_24px_80px_rgba(45,45,45,0.08)]"
      style={{
        background: palette.card,
        border: `1px solid ${palette.border}`,
        color: dark ? "#FFFFFF" : "#2d2d2d",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{
              backgroundColor: palette.pill,
              color: dark ? "rgba(255,255,255,0.85)" : "#498f6d",
            }}
          >
            Offre immediate
          </p>
          <h3 className="mt-4 font-heading text-2xl font-bold">{title}</h3>
        </div>
        <div
          className="rounded-2xl px-4 py-3 text-right"
          style={{
            backgroundColor: dark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.75)",
            border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(45,45,45,0.08)"}`,
          }}
        >
          <div className="font-heading text-2xl font-bold">{price}</div>
          <div className="text-xs uppercase tracking-[0.16em] opacity-60">Point d'entree</div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed opacity-82">{description}</p>

      <div className="mt-6 space-y-2">
        {bullets.map((bullet) => (
          <div key={bullet} className="flex items-center gap-2 text-sm">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{
                backgroundColor: dark ? "rgba(255,255,255,0.12)" : "rgba(73,143,109,0.12)",
              }}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span>{bullet}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Button
          href={href}
          variant={dark ? "secondary" : "primary"}
          size="sm"
          className={dark ? "border-white/30 text-white hover:bg-white/10" : "w-full sm:w-auto"}
        >
          Voir le detail
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f7f5f0] text-[#2d2d2d]">
      <section className="relative overflow-hidden border-b border-[#2d2d2d]/8 pb-20 pt-24 lg:pb-24 lg:pt-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(73,143,109,0.14),transparent_36%),radial-gradient(circle_at_80%_20%,rgba(133,53,62,0.08),transparent_28%)]" />
          <div className="absolute right-[-12%] top-[-8%] h-[420px] w-[420px] rounded-full bg-[#498f6d]/10 blur-[120px]" />
          <div className="absolute left-[-10%] top-[28%] h-[320px] w-[320px] rounded-full bg-[#85353e]/8 blur-[120px]" />
          <div className="absolute bottom-[-120px] right-[8%] h-[520px] w-[520px] overflow-hidden rounded-full opacity-35">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10" size="xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(360px,460px)] lg:items-start xl:grid-cols-[minmax(0,1.28fr)_minmax(380px,500px)]">
            <div className="max-w-[46rem] xl:pr-4">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-[#498f6d]/20 bg-white/80 px-4 py-2 shadow-[0_12px_30px_rgba(45,45,45,0.05)] backdrop-blur">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#498f6d]" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#498f6d]">
                  {HERO.badge}
                </span>
                <span className="hidden text-[#2d2d2d]/20 sm:inline">|</span>
                <span className="text-xs font-medium text-[#2d2d2d]/60">
                  Strategie locale, execution orientee resultats
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl font-heading text-[2.85rem] font-bold leading-[0.95] tracking-[-0.04em] text-[#2d2d2d] sm:text-[4.2rem] xl:text-[5.1rem]">
                L'agence qui rend votre
                <span className="block text-[#498f6d]">croissance impossible a ignorer.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#2d2d2d]/72 sm:text-xl">
                {HERO.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {QUICK_PROOFS.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#2d2d2d]/10 bg-white/70 px-4 py-2 text-sm text-[#2d2d2d]/70 backdrop-blur"
                  >
                    <Check className="h-4 w-4 text-[#498f6d]" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={HERO.cta.primary.href} size="lg">
                  {HERO.cta.primary.label}
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href={HERO.cta.secondary.href} variant="secondary" size="lg">
                  {HERO.cta.secondary.label}
                </Button>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-4">
                {HERO.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`rounded-[24px] border p-4 shadow-[0_18px_35px_rgba(45,45,45,0.05)] ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(145deg, rgba(73,143,109,0.12), rgba(255,255,255,0.9))"
                          : "rgba(255,255,255,0.82)",
                      borderColor: "rgba(45,45,45,0.08)",
                    }}
                  >
                    <div className="font-heading text-3xl font-bold text-[#2d2d2d]">{stat.value}</div>
                    <div className="mt-1 text-sm text-[#2d2d2d]/58">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <GoogleMapsWidget variant="light" />
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="mx-auto w-full max-w-[500px] rounded-[32px] border border-[#2d2d2d]/10 bg-white/92 p-4 shadow-[0_30px_90px_rgba(45,45,45,0.12)] backdrop-blur sm:p-6">
                <div className="mb-5 grid gap-3 sm:grid-cols-2">
                  {OFFERS_SPOTLIGHT.items.slice(0, 2).map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-[#2d2d2d]/8 bg-[#f7f5f0] p-4"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#498f6d]">
                        {item.title}
                      </div>
                      <div className="mt-2 font-heading text-2xl font-bold text-[#2d2d2d]">
                        {item.price}
                      </div>
                      <div className="mt-2 text-xs leading-relaxed text-[#2d2d2d]/58">
                        {item.bullets[0]}
                      </div>
                    </div>
                  ))}
                </div>

                <LeadCaptureForm
                  title="Recevez un plan d'action sur-mesure"
                  subtitle="Parlez-nous de votre contexte. Un expert Lannkin vous recontacte avec une recommandation claire, un budget et un angle d'attaque."
                />

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#498f6d]/10 px-3 py-1.5 text-xs font-medium text-[#498f6d]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Sans engagement
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#2d2d2d]/6 px-3 py-1.5 text-xs font-medium text-[#2d2d2d]/65">
                    <Zap className="h-3.5 w-3.5 text-[#498f6d]" />
                    Reponse humaine
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#2d2d2d]/8 py-20">
        <Container size="xl">
          <SectionIntro
            badge={OFFERS_SPOTLIGHT.badge}
            title={OFFERS_SPOTLIGHT.title}
            subtitle={OFFERS_SPOTLIGHT.subtitle}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {OFFERS_SPOTLIGHT.items.map((item) => (
              <OfferCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <ShowcaseCards />

      <section className="relative overflow-hidden border-y border-[#2d2d2d]/8 bg-[#ede9e1] py-20">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute right-0 top-0 h-full w-[40%] opacity-25">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rendu3D/rendu3d-cubes-logo-lk-lateral.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10" size="xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionIntro
                badge={FOOTPRINT.badge}
                title={FOOTPRINT.title}
                subtitle={FOOTPRINT.subtitle}
              />

              <div className="mt-10 space-y-4">
                {FOOTPRINT.markets.map((market) => (
                  <div
                    key={market.name}
                    className="rounded-[26px] border border-[#2d2d2d]/8 bg-white/80 p-5 shadow-[0_18px_50px_rgba(45,45,45,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                        <Globe2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">{market.name}</h3>
                        <p className="mt-1 text-sm text-[#2d2d2d]/62">{market.focus}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {market.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-[#2d2d2d]/8 bg-[#f7f5f0] px-3 py-1.5 text-xs font-medium text-[#2d2d2d]/66"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionIntro
                badge={WHY_LANNKIN.badge}
                title={WHY_LANNKIN.title}
                subtitle={WHY_LANNKIN.subtitle}
              />

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {WHY_LANNKIN.points.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-[28px] border border-[#2d2d2d]/8 bg-white p-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                      <LucideIcon name={point.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-bold text-[#2d2d2d]">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/66">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro
              badge="Ils nous font confiance"
              title="La preuve sociale merite plus qu'une simple ligne de logos."
              subtitle="On garde la sobrie te de la charte, mais on donne plus de densite a la confiance: certifications visibles, references et signature premium."
            />
            <div className="flex flex-wrap gap-3">
              {["Google Partner", "Meta Business Partner", "Shopify Partners"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#2d2d2d]/8 bg-white px-4 py-2 text-sm font-medium text-[#2d2d2d]/70 shadow-[0_14px_26px_rgba(45,45,45,0.04)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-[32px] border border-[#2d2d2d]/8 bg-[#2d2d2d] p-6 shadow-[0_24px_60px_rgba(45,45,45,0.06)]">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-10">
              {CLIENT_LOGOS.map((file) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={file}
                  src={`/images/logo-client/${file}`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-full object-contain opacity-50 brightness-0 invert transition-all duration-300 hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#2d2d2d]/8 bg-[#ede9e1] py-20">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionIntro
              badge={RND_SCRIPTS.badge}
              title={RND_SCRIPTS.title}
              subtitle={RND_SCRIPTS.subtitle}
            />

            <div className="grid gap-5">
              {RND_SCRIPTS.items.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-[#2d2d2d]/8 bg-white/80 p-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                      {index === 0 ? (
                        <ShieldCheck className="h-5 w-5" />
                      ) : index === 1 ? (
                        <Target className="h-5 w-5" />
                      ) : (
                        <Sparkles className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#2d2d2d]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/68">{item.description}</p>
                      <div className="mt-4 inline-flex rounded-full border border-[#2d2d2d]/10 bg-[#f7f5f0] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#2d2d2d]/65">
                        {item.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="xl">
          <SectionIntro
            badge={FEATURED_SERVICES.badge}
            title={FEATURED_SERVICES.title}
            subtitle="Les offres les plus strategiques apparaissent tout de suite, avec une lecture orientee resultats plutot qu'une simple liste de services."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {FEATURED_SERVICES.services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-[30px] border border-[#2d2d2d]/8 bg-white p-6 shadow-[0_20px_55px_rgba(45,45,45,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(45,45,45,0.1)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                      <LucideIcon name={service.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl font-bold text-[#2d2d2d] group-hover:text-[#498f6d]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#2d2d2d]/66">
                      {service.description}
                    </p>
                  </div>
                  <div className="rounded-[24px] border border-[#2d2d2d]/8 bg-[#f7f5f0] px-4 py-3 text-right">
                    <div className="font-heading text-2xl font-bold text-[#498f6d]">
                      {service.stat.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#2d2d2d]/46">
                      {service.stat.label}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#2d2d2d]/8 bg-[#ede9e1] py-20">
        <Container size="xl">
          <SectionIntro
            badge={PAID_LANDSCAPE.badge}
            title={PAID_LANDSCAPE.title}
            subtitle={PAID_LANDSCAPE.subtitle}
            align="center"
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {PAID_LANDSCAPE.categories.map((category) => (
              <div
                key={category.name}
                className="rounded-[30px] border border-[#2d2d2d]/8 bg-white p-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                  <LucideIcon name={category.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#2d2d2d]">{category.name}</h3>
                <p className="mt-2 text-sm font-medium text-[#498f6d]">{category.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#2d2d2d]/66">{category.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.platforms.map((platform) => (
                    <span
                      key={platform.name}
                      className="rounded-full border border-[#2d2d2d]/8 bg-[#f7f5f0] px-3 py-1.5 text-xs font-medium text-[#2d2d2d]/68"
                    >
                      {platform.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="xl">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-[34px] border border-[#2d2d2d]/8 bg-white p-8 shadow-[0_22px_60px_rgba(45,45,45,0.06)]">
              <SectionIntro
                badge={NATIVE_ADS.badge}
                title={NATIVE_ADS.title}
                subtitle={NATIVE_ADS.subtitle}
              />
              <div className="mt-8 space-y-3">
                {NATIVE_ADS.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#498f6d]/10 text-[#498f6d]">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-[#2d2d2d]/68">{bullet}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {NATIVE_ADS.trustedBy.map((brand) => (
                  <span
                    key={brand.name}
                    className="rounded-full border border-[#2d2d2d]/8 bg-[#f7f5f0] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2d2d2d]/62"
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Button href={NATIVE_ADS.cta.href} size="md">
                  {NATIVE_ADS.cta.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-[34px] border border-[#498f6d]/14 bg-[linear-gradient(145deg,rgba(73,143,109,0.12),rgba(255,255,255,0.96))] p-8 shadow-[0_22px_60px_rgba(45,45,45,0.06)]">
              <SectionIntro
                badge={SHORT_FORM_VIDEO.badge}
                title={SHORT_FORM_VIDEO.title}
                subtitle={SHORT_FORM_VIDEO.subtitle}
              />
              <div className="mt-8 grid gap-4">
                {SHORT_FORM_VIDEO.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-[24px] border border-[#2d2d2d]/8 bg-white/80 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                        <LucideIcon name={feature.icon} className="h-4 w-4" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#2d2d2d]">{feature.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/68">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {SHORT_FORM_VIDEO.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#2d2d2d]/68 shadow-[0_10px_22px_rgba(45,45,45,0.04)]"
                  >
                    {platform}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Button href={SHORT_FORM_VIDEO.cta.href} variant="secondary" size="md">
                  <Video className="h-4 w-4" />
                  {SHORT_FORM_VIDEO.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#2d2d2d]/8 bg-[#f7f5f0] py-20">
        <Container size="xl">
          <SectionIntro
            badge={TESTIMONIALS.badge}
            title={TESTIMONIALS.title}
            subtitle={TESTIMONIALS.subtitle}
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {TESTIMONIALS.items.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[30px] border border-[#2d2d2d]/8 bg-white p-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)]"
              >
                <div className="flex items-center gap-1 text-[#FBBC05]">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={`${testimonial.name}-${index}`}>★</span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-relaxed text-[#2d2d2d]/80">"{testimonial.quote}"</p>
                <div className="mt-6 border-t border-[#2d2d2d]/8 pt-4">
                  <div className="font-heading text-lg font-bold text-[#2d2d2d]">{testimonial.name}</div>
                  <div className="text-sm text-[#2d2d2d]/55">
                    {testimonial.company} · {testimonial.sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="xl">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[34px] border border-[#2d2d2d]/8 bg-white p-8 shadow-[0_24px_60px_rgba(45,45,45,0.06)]">
              <SectionIntro
                badge={PRICING_PREVIEW.badge}
                title={PRICING_PREVIEW.title}
                subtitle={PRICING_PREVIEW.subtitle}
              />
              <div className="mt-8 space-y-4">
                {PRICING_PREVIEW.featured.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-[24px] border p-5 ${
                      plan.highlighted ? "border-[#498f6d]/25 bg-[#498f6d]/8" : "border-[#2d2d2d]/8 bg-[#f7f5f0]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">{plan.name}</h3>
                        <p className="mt-2 text-sm text-[#2d2d2d]/65">{plan.description}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-heading text-2xl font-bold text-[#498f6d]">{plan.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href={PRICING_PREVIEW.cta.href} variant="secondary">
                  {PRICING_PREVIEW.cta.label}
                </Button>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[34px] border border-[#2d2d2d]/8 bg-[#ede9e1] p-8 shadow-[0_24px_60px_rgba(45,45,45,0.06)]">
                <SectionIntro
                  badge={SECTORS_PREVIEW.badge}
                  title={SECTORS_PREVIEW.title}
                  subtitle={SECTORS_PREVIEW.subtitle}
                />
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {SECTORS_PREVIEW.featured.map((sector) => (
                    <Link
                      key={sector.name}
                      href={sector.href}
                      className="group rounded-[22px] border border-[#2d2d2d]/8 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(45,45,45,0.08)]"
                    >
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                        <LucideIcon name={sector.icon} className="h-4 w-4" />
                      </div>
                      <div className="mt-3 text-sm font-semibold text-[#2d2d2d] group-hover:text-[#498f6d]">
                        {sector.name}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href={SECTORS_PREVIEW.cta.href} variant="secondary" size="sm">
                    {SECTORS_PREVIEW.cta.label}
                  </Button>
                </div>
              </div>

              <div className="rounded-[34px] border border-[#2d2d2d]/8 bg-white p-8 shadow-[0_24px_60px_rgba(45,45,45,0.06)]">
                <SectionIntro
                  badge={BLOG_PREVIEW.badge}
                  title={BLOG_PREVIEW.title}
                  subtitle={BLOG_PREVIEW.subtitle}
                />
                <div className="mt-8 grid gap-3">
                  {BLOG_PREVIEW.resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="group rounded-[22px] border border-[#2d2d2d]/8 bg-[#f7f5f0] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(45,45,45,0.08)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#498f6d]/10 text-[#498f6d]">
                          <LucideIcon name={resource.icon} className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-heading text-lg font-bold text-[#2d2d2d] group-hover:text-[#498f6d]">
                              {resource.name}
                            </h3>
                            <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#498f6d]">
                              {resource.type}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-[#2d2d2d]/66">
                            {resource.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Button href={BLOG_PREVIEW.cta.href} variant="secondary" size="sm">
                    {BLOG_PREVIEW.cta.label}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#2d2d2d]/8 bg-[#ede9e1] py-20">
        <Container size="xl">
          <div className="rounded-[36px] border border-[#498f6d]/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(73,143,109,0.08))] p-8 shadow-[0_30px_70px_rgba(45,45,45,0.08)] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <SectionIntro
                  badge={COMMUNITY.badge}
                  title={COMMUNITY.title}
                  subtitle={COMMUNITY.subtitle}
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    href={COMMUNITY.cta.youtube.href}
                    size="md"
                    className="bg-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.14)]"
                  >
                    {COMMUNITY.cta.youtube.label}
                  </Button>
                  <Button
                    href="/ressources-gratuites/"
                    variant="secondary"
                    size="md"
                  >
                    Voir les ressources
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {COMMUNITY.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-[#2d2d2d]/8 bg-white p-5 text-center shadow-[0_16px_36px_rgba(45,45,45,0.05)]"
                  >
                    <div className="font-heading text-2xl font-bold text-[#498f6d]">{stat.value}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.16em] text-[#2d2d2d]/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container size="xl">
          <div className="relative overflow-hidden rounded-[36px] border border-[#498f6d]/20 px-8 py-12 shadow-[0_34px_90px_rgba(45,45,45,0.08)] sm:px-12"
            style={{ background: "linear-gradient(135deg, rgba(73,143,109,0.10) 0%, rgba(255,255,255,0.95) 50%, rgba(237,233,225,0.90) 100%)" }}
          >
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute right-0 top-0 h-full w-[52%] opacity-60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp"
                  alt=""
                  className="h-full w-full object-cover object-left"
                />
              </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(247,245,240,1) 30%, rgba(247,245,240,0.4) 58%, transparent 80%)" }} />
            </div>

            <div className="relative z-10 max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                {CTA_SECTION.title}
              </p>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-[#2d2d2d] sm:text-5xl">
                Une direction claire, un plan commercial plus fort, et un site qui vend mieux.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#2d2d2d]/68">
                {CTA_SECTION.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={CTA_SECTION.cta.primary.href} size="lg">
                  {CTA_SECTION.cta.primary.label}
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  href={CTA_SECTION.cta.secondary.href}
                  variant="secondary"
                  size="lg"
                >
                  {CTA_SECTION.cta.secondary.label}
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {CTA_SECTION.trust.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-[#2d2d2d]/10 bg-white/70 px-4 py-2 text-sm text-[#2d2d2d]/72"
                  >
                    <Check className="h-4 w-4 text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default HomePage;
