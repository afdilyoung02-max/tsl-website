import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const SITE_URL = "https://tsl-website-rho.vercel.app";

export const metadata: Metadata = {
  title: "The Screening Lab | Find Alpha Before The Crowd",
  description: "INTERNATIONAL GRADE MARKET INTELLIGENCE",

  metadataBase: new URL(SITE_URL),

  keywords: ["crypto", "market intelligence", "alpha", "trading"],

  authors: [{ name: "The Screening Lab" }],
  creator: "The Screening Lab",

  openGraph: {
    title: "The Screening Lab",
    description: "Find Alpha Before The Crowd",
    url: SITE_URL,
    siteName: "The Screening Lab",
    type: "website",

    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The Screening Lab - Market Intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Screening Lab",
    description: "Find Alpha Before The Crowd",
    images: [`${SITE_URL}/og-image.jpg`],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}