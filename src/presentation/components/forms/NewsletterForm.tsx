"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { useFormSubmit } from "@/presentation/hooks";

const newsletterSchema = z.object({
  email: z.string().email("Adresse email invalide"),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  className?: string;
}

export function NewsletterForm({ className }: NewsletterFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { submit } = useFormSubmit();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterData) => {
    setSubmitError(null);
    const result = await submit({
      url: "/api/newsletter",
      body: data,
    });

    if (result.ok) {
      setIsSubmitted(true);
      reset();
    } else {
      setSubmitError(result.error ?? "Une erreur est survenue.");
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-[#498f6d]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <CheckCircle className="h-5 w-5 shrink-0" />
            </motion.div>
            <span className="text-sm font-medium">
              Inscription confirmée !
            </span>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className={cn(
                    "w-full bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200",
                    errors.email && "border-red-400/50"
                  )}
                  {...register("email")}
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={cn(
                  "inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer",
                  "bg-[#498f6d] text-on-accent hover:brightness-110 shadow-[0_0_20px_rgba(73,143,109,0.15)]",
                  "disabled:opacity-50 disabled:pointer-events-none"
                )}
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    S&apos;inscrire
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>
            </div>

            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs"
              >
                {errors.email.message}
              </motion.p>
            )}

            {submitError && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs"
              >
                {submitError}
              </motion.p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
