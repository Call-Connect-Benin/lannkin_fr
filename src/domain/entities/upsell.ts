export interface UpsellOffer {
  id: string;
  name: string;
  description: string;
  price: number;
  priceUnit: "month" | "one-shot";
  stripePriceId: string;
  icon: string;
  highlight?: string;
}
