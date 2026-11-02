import type { Metadata } from "next";
import { Crimson_Pro, IBM_Plex_Mono, Plus_Jakarta_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = Crimson_Pro({ subsets: ["latin"], variable: "--font-serif" });
const sans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

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
    <html lang="en" className={`scroll-smooth ${serif.variable} ${sans.variable} ${mono.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
