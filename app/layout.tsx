import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

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
    <html lang="en" className={`scroll-smooth ${grotesk.variable} ${mono.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
