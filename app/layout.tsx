import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MasseurMatch — Inclusive LGBTQ+ Massage Directory",
  description:
    "Discover verified LGBTQ+ massage professionals near you. MasseurMatch connects clients with inclusive, safe, and professional therapists worldwide.",
  keywords: [
    "LGBTQ+ massage",
    "inclusive massage therapy",
    "gay massage",
    "queer massage therapist",
    "trans-friendly massage",
    "massage directory",
  ],
  authors: [{ name: "MasseurMatch Team" }],
  creator: "MasseurMatch",
  publisher: "MasseurMatch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masseurmatch.vercel.app",
    siteName: "MasseurMatch",
    title: "MasseurMatch — The Most Intelligent LGBTQ+ Massage Directory",
    description: "Find inclusive, safe, and professional massage therapists worldwide. Join the movement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MasseurMatch - LGBTQ+ Massage Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MasseurMatch — Inclusive LGBTQ+ Massage Directory",
    description: "Find verified LGBTQ+ massage professionals near you.",
    images: ["/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://generativelanguage.googleapis.com" />
      </head>
      <body
        className={`${inter.className} bg-black text-gray-300 antialiased min-h-screen flex flex-col items-center justify-center selection:bg-[#21f365]/30`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
        >
          Skip to main content
        </a>

        <main
          className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
          id="main-content"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
