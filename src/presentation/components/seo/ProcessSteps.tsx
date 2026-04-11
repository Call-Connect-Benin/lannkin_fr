"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Step {
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  steps: Step[];
  className?: string;
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.12 * i, duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] },
  }),
};

export function ProcessSteps({ title, steps, className }: ProcessStepsProps) {
  return (
    <section className={cn("py-16", className)}>
      <h2 className="mb-10 font-heading text-3xl font-bold tracking-tight text-white lg:text-4xl">
        {title}
      </h2>

      <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-accent/20">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Step number dot */}
            <div className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
              {i + 1}
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-surface/50 px-6 py-5">
              <h3 className="font-heading text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* HowTo JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: title,
            step: steps.map((step, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: step.title,
              text: step.description,
            })),
          }),
        }}
      />
    </section>
  );
}
