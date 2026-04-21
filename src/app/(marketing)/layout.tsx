import { ExitIntentPopup } from "@/presentation/components/layout/ExitIntentPopup";
import { Footer } from "@/presentation/components/layout/Footer";
import { Header } from "@/presentation/components/layout/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div suppressHydrationWarning>
      <Header />
      <div className="pt-16">{children}</div>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
