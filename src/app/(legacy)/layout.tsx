import { Footer } from "@/presentation/components/layout/Footer";
import { Header } from "@/presentation/components/layout/Header";

export default function LegacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="pt-[72px]">{children}</div>
      <Footer />
    </>
  );
}
