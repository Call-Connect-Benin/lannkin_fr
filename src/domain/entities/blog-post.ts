export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  coverImage?: string;
  tags: string[];
  readingTime: number;
}

export type BlogCategory =
  | "google-ads"
  | "facebook-ads"
  | "seo"
  | "conception-web"
  | "intelligence-artificielle"
  | "ecommerce"
  | "reseaux-sociaux"
  | "google-my-business"
  | "graphisme"
  | "marketing-digital"
  | "vibe-coding"
  | "odoo";
