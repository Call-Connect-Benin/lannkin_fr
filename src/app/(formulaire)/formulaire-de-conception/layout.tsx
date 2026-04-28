import type { Metadata } from "next";

import { Footer } from "@/presentation/components/layout/Footer";
import { Header } from "@/presentation/components/layout/Header";

export const metadata: Metadata = {
  title: "Formulaire de conception | Lannkin",
  description:
    "Démarrez votre projet avec Lannkin en quelques minutes. Un questionnaire guidé, pensé pour les entreprises françaises.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormulaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
