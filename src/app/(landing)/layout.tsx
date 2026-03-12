import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${dmSans.variable} bg-white text-[#1a1a2e] antialiased`}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
