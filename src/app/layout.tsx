import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Abhishek Logistics | Global Freight & Precision Supply Chain",
  description: "Enterprise logistics command center offering high-performance ocean, air, and road freight, alongside automated warehousing systems. Designed for reliability and complete supply chain visibility.",
  keywords: ["Logistics", "Freight Forwarding", "Supply Chain", "Tracking", "Warehousing", "Cargo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-body">
        {children}
      </body>
    </html>
  );
}
