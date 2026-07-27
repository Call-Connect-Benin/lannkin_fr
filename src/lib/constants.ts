export const SITE_CONFIG = {
  name: "Lannkin",
  legalName: "Lannkin S.A.S.",
  url: "https://lannkin.com",
  email: "info@lannkin.com",
  phone: "+33 6 17 03 03 08",
  founded: 2015,
  founders: ["Albert Lanne", "Kevin Kinani"],
  location: {
    city: "Paris",
    province: "Île-de-France",
    country: "France",
  },
  social: {
    facebook: "https://web.facebook.com/people/Lannkin/100086166664875/",
    instagram: "https://www.instagram.com/lannkin/",
    linkedin: "https://linkedin.com/company/lannkin",
    youtube: "https://www.youtube.com/@AlbertLanneAds",
    tiktok: "https://tiktok.com/@lannkin",
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

