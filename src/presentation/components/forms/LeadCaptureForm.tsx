"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/presentation/components/ui";
import { useFormSubmit } from "@/presentation/hooks";

const leadCaptureSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  company: z.string().optional(),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  message: z.string().min(5, "Décrivez brièvement votre projet (min. 5 caractères)").max(2000),
  website: z.string().max(0).optional(), // honeypot
});

type LeadCaptureData = z.infer<typeof leadCaptureSchema>;

const inputClasses =
  "w-full bg-[#FFFFFF]/[0.06] border border-[#FFFFFF]/[0.12] rounded-lg px-3 py-2.5 text-sm text-[#FFFFFF] placeholder:text-[#FFFFFF]/40 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200";

const errorClasses = "text-red-400 text-xs mt-1";

interface LeadCaptureFormProps {
  title: string;
  subtitle: string;
  onSuccess?: () => void;
}

export function LeadCaptureForm({ title, subtitle, onSuccess }: LeadCaptureFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { submit } = useFormSubmit();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadCaptureData>({
    resolver: zodResolver(leadCaptureSchema),
  });

  const onSubmit = async (data: LeadCaptureData) => {
    setSubmitError(null);
    const result = await submit({
      url: "/api/contact",
      body: {
        formType: "lead",
        ...data,
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      },
    });

    if (result.ok) {
      setIsSubmitted(true);
      reset();
      onSuccess?.();
    } else {
      setSubmitError(result.error ?? "Une erreur est survenue.");
    }
  };

  return (
    <div className="rounded-2xl border border-[#FFFFFF]/[0.1] bg-[#1A1A1A]/90 p-6">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
            >
              <CheckCircle className="h-12 w-12 text-accent mb-3" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#FFFFFF] font-semibold text-lg"
            >
              Merci !
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#FFFFFF]/60 text-sm mt-1"
            >
              Nous vous contacterons sous 24h.
            </motion.p>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <h4 className="font-semibold text-base mb-0.5" style={{ color: "#FFFFFF" }}>
              {title}
            </h4>
            <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              {subtitle}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* Honeypot */}
              <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Prénom + Nom */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    placeholder="Prénom *"
                    className={cn(inputClasses, errors.firstName && "border-red-400/50")}
                    {...register("firstName")}
                  />
                  {errors.firstName && <p className={errorClasses}>{errors.firstName.message}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Nom *"
                    className={cn(inputClasses, errors.lastName && "border-red-400/50")}
                    {...register("lastName")}
                  />
                  {errors.lastName && <p className={errorClasses}>{errors.lastName.message}</p>}
                </div>
              </div>

              {/* Société */}
              <div>
                <input
                  type="text"
                  placeholder="Entreprise / Société"
                  className={inputClasses}
                  {...register("company")}
                />
              </div>

              {/* Email + Téléphone */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className={cn(inputClasses, errors.email && "border-red-400/50")}
                    {...register("email")}
                  />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className={inputClasses}
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <textarea
                  placeholder="Décrivez votre projet en quelques mots *"
                  rows={3}
                  className={cn(inputClasses, "resize-none", errors.message && "border-red-400/50")}
                  {...register("message")}
                />
                {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
              </div>

              {submitError && <p className="text-red-400 text-xs">{submitError}</p>}

              <Button type="submit" size="sm" loading={isSubmitting} className="w-full">
                <Send className="h-3.5 w-3.5" />
                Envoyer ma demande
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
