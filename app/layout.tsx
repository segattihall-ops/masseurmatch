import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../public/starfield.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MasseurMatch — Inclusive LGBTQ+ Massage Directory",
  description:
    "Discover verified LGBTQ+ massage professionals near you. MasseurMatch connects clients with inclusive, safe, and professional therapists worldwide.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "MasseurMatch — The Most Intelligent LGBTQ+ Massage Directory",
    description: "Find inclusive professionals. Join the movement.",
    url: "https://masseurmatch.vercel.app",
    siteName: "MasseurMatch",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
      </head>
      <body
        className={`${inter.className} bg-black text-gray-300 antialiased min-h-screen flex flex-col items-center justify-center selection:bg-[#21f365]/30`}
      >
        <main className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
