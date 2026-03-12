"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/domain/entities/contact-form";
import { cn } from "@/lib/utils";
import { Button } from "@/presentation/components/ui";

const serviceOptions = [
  { value: "sites-web", label: "Sites Web" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "applications-web", label: "Applications Web" },
  { value: "applications-mobiles", label: "Applications Mobiles" },
  { value: "seo", label: "SEO" },
  { value: "sem-google-ads", label: "SEM / Google Ads" },
  { value: "social-media", label: "Social Media Marketing" },
  { value: "email-marketing", label: "Email Marketing" },
  { value: "content-marketing", label: "Content Marketing" },
  { value: "branding", label: "Branding & Identité" },
  { value: "design-graphique", label: "Design Graphique" },
  { value: "ui-ux-design", label: "UI/UX Design" },
  { value: "motion-design", label: "Motion Design" },
  { value: "photographie", label: "Photographie" },
  { value: "video", label: "Production Vidéo" },
  { value: "ia-automatisation", label: "IA & Automatisation" },
  { value: "chatbots-ia", label: "Chatbots IA" },
  { value: "analytics", label: "Analytics & Data" },
  { value: "consulting", label: "Consulting Digital" },
  { value: "formation", label: "Formation" },
] as const;

const budgetOptions = [
  { value: "moins-5k", label: "Moins de 5 000 $" },
  { value: "5k-10k", label: "5 000 $ - 10 000 $" },
  { value: "10k-25k", label: "10 000 $ - 25 000 $" },
  { value: "25k-50k", label: "25 000 $ - 50 000 $" },
  { value: "50k-plus", label: "50 000 $ et plus" },
] as const;

const inputClasses =
  "w-full bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 text-sm";

const selectClasses =
  "w-full bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg px-4 py-2.5 text-[#1A1A1A] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none text-sm";

const labelClasses = "block text-sm font-medium text-[#374151] mb-1";

const errorClasses = "text-red-600 text-xs mt-1";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
} as const;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          ...data,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error ?? "Erreur lors de l'envoi.");
      }

      setIsSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          >
            <CheckCircle className="h-16 w-16 text-[#498f6d] mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
            Message envoyé !
          </h3>
          <p className="text-[#6B7280] mb-6">
            Nous vous répondrons dans les plus brefs délais.
          </p>
          <Button
            variant="secondary"
            onClick={() => setIsSubmitted(false)}
          >
            Envoyer un autre message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="contact-firstName" className={labelClasses}>
                Prénom *
              </label>
              <input
                id="contact-firstName"
                type="text"
                placeholder="Votre prénom"
                className={cn(
                  inputClasses,
                  errors.firstName && "border-red-400/50"
                )}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className={errorClasses}>{errors.firstName.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="contact-lastName" className={labelClasses}>
                Nom *
              </label>
              <input
                id="contact-lastName"
                type="text"
                placeholder="Votre nom"
                className={cn(
                  inputClasses,
                  errors.lastName && "border-red-400/50"
                )}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className={errorClasses}>{errors.lastName.message}</p>
              )}
            </motion.div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="contact-email" className={labelClasses}>
                Email *
              </label>
              <input
                id="contact-email"
                type="email"
                placeholder="votre@email.com"
                className={cn(
                  inputClasses,
                  errors.email && "border-red-400/50"
                )}
                {...register("email")}
              />
              {errors.email && (
                <p className={errorClasses}>{errors.email.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="contact-phone" className={labelClasses}>
                Téléphone
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="+1 (514) 000-0000"
                className={inputClasses}
                {...register("phone")}
              />
            </motion.div>
          </div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <label htmlFor="contact-company" className={labelClasses}>
              Entreprise
            </label>
            <input
              id="contact-company"
              type="text"
              placeholder="Nom de votre entreprise"
              className={inputClasses}
              {...register("company")}
            />
          </motion.div>

          {/* Service & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="contact-service" className={labelClasses}>
                Service *
              </label>
              <select
                id="contact-service"
                className={cn(
                  selectClasses,
                  errors.service && "border-red-400/50"
                )}
                defaultValue=""
                {...register("service")}
              >
                <option value="" disabled>
                  Sélectionnez un service
                </option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className={errorClasses}>{errors.service.message}</p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="contact-budget" className={labelClasses}>
                Budget
              </label>
              <select
                id="contact-budget"
                className={selectClasses}
                defaultValue=""
                {...register("budget")}
              >
                <option value="" disabled>
                  Sélectionnez un budget
                </option>
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label htmlFor="contact-message" className={labelClasses}>
              Message *
            </label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Décrivez votre projet..."
              className={cn(
                inputClasses,
                "resize-none",
                errors.message && "border-red-400/50"
              )}
              {...register("message")}
            />
            {errors.message && (
              <p className={errorClasses}>{errors.message.message}</p>
            )}
          </motion.div>

          {/* Error */}
          {submitError && (
            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {submitError}
            </motion.div>
          )}

          {/* Submit */}
          <motion.div variants={itemVariants}>
            <Button type="submit" loading={isSubmitting} className="w-full sm:w-auto">
              <Send className="h-4 w-4" />
              Envoyer le message
            </Button>
          </motion.div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
