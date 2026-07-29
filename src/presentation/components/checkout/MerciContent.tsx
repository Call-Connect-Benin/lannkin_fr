"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  Loader2,
  MapPin,
  Monitor,
  Palette,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Video,
} from "lucide-react";

import { getUpsellsForCategory } from "@/data/upsells";
import type { UpsellOffer } from "@/domain/entities/upsell";
import { cn } from "@/lib/utils";
import { Container } from "@/presentation/components/ui/Container";

interface SessionData {
  customerName: string | null;
  customerEmail: string | null;
  customerId: string | null;
  planId: string | null;
  planName: string | null;
  planCategory: string | null;
  amountTotal: number | null;
  currency: string | null;
  status: string;
  mode: string;
}

const ICON_MAP: Record<string, typeof Search> = {
  Search,
  MapPin,
  Palette,
  Target,
  Share2,
  Video,
  Monitor,
  Sparkles,
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function MerciContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [upsells, setUpsells] = useState<UpsellOffer[]>([]);
  const [processingUpsell, setProcessingUpsell] = useState<string | null>(null);
  const [completedUpsells, setCompletedUpsells] = useState<Set<string>>(
    new Set(),
  );
  const [upsellError, setUpsellError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    fetch(`/api/stripe/session/?session_id=${encodeURIComponent(sessionId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setSession(data);
        if (data.planCategory) {
          setUpsells(getUpsellsForCategory(data.planCategory));
        }
      })
      .catch(() => {
        // Session not found — show generic thank you
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  async function handleUpsell(offer: UpsellOffer) {
    if (!session?.customerId) return;
    setProcessingUpsell(offer.id);
    setUpsellError(null);

    try {
      const res = await fetch("/api/stripe/upsell/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerId: session.customerId,
          stripePriceId: offer.stripePriceId,
          priceUnit: offer.priceUnit,
        }),
      });
      const data = await res.json();

      if (data.fallback && data.url) {
        window.location.href = data.url;
        return;
      }

      if (!res.ok) throw new Error(data.error);

      setCompletedUpsells((prev) => new Set(prev).add(offer.id));
    } catch (err) {
      setUpsellError(
        err instanceof Error ? err.message : "Erreur lors du paiement.",
      );
    } finally {
      setProcessingUpsell(null);
    }
  }

  if (loading) {
    return (
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl animate-pulse space-y-6 text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-[rgba(45,45,45,0.08)]" />
            <div className="mx-auto h-8 w-64 rounded bg-[rgba(45,45,45,0.08)]" />
            <div className="mx-auto h-4 w-96 rounded bg-[rgba(45,45,45,0.08)]" />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Confirmation Banner */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>

            <h1 className="font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
              Merci{session?.customerName ? `, ${session.customerName}` : ""} !
            </h1>

            {session?.planName && (
              <p className="mt-4 text-lg text-muted">
                Votre paiement pour{" "}
                <span className="font-semibold text-[#2d2d2d]">
                  {session.planName}
                </span>{" "}
                a été confirmé.
              </p>
            )}

            {session?.customerEmail && (
              <p className="mt-2 text-sm text-muted">
                Un courriel de confirmation a été envoyé à{" "}
                <span className="text-[#2d2d2d]">{session.customerEmail}</span>.
              </p>
            )}

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs text-accent">
              <ShieldCheck className="h-3.5 w-3.5" />
              Paiement sécurisé via Stripe
            </div>
          </div>
        </Container>
      </section>

      {/* Upsell Section */}
      {upsells.length > 0 && session?.customerId && (
        <section className="border-t border-[rgba(45,45,45,0.10)] bg-surface-light py-16 lg:py-20">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                  <Sparkles className="h-4 w-4" />
                  Offre spéciale
                </div>
                <h2 className="font-heading text-2xl font-bold text-[#2d2d2d] sm:text-3xl">
                  Complétez votre forfait
                </h2>
                <p className="mt-3 text-muted">
                  Services complémentaires recommandés pour{" "}
                  <span className="text-[#2d2d2d]">{session.planName}</span>.
                  Paiement immédiat sans re-saisir votre carte.
                </p>
              </div>

              {upsellError && (
                <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
                  {upsellError}
                </div>
              )}

              <div
                className={cn(
                  "grid gap-6",
                  upsells.length === 2 && "mx-auto max-w-2xl sm:grid-cols-2",
                  upsells.length >= 3 && "sm:grid-cols-2 lg:grid-cols-3",
                )}
              >
                {upsells.map((offer) => {
                  const Icon = ICON_MAP[offer.icon] ?? Target;
                  const isCompleted = completedUpsells.has(offer.id);
                  const isProcessing = processingUpsell === offer.id;

                  return (
                    <div
                      key={offer.id}
                      className={cn(
                        "relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
                        isCompleted
                          ? "border-accent/30 bg-accent/5"
                          : "border-[rgba(45,45,45,0.10)] bg-surface hover:border-accent/20",
                      )}
                    >
                      {offer.highlight && !isCompleted && (
                        <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-xs font-semibold text-on-accent">
                          {offer.highlight}
                        </div>
                      )}

                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>

                      <h3 className="font-heading text-lg font-bold text-[#2d2d2d]">
                        {offer.name}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {offer.description}
                      </p>

                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-accent">
                          {formatPrice(offer.price)}
                        </span>
                        {offer.priceUnit === "month" && (
                          <span className="text-sm text-muted">/mois</span>
                        )}
                        {offer.priceUnit === "one-shot" && (
                          <span className="text-sm text-muted">unique</span>
                        )}
                      </div>

                      <button
                        onClick={() => handleUpsell(offer)}
                        disabled={isProcessing || isCompleted}
                        className={cn(
                          "mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200",
                          isCompleted
                            ? "cursor-default bg-accent/20 text-accent"
                            : offer.highlight
                              ? "bg-accent text-on-accent hover:brightness-110"
                              : "border border-[rgba(45,45,45,0.10)] text-[#2d2d2d] hover:border-accent/30 hover:text-accent",
                          isProcessing && "cursor-wait opacity-50",
                        )}
                      >
                        {isCompleted ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            Ajouté !
                          </>
                        ) : isProcessing ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Traitement…
                          </>
                        ) : (
                          <>
                            Ajouter
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Footer CTA */}
      <section className="border-t border-[rgba(45,45,45,0.10)] bg-surface py-12">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-muted">Des questions ?</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-all hover:brightness-110"
              >
                Nous contacter
              </Link>
              <Link
                href="/tarifs/"
                className="inline-flex items-center gap-2 rounded-lg border border-[rgba(45,45,45,0.10)] px-5 py-2.5 text-sm font-semibold text-[#2d2d2d] transition-all hover:border-accent/30 hover:text-accent"
              >
                Voir tous les services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
