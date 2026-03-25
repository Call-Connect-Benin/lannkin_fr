import type { Metadata } from "next";

import { Mail, MapPin, Phone } from "lucide-react";

import { SITE_CONFIG } from "@/lib/constants";
import { LeadCaptureForm } from "@/presentation/components/forms/LeadCaptureForm";
import { Container } from "@/presentation/components/ui/Container";

export const metadata: Metadata = {
  title: "Contacter Agence Web Laval | Lannkin",
  description:
    "Contactez notre agence web à Laval. Devis marketing digital gratuit, réponse en moins de 2 minutes. Consultation offerte avec un expert Lannkin.",
  alternates: { canonical: "https://lannkin.ca/contact/" },
};

export default function ContactPage() {
  return (
    <main
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
      style={{ backgroundColor: "#0C0C0C", color: "#FFFFFF" }}
    >
      {/* ─── Image 3D à droite, fondue en diagonale ─── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-y-0 right-0 w-[60%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rendu3D/rendu3d-rocket-launch-fond-vert.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            style={{ opacity: 0.28 }}
            fetchPriority="high"
          />
          {/* Coupe diagonale */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0C0C0C 20%, rgba(12,12,12,0.6) 42%, transparent 62%)",
            }}
          />
          {/* Fondu haut/bas */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #0C0C0C 0%, transparent 18%, transparent 82%, #0C0C0C 100%)",
            }}
          />
        </div>
      </div>

      {/* ─── Halo accent ─── */}
      <div
        className="pointer-events-none absolute right-[28%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full blur-[120px] sm:h-[580px] sm:w-[580px]"
        style={{ backgroundColor: "rgba(73, 143, 109, 0.08)" }}
        aria-hidden
      />

      {/* ─── Contenu ─── */}
      <Container className="relative z-10 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── Gauche : texte + coordonnées ── */}
          <div className="lg:py-4">
            {/* Badge online */}
            <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5"
              style={{ borderColor: "rgba(73,143,109,0.30)", backgroundColor: "rgba(73,143,109,0.10)" }}>
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: "#498f6d" }}
                />
                <span
                  className="relative inline-flex h-2 w-2 rounded-full"
                  style={{ backgroundColor: "#498f6d" }}
                />
              </span>
              <span className="font-mono text-xs font-medium" style={{ color: "#498f6d" }}>
                En ligne — réponse en moins de 2 min
              </span>
            </div>

            <h1 className="mt-6 font-heading text-5xl font-bold tracking-tight lg:text-[3.5rem] lg:leading-[1.05]"
              style={{ color: "#FFFFFF" }}>
              Parlons de votre{" "}
              <span style={{ color: "#498f6d" }}>projet</span>
            </h1>

            {/* Ligne décorative */}
            <div
              className="mt-5 h-px w-14"
              style={{ background: "linear-gradient(to right, rgba(73,143,109,0.7), transparent)" }}
            />

            <p className="mt-5 max-w-[380px] text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
              Une idée ? Un problème à résoudre ? On vous accompagne, sans
              engagement, de la première conversation jusqu&apos;au lancement.
            </p>

            {/* Coordonnées */}
            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[\s()]/g, "")}`}
                  className="group inline-flex items-center gap-3.5 transition-all"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                    style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                  >
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Téléphone
                    </p>
                    <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group inline-flex items-center gap-3.5 transition-all"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors"
                    style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                  >
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Email
                    </p>
                    <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="inline-flex items-center gap-3.5">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "rgba(73,143,109,0.12)", color: "#498f6d" }}
                  >
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Localisation
                    </p>
                    <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.80)" }}>
                      Laval, Québec, Canada
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* ── Droite : formulaire ── */}
          <div>
            <LeadCaptureForm
              title="Envoyez-nous un message"
              subtitle="Nous vous répondons dans les plus brefs délais."
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
