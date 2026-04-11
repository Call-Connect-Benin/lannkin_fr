"use client";

import { useEffect, useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, History, Send, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/domain/entities/contact-form";
import { clearDraft, DRAFT_KEYS, loadDraft, saveDraft } from "@/lib/form-draft";
import { cn } from "@/lib/utils";
import { Button } from "@/presentation/components/ui";
import { useFormSubmit } from "@/presentation/hooks";

const DRAFT_KEY = DRAFT_KEYS.devisGratuit;

const devisExtensionSchema = z.object({
  urgency: z.enum(["normal", "urgent", "tres-urgent"]),
  projectType: z.enum([
    "website",
    "ecommerce",
    "app",
    "marketing",
    "seo",
    "graphisme",
    "ia",
    "other",
  ]),
  currentSite: z.string().url("URL invalide").optional().or(z.literal("")),
  objectives: z
    .string()
    .min(10, "Les objectifs doivent contenir au moins 10 caractères"),
});

const devisFormSchema = contactFormSchema.merge(devisExtensionSchema);

type DevisFormData = ContactFormData &
  z.infer<typeof devisExtensionSchema>;

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

const urgencyOptions = [
  { value: "normal", label: "Normal (2-4 semaines)" },
  { value: "urgent", label: "Urgent (1-2 semaines)" },
  { value: "tres-urgent", label: "Très urgent (< 1 semaine)" },
] as const;

const projectTypeOptions = [
  { value: "website", label: "Site Web" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "app", label: "Application" },
  { value: "marketing", label: "Marketing" },
  { value: "seo", label: "SEO" },
  { value: "graphisme", label: "Graphisme" },
  { value: "ia", label: "IA & Automatisation" },
  { value: "other", label: "Autre" },
] as const;

const inputClasses =
  "w-full bg-white/[0.07] border border-white/[0.12] rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#498f6d] focus:ring-2 focus:ring-[#498f6d]/20 transition-all duration-200 text-sm";

const selectClasses =
  "w-full bg-white/[0.07] border border-white/[0.12] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#498f6d] focus:ring-2 focus:ring-[#498f6d]/20 transition-all duration-200 appearance-none text-sm [&>option]:bg-[#1a1a1a] [&>option]:text-white";

const labelClasses = "block text-sm font-medium text-white/80 mb-1";

const errorClasses = "text-red-600 text-xs mt-1";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export function DevisForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [draftRestored, setDraftRestored] = useState(false);

  // Draft persistence
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasRestoredRef = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    reset,
    watch,
  } = useForm<DevisFormData>({
    resolver: zodResolver(devisFormSchema),
  });

  // ── Restore draft on mount ──
  useEffect(() => {
    const draft = loadDraft<Partial<DevisFormData>>(DRAFT_KEY);
    if (draft && Object.keys(draft).length > 0) {
      reset(draft as DevisFormData);
      setDraftRestored(true);
    }
    hasRestoredRef.current = true;
  }, [reset]);

  // ── Save on change (debounced) ──
  useEffect(() => {
    const subscription = watch((values) => {
      if (!hasRestoredRef.current) return;
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
      saveTimeoutRef.current = setTimeout(() => {
        saveDraft(DRAFT_KEY, values);
      }, 400);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // ── Cleanup debounce on unmount ──
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  // ── Manual clear ──
  const handleClearDraft = () => {
    clearDraft(DRAFT_KEY);
    reset({} as DevisFormData);
    setDraftRestored(false);
    setStep(1);
  };

  const goToStep2 = async () => {
    const valid = await trigger([
      "firstName",
      "lastName",
      "email",
      "phone",
      "company",
      "service",
      "budget",
      "message",
    ]);
    if (valid) {
      setDirection(1);
      setStep(2);
    }
  };

  const goToStep1 = () => {
    setDirection(-1);
    setStep(1);
  };

  const { submit } = useFormSubmit();

  const onSubmit = async (data: DevisFormData) => {
    setSubmitError(null);
    const result = await submit({
      url: "/api/contact",
      body: {
        formType: "devis",
        ...data,
        sourceUrl: typeof window !== "undefined" ? window.location.href : "",
      },
    });

    if (result.ok) {
      clearDraft(DRAFT_KEY);
      setDraftRestored(false);
      setIsSubmitted(true);
      reset();
    } else {
      setSubmitError(result.error ?? "Une erreur est survenue.");
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        >
          <CheckCircle className="h-16 w-16 text-[#498f6d] mb-4" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mb-2">
          Demande de devis envoyée !
        </h3>
        <p className="text-white/50 mb-6">
          Nous analyserons votre projet et vous contacterons sous 24h.
        </p>
        <Button
          variant="secondary"
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
          }}
        >
          Nouvelle demande
        </Button>
      </motion.div>
    );
  }

  return (
    <div>
      {/* ── Brouillon restauré — banner ── */}
      {draftRestored && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#498f6d]/30 bg-[#498f6d]/[0.06] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#498f6d]/15">
              <History className="h-4 w-4 text-[#498f6d]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Brouillon restauré
              </p>
              <p className="text-xs text-white/50">
                Vos informations ont été récupérées. Elles sont sauvegardées
                automatiquement pendant votre saisie.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClearDraft}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
            Effacer
          </button>
        </div>
      )}

      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors duration-300",
            step >= 1
              ? "bg-[#498f6d] text-white"
              : "bg-white/10 text-white/30"
          )}
        >
          1
        </div>
        <div
          className={cn(
            "h-0.5 flex-1 rounded transition-colors duration-300",
            step >= 2 ? "bg-[#498f6d]" : "bg-white/10"
          )}
        />
        <div
          className={cn(
            "flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold transition-colors duration-300",
            step >= 2
              ? "bg-[#498f6d] text-white"
              : "bg-white/10 text-white/30"
          )}
        >
          2
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait" custom={direction}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-5"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Vos informations
              </h3>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="devis-firstName" className={labelClasses}>
                    Prénom *
                  </label>
                  <input
                    id="devis-firstName"
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
                </div>
                <div>
                  <label htmlFor="devis-lastName" className={labelClasses}>
                    Nom *
                  </label>
                  <input
                    id="devis-lastName"
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
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="devis-email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    id="devis-email"
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
                </div>
                <div>
                  <label htmlFor="devis-phone" className={labelClasses}>
                    Téléphone
                  </label>
                  <input
                    id="devis-phone"
                    type="tel"
                    placeholder="+1 (514) 000-0000"
                    className={inputClasses}
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="devis-company" className={labelClasses}>
                  Entreprise
                </label>
                <input
                  id="devis-company"
                  type="text"
                  placeholder="Nom de votre entreprise"
                  className={inputClasses}
                  {...register("company")}
                />
              </div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="devis-service" className={labelClasses}>
                    Service *
                  </label>
                  <select
                    id="devis-service"
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
                </div>
                <div>
                  <label htmlFor="devis-budget" className={labelClasses}>
                    Budget
                  </label>
                  <select
                    id="devis-budget"
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
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="devis-message" className={labelClasses}>
                  Message *
                </label>
                <textarea
                  id="devis-message"
                  rows={4}
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
              </div>

              {/* Next step */}
              <div className="flex justify-end">
                <Button type="button" onClick={goToStep2}>
                  Suivant
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-5"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Détails du projet
              </h3>

              {/* Project type & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="devis-projectType" className={labelClasses}>
                    Type de projet *
                  </label>
                  <select
                    id="devis-projectType"
                    className={cn(
                      selectClasses,
                      errors.projectType && "border-red-400/50"
                    )}
                    defaultValue=""
                    {...register("projectType")}
                  >
                    <option value="" disabled>
                      Sélectionnez un type
                    </option>
                    {projectTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className={errorClasses}>{errors.projectType.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="devis-urgency" className={labelClasses}>
                    Urgence *
                  </label>
                  <select
                    id="devis-urgency"
                    className={cn(
                      selectClasses,
                      errors.urgency && "border-red-400/50"
                    )}
                    defaultValue=""
                    {...register("urgency")}
                  >
                    <option value="" disabled>
                      Sélectionnez l&apos;urgence
                    </option>
                    {urgencyOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.urgency && (
                    <p className={errorClasses}>{errors.urgency.message}</p>
                  )}
                </div>
              </div>

              {/* Current site */}
              <div>
                <label htmlFor="devis-currentSite" className={labelClasses}>
                  Site actuel (optionnel)
                </label>
                <input
                  id="devis-currentSite"
                  type="url"
                  placeholder="https://votre-site.com"
                  className={cn(
                    inputClasses,
                    errors.currentSite && "border-red-400/50"
                  )}
                  {...register("currentSite")}
                />
                {errors.currentSite && (
                  <p className={errorClasses}>{errors.currentSite.message}</p>
                )}
              </div>

              {/* Objectives */}
              <div>
                <label htmlFor="devis-objectives" className={labelClasses}>
                  Objectifs *
                </label>
                <textarea
                  id="devis-objectives"
                  rows={5}
                  placeholder="Quels sont vos objectifs principaux ? (visibilité, conversions, refonte, etc.)"
                  className={cn(
                    inputClasses,
                    "resize-none",
                    errors.objectives && "border-red-400/50"
                  )}
                  {...register("objectives")}
                />
                {errors.objectives && (
                  <p className={errorClasses}>{errors.objectives.message}</p>
                )}
              </div>

              {/* Error */}
              {submitError && (
                <div className="rounded-lg border border-red-400/30 bg-red-900/20 px-4 py-3 text-sm text-red-400">
                  {submitError}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between">
                <Button type="button" variant="secondary" onClick={goToStep1}>
                  <ArrowLeft className="h-4 w-4" />
                  Retour
                </Button>
                <Button type="submit" loading={isSubmitting}>
                  <Send className="h-4 w-4" />
                  Demander un devis
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
