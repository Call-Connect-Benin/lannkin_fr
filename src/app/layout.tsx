import type { Metadata, Viewport } from "next";

import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

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
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ekolink.fr"),
  title: {
    default: "Ekolink | Agence Marketing Digital & Développement Web à Paris",
    template: "%s | Ekolink",
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
  authors: [{ name: "Ekolink S.A.S." }],
  creator: "Ekolink S.A.S.",
  publisher: "Ekolink S.A.S.",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://ekolink.fr",
    siteName: "Ekolink",
    title: "Ekolink | Agence Marketing Digital & Développement Web à Paris",
    description:
      "Agence marketing digital et développement web à Paris, France. "
      + "Google Ads, SEO, Facebook Ads, conception web, IA, 3D.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekolink | Agence Marketing Digital & Développement Web",
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
    icon: "/images/logo-ekolink-2026.svg",
    apple: "/images/logo-ekolink-2026.svg",
  },
  alternates: {
    canonical: "https://ekolink.fr",
  },
};

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ekolink S.A.S.",
  alternateName: "Agence web Ekolink",
  url: "https://ekolink.fr",
  logo: "https://ekolink.fr/images/logo-ekolink-2026.svg",
  image: "https://ekolink.fr/images/logo-ekolink-2026.svg",
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
  telephone: "+33-1-00-00-00-00",
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "54",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.google.com/maps/search/?api=1&query=7+Rue+Vulpian+75013+Paris",
    "https://www.facebook.com/ekolink",
    "https://www.instagram.com/ekolink",
    "https://www.linkedin.com/company/ekolink",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MF8XDTS');`,
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MF8XDTS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <FloatingContact />

      </body>
    </html>
  );
}
