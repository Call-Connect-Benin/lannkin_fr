import type { Metadata } from "next";
import { Check } from "lucide-react";

import { Container } from "@/presentation/components/ui/Container";
import { DevisForm } from "@/presentation/components/forms/DevisForm";

export const metadata: Metadata = {
  title: "Devis Gratuit | Lannkin",
  description:
    "Obtenez un devis gratuit et sans engagement pour votre projet web ou marketing digital. Réponse rapide sous 24h.",
};

const TRUST_POINTS = [
  "Réponse sous 24h",
  "100% gratuit, sans engagement",
  "Conseils personnalisés",
  "Devis détaillé et transparent",
];

export default function DevisGratuitPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              Gratuit &middot; Sans engagement
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Demandez votre{" "}
              <span className="text-accent">devis gratuit</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Décrivez votre projet et recevez une proposition personnalisée
              sous 24 heures. Aucun engagement requis.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {TRUST_POINTS.map((point) => (
                <span
                  key={point}
                  className="inline-flex items-center gap-2 text-sm text-muted"
                >
                  <Check className="h-4 w-4 text-accent" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="border-t border-white/5 bg-surface-light pb-20 pt-16 lg:pb-28">
        <Container size="md">
          <DevisForm />
        </Container>
      </section>
    </main>
  );
}
