import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Union Paper Mills | Turning Waste Into Value",
  description:
    "Union Paper Mills (UPM) is a UAE-based recycled paper manufacturer dedicated to circular economy solutions, transforming waste into quality paper products since 1977.",
  keywords: [
    "paper recycling",
    "UAE",
    "containerboard",
    "kraft paper",
    "circular economy",
    "sustainable packaging",
  ],
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
