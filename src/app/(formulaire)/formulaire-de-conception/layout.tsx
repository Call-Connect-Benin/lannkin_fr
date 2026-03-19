import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formulaire de Conception | Lannkin",
  description:
    "Remplissez ce formulaire pour démarrer votre projet avec Lannkin.",
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
  return <>{children}</>;
}
