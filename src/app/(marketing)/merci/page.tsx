import type { Metadata } from "next";
import { Suspense } from "react";

import { Container } from "@/presentation/components/ui/Container";
import { MerciContent } from "@/presentation/components/checkout/MerciContent";

export const metadata: Metadata = {
  title: "Merci pour votre achat | Lannkin",
  description:
    "Votre paiement a été confirmé. Découvrez nos services complémentaires.",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <main>
      <Suspense fallback={<MerciSkeleton />}>
        <MerciContent />
      </Suspense>
    </main>
  );
}

function MerciSkeleton() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl animate-pulse space-y-6 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-white/10" />
          <div className="mx-auto h-8 w-64 rounded bg-white/10" />
          <div className="mx-auto h-4 w-96 rounded bg-white/10" />
        </div>
      </Container>
    </section>
  );
}
