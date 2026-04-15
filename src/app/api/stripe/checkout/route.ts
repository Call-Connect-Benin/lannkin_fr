import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import type Stripe from "stripe";

import { getPricingById } from "@/data/pricing";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getStripe } from "@/lib/stripe";

const bodySchema = z.object({
  planId: z.string().min(1).max(100),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  if (!checkRateLimit("stripe-checkout", ip, 10)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans une heure." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides." }, { status: 422 });
  }

  // Honeypot — silently accept bots
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const plan = getPricingById(parsed.data.planId);
  if (!plan?.stripePriceId) {
    return NextResponse.json(
      { error: "Forfait introuvable." },
      { status: 404 },
    );
  }

  // Build line items
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    { price: plan.stripePriceId, quantity: 1 },
  ];

  // Add setup fee as second line item if applicable
  if (plan.stripeSetupPriceId && plan.setupFee) {
    lineItems.push({ price: plan.stripeSetupPriceId, quantity: 1 });
  }

  const mode = plan.priceUnit === "month" ? "subscription" : "payment";

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://ekolink.fr";

  const successUrl = `${origin}/merci/?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/tarifs/${plan.category}/`;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode,
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      locale: "fr",
      currency: "cad",
      customer_creation: mode === "payment" ? "always" : undefined,
      metadata: {
        planId: plan.id,
        planName: plan.name,
        planCategory: plan.category,
      },
      billing_address_collection: "required",
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[API/stripe/checkout] Error:", err);
    return NextResponse.json(
      { error: "Impossible de créer la session de paiement." },
      { status: 500 },
    );
  }
}
