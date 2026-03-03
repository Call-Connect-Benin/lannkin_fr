import type { Metadata, Viewport } from "next";

import { Analytics } from "@vercel/analytics/react";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

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
  metadataBase: new URL("https://lannkin.ca"),
  title: {
    default: "Lannkin | Agence Marketing Digital & Développement Web à Laval",
    template: "%s | Lannkin",
  },
  description:
    "Agence marketing digital et développement web à Laval, Québec. "
    + "Google Ads, SEO, Facebook Ads, conception web, IA, 3D. "
    + "+10 ans d'expérience, certifié Google Partner.",
  keywords: [
    "agence marketing digital laval",
    "développement web laval",
    "google ads laval",
    "seo laval",
    "agence web montréal",
    "marketing digital québec",
  ],
  authors: [{ name: "Lannkin S.A." }],
  creator: "Lannkin S.A.",
  publisher: "Lannkin S.A.",
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "https://lannkin.ca",
    siteName: "Lannkin",
    title: "Lannkin | Agence Marketing Digital & Développement Web à Laval",
    description:
      "Agence marketing digital et développement web à Laval, Québec. "
      + "Google Ads, SEO, Facebook Ads, conception web, IA, 3D.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lannkin | Agence Marketing Digital & Développement Web",
    description:
      "Agence marketing digital et développement web à Laval, Québec.",
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
  alternates: {
    canonical: "https://lannkin.ca",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-CA"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black text-white antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
