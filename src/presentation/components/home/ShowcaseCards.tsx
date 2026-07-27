"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CLIENT_SCREENSHOTS = [
  "/images/screenshots/andleikay.webp",
  "/images/screenshots/artisans-marceau.webp",
  "/images/screenshots/rotho.webp",
  "/images/screenshots/christian-ducharme.webp",
  "/images/screenshots/metal-plus.webp",
  "/images/screenshots/myriame-salon.webp",
] as const;

const TRUST_BADGES = ["Signature électronique", "Avis vérifiés", "Paiement sécurisé"];

function PhoneCarousel() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background screenshots — Shopify-style: large, overlapping, close to phone */}
      {/* Left back card */}
      <div
        className="absolute w-[34%] overflow-hidden rounded-2xl shadow-2xl sm:w-[42%]"
        style={{ left: "0%", top: "5%", transform: "rotate(-3deg)", opacity: 0.55, zIndex: 1 }}
      >
        <Image src={CLIENT_SCREENSHOTS[0]} alt="" width={480} height={720} className="h-auto w-full" />
      </div>
      {/* Left front card — overlaps phone slightly */}
      <div
        className="absolute w-[31%] overflow-hidden rounded-2xl shadow-2xl sm:w-[38%]"
        style={{ left: "4%", top: "25%", transform: "rotate(-1deg)", opacity: 0.7, zIndex: 3 }}
      >
        <Image src={CLIENT_SCREENSHOTS[1]} alt="" width={480} height={720} className="h-auto w-full" />
      </div>
      {/* Right back card */}
      <div
        className="absolute w-[34%] overflow-hidden rounded-2xl shadow-2xl sm:w-[42%]"
        style={{ right: "0%", top: "3%", transform: "rotate(3deg)", opacity: 0.55, zIndex: 1 }}
      >
        <Image src={CLIENT_SCREENSHOTS[2]} alt="" width={480} height={720} className="h-auto w-full" />
      </div>
      {/* Right front card — overlaps phone slightly */}
      <div
        className="absolute w-[31%] overflow-hidden rounded-2xl shadow-2xl sm:w-[38%]"
        style={{ right: "4%", top: "22%", transform: "rotate(2deg)", opacity: 0.7, zIndex: 3 }}
      >
        <Image src={CLIENT_SCREENSHOTS[3]} alt="" width={480} height={720} className="h-auto w-full" />
      </div>

      {/* Center phone mockup — iPhone 16 Pro style */}
      <div className="relative z-20 w-[160px] overflow-hidden rounded-[2rem] border-[3px] border-[#1a1a1a] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)] sm:w-[180px] sm:rounded-[2.2rem]">
        {/* Dynamic Island */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-30" />
        {/* Side buttons */}
        <div className="absolute top-[82px] -right-[5px] w-[2px] h-[32px] bg-[#2a2a2a] rounded-l-sm z-30" />
        <div className="absolute top-[64px] -left-[5px] w-[2px] h-[20px] bg-[#2a2a2a] rounded-r-sm z-30" />
        <div className="absolute top-[90px] -left-[5px] w-[2px] h-[28px] bg-[#2a2a2a] rounded-r-sm z-30" />
        <div className="absolute top-[124px] -left-[5px] w-[2px] h-[28px] bg-[#2a2a2a] rounded-r-sm z-30" />
        {/* Screen — mockup statique de marque Lannkin */}
        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden bg-white rounded-[2rem] px-4 pb-4 pt-8">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <span className="font-heading text-[13px] font-bold text-[#2d2d2d]">LANNKIN</span>
            <div className="flex flex-col gap-[3px]">
              <span className="block h-[1.5px] w-4 bg-[#2d2d2d]/60" />
              <span className="block h-[1.5px] w-4 bg-[#2d2d2d]/60" />
              <span className="block h-[1.5px] w-4 bg-[#2d2d2d]/60" />
            </div>
          </div>

          {/* Headline */}
          <p className="mt-6 font-heading text-[15px] font-bold leading-tight text-[#2d2d2d]">
            Accélérez votre projet marketing. Résultats concrets.
          </p>
          <p className="mt-2 text-[10px] leading-relaxed text-[#2d2d2d]/60">
            Campagnes performantes, contenus impactants, croissance mesurable.
          </p>

          <button
            type="button"
            tabIndex={-1}
            className="mt-3 inline-flex w-fit items-center rounded-full px-3 py-1.5 text-[10px] font-semibold text-white"
            style={{ backgroundColor: "#498f6d" }}
          >
            Démarrer mon projet
          </button>

          {/* Trust bar */}
          <div className="mt-auto">
            <p className="text-[8px] font-medium uppercase tracking-wide text-[#2d2d2d]/45">
              Ils nous font confiance
            </p>
            <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
              {TRUST_BADGES.map((badge) => (
                <span key={badge} className="text-[8px] font-medium text-[#2d2d2d]/55">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AcquisitionDigitaleVisual() {
  return (
    <Image
      src="/images/Acquisition_digitale.png"
      alt="Résultats Google Ads, Meta Ads et SEO"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  );
}

function PerformanceVisual() {
  return (
    <Image
      src="/images/Performance_mesure.png"
      alt="Résultats clients : +1000 projets livrés depuis 2015"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  );
}

const CARDS = [
  {
    title: "Acquisition digitale",
    description:
      "Google Ads, référencement, réseaux sociaux : des stratégies pilotées par la donnée pour attirer un trafic qualifié et maximiser votre rentabilité.",
    href: "/services/",
    type: "video" as const,
  },
  {
    title: "Réalisations sur-mesure",
    description:
      "Des sites bâtis au cas par cas, adaptés à chaque secteur. Chaque projet est pensé pour convertir et faire croître votre activité.",
    href: "/realisations/",
    type: "phone" as const,
  },
  {
    title: "Performance mesurée",
    description:
      "Google Ads, SEO, social media : chaque action se traduit en chiffres. Plus de 1 000 projets livrés depuis 2015.",
    href: "/tarifs/",
    type: "stats" as const,
  },
];

export default function ShowcaseCards() {
  return (
    <section className="overflow-x-hidden pb-10 pt-4 lg:pb-14">
      <div className="mx-auto max-w-7xl overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
            Notre terrain de jeu
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-[#2d2d2d] lg:text-4xl">
            Un impact tangible sur votre activité.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="min-w-0 max-w-full overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                href={card.href}
                className="group relative flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(73,143,109,0.12)]"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                {/* Visual area */}
                <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: "#f7f5f0" }}>
                  {card.type === "video" && <AcquisitionDigitaleVisual />}
                  {card.type === "phone" && <PhoneCarousel />}
                  {card.type === "stats" && <PerformanceVisual />}
                  {/* Inner shadow for depth */}
                  <div className="pointer-events-none absolute inset-0 rounded-t-2xl shadow-[0px_1px_0px_0px_rgba(45,45,45,0.05)_inset]" />
                </div>

                {/* Texte — dans la même carte que le visuel */}
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-lg font-bold text-[#2d2d2d] transition-colors group-hover:text-[#498f6d]">
                      {card.title}
                    </h3>
                    <ArrowRight
                      className="h-4 w-4 text-[#2d2d2d]/50 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#498f6d]"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(45,45,45,0.7)" }}>
                    {card.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
