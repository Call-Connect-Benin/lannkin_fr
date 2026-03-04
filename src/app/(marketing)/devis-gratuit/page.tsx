import type { Metadata } from "next";
import {
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/presentation/components/ui/Container";
import { DevisForm } from "@/presentation/components/forms/DevisForm";

export const metadata: Metadata = {
  title: "Devis Gratuit | Lannkin",
  description:
    "Obtenez un devis gratuit et sans engagement pour votre projet web ou marketing digital. Réponse rapide sous 24h.",
};

const TRUST_POINTS = [
  { icon: Clock, text: "Réponse sous 24h" },
  { icon: Shield, text: "100% gratuit, sans engagement" },
  { icon: Check, text: "Conseils personnalisés" },
];

export default function DevisGratuitPage() {
  return (
    <main>
      {/* Compact Hero */}
      <section className="pb-4 pt-12 lg:pt-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              Gratuit &middot; Sans engagement
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Demandez votre{" "}
              <span className="text-accent">devis gratuit</span>
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Décrivez votre projet et recevez une proposition personnalisée sous 24h.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-20 pt-8 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm lg:p-8">
                <DevisForm />
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-6">
              {/* Trust Points */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                  Pourquoi nous choisir
                </h3>
                <ul className="space-y-3">
                  {TRUST_POINTS.map((point) => (
                    <li key={point.text} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <point.icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm text-[#374151]">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rating */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-[#1A1A1A]">
                    {SITE_CONFIG.stats.googleRating}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#6B7280]">
                  {SITE_CONFIG.stats.googleReviews} avis Google &middot;{" "}
                  {SITE_CONFIG.stats.yearsExperience}+ ans d&apos;expérience
                </p>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                  Nous joindre
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#6B7280]" />
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm text-[#374151] transition-colors hover:text-accent"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#6B7280]" />
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-sm text-[#374151] transition-colors hover:text-accent"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#6B7280]" />
                    <span className="text-sm text-[#374151]">
                      {SITE_CONFIG.location.city}, {SITE_CONFIG.location.province}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 shadow-sm">
                <h3 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
