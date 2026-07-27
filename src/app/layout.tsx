import type { Metadata, Viewport } from "next";

import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { SITE_CONFIG } from "@/lib/constants";
import FloatingContact from "@/presentation/components/layout/FloatingContact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lannkin.com"),
  title: {
    default: "Lannkin | Agence Marketing Digital & Développement Web à Paris",
    template: "%s | Lannkin",
  },
  description:
    "Agence marketing digital et développement web à Paris, France. "
    + "Google Ads, SEO, Facebook Ads, conception web, IA, 3D. "
    + "+10 ans d'expérience, certifié Google Partner.",
  keywords: [
    "agence marketing digital paris",
    "développement web paris",
    "google ads paris",
    "seo paris",
    "agence web paris",
    "marketing digital france",
  ],
  authors: [{ name: "Lannkin S.A.S." }],
  creator: "Lannkin S.A.S.",
  publisher: "Lannkin S.A.S.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lannkin.com",
    siteName: "Lannkin",
    title: "Lannkin | Agence Marketing Digital & Développement Web à Paris",
    description:
      "Agence marketing digital et développement web à Paris, France. "
      + "Google Ads, SEO, Facebook Ads, conception web, IA, 3D.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lannkin | Agence Marketing Digital & Développement Web",
    description:
      "Agence marketing digital et développement web à Paris, France.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon-lannkin.svg",
    apple: "/images/favicon-lannkin.svg",
  },
  alternates: {
    canonical: "https://lannkin.com",
  },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lannkin S.A.S.",
  alternateName: "Agence web Lannkin",
  url: "https://lannkin.com",
  logo: "https://lannkin.com/images/logo-lannkin-2026.svg",
  image: "https://lannkin.com/images/logo-lannkin-2026.svg",
  description:
    "Agence marketing digital et développement web à Paris, France. Google Ads, SEO, Facebook Ads, conception web, IA et 3D.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
    streetAddress: "7 Rue Vulpian",
    postalCode: "75013",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8278,
    longitude: 2.3468,
  },
  telephone: SITE_CONFIG.phone,
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(SITE_CONFIG.stats.googleRating),
    reviewCount: String(SITE_CONFIG.stats.googleReviews),
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=7+Rue+Vulpian+75013+Paris",
    "https://www.facebook.com/lannkin",
    "https://www.instagram.com/lannkin",
    "https://www.linkedin.com/company/lannkin",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-FR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
      </head>
      <body className="min-h-screen w-full max-w-full overflow-x-clip bg-[#f7f5f0] antialiased" suppressHydrationWarning>
        {children}
        <FloatingContact />

      </body>
    </html>
  );
}

