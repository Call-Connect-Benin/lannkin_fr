import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { buildContactHtml, SMTP_FROM, SMTP_TO, transporter } from "@/lib/email";

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT = 3;
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

const bodySchema = z.object({
  email: z.string().email("Adresse email invalide"),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Trop de requêtes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Email invalide." }, { status: 422 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: SMTP_TO,
      subject: `[Newsletter] Nouvelle inscription — ${parsed.data.email}`,
      text: `Nouvelle inscription à la newsletter :\nEmail : ${parsed.data.email}`,
      html: buildContactHtml(
        { "Email": parsed.data.email },
        "Nouvelle inscription à la newsletter",
      ),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[API/newsletter] sendMail error:", err);
    return NextResponse.json({ error: "Erreur lors de l'inscription." }, { status: 500 });
  }
}
