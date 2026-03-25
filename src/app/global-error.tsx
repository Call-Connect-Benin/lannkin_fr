"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr-CA">
      <body className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-4 text-center">
        <h2 className="text-2xl font-bold text-white">
          Une erreur est survenue
        </h2>
        <p className="max-w-md text-gray-400">
          Nous nous excusons pour ce désagrément. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="rounded-full bg-[#498f6d] px-6 py-3 text-sm font-semibold text-white"
        >
          Réessayer
        </button>
      </body>
    </html>
  );
}
