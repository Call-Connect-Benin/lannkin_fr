export interface Testimonial {
  id: string;
  author: string;
  company: string;
  role?: string;
  content: string;
  rating: number;
  avatar?: string;
  date: string;
}
