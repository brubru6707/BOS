import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brown Open Silicon | BOS",
  description: "Designing open chips, together. A student-run club at Brown University focused on open-source chip design.",
  keywords: ["Brown University", "Open Silicon", "Chip Design", "VLSI", "Open Source", "BOS"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
