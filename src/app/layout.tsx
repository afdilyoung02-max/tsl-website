import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const SITE_URL = "https://tsl-website-rho.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "The Screening Lab | Research Edge",
    template: "%s | The Screening Lab",
  },

  description:
    "Institutional Grade Market Intelligence built for serious investors, traders, and on-chain analysts.",

  keywords: [
    "crypto",
    "cryptocurrency",
    "bitcoin",
    "ethereum",
    "market intelligence",
    "research",
    "alpha",
    "smart money",
    "on-chain analytics",
    "trading",
    "web3",
    "investment",
  ],

  authors: [
    {
      name: "The Screening Lab",
    },
  ],

  creator: "The Screening Lab",
  publisher: "The Screening Lab",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "The Screening Lab | Research Edge",
    description:
      "Institutional Grade Market Intelligence built for serious investors, traders, and on-chain analysts.",

    url: SITE_URL,
    locale: "en_US",
    type: "website",

    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "The Screening Lab | Research Edge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Screening Lab | Research Edge",
    description:
      "Institutional Grade Market Intelligence built for serious investors, traders, and on-chain analysts.",
    images: [`${SITE_URL}/og-image.png`],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}