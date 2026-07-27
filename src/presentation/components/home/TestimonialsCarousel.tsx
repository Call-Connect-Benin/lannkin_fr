"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { TESTIMONIALS } from "@/data/homepage";

type Testimonial = (typeof TESTIMONIALS)["items"][number];

export function TestimonialsCarousel({ items }: { items: readonly Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused, items.length]);

  const goTo = (i: number) => setIndex(((i % items.length) + items.length) % items.length);
  const testimonial = items[index];

  if (!testimonial) return null;

  return (
    <div
      className="mx-auto mt-10 max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-[30px] border border-[#2d2d2d]/8 bg-white p-6 shadow-[0_20px_50px_rgba(45,45,45,0.06)] sm:p-8"
          >
            <div className="flex items-center gap-1 text-[#FBBC05]">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="mt-5 text-base leading-relaxed text-[#2d2d2d]/80 sm:text-lg">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-[#2d2d2d]/8 pt-4">
              <div className="font-heading text-lg font-bold text-[#2d2d2d]">{testimonial.name}</div>
              <div className="text-sm text-[#2d2d2d]/55">
                {testimonial.company} · {testimonial.sector}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Avis précédent"
          className="absolute left-0 top-1/2 hidden -translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#2d2d2d]/10 bg-white p-2.5 text-[#2d2d2d]/60 shadow-[0_10px_30px_rgba(45,45,45,0.08)] transition-colors hover:text-[#498f6d] sm:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Avis suivant"
          className="absolute right-0 top-1/2 hidden translate-x-14 -translate-y-1/2 items-center justify-center rounded-full border border-[#2d2d2d]/10 bg-white p-2.5 text-[#2d2d2d]/60 shadow-[0_10px_30px_rgba(45,45,45,0.08)] transition-colors hover:text-[#498f6d] sm:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Voir l'avis de ${item.name}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === index ? "20px" : "8px",
              backgroundColor: i === index ? "#498f6d" : "rgba(45,45,45,0.16)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
