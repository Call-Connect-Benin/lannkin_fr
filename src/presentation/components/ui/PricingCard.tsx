"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import type { PricingPlan } from "@/domain/entities/pricing";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { staggerItem } from "@/presentation/animations/variants";

import { Badge } from "./Badge";
import { Button } from "./Button";

export interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

export function PricingCard({ plan, className }: PricingCardProps) {
  const {
    name,
    price,
    priceUnit,
    setupFee,
    features,
    highlighted = false,
    cta,
    slug,
  } = plan;

  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        "glass relative flex flex-col rounded-2xl p-8",
        highlighted && [
          "border-accent/30",
          "shadow-[0_0_40px_rgba(73,143,109,0.12)]",
        ],
        !highlighted && "border-[rgba(45,45,45,0.10)]",
        className
      )}
    >
      {/* Highlighted glow effect */}
      {highlighted && (
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
      )}

      {/* Header */}
      <div className="relative mb-6">
        <div className="mb-4 flex items-center gap-3">
          <h3 className="font-heading text-xl font-bold text-[#2d2d2d]">{name}</h3>
          {highlighted && <Badge size="sm">Populaire</Badge>}
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-3xl font-bold text-[#2d2d2d] sm:text-4xl">
            {formatPrice(price)}
          </span>
          {priceUnit === "month" && (
            <span className="text-sm text-muted">/mois</span>
          )}
        </div>

        {/* Setup fee */}
        {setupFee != null && setupFee > 0 && (
          <p className="mt-2 text-sm text-muted">
            + {formatPrice(setupFee)} frais de mise en place
          </p>
        )}
      </div>

      {/* Divider */}
      <div className="mb-6 h-px bg-[rgba(45,45,45,0.10)]" />

      {/* Features */}
      <ul className="relative mb-8 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span className="text-[#2d2d2d]/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href={`/contact?plan=${slug}`}
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        className="w-full justify-center"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
