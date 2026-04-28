import { ExitIntentPopup } from "@/presentation/components/layout/ExitIntentPopup";
import { Footer } from "@/presentation/components/layout/Footer";
import { Header } from "@/presentation/components/layout/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-full overflow-x-hidden" suppressHydrationWarning>
      <Header />
      <div className="w-full max-w-full overflow-x-hidden pt-[72px]">{children}</div>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
