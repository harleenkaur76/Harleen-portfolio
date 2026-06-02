import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientGlow from "@/components/AmbientGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harleen Kaur — Frontend Engineer",
  description:
    "I build frontends that actually perform. Three years of A/B experiments, performance work, and CSS specificity arguments.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "A/B Testing",
    "Optimizely",
    "Performance",
  ],
  authors: [{ name: "Harleen Kaur" }],
  openGraph: {
    title: "Harleen Kaur — Frontend Engineer",
    description:
      "I build frontends that actually perform.",
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
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <AmbientGlow />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
