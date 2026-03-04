"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/presentation/components/ui";

const leadCaptureSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
});

type LeadCaptureData = z.infer<typeof leadCaptureSchema>;

const serviceOptions = [
  { value: "sites-web", label: "Sites Web" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "applications-web", label: "Applications Web" },
  { value: "applications-mobiles", label: "Applications Mobiles" },
  { value: "seo", label: "SEO" },
  { value: "sem-google-ads", label: "SEM / Google Ads" },
  { value: "social-media", label: "Social Media" },
  { value: "email-marketing", label: "Email Marketing" },
  { value: "content-marketing", label: "Content Marketing" },
  { value: "branding", label: "Branding" },
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

const inputClasses =
  "w-full bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200";

const selectClasses =
  "w-full bg-[#FFFFFF] border border-[#D1D5DB] rounded-lg px-3 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none";

const errorClasses = "text-red-600 text-xs mt-1";

interface LeadCaptureFormProps {
  title: string;
  subtitle: string;
  onSuccess?: () => void;
}

export function LeadCaptureForm({
  title,
  subtitle,
  onSuccess,
}: LeadCaptureFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadCaptureData>({
    resolver: zodResolver(leadCaptureSchema),
  });

  const onSubmit = async (_data: LeadCaptureData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    reset();
    onSuccess?.();
  };

  return (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-5">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-6 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
                delay: 0.1,
              }}
            >
              <CheckCircle className="h-12 w-12 text-[#498f6d] mb-3" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#1A1A1A] font-medium"
            >
              Merci !
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[#6B7280] text-sm mt-1"
            >
              Nous vous contacterons bientôt.
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h4 className="text-[#1A1A1A] font-semibold text-base mb-1">
              {title}
            </h4>
            <p className="text-[#6B7280] text-sm mb-4">{subtitle}</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className={cn(
                    inputClasses,
                    errors.name && "border-red-400/50"
                  )}
                  {...register("name")}
                />
                {errors.name && (
                  <p className={errorClasses}>{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
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
                <select
                  className={cn(
                    selectClasses,
                    errors.service && "border-red-400/50"
                  )}
                  defaultValue=""
                  {...register("service")}
                >
                  <option value="" disabled>
                    Service souhaité
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

              <Button
                type="submit"
                size="sm"
                loading={isSubmitting}
                className="w-full"
              >
                <Send className="h-3.5 w-3.5" />
                Envoyer
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
