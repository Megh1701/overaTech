import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OveraTech | Navigate Your Next | Enterprise Cloud, AI & Consulting",
  description: "OveraTech is a global leader in next-generation digital services and consulting. We enable enterprise clients in 50+ countries to navigate their digital transformation with governed AI, resilient multi-cloud, and high-assurance engineering.",
  keywords: [
    "OveraTech",
    "Digital Transformation",
    "Enterprise AI",
    "Agentic Automation",
    "Cloud Modernization",
    "Cybersecurity",
    "Enterprise ERP",
    "Technology Consulting",
  ],
  authors: [{ name: "OveraTech Enterprise Systems" }],
  openGraph: {
    title: "OveraTech | Navigate Your Next",
    description: "Enterprise Digital Services, Cloud Transformation & Governed AI Platforms",
    siteName: "OveraTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-emerald-500 selection:text-zinc-950 font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
