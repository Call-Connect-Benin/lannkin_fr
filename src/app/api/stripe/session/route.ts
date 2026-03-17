import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getStripe } from "@/lib/stripe";

const querySchema = z.object({
  session_id: z.string().min(10).max(200).startsWith("cs_"),
});

export async function GET(req: NextRequest) {
  const ip = getClientIp(req.headers);

  if (!checkRateLimit("stripe-session", ip, 20)) {
    return NextResponse.json(
      { error: "Trop de requêtes." },
      { status: 429 },
    );
  }

  const params = Object.fromEntries(req.nextUrl.searchParams);
  const parsed = querySchema.safeParse(params);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Session invalide." },
      { status: 422 },
    );
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(
      parsed.data.session_id,
      { expand: ["customer"] },
    );

    return NextResponse.json({
      customerName: session.customer_details?.name ?? null,
      customerEmail: session.customer_details?.email ?? null,
      customerId:
        typeof session.customer === "string"
          ? session.customer
          : session.customer?.id ?? null,
      planId: session.metadata?.planId ?? null,
      planName: session.metadata?.planName ?? null,
      planCategory: session.metadata?.planCategory ?? null,
      amountTotal: session.amount_total,
      currency: session.currency,
      status: session.payment_status,
      mode: session.mode,
    });
  } catch (err) {
    console.error("[API/stripe/session] Error:", err);
    return NextResponse.json(
      { error: "Session introuvable." },
      { status: 404 },
    );
  }
}
