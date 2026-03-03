export type ServiceCategory =
  | "web"
  | "paid-media"
  | "seo"
  | "creative"
  | "tech"
  | "ai";

export interface ServiceData {
  slug: string;
  name: string;
  category: ServiceCategory;
  parentSlug: string | null;
  icon: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedServices: string[];
  relatedSectors: string[];
  relatedBlogCategories: string[];
  pricingLink: string | null;
  stripeLinks: string[];
  subServices?: string[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon?: string;
  subServices?: SubService[];
  relatedServices?: string[];
  relatedSectors?: string[];
  relatedZones?: string[];
  pricingSlug?: string;
}

export interface SubService {
  slug: string;
  title: string;
  description: string;
  parentSlug: string;
}
