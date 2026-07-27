"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { LegacyLandingPage } from "@/data/legacy-landing-pages";
import { Button } from "@/presentation/components/ui";
import { Container } from "@/presentation/components/ui/Container";
import { LucideIcon } from "@/presentation/components/ui/LucideIcon";
import { ParallaxBg } from "@/presentation/components/ui/ParallaxSection";

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="last:border-0" style={{ borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base font-semibold text-[#2d2d2d] sm:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="leading-relaxed text-[#2d2d2d]/68">{a}</p>
      </div>
    </div>
  );
}

export function LegacyLandingPageView({ page }: { page: LegacyLandingPage }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main style={{ backgroundColor: "#f7f5f0", color: "#2d2d2d" }}>
      <section className="parallax-section relative overflow-hidden py-16 lg:py-24">
        <ParallaxBg src={page.heroImage} overlay={0.7} />
        <div className="relative z-10">
          <Container size="md">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <LucideIcon name={page.icon} className="h-3.5 w-3.5" />
                {page.badge}
              </span>
              <h1 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[#2d2d2d] sm:text-4xl lg:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-[#2d2d2d]/72 sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href={page.cta.href} size="md">
                  {page.cta.label}
                </Button>
                {page.cta.secondaryHref && (
                  <Button href={page.cta.secondaryHref} variant="secondary" size="md">
                    {page.cta.secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <Container size="md">
          <div className="grid gap-5 sm:grid-cols-3">
            {page.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[28px] border border-[#2d2d2d]/8 bg-white p-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <LucideIcon name={benefit.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#2d2d2d]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#2d2d2d]/66">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#2d2d2d]/8 bg-[#ede9e1] py-16 sm:py-20">
        <Container size="md">
          <div className="space-y-12">
            {page.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed text-[#2d2d2d]/72">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container size="md">
          <h2 className="text-center font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-10 rounded-2xl bg-white px-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)] sm:px-8">
            {page.faq.map((item, index) => (
              <FaqItem
                key={item.q}
                q={item.q}
                a={item.a}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[#2d2d2d]/8 py-16 sm:py-20">
        <Container size="md">
          <div className="rounded-[34px] border border-accent/16 bg-[linear-gradient(145deg,rgba(255,255,255,0.82),rgba(73,143,109,0.08))] p-8 text-center shadow-[0_30px_70px_rgba(45,45,45,0.08)] sm:p-12">
            <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
              {page.cta.label}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={page.cta.href} size="lg">
                {page.cta.label}
              </Button>
              {page.cta.secondaryHref && (
                <Button href={page.cta.secondaryHref} variant="secondary" size="lg">
                  {page.cta.secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
