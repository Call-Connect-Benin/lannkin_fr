import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getStripe } from "@/lib/stripe";

const bodySchema = z.object({
  customerId: z.string().min(1).startsWith("cus_"),
  stripePriceId: z.string().min(1).startsWith("price_"),
  priceUnit: z.enum(["month", "one-shot"]),
  website: z.string().max(0).optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req.headers);

  if (!checkRateLimit("stripe-upsell", ip, 5)) {
    return NextResponse.json(
      { error: "Trop de requêtes." },
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
    return NextResponse.json(
      { error: "Données invalides." },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { customerId, stripePriceId, priceUnit } = parsed.data;

  try {
    // Verify customer exists
    const customer = await getStripe().customers.retrieve(customerId);
    if (customer.deleted) {
      return NextResponse.json(
        { error: "Client introuvable." },
        { status: 404 },
      );
    }

    // Get customer's payment method
    const paymentMethods = await getStripe().paymentMethods.list({
      customer: customerId,
      type: "card",
      limit: 1,
    });

    if (paymentMethods.data.length === 0) {
      // Fallback: create a new Checkout Session
      const origin =
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://lannkin.fr";
      const session = await getStripe().checkout.sessions.create({
        mode: priceUnit === "month" ? "subscription" : "payment",
        customer: customerId,
        line_items: [{ price: stripePriceId, quantity: 1 }],
        success_url: `${origin}/merci/?upsell=success`,
        cancel_url: `${origin}/merci/?upsell=cancelled`,
        locale: "fr",
        currency: "cad",
      });
      return NextResponse.json({ url: session.url, fallback: true });
    }

    const paymentMethodId = paymentMethods.data[0]!.id;

    if (priceUnit === "month") {
      const subscription = await getStripe().subscriptions.create({
        customer: customerId,
        items: [{ price: stripePriceId }],
        default_payment_method: paymentMethodId,
        payment_behavior: "error_if_incomplete",
        metadata: { source: "upsell" },
      });
      return NextResponse.json({
        ok: true,
        type: "subscription",
        subscriptionId: subscription.id,
        status: subscription.status,
      });
    } else {
      const price = await getStripe().prices.retrieve(stripePriceId);
      const paymentIntent = await getStripe().paymentIntents.create({
        amount: price.unit_amount!,
        currency: "cad",
        customer: customerId,
        payment_method: paymentMethodId,
        off_session: true,
        confirm: true,
        metadata: { source: "upsell" },
      });
      return NextResponse.json({
        ok: true,
        type: "payment",
        paymentIntentId: paymentIntent.id,
        status: paymentIntent.status,
      });
    }
  } catch (err) {
    console.error("[API/stripe/upsell] Error:", err);
    const stripeErr = err as { code?: string };

    if (stripeErr.code === "authentication_required") {
      return NextResponse.json(
        {
          error:
            "Authentification 3D Secure requise. Veuillez réessayer avec un nouveau paiement.",
        },
        { status: 402 },
      );
    }

    return NextResponse.json(
      { error: "Impossible de traiter le paiement." },
      { status: 500 },
    );
  }
}
