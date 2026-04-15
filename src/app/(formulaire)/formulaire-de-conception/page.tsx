"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  ClipboardList,
  Globe,
  History,
  Instagram,
  MapPin,
  Megaphone,
  Palette,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Upload,
  X,
} from "lucide-react";

import { clearDraft, DRAFT_KEYS, loadDraft, saveDraft } from "@/lib/form-draft";
import { cn } from "@/lib/utils";

// ── Draft shape persisted in localStorage ──
interface FormulaireDraft {
  category: string;
  service: string;
  socials: string[];
  objectives: string[];
  hasDomain: string;
  hasLogo: string;
  hasLanding: string;
  hasVisuals: string;
  hasCampaign: string;
  campaignDuration: string;
  textFields: Record<string, string>;
}

const DRAFT_KEY = DRAFT_KEYS.formulaireConception;

// ═══════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════

const SERVICE_OPTIONS: Record<string, { label: string; options: string[] }> = {
  "site-web": {
    label: "SITE WEB",
    options: [
      "Création de site web",
      "Refonte de site web",
      "Modification de site web",
    ],
  },
  publicite: {
    label: "PUBLICITÉ",
    options: [
      "Publicité sur Google",
      "Publicité sur Facebook",
      "Publicité sur Tiktok",
      "Publicité sur Linkedin",
    ],
  },
  "reseaux-sociaux": {
    label: "RÉSEAUX SOCIAUX",
    options: [
      "Création de page professionnelle",
      "Modification de page professionnelle",
      "Gestion de page professionnelle",
    ],
  },
  "identite-visuelle": {
    label: "IDENTITÉ VISUELLE",
    options: ["Logo", "Carte de visite", "Flyer"],
  },
  "fiche-google": {
    label: "FICHE GOOGLE",
    options: [
      "Création de Fiche Google",
      "Optimisation de Fiche Google",
      "Déblocage de Fiche Google",
    ],
  },
};

const CATEGORIES = [
  { id: "site-web", label: "Site web", Icon: Globe },
  { id: "publicite", label: "Publicité", Icon: Megaphone },
  { id: "reseaux-sociaux", label: "Réseaux sociaux", Icon: Instagram },
  { id: "identite-visuelle", label: "Identité visuelle", Icon: Palette },
  { id: "fiche-google", label: "Fiche Google", Icon: MapPin },
] as const;

const SOCIAL_PLATFORMS = [
  "Facebook",
  "Instagram",
  "X",
  "LinkedIn",
  "TikTok",
  "Youtube",
  "Autre",
];
const CAMPAIGN_OBJECTIVES = [
  "Générer des appels",
  "Obtenir des demandes via formulaire",
  "Ventes en ligne",
  "Notoriété",
  "Autre",
];

// ═══════════════════════════════════════════════
//  STYLES — aligné sur les autres formulaires du site
// ═══════════════════════════════════════════════

const inputCls =
  "w-full rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200";
const textareaCls = cn(inputCls, "min-h-[110px] resize-y leading-relaxed");
const selectCls = cn(
  inputCls,
  "appearance-none pr-10 [&>option]:bg-surface [&>option]:text-white"
);
const labelCls = "block text-sm font-medium text-white/85 mb-2";

// ═══════════════════════════════════════════════
//  UI HELPERS
// ═══════════════════════════════════════════════

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative border-t border-white/[0.08] pt-10 mt-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="h-px w-6 bg-accent" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-1.5 text-sm text-white/50 max-w-xl">{description}</p>
      )}
    </div>
  );
}

function Lbl({
  children,
  req,
}: {
  children: React.ReactNode;
  req?: boolean;
}) {
  return (
    <label className={labelCls}>
      {children} {req && <span className="text-red-400">*</span>}
    </label>
  );
}

function Radios({
  name,
  options,
  value,
  onChange,
  req,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  req?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <label
            key={opt}
            className={cn(
              "relative flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-all duration-200",
              selected
                ? "border-accent bg-accent/10 text-white"
                : "border-white/[0.12] bg-white/[0.03] text-white/70 hover:border-white/25 hover:bg-white/[0.06]"
            )}
          >
            <span
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors",
                selected ? "border-accent bg-accent" : "border-white/30"
              )}
            >
              {selected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
            </span>
            <input
              type="radio"
              name={name}
              value={opt}
              required={req}
              className="sr-only"
              onChange={() => onChange(opt)}
              checked={selected}
            />
            <span>{opt}</span>
          </label>
        );
      })}
    </div>
  );
}

function Checks({
  options,
  selected,
  toggle,
}: {
  options: string[];
  selected: string[];
  toggle: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => {
        const isOn = selected.includes(opt);
        return (
          <label
            key={opt}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2.5 text-sm transition-all duration-200",
              isOn
                ? "border-accent bg-accent/10 text-white"
                : "border-white/[0.12] bg-white/[0.03] text-white/70 hover:border-white/25 hover:bg-white/[0.06]"
            )}
          >
            <span
              className={cn(
                "flex h-4 w-4 items-center justify-center rounded border-2 transition-colors",
                isOn ? "border-accent bg-accent" : "border-white/30"
              )}
            >
              {isOn && (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3 w-3 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={isOn}
              onChange={() => toggle(opt)}
            />
            <span>{opt}</span>
          </label>
        );
      })}
    </div>
  );
}

function FileUpload({ label, name }: { label: string; name: string }) {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div>
      <label className={labelCls}>{label}</label>
      <label className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 bg-white/[0.03] px-4 py-8 text-center transition-all duration-200 hover:border-accent/60 hover:bg-white/[0.06]">
        <input
          type="file"
          name={name}
          multiple
          accept="image/*,.pdf"
          className="sr-only"
          onChange={(e) => {
            if (e.target.files) setFiles(Array.from(e.target.files));
          }}
        />
        <Upload className="h-5 w-5 text-white/40 transition-colors group-hover:text-accent" />
        {files.length > 0 ? (
          <span className="text-xs text-white/70 break-all">
            {files.map((f) => f.name).join(", ")}
          </span>
        ) : (
          <>
            <span className="text-sm text-white/60">Cliquez pour téléverser</span>
            <span className="text-[11px] text-white/30">Images ou PDF — 25 MB max</span>
          </>
        )}
      </label>
    </div>
  );
}

function CategoryCard({
  id,
  label,
  Icon,
  selected,
  onClick,
}: {
  id: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "group relative flex flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200",
        selected
          ? "border-accent bg-accent/10 shadow-[0_0_0_1px_rgba(73,143,109,0.6),0_8px_32px_-8px_rgba(73,143,109,0.35)]"
          : "border-white/[0.08] bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
      )}
      data-category-id={id}
    >
      <div
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
          selected ? "bg-accent/20 text-accent" : "bg-white/[0.06] text-white/60"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-sm font-semibold text-white">{label}</div>
      {selected && (
        <span className="absolute top-3 right-3">
          <CheckCircle className="h-4 w-4 text-accent" />
        </span>
      )}
    </button>
  );
}

// ═══════════════════════════════════════════════
//  PAGE
// ═══════════════════════════════════════════════

export default function FormulaireConceptionPage() {
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [socials, setSocials] = useState<string[]>([]);
  const [objectives, setObjectives] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Radio states
  const [hasDomain, setHasDomain] = useState("");
  const [hasLogo, setHasLogo] = useState("");
  const [hasLanding, setHasLanding] = useState("");
  const [hasVisuals, setHasVisuals] = useState("");
  const [hasCampaign, setHasCampaign] = useState("");
  const [campaignDuration, setCampaignDuration] = useState("");

  // ── Draft persistence ─────────────────────────────
  const formRef = useRef<HTMLFormElement>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const draftRef = useRef<FormulaireDraft | null>(null);
  const hasRestoredInputsRef = useRef(false);
  const [draftRestored, setDraftRestored] = useState(false);

  const selectedCategory = category ? SERVICE_OPTIONS[category] : null;
  const hasService = service !== "";

  function toggle(list: string[], setList: (v: string[]) => void, val: string) {
    setList(
      list.includes(val) ? list.filter((v) => v !== val) : [...list, val]
    );
  }

  // ── Serialize current state + text inputs for localStorage ──
  const serializeForm = useCallback((): FormulaireDraft => {
    const textFields: Record<string, string> = {};
    if (formRef.current) {
      const fd = new FormData(formRef.current);
      for (const [key, value] of fd.entries()) {
        // Skip files (non-serializable) and managed state (category/service/…)
        if (typeof value !== "string") continue;
        if (value === "") continue;
        textFields[key] = value;
      }
    }
    return {
      category,
      service,
      socials,
      objectives,
      hasDomain,
      hasLogo,
      hasLanding,
      hasVisuals,
      hasCampaign,
      campaignDuration,
      textFields,
    };
  }, [
    category,
    service,
    socials,
    objectives,
    hasDomain,
    hasLogo,
    hasLanding,
    hasVisuals,
    hasCampaign,
    campaignDuration,
  ]);

  // ── Debounced save ──
  const scheduleSave = useCallback(() => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      saveDraft(DRAFT_KEY, serializeForm());
    }, 400);
  }, [serializeForm]);

  // ── Load draft on mount ──
  useEffect(() => {
    const draft = loadDraft<FormulaireDraft>(DRAFT_KEY);
    if (!draft) return;
    draftRef.current = draft;

    if (draft.category) setCategory(draft.category);
    if (draft.service) setService(draft.service);
    if (Array.isArray(draft.socials)) setSocials(draft.socials);
    if (Array.isArray(draft.objectives)) setObjectives(draft.objectives);
    if (draft.hasDomain) setHasDomain(draft.hasDomain);
    if (draft.hasLogo) setHasLogo(draft.hasLogo);
    if (draft.hasLanding) setHasLanding(draft.hasLanding);
    if (draft.hasVisuals) setHasVisuals(draft.hasVisuals);
    if (draft.hasCampaign) setHasCampaign(draft.hasCampaign);
    if (draft.campaignDuration) setCampaignDuration(draft.campaignDuration);

    // Signal that a draft was restored (banner)
    if (
      draft.category ||
      draft.service ||
      (draft.textFields && Object.keys(draft.textFields).length > 0)
    ) {
      setDraftRestored(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Restore text inputs after conditional fields mount ──
  useEffect(() => {
    if (hasRestoredInputsRef.current) return;
    const draft = draftRef.current;
    if (!draft || !formRef.current || !draft.textFields) return;

    // Only restore once the expected conditional fields have had a chance to mount.
    // We wait for the state-driven fields to match the draft first.
    if (draft.category && draft.category !== category) return;
    if (draft.service && draft.service !== service) return;

    const form = formRef.current;
    for (const [name, value] of Object.entries(draft.textFields)) {
      const input = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
        `[name="${name}"]`
      );
      if (input && !input.value) {
        input.value = value;
      }
    }
    hasRestoredInputsRef.current = true;
  }, [category, service]);

  // ── Save on state changes ──
  useEffect(() => {
    // Avoid saving during the initial restore pass
    if (!hasRestoredInputsRef.current && draftRef.current) return;
    scheduleSave();
  }, [
    category,
    service,
    socials,
    objectives,
    hasDomain,
    hasLogo,
    hasLanding,
    hasVisuals,
    hasCampaign,
    campaignDuration,
    scheduleSave,
  ]);

  // ── Cleanup debounce on unmount ──
  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, []);

  // ── Clear draft manually ──
  const handleClearDraft = useCallback(() => {
    clearDraft(DRAFT_KEY);
    draftRef.current = null;
    setDraftRestored(false);
    // Reset all state
    setCategory("");
    setService("");
    setSocials([]);
    setObjectives([]);
    setHasDomain("");
    setHasLogo("");
    setHasLanding("");
    setHasVisuals("");
    setHasCampaign("");
    setCampaignDuration("");
    // Clear text inputs
    if (formRef.current) {
      formRef.current
        .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
          "input[type='text'], input[type='email'], input[type='tel'], textarea"
        )
        .forEach((el) => {
          el.value = "";
        });
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);

    // Add fields managed via state
    fd.set("category", CATEGORIES.find((c) => c.id === category)?.label ?? "");
    fd.set("service", service);
    if (hasDomain) fd.set("hasDomain", hasDomain);
    if (hasLogo) fd.set("hasLogo", hasLogo);
    if (socials.length > 0) fd.set("socials", socials.join(", "));
    if (hasLanding) fd.set("hasLanding", hasLanding);
    if (hasVisuals) fd.set("hasVisuals", hasVisuals);
    if (hasCampaign) fd.set("hasCampaign", hasCampaign);
    if (objectives.length > 0) fd.set("objectives", objectives.join(", "));
    if (campaignDuration) fd.set("campaignDuration", campaignDuration);

    setSubmitError(null);
    try {
      const res = await fetch("/api/formulaire-conception/", {
        method: "POST",
        body: fd,
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setSubmitError(err.error || "Une erreur est survenue.");
      } else {
        clearDraft(DRAFT_KEY);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setSubmitError(
        "Impossible de contacter le serveur. Vérifiez votre connexion internet."
      );
    } finally {
      setLoading(false);
    }
  }

  // ══════════════════════════════════════════════
  //  SUCCESS STATE
  // ══════════════════════════════════════════════

  if (submitted) {
    return (
      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto flex min-h-[70vh] w-full max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
          <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
            <CheckCircle className="relative h-12 w-12 text-accent" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Merci, c&apos;est bien reçu.
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
            Votre demande a été transmise à notre équipe. Un expert EKOLINK vous
            rappelle sous <strong className="text-white">24 h ouvrables</strong>{" "}
            (lun-ven, 9 h à 17 h 30, heure de Paris).
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+33100000000"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-accent hover:bg-accent/10"
            >
              <Phone className="h-4 w-4 text-accent" />
              +33 1 00 00 00 00
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90"
            >
              Retour à l&apos;accueil
            </a>
          </div>
        </section>
      </main>
    );
  }

  // ══════════════════════════════════════════════
  //  FORM STATE
  // ══════════════════════════════════════════════

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.22]"
            style={{
              backgroundImage:
                "url('/images/rendu3D/rendu3d-cubes-lateral-angle.webp')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(73,143,109,0.12) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-14 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 mb-5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Démarrage de projet · France
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-white leading-[1.05] mb-4">
            Formulaire de <span className="text-accent">conception</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-white/60 leading-relaxed mb-6">
            Votre projet mérite une attention particulière. Prenez seulement 5
            minutes de votre temps pour répondre à ce questionnaire et nous
            aider à lui donner vie.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-white/50">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-accent" />
              <span>Données sécurisées</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>4.95 · 54 avis Google</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>+10 ans d&apos;expérience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base">🍁</span>
              <span>Fait en France</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 pt-8 pb-16">
        {/* ── Brouillon restauré — banner ── */}
        {draftRestored && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-accent/25 bg-accent/[0.06] px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15">
                <History className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">
                  Brouillon restauré
                </p>
                <p className="text-xs text-white/50">
                  Vos réponses ont été récupérées automatiquement. Elles
                  restent sauvegardées pendant votre saisie.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleClearDraft}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
              Effacer le brouillon
            </button>
          </div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          onInput={scheduleSave}
          className="rounded-2xl border border-white/[0.08] bg-[#0f0f0f]/80 p-5 md:p-8 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm"
        >
          {/* ═══ 1. INFORMATIONS DU COMMANDITAIRE ═══ */}
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 font-mono text-xs font-bold text-accent">
              1
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Étape 1
            </span>
          </div>
          <h2 className="mb-5 font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
            Informations du commanditaire
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <Lbl req>Prénom</Lbl>
              <input
                type="text"
                name="firstName"
                required
                placeholder="Ex. : Marie"
                className={inputCls}
              />
            </div>
            <div>
              <Lbl req>Nom</Lbl>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Ex. : Dupont"
                className={inputCls}
              />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <Lbl req>Courriel</Lbl>
              <input
                type="email"
                name="email"
                required
                placeholder="vous@entreprise.ca"
                className={inputCls}
              />
            </div>
            <div>
              <Lbl>Téléphone</Lbl>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (514) 000-0000"
                autoComplete="tel"
                className={inputCls}
              />
            </div>
          </div>

          {/* ═══ 2. VOTRE BESOIN ═══ */}
          <div className="mt-10 flex items-center gap-3 mb-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/20 font-mono text-xs font-bold text-accent">
              2
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Étape 2
            </span>
          </div>
          <h2 className="mb-5 font-heading text-xl md:text-2xl font-bold tracking-tight text-white">
            Catégorie de service
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {CATEGORIES.map((c) => (
              <CategoryCard
                key={c.id}
                id={c.id}
                label={c.label}
                Icon={c.Icon}
                selected={category === c.id}
                onClick={() => {
                  setCategory(c.id);
                  setService("");
                }}
              />
            ))}
          </div>

          {selectedCategory && (
            <div className="mt-6">
              <Lbl req>Service : {selectedCategory.label}</Lbl>
              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={selectCls}
              >
                <option value="">Sélectionnez le service</option>
                {selectedCategory.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* ═══ CONDITIONNEL — SITE WEB ═══ */}
          {category === "site-web" && hasService && (
            <>
              <SectionTitle
                eyebrow="Votre entreprise"
                title="Parlons de votre société"
                description="Ces informations nous permettent d'adapter le site à votre image."
              />
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Nom de votre entreprise</Lbl>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="Nom légal ou commercial"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Téléphone de l&apos;entreprise</Lbl>
                  <input
                    type="tel"
                    name="companyPhone"
                    placeholder="+1 (514) 000-0000"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Courriel de l&apos;entreprise</Lbl>
                  <input
                    type="email"
                    name="companyEmail"
                    required
                    placeholder="info@votreentreprise.ca"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Adresse complète</Lbl>
                  <input
                    type="text"
                    name="companyAddress"
                    placeholder="Ex. : 123 rue Principale, Paris, QC H2X 1Y4"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Lbl req>Vos services ou produits</Lbl>
                <textarea
                  name="servicesProducts"
                  required
                  placeholder="Décrivez ce que vous offrez. Chaque détail compte."
                  className={textareaCls}
                />
              </div>
              <div className="mt-5">
                <Lbl req>
                  Qu&apos;est-ce qui vous démarque de vos concurrents ?
                </Lbl>
                <textarea
                  name="competitors"
                  required
                  placeholder="Ce qui vous rend unique, vos atouts principaux."
                  className={textareaCls}
                />
              </div>
              <div className="mt-5">
                <Lbl req>Villes / régions desservies</Lbl>
                <textarea
                  name="cities"
                  required
                  placeholder="Ex. : Paris, Paris, France, Nice"
                  className={textareaCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Avez-vous un slogan ?</Lbl>
                <input
                  type="text"
                  name="slogan"
                  placeholder="Votre phrase d'accroche (optionnel)"
                  className={inputCls}
                />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Jours et heures d&apos;ouverture</Lbl>
                  <input
                    type="text"
                    name="workHours"
                    required
                    placeholder="Ex. : Lun-Ven 9h-17h, 24h/24, etc."
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Licences ou certifications</Lbl>
                  <input
                    type="text"
                    name="licenses"
                    placeholder="Le cas échéant"
                    className={inputCls}
                  />
                </div>
              </div>

              <SectionTitle
                eyebrow="Accès & hébergement"
                title="Avez-vous déjà un nom de domaine ?"
              />
              <div className="mt-6">
                <Radios
                  name="hasDomain"
                  options={["Oui", "Non"]}
                  value={hasDomain}
                  onChange={setHasDomain}
                  req
                />
              </div>

              <SectionTitle
                eyebrow="Identité visuelle"
                title="Votre logo et vos visuels"
              />
              <div className="mt-6">
                <Lbl req>Avez-vous un logo ?</Lbl>
                <Radios
                  name="hasLogo"
                  options={["Oui", "Non"]}
                  value={hasLogo}
                  onChange={setHasLogo}
                  req
                />
              </div>
              {hasLogo === "Oui" && (
                <div className="mt-5">
                  <FileUpload name="logo" label="Téléversez votre logo" />
                </div>
              )}
              <div className="mt-5">
                <FileUpload
                  name="images-site"
                  label="Images à inclure sur votre site (optionnel)"
                />
              </div>

              <SectionTitle
                eyebrow="Design & préférences"
                title="Vos préférences graphiques"
              />
              <div className="mt-6">
                <Lbl>Couleurs préférées</Lbl>
                <input
                  type="text"
                  name="colors"
                  placeholder="Ex. : bleu marine, vert forêt, ou #0055A4"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <FileUpload
                  name="maquette"
                  label="Maquette existante (optionnel)"
                />
              </div>

              <SectionTitle
                eyebrow="Réseaux sociaux"
                title="Vos pages sociales existantes"
              />
              <div className="mt-6">
                <Checks
                  options={SOCIAL_PLATFORMS}
                  selected={socials}
                  toggle={(v) => toggle(socials, setSocials, v)}
                />
              </div>

              <SectionTitle
                eyebrow="Précisions"
                title="Références & commentaires"
              />
              <div className="mt-6">
                <Lbl>Sites de référence</Lbl>
                <input
                  type="text"
                  name="referencesSites"
                  placeholder="Ex. : exemple1.ca, exemple2.ca"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Commentaires ou précisions</Lbl>
                <textarea
                  name="comments"
                  placeholder="Vos demandes, remarques ou idées supplémentaires."
                  className={textareaCls}
                />
              </div>
            </>
          )}

          {/* ═══ CONDITIONNEL — PUBLICITÉ ═══ */}
          {category === "publicite" && hasService && (
            <>
              <SectionTitle
                eyebrow="Votre entreprise"
                title="Parlons de votre société"
              />
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl>Nom de votre entreprise</Lbl>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Nom légal ou commercial"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Votre site web</Lbl>
                  <input
                    type="text"
                    name="companyWebsite"
                    placeholder="Ex. : monsiteweb.ca"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Lbl req>Dans quel domaine exercez-vous ?</Lbl>
                <input
                  type="text"
                  name="domain"
                  required
                  placeholder="Ex. : santé, construction, e-commerce, éducation…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl req>Vos services ou produits</Lbl>
                <textarea
                  name="servicesProducts"
                  required
                  placeholder="Décrivez ce que vous offrez, sans rien oublier."
                  className={textareaCls}
                />
              </div>

              <SectionTitle
                eyebrow="Réseaux sociaux"
                title="Pages sociales existantes"
              />
              <div className="mt-6">
                <Checks
                  options={SOCIAL_PLATFORMS}
                  selected={socials}
                  toggle={(v) => toggle(socials, setSocials, v)}
                />
              </div>

              <SectionTitle
                eyebrow="Ciblage"
                title="Audience & zone géographique"
              />
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl>Zone géographique à cibler</Lbl>
                  <input
                    type="text"
                    name="targetZone"
                    placeholder="Ex. : Paris, Paris, France"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Zones à ne pas cibler</Lbl>
                  <input
                    type="text"
                    name="excludeZone"
                    placeholder="Ex. : hors France"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Lbl>Personas / profils clients types</Lbl>
                <input
                  type="text"
                  name="personas"
                  placeholder="Ex. : PME, entrepreneurs, particuliers…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Clients B2B, B2C ou les deux ?</Lbl>
                <input
                  type="text"
                  name="b2bOrB2c"
                  placeholder="Ex. : B2B, B2C, ou mixte"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Audience cible (âge, sexe, lieu, langue)</Lbl>
                <textarea
                  name="targetAudience"
                  placeholder="Ex. : hommes/femmes 30-50 ans, Paris, bilingues…"
                  className={textareaCls}
                />
              </div>

              <SectionTitle
                eyebrow="Redirection"
                title="Liens & landing page"
              />
              <div className="mt-6">
                <Lbl req>
                  Vers quelle page précise rediriger les visiteurs ?
                </Lbl>
                <input
                  type="text"
                  name="redirectPage"
                  required
                  placeholder="Page d'accueil, réservation, offre spéciale…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl req>
                  Avez-vous une landing page optimisée pour la publicité ?
                </Lbl>
                <Radios
                  name="hasLanding"
                  options={["Oui", "Non", "À créer"]}
                  value={hasLanding}
                  onChange={setHasLanding}
                  req
                />
              </div>

              <SectionTitle
                eyebrow="Contenus"
                title="Visuels & messages publicitaires"
              />
              <div className="mt-6">
                <Lbl req>Disposez-vous déjà de visuels / textes ?</Lbl>
                <Radios
                  name="hasVisuals"
                  options={["Oui", "Non, je souhaite que vous les réalisiez"]}
                  value={hasVisuals}
                  onChange={setHasVisuals}
                  req
                />
              </div>
              <div className="mt-5">
                <Lbl>Offre spéciale ou argument clé</Lbl>
                <input
                  type="text"
                  name="specialOffer"
                  placeholder="Ex. : -20 %, service 24/7, livraison gratuite…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Slogan / message principal</Lbl>
                <input
                  type="text"
                  name="adSlogan"
                  placeholder="Optionnel"
                  className={inputCls}
                />
              </div>

              <SectionTitle
                eyebrow="Campagne"
                title="Détails de la campagne"
              />
              <div className="mt-6">
                <Lbl>Avez-vous déjà une campagne en cours ?</Lbl>
                <Radios
                  name="hasCampaign"
                  options={["Oui", "Non"]}
                  value={hasCampaign}
                  onChange={setHasCampaign}
                />
              </div>
              <div className="mt-5">
                <Lbl>Objectif principal</Lbl>
                <Checks
                  options={CAMPAIGN_OBJECTIVES}
                  selected={objectives}
                  toggle={(v) => toggle(objectives, setObjectives, v)}
                />
              </div>
              <div className="mt-5">
                <Lbl>Action souhaitée après le clic</Lbl>
                <textarea
                  name="desiredAction"
                  placeholder="Visiter votre site, remplir un formulaire, vous appeler…"
                  className={textareaCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Mots-clés à éviter</Lbl>
                <textarea
                  name="negativeKeywords"
                  placeholder="Ex. : gratuit, promo, imitation, occasion…"
                  className={textareaCls}
                />
              </div>
              <div className="mt-5">
                <Lbl req>Gestion continue ou sur durée précise ?</Lbl>
                <Radios
                  name="campaignDuration"
                  options={["Continue", "Campagne de X mois"]}
                  value={campaignDuration}
                  onChange={setCampaignDuration}
                  req
                />
              </div>

              <SectionTitle eyebrow="Précisions" title="Commentaires" />
              <div className="mt-6">
                <Lbl>Commentaires ou précisions</Lbl>
                <textarea
                  name="comments"
                  placeholder="Vos demandes, remarques ou idées supplémentaires."
                  className={textareaCls}
                />
              </div>
            </>
          )}

          {/* ═══ CONDITIONNEL — RÉSEAUX SOCIAUX ═══ */}
          {category === "reseaux-sociaux" && hasService && (
            <>
              <SectionTitle
                eyebrow="Votre entreprise"
                title="Parlons de votre société"
              />
              <div className="mt-6">
                <Lbl req>Quel réseau social est concerné ?</Lbl>
                <Checks
                  options={["Facebook", "Instagram", "Tiktok", "Youtube", "LinkedIn"]}
                  selected={socials}
                  toggle={(v) => toggle(socials, setSocials, v)}
                />
              </div>
              <div className="mt-5">
                <Lbl>Nom de votre entreprise</Lbl>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Entrez le nom de votre entreprise"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Secteur d&apos;activité</Lbl>
                <input
                  type="text"
                  name="domain"
                  placeholder="Ex. : technologie, santé, commerce, éducation…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl>Courriel professionnel</Lbl>
                  <input
                    type="email"
                    name="companyEmail"
                    placeholder="info@votreentreprise.ca"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Téléphone de l&apos;entreprise</Lbl>
                  <input
                    type="tel"
                    name="companyPhone"
                    placeholder="+1 (514) 000-0000"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Lbl>Adresse de l&apos;entreprise</Lbl>
                <input
                  type="text"
                  name="companyAddress"
                  placeholder="Ex. : Paris, QC, H2X 1Y4"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Langue principale</Lbl>
                <Checks
                  options={["Français", "Anglais", "Autre"]}
                  selected={objectives}
                  toggle={(v) => toggle(objectives, setObjectives, v)}
                />
              </div>

              <SectionTitle
                eyebrow="Objectif"
                title="Votre stratégie sociale"
              />
              <div className="mt-6">
                <Lbl>Objectif principal de votre page</Lbl>
                <input
                  type="text"
                  name="pageObjective"
                  placeholder="Ex. : vendre, présenter vos services, attirer des clients…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Cible principale</Lbl>
                <input
                  type="text"
                  name="pageTarget"
                  placeholder="Ex. : clients locaux, professionnels, étudiants…"
                  className={inputCls}
                />
              </div>

              <SectionTitle eyebrow="Précisions" title="Commentaires" />
              <div className="mt-6">
                <Lbl>Commentaires ou précisions</Lbl>
                <textarea
                  name="comments"
                  placeholder="Vos demandes, remarques ou idées supplémentaires."
                  className={textareaCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Modifications souhaitées</Lbl>
                <textarea
                  name="modifications"
                  placeholder="Détaillez les changements désirés."
                  className={textareaCls}
                />
              </div>
            </>
          )}

          {/* ═══ CONDITIONNEL — IDENTITÉ VISUELLE ═══ */}
          {category === "identite-visuelle" && hasService && (
            <>
              <SectionTitle
                eyebrow="Votre entreprise"
                title="Parlons de votre société"
              />
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Nom de votre entreprise</Lbl>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="Nom légal ou commercial"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Téléphone de l&apos;entreprise</Lbl>
                  <input
                    type="tel"
                    name="companyPhone"
                    placeholder="+1 (514) 000-0000"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Courriel de l&apos;entreprise</Lbl>
                  <input
                    type="email"
                    name="companyEmail"
                    required
                    placeholder="info@votreentreprise.ca"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Adresse complète</Lbl>
                  <input
                    type="text"
                    name="companyAddress"
                    placeholder="Ex. : 123 rue Principale, Paris, QC H2X 1Y4"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Lbl>Site web de l&apos;entreprise</Lbl>
                <input
                  type="text"
                  name="companyWebsite"
                  placeholder="Ex. : votreentreprise.ca"
                  className={inputCls}
                />
              </div>

              <SectionTitle
                eyebrow="Style"
                title="Préférences visuelles"
              />
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl>Couleurs préférées</Lbl>
                  <input
                    type="text"
                    name="colors"
                    placeholder="Ex. : bleu foncé, doré, noir et blanc"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Couleurs à éviter</Lbl>
                  <input
                    type="text"
                    name="colorsToAvoid"
                    placeholder="Ex. : rouge vif, jaune fluo…"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl>Polices préférées</Lbl>
                  <input
                    type="text"
                    name="fonts"
                    placeholder="Ex. : Arial, Roboto, Times New Roman…"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Symbole représentatif</Lbl>
                  <input
                    type="text"
                    name="symbol"
                    placeholder="Ex. : montagne, initiales, symbole abstrait…"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <FileUpload
                  name="exemples-design"
                  label="Exemples que vous appréciez (optionnel)"
                />
              </div>

              {service !== "Logo" && (
                <>
                  <div className="mt-5">
                    <Lbl>Avez-vous un logo à fournir ?</Lbl>
                    <Radios
                      name="hasLogo"
                      options={["Oui", "Non"]}
                      value={hasLogo}
                      onChange={setHasLogo}
                    />
                  </div>
                  {hasLogo === "Oui" && (
                    <div className="mt-5">
                      <FileUpload name="logo" label="Téléversez votre logo" />
                    </div>
                  )}
                </>
              )}

              <SectionTitle eyebrow="Précisions" title="Commentaires" />
              <div className="mt-6">
                <Lbl>Commentaires ou précisions</Lbl>
                <textarea
                  name="comments"
                  placeholder="Vos demandes, remarques ou idées supplémentaires."
                  className={textareaCls}
                />
              </div>
            </>
          )}

          {/* ═══ CONDITIONNEL — FICHE GOOGLE ═══ */}
          {category === "fiche-google" && hasService && (
            <>
              <SectionTitle
                eyebrow="Votre entreprise"
                title="Parlons de votre société"
              />
              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Nom de votre entreprise</Lbl>
                  <input
                    type="text"
                    name="companyName"
                    required
                    placeholder="Nom légal ou commercial"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Téléphone de l&apos;entreprise</Lbl>
                  <input
                    type="tel"
                    name="companyPhone"
                    placeholder="+1 (514) 000-0000"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Courriel de l&apos;entreprise</Lbl>
                  <input
                    type="email"
                    name="companyEmail"
                    required
                    placeholder="info@votreentreprise.ca"
                    className={inputCls}
                  />
                </div>
                <div>
                  <Lbl>Adresse complète</Lbl>
                  <input
                    type="text"
                    name="companyAddress"
                    placeholder="Ex. : 123 rue Principale, Paris, QC H2X 1Y4"
                    className={inputCls}
                  />
                </div>
              </div>
              <div className="mt-5">
                <Lbl req>Vos services ou produits</Lbl>
                <textarea
                  name="servicesProducts"
                  required
                  placeholder="Décrivez ce que vous offrez."
                  className={textareaCls}
                />
              </div>

              {service === "Création de Fiche Google" && (
                <div className="mt-5">
                  <Lbl req>
                    Qu&apos;est-ce qui vous démarque de vos concurrents ?
                  </Lbl>
                  <textarea
                    name="competitors"
                    required
                    placeholder="Ce qui vous rend unique, vos atouts principaux."
                    className={textareaCls}
                  />
                </div>
              )}

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <Lbl req>Villes desservies</Lbl>
                  <textarea
                    name="cities"
                    required
                    placeholder="Ex. : Paris, Paris, France"
                    className={textareaCls}
                  />
                </div>
                <div>
                  <Lbl>Site web</Lbl>
                  <input
                    type="text"
                    name="companyWebsite"
                    placeholder="Ex. : votreentreprise.ca"
                    className={inputCls}
                  />
                </div>
              </div>

              {service === "Création de Fiche Google" && (
                <div className="mt-5">
                  <Lbl req>Jours et heures d&apos;ouverture</Lbl>
                  <input
                    type="text"
                    name="workHours"
                    required
                    placeholder="Ex. : Lun-Ven 9h-17h"
                    className={inputCls}
                  />
                </div>
              )}

              {service !== "Déblocage de Fiche Google" && (
                <>
                  <SectionTitle
                    eyebrow="Identité visuelle"
                    title="Visuels de l'entreprise"
                  />
                  <div className="mt-6">
                    <Lbl req>Avez-vous un logo ?</Lbl>
                    <Radios
                      name="hasLogo"
                      options={["Oui", "Non"]}
                      value={hasLogo}
                      onChange={setHasLogo}
                      req
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FileUpload
                      name="photos-facade"
                      label="Façade et intérieur"
                    />
                    <FileUpload
                      name="photos-couverture"
                      label="Photos de couverture"
                    />
                    <FileUpload
                      name="photos-realisations"
                      label="Réalisations (photos/vidéos)"
                    />
                    <FileUpload
                      name="affiches-pub"
                      label="Affiches publicitaires"
                    />
                  </div>
                </>
              )}

              <SectionTitle
                eyebrow="Réseaux sociaux"
                title="Pages sociales existantes"
              />
              <div className="mt-6">
                <Checks
                  options={SOCIAL_PLATFORMS}
                  selected={socials}
                  toggle={(v) => toggle(socials, setSocials, v)}
                />
              </div>

              <SectionTitle
                eyebrow="Précisions"
                title="Lien & commentaires"
              />
              <div className="mt-6">
                <Lbl req>Lien vers la fiche Google</Lbl>
                <input
                  type="text"
                  name="googleFicheLink"
                  required
                  placeholder="https://g.page/…"
                  className={inputCls}
                />
              </div>
              <div className="mt-5">
                <Lbl>Commentaires ou précisions</Lbl>
                <textarea
                  name="comments"
                  placeholder="Vos demandes, remarques ou idées supplémentaires."
                  className={textareaCls}
                />
              </div>
            </>
          )}

          {/* Error message */}
          {submitError && (
            <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {submitError}
            </div>
          )}

          {/* Submit */}
          <div className="mt-12 flex flex-col items-start gap-4 border-t border-white/[0.08] pt-8">
            <button
              type="submit"
              disabled={loading || !category || !service}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(73,143,109,0.6)] transition-all duration-200 hover:bg-accent/90 hover:shadow-[0_12px_32px_-8px_rgba(73,143,109,0.8)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {loading ? (
                <>
                  <ClipboardList className="h-4 w-4 animate-pulse" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Envoyer ma demande
                </>
              )}
            </button>
            <p className="text-xs text-white/40">
              En soumettant ce formulaire, vous acceptez d&apos;être contacté par
              EKOLINK. Vos données restent hébergées en France.
            </p>
          </div>
        </form>

        {/* ── PIED DE PAGE FORMULAIRE ── */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-white/50">
            Une question ? Appelez-nous directement :
          </p>
          <a
            href="tel:+33100000000"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-accent hover:bg-accent/10"
          >
            <Phone className="h-4 w-4 text-accent" />
            +33 1 00 00 00 00
            <span className="text-xs text-white/40">· Lun-Ven 9h-17h30</span>
          </a>
        </div>
      </section>
    </main>
  );
}
