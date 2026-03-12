import type { Metadata } from "next";
import Link from "next/link";

import {
  HERO,
  CERTIFICATIONS,
  SERVICES_OVERVIEW,
  STATS,
  WHY_LANNKIN,
  FEATURED_SERVICES,
  TESTIMONIALS,
  PRICING_PREVIEW,
  SECTORS_PREVIEW,
  BLOG_PREVIEW,
  CTA_SECTION,
  ECOSYSTEM,
} from "@/data/homepage";
import { AnimatedReveal } from "@/presentation/components/ui/AnimatedReveal";
import { Badge } from "@/presentation/components/ui/Badge";
import { Button } from "@/presentation/components/ui/Button";
import { Card } from "@/presentation/components/ui/Card";
import { Container } from "@/presentation/components/ui/Container";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";
import { SectionHeader } from "@/presentation/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Agence Marketing Digital & Développement Web à Laval | Lannkin",
  description:
    "Lannkin est votre agence de marketing digital et développement web à Laval. Expertise en SEO, Google Ads, conception web, IA et vibe coding pour propulser votre entreprise.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO — Parallax 3D full-width */}
      <section className="parallax-section relative overflow-hidden py-20 lg:py-32">
        <ParallaxBg src="/images/rendu3D/rendu3d-cubes-logo-lk-rocket.webp" overlay={0.45} />
        <div className="relative z-10">
          <Container>
            <AnimatedReveal variant="fadeInUp">
              <Badge>{HERO.badge}</Badge>
            </AnimatedReveal>
            <AnimatedReveal variant="fadeInUp" delay={0.1}>
              <h1 className="mt-6 max-w-4xl font-heading text-4xl font-bold tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-7xl">
                {HERO.title}
              </h1>
            </AnimatedReveal>
            <AnimatedReveal variant="fadeInUp" delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#DDDDDD]">
                {HERO.subtitle}
              </p>
            </AnimatedReveal>
            <AnimatedReveal variant="fadeInUp" delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={HERO.cta.primary.href}>{HERO.cta.primary.label}</Button>
                <Button href={HERO.cta.secondary.href} variant="secondary">
                  {HERO.cta.secondary.label}
                </Button>
              </div>
            </AnimatedReveal>
            <AnimatedReveal variant="fadeInUp" delay={0.4}>
              <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {HERO.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-3xl font-bold text-accent">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[#CCCCCC]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </Container>
        </div>
      </section>

      {/* 2. CERTIFICATIONS — Light */}
      <section className="border-y border-white/5 bg-surface py-10">
        <Container>
          <AnimatedReveal>
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
              <span className="text-sm font-medium uppercase tracking-wider text-muted">
                {CERTIFICATIONS.title}
              </span>
              <div className="flex items-center gap-8">
                {CERTIFICATIONS.items.map((cert) => (
                  <span key={cert.name} className="text-sm font-medium text-white/60">
                    {cert.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      {/* 3. SERVICES OVERVIEW — Light */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={SERVICES_OVERVIEW.badge}
            title={SERVICES_OVERVIEW.title}
            subtitle={SERVICES_OVERVIEW.subtitle}
          />
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {SERVICES_OVERVIEW.categories.map((cat) => (
              <AnimatedReveal key={cat.title} variant="fadeInUp">
                <div className="glass rounded-2xl p-8">
                  <h3 className="mb-6 font-heading text-xl font-bold text-white">
                    {cat.title}
                  </h3>
                  <ul className="space-y-3">
                    {cat.services.map((svc) => (
                      <li key={svc.href}>
                        <Link
                          href={svc.href}
                          className="group flex items-center gap-3 text-muted transition-colors hover:text-white"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent opacity-50 transition-opacity group-hover:opacity-100" />
                          {svc.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal>
            <div className="mt-12 text-center">
              <Button href={SERVICES_OVERVIEW.cta.href} variant="secondary">
                {SERVICES_OVERVIEW.cta.label}
              </Button>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      {/* 4. STATS — Light with subtle bg */}
      <section className="border-y border-white/5 bg-surface-light py-20 lg:py-28">
        <Container>
          <SectionHeader badge={STATS.badge} title={STATS.title} />
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {STATS.items.map((stat) => (
              <AnimatedReveal key={stat.label} variant="scaleIn">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{stat.label}</div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. POURQUOI LANNKIN — Light */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={WHY_LANNKIN.badge}
            title={WHY_LANNKIN.title}
            subtitle={WHY_LANNKIN.subtitle}
            align="left"
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {WHY_LANNKIN.points.map((point) => (
              <AnimatedReveal key={point.title} variant="fadeInUp">
                <div className="rounded-xl border border-white/5 bg-surface p-6">
                  <h3 className="mb-2 font-heading text-lg font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. SERVICES PHARES — Light with subtle bg */}
      <section className="border-y border-white/5 bg-surface-light py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={FEATURED_SERVICES.badge}
            title={FEATURED_SERVICES.title}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {FEATURED_SERVICES.services.map((svc) => (
              <AnimatedReveal key={svc.title} variant="fadeInUp">
                <Card hover href={svc.href} className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-white">
                      {svc.title}
                    </h3>
                    <div className="text-right">
                      <div className="font-heading text-2xl font-bold text-accent">
                        {svc.stat.value}
                      </div>
                      <div className="text-xs text-muted">{svc.stat.label}</div>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">
                    {svc.description}
                  </p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. TESTIMONIALS — Light */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={TESTIMONIALS.badge}
            title={TESTIMONIALS.title}
            subtitle={TESTIMONIALS.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.items.map((testimonial) => (
              <AnimatedReveal key={testimonial.name} variant="fadeInUp">
                <div className="glass rounded-2xl p-6">
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className="text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mb-6 text-sm italic leading-relaxed text-white/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-muted">
                      {testimonial.company} · {testimonial.sector}
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. PRICING PREVIEW — Light with subtle bg */}
      <section className="border-y border-white/5 bg-surface-light py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={PRICING_PREVIEW.badge}
            title={PRICING_PREVIEW.title}
            subtitle={PRICING_PREVIEW.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {PRICING_PREVIEW.featured.map((plan) => (
              <AnimatedReveal key={plan.name} variant="fadeInUp">
                <Link
                  href={plan.href}
                  className={`glass group block rounded-2xl border p-6 transition-all ${
                    "highlighted" in plan && plan.highlighted
                      ? "border-accent/30 shadow-[0_0_30px_rgba(73,143,109,0.08)]"
                      : "border-white/5 hover:border-accent/20"
                  }`}
                >
                  <div className="font-heading text-lg font-bold text-white">
                    {plan.name}
                  </div>
                  <div className="mt-2 font-heading text-2xl font-bold text-accent">
                    {plan.price}
                  </div>
                  <p className="mt-3 text-sm text-muted">{plan.description}</p>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal>
            <div className="mt-12 text-center">
              <Button href={PRICING_PREVIEW.cta.href} variant="secondary">
                {PRICING_PREVIEW.cta.label}
              </Button>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      {/* 9. SECTORS — Light */}
      <section className="py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={SECTORS_PREVIEW.badge}
            title={SECTORS_PREVIEW.title}
            subtitle={SECTORS_PREVIEW.subtitle}
          />
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SECTORS_PREVIEW.featured.map((sector) => (
              <AnimatedReveal key={sector.name} variant="scaleIn">
                <Link
                  href={sector.href}
                  className="glass group flex flex-col items-center rounded-xl p-6 text-center transition-all hover:border-accent/20"
                >
                  <span className="font-heading text-sm font-semibold text-white transition-colors group-hover:text-accent">
                    {sector.name}
                  </span>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal>
            <div className="mt-12 text-center">
              <Button href={SECTORS_PREVIEW.cta.href} variant="secondary">
                {SECTORS_PREVIEW.cta.label}
              </Button>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      {/* 10. RESOURCES PREVIEW — Light with subtle bg */}
      <section className="border-y border-white/5 bg-surface-light py-20 lg:py-28">
        <Container>
          <SectionHeader
            badge={BLOG_PREVIEW.badge}
            title={BLOG_PREVIEW.title}
            subtitle={BLOG_PREVIEW.subtitle}
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {BLOG_PREVIEW.resources.map((resource) => (
              <AnimatedReveal key={resource.name} variant="fadeInUp">
                <Link
                  href={resource.href}
                  className="glass group flex gap-4 rounded-xl p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(73,143,109,0.06)]"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <LucideIcon name={resource.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className="font-heading font-semibold text-white transition-colors group-hover:text-accent">
                        {resource.name}
                      </span>
                      <span className="rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 text-xs font-medium text-accent">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {resource.description}
                    </p>
                  </div>
                </Link>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal>
            <div className="mt-12 text-center">
              <Button href={BLOG_PREVIEW.cta.href} variant="secondary">
                {BLOG_PREVIEW.cta.label}
              </Button>
            </div>
          </AnimatedReveal>
        </Container>
      </section>

      {/* 11. CTA — Parallax 3D */}
      <section className="parallax-section relative overflow-hidden py-20 lg:py-28">
        <ParallaxBg src="/images/rendu3D/rendu3d-rouge-vert-dramatic.webp" overlay={0.55} />
        <div className="relative z-10">
          <Container size="md">
            <AnimatedReveal variant="scaleIn">
              <div className="glass-dark rounded-3xl border border-[#FFFFFF]/10 p-10 text-center lg:p-16">
                <h2 className="font-heading text-3xl font-bold text-[#FFFFFF] sm:text-4xl">
                  {CTA_SECTION.title}
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[#CCCCCC]">
                  {CTA_SECTION.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href={CTA_SECTION.cta.primary.href}>
                    {CTA_SECTION.cta.primary.label}
                  </Button>
                  <Button href={CTA_SECTION.cta.secondary.href} variant="secondary">
                    {CTA_SECTION.cta.secondary.label}
                  </Button>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[#CCCCCC]">
                  {CTA_SECTION.trust.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          </Container>
        </div>
      </section>

      {/* 12. ECOSYSTEM — Light */}
      <section className="border-t border-white/5 bg-surface-light py-20 lg:py-28">
        <Container>
          <SectionHeader badge={ECOSYSTEM.badge} title={ECOSYSTEM.title} />
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {ECOSYSTEM.sites.map((site) => (
              <AnimatedReveal key={site.name} variant="fadeInUp">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group block rounded-2xl p-6 transition-all hover:border-accent/20"
                >
                  <div className="font-heading font-bold text-white transition-colors group-hover:text-accent">
                    {site.name}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {site.description}
                  </p>
                </a>
              </AnimatedReveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
