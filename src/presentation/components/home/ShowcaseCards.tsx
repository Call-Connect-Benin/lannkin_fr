"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CLIENT_SCREENSHOTS = [
  "/images/screenshots/andleikay.webp",
  "/images/screenshots/artisans-marceau.webp",
  "/images/screenshots/rotho.webp",
  "/images/screenshots/christian-ducharme.webp",
  "/images/screenshots/metal-plus.webp",
  "/images/screenshots/myriame-salon.webp",
];

function PhoneCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => {
        setPrev(p);
        return (p + 1) % CLIENT_SCREENSHOTS.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background screenshots — Shopify-style: large, overlapping, close to phone */}
      {/* Left back card */}
      <div
        className="absolute rounded-2xl overflow-hidden shadow-2xl w-[42%]"
        style={{ left: "-5%", top: "5%", transform: "rotate(-3deg)", opacity: 0.55, zIndex: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={CLIENT_SCREENSHOTS[0]} alt="" className="w-full h-auto" loading="lazy" />
      </div>
      {/* Left front card — overlaps phone slightly */}
      <div
        className="absolute rounded-2xl overflow-hidden shadow-2xl w-[38%]"
        style={{ left: "2%", top: "25%", transform: "rotate(-1deg)", opacity: 0.7, zIndex: 3 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={CLIENT_SCREENSHOTS[1]} alt="" className="w-full h-auto" loading="lazy" />
      </div>
      {/* Right back card */}
      <div
        className="absolute rounded-2xl overflow-hidden shadow-2xl w-[42%]"
        style={{ right: "-5%", top: "3%", transform: "rotate(3deg)", opacity: 0.55, zIndex: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={CLIENT_SCREENSHOTS[2]} alt="" className="w-full h-auto" loading="lazy" />
      </div>
      {/* Right front card — overlaps phone slightly */}
      <div
        className="absolute rounded-2xl overflow-hidden shadow-2xl w-[38%]"
        style={{ right: "2%", top: "22%", transform: "rotate(2deg)", opacity: 0.7, zIndex: 3 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={CLIENT_SCREENSHOTS[3]} alt="" className="w-full h-auto" loading="lazy" />
      </div>

      {/* Center phone mockup — iPhone 16 Pro style */}
      <div className="relative z-20 w-[180px] rounded-[2.2rem] border-[3px] border-[#1a1a1a] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.08)] overflow-hidden">
        {/* Dynamic Island */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-30" />
        {/* Side buttons */}
        <div className="absolute top-[82px] -right-[5px] w-[2px] h-[32px] bg-[#2a2a2a] rounded-l-sm z-30" />
        <div className="absolute top-[64px] -left-[5px] w-[2px] h-[20px] bg-[#2a2a2a] rounded-r-sm z-30" />
        <div className="absolute top-[90px] -left-[5px] w-[2px] h-[28px] bg-[#2a2a2a] rounded-r-sm z-30" />
        <div className="absolute top-[124px] -left-[5px] w-[2px] h-[28px] bg-[#2a2a2a] rounded-r-sm z-30" />
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden bg-white rounded-[2rem]">
          {CLIENT_SCREENSHOTS.map((src, i) => {
            let x = "100%"; // default: waiting on the right
            if (i === current) x = "0%"; // active: center
            else if (i === prev) x = "-100%"; // just left: exit left
            return (
            <motion.div
              key={src}
              className="absolute inset-0"
              animate={{ x }}
              transition={i === current || i === prev ? { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } : { duration: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Site client ${i + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const STATS = [
  { value: "1 000+", label: "Clients satisfaits" },
  { value: "+10", label: "Ans d'expérience" },
  { value: "4x", label: "ROI moyen" },
];

const FLOAT_VARIANTS = [
  { duration: 4 },
  { duration: 5 },
  { duration: 6 },
];

const MARKETING_METRICS = [
  { platform: "Google Ads", metric: "ROAS", value: "6.8×", change: "+2.1×", color: "#4285F4" },
  { platform: "Meta Ads", metric: "CPL", value: "4,20 $", change: "−38%", color: "#0866FF" },
  { platform: "SEO", metric: "Top 3", value: "87 %", change: "+34 pts", color: "#498f6d" },
];

function MarketingVisual() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-5"
      style={{ background: "linear-gradient(145deg, #f7f5f0 0%, #ede9e1 100%)" }}
    >
      {/* Platform header row */}
      <div className="mb-1 flex items-center gap-2">
        {/* Google G */}
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#4285F4" d="M45.5 24.5c0-1.5-.1-3-.4-4.5H24v8.5h12.1c-.5 2.7-2 5-4.3 6.5v5.4h7c4.1-3.8 6.7-9.4 6.7-15.9z"/>
          <path fill="#34A853" d="M24 46c6.1 0 11.2-2 14.9-5.5l-7-5.4c-2 1.3-4.5 2.1-7.9 2.1-6.1 0-11.2-4.1-13.1-9.6H3.6v5.6C7.3 41.1 15 46 24 46z"/>
          <path fill="#FBBC05" d="M10.9 27.6A14.8 14.8 0 0 1 10.9 20.4V14.8H3.6A22 22 0 0 0 2 24c0 3.5.8 6.8 2.3 9.7l7.6-6.1z" />
          <path fill="#EA4335" d="M24 9.5c3.4 0 6.5 1.2 8.9 3.5l6.6-6.6C35.2 2.5 30 0 24 0 15 0 7.3 4.9 3.6 12.2l7.3 5.6C12.8 12.6 17.9 9.5 24 9.5z"/>
        </svg>
        <span className="text-xs font-medium" style={{ color: "rgba(45,45,45,0.4)" }}>·</span>
        {/* Meta M */}
        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#0866FF" d="M6.2 30.8c0 3.8 2.4 6.2 6.2 6.2 1.8 0 3.3-.5 4.5-1.6L24 28.6l7.1 6.8c1.2 1.1 2.7 1.6 4.5 1.6 3.8 0 6.2-2.4 6.2-6.2 0-1.9-.7-3.6-2-4.9L24 11.4 8 25.9c-1.3 1.3-2 3-2 4.9z"/>
        </svg>
        <span className="text-xs font-medium" style={{ color: "rgba(45,45,45,0.4)" }}>·</span>
        {/* SEO text */}
        <span className="rounded px-1.5 py-0.5 text-[10px] font-bold" style={{ backgroundColor: "rgba(73,143,109,0.15)", color: "#498f6d" }}>SEO</span>
      </div>

      {/* Metric cards */}
      {MARKETING_METRICS.map((m, i) => (
        <motion.div
          key={m.platform}
          className="w-full max-w-[220px] rounded-xl px-4 py-3"
          style={{
            backgroundColor: "#ffffff",
            border: `1px solid ${m.color}30`,
          }}
          animate={{ y: [0, -(5 + i * 3), 0] }}
          transition={{ duration: 4 + i * 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wide" style={{ color: "rgba(45,45,45,0.5)" }}>
                {m.platform}
              </p>
              <p className="font-heading text-xl font-bold text-[#2d2d2d] leading-tight">{m.value}</p>
              <p className="text-[10px]" style={{ color: "rgba(45,45,45,0.45)" }}>{m.metric}</p>
            </div>
            <span
              className="rounded-full px-2 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${m.color}18`, color: m.color }}
            >
              {m.change}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function StatsCard() {
  return (
    <div className="flex flex-col justify-between h-full p-6">
      {/* Main metric card — dark, integrated */}
      <motion.div
        className="rounded-xl p-5 max-w-[260px]"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid rgba(45,45,45,0.10)",
          boxShadow: "0 4px 12px rgba(45,45,45,0.04)",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p
          className="text-xs font-medium pb-2 mb-3"
          style={{ color: "rgba(45,45,45,0.55)", borderBottom: "1px dashed rgba(45,45,45,0.15)" }}
        >
          Résultats clients
        </p>
        <p className="font-heading text-3xl font-bold text-[#2d2d2d]">+1 000</p>
        <p className="text-sm mt-1" style={{ color: "rgba(45,45,45,0.55)" }}>
          projets livrés depuis 2015
        </p>
      </motion.div>

      {/* Stats badges — each floats at its own pace */}
      <div className="mt-6 flex flex-col gap-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center justify-between rounded-lg px-4 py-2"
            style={{ backgroundColor: "#ffffff", border: "1px solid rgba(73,143,109,0.25)" }}
            animate={{ y: [0, i === 1 ? -12 : -8, 0] }}
            transition={{ duration: FLOAT_VARIANTS[i]?.duration ?? 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-[#2d2d2d]/75">{stat.label}</span>
            <span className="font-heading font-bold" style={{ color: "#498f6d" }}>{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
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
    <section className="pb-10 pt-4 lg:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#498f6d" }}>
            Notre terrain de jeu
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-[#2d2d2d] lg:text-4xl">
            Un impact tangible sur votre activité
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            >
              <Link
                href={card.href}
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(73,143,109,0.12)]"
                style={{ backgroundColor: "#ffffff", border: "1px solid rgba(45,45,45,0.08)" }}
              >
                {/* Visual area */}
                <div className="relative aspect-square overflow-hidden" style={{ backgroundColor: "#f7f5f0" }}>
                  {card.type === "video" && <MarketingVisual />}
                  {card.type === "phone" && <PhoneCarousel />}
                  {card.type === "stats" && <StatsCard />}
                  {/* Inner shadow for depth */}
                  <div className="pointer-events-none absolute inset-0 rounded-t-2xl shadow-[0px_1px_0px_0px_rgba(45,45,45,0.05)_inset]" />
                </div>

                {/* Text area */}
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
