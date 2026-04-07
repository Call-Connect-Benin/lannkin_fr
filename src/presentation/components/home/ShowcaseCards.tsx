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

function StatsCard() {
  return (
    <div className="flex flex-col justify-between h-full p-6">
      {/* Pending payout style card — floats */}
      <motion.div
        className="rounded-xl bg-white p-5 shadow-lg max-w-[260px]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs text-gray-500 border-b border-dashed border-gray-200 pb-2 mb-3">
          Résultats clients
        </p>
        <p className="font-heading text-3xl font-bold text-gray-900">+1 000</p>
        <p className="text-sm text-gray-500 mt-1">projets livrés depuis 2015</p>
      </motion.div>

      {/* Stats badges — each floats at its own pace */}
      <div className="mt-6 flex flex-col gap-3">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center justify-between rounded-lg px-4 py-2"
            style={{ backgroundColor: "rgba(73,143,109,0.08)", border: "1px solid rgba(73,143,109,0.15)" }}
            animate={{ y: [0, i === 1 ? -12 : -8, 0] }}
            transition={{ duration: FLOAT_VARIANTS[i]?.duration ?? 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm text-white/70">{stat.label}</span>
            <span className="font-heading font-bold" style={{ color: "#498f6d" }}>{stat.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const CARDS = [
  {
    title: "Marketing Digital",
    description:
      "Google Ads, SEO, réseaux sociaux — des stratégies data-driven qui génèrent du trafic qualifié et maximisent votre retour sur investissement.",
    href: "/services/",
    type: "video" as const,
  },
  {
    title: "Sites clients",
    description:
      "Des réalisations sur mesure pour des entreprises de tous secteurs. Chaque site est conçu pour performer et générer des résultats concrets.",
    href: "/realisations/",
    type: "phone" as const,
  },
  {
    title: "Résultats mesurables",
    description:
      "Google Ads, SEO, réseaux sociaux — des stratégies qui génèrent un ROI concret. +1 000 projets livrés depuis 2015.",
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
            Ce qu&apos;on fait
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold text-white lg:text-4xl">
            Des résultats concrets pour votre entreprise
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
                className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(73,143,109,0.08)]"
                style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Visual area */}
                <div className="relative aspect-square overflow-hidden">
                  {card.type === "video" && (
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      disablePictureInPicture
                      disableRemotePlayback
                      preload="metadata"
                    >
                      <source src="/images/video_1774625640841105.mp4" type="video/mp4" />
                    </video>
                  )}
                  {card.type === "phone" && <PhoneCarousel />}
                  {card.type === "stats" && <StatsCard />}
                  {/* Inner shadow for depth */}
                  <div className="pointer-events-none absolute inset-0 rounded-t-2xl shadow-[0px_1px_0px_0px_rgba(255,255,255,0.05)_inset]" />
                </div>

                {/* Text area */}
                <div className="p-5 lg:p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading text-lg font-bold text-white transition-colors group-hover:text-[#498f6d]">
                      {card.title}
                    </h3>
                    <ArrowRight
                      className="h-4 w-4 text-white/50 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#498f6d]"
                    />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
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
