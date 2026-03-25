"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Global Error]", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h2 className="font-heading text-2xl font-bold text-white">
        Une erreur est survenue
      </h2>
      <p className="max-w-md text-muted">
        Nous nous excusons pour ce désagrément. Veuillez réessayer.
      </p>
      <button
        onClick={reset}
        className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/80"
      >
        Réessayer
      </button>
    </div>
  );
}
