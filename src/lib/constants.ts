export const SITE_CONFIG = {
  name: "Ekolink",
  legalName: "Ekolink S.A.S.",
  neq: "1179695284",
  url: "https://ekolink.fr",
  email: "info@ekolink.fr",
  phone: "+33 1 00 00 00 00",
  founded: 2015,
  founders: ["Albert Lanne", "Kevin Kinani"],
  location: {
    city: "Paris",
    province: "Île-de-France",
    country: "France",
  },
  social: {
    facebook: "https://web.facebook.com/people/Ekolink/100086166664875/",
    instagram: "https://www.instagram.com/ekolink/",
    linkedin: "https://linkedin.com/company/ekolink",
    youtube: "https://www.youtube.com/@AlbertLanneAds",
    tiktok: "https://tiktok.com/@ekolink",
    google: "https://g.page/ekolink",
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
    international: "https://ekolink.com",
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
