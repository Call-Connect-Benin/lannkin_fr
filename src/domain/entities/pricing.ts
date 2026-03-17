export interface PricingPlan {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  priceUnit: "month" | "one-shot";
  setupFee?: number;
  features: string[];
  highlighted?: boolean;
  cta: string;
  paymentLink?: string;
  stripePriceId?: string;
  stripeSetupPriceId?: string;
}
