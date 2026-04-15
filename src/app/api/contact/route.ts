import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { buildContactHtml, SMTP_FROM, SMTP_TO, transporter } from "@/lib/email";

// ---------------------------------------------------------------------------
// Rate limiting (in-memory, 5 req / IP / heure)
// ---------------------------------------------------------------------------

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.firstRequest > RATE_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ---------------------------------------------------------------------------
// Zod schemas
// ---------------------------------------------------------------------------

const baseSchema = z.object({
  formType: z.enum(["contact", "devis", "lead"]),
  website: z.string().max(0, "honeypot").optional(), // honeypot anti-spam
  sourceUrl: z.string().optional(),
});

const contactSchema = baseSchema.extend({
  formType: z.literal("contact"),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().max(100).optional(),
  service: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(5).max(5000),
});

const devisSchema = baseSchema.extend({
  formType: z.literal("devis"),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().max(100).optional(),
  service: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(5).max(5000),
  urgency: z.enum(["normal", "urgent", "tres-urgent"]),
  projectType: z.enum(["website", "ecommerce", "app", "marketing", "seo", "graphisme", "ia", "other"]),
  currentSite: z.string().optional(),
  objectives: z.string().min(10).max(5000),
});

const leadSchema = baseSchema.extend({
  formType: z.literal("lead"),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  company: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5).max(2000),
});

const bodySchema = z.discriminatedUnion("formType", [contactSchema, devisSchema, leadSchema]);

// ---------------------------------------------------------------------------
// POST handler
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  // IP for rate limiting + logging
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans une heure." },
      { status: 429 },
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Validate
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides.", details: parsed.error.flatten() }, { status: 422 });
  }

  const data = parsed.data;

  // Honeypot — if "website" is filled, silently accept (bot)
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  // Build email
  let subject: string;
  let fields: Record<string, string | undefined>;

  if (data.formType === "contact") {
    subject = `[Contact] ${data.firstName} ${data.lastName} — ${data.service}`;
    fields = {
      "Prénom": data.firstName,
      "Nom": data.lastName,
      "Email": data.email,
      "Téléphone": data.phone,
      "Entreprise": data.company,
      "Service souhaité": data.service,
      "Budget": data.budget,
      "Message": data.message,
      "—": undefined,
      "Formulaire (URL)": data.sourceUrl,
      "Adresse IP": ip !== "unknown" ? ip : undefined,
    };
  } else if (data.formType === "devis") {
    const urgencyLabel: Record<string, string> = {
      normal: "Normal (2-4 semaines)",
      urgent: "Urgent (1-2 semaines)",
      "tres-urgent": "Très urgent (< 1 semaine)",
    };
    subject = `[Devis] ${data.firstName} ${data.lastName} — ${data.service}`;
    fields = {
      "Prénom": data.firstName,
      "Nom": data.lastName,
      "Email": data.email,
      "Téléphone": data.phone,
      "Entreprise": data.company,
      "Service souhaité": data.service,
      "Budget": data.budget,
      "Type de projet": data.projectType,
      "Urgence": urgencyLabel[data.urgency] ?? data.urgency,
      "Site actuel": data.currentSite,
      "Objectifs": data.objectives,
      "Message": data.message,
      "—": undefined,
      "Formulaire (URL)": data.sourceUrl,
      "Adresse IP": ip !== "unknown" ? ip : undefined,
    };
  } else {
    // lead
    subject = `[Lead] ${data.firstName} ${data.lastName} — ${data.email}`;
    fields = {
      "Prénom": data.firstName,
      "Nom": data.lastName,
      "Email": data.email,
      "Téléphone": data.phone,
      "Entreprise": data.company,
      "Message / Projet": data.message,
      "—": undefined,
      "Formulaire (URL)": data.sourceUrl,
      "Adresse IP": ip !== "unknown" ? ip : undefined,
    };
  }

  const titleMap: Record<string, string> = {
    contact: "Nouveau message de contact",
    devis: "Nouvelle demande de devis",
    lead: "Nouveau lead capturé",
  };

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      replyTo: "email" in data ? data.email : undefined,
      subject,
      text: Object.entries(fields)
        .filter(([k, v]) => v && k !== "—")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n"),
      html: buildContactHtml(fields, titleMap[data.formType] ?? "Nouveau formulaire"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[API/contact] sendMail error:", err);
    const code = (err as NodeJS.ErrnoException).code;
    if (code === "ETIMEDOUT" || code === "ECONNREFUSED" || code === "ESOCKET") {
      return NextResponse.json(
        { error: "Le serveur email est temporairement indisponible. Réessayez dans quelques instants." },
        { status: 503 },
      );
    }
    if (code === "EAUTH") {
      return NextResponse.json(
        { error: "Erreur de configuration email. Veuillez nous contacter directement à info@ekolink.fr." },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." },
      { status: 500 },
    );
  }
}
