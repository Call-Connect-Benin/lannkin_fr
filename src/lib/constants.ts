export const SITE_CONFIG = {
  name: "Lannkin",
  legalName: "Lannkin S.A.",
  neq: "1179695284",
  url: "https://lannkin.ca",
  email: "info@lannkin.ca",
  phone: "+1 (450) 555-0000",
  founded: 2015,
  founders: ["Albert Lanne", "Kevin Kinani"],
  location: {
    city: "Laval",
    province: "Québec",
    country: "Canada",
  },
  social: {
    facebook: "https://facebook.com/lannkin",
    instagram: "https://instagram.com/lannkin",
    linkedin: "https://linkedin.com/company/lannkin",
    google: "https://g.page/lannkin",
  },
  stats: {
    googleRating: 4.954,
    googleReviews: 54,
    yearsExperience: 10,
    monthlyAdBudget: 100000,
  },
  certifications: [
    "Google Partner",
    "Microsoft Advertising Partner",
    "Facebook/Meta Partner",
  ],
  ecosystem: {
    international: "https://lannkin.com",
    paidMedia: "https://le-freelance-google-ads.com",
    reviews: "https://achatavis.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Réalisations", href: "/realisations/" },
  { label: "Blog", href: "/blog/" },
  { label: "À propos", href: "/a-propos/" },
  { label: "Contact", href: "/contact/" },
] as const;
