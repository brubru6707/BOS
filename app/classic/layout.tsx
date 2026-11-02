import type { Metadata } from "next";
import Navigation from "@/components/classic/Navigation";
import Footer from "@/components/classic/Footer";

// the 2025-2026 dark look, kept around behind the navbar toggle
export const metadata: Metadata = {
  robots: { index: false },
};

export default function ClassicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="classic min-h-screen bg-black text-white">
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
