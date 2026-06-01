import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harleen Kaur | Frontend Engineer & A/B Testing Expert",
  description:
    "Frontend Engineer with 3+ years delivering production-grade A/B experiments and performance-optimised SPAs for global clients including Microsoft, Accor, and Norwegian Air Shuttle.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "A/B Testing",
    "Optimizely",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Harleen Kaur" }],
  openGraph: {
    title: "Harleen Kaur | Frontend Developer",
    description:
      "Frontend Engineer with 3+ years delivering production-grade experiments and performance-optimised SPAs.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-[#0a0a0f] text-[#f5f5f5]"
        suppressHydrationWarning
      >
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
