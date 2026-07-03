import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Screening Lab | Find Alpha Before The Crowd",
  description:
    "INTERNATIONAL GRADE MARKET INTELLIGENCE",

  metadataBase: new URL("https://tsl-website-rho.vercel.app"),

  openGraph: {
    title: "The Screening Lab",
    description: "Find Alpha Before The Crowd",
    url: "https://tsl-website-rho.vercel.app",
    siteName: "The Screening Lab",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Screening Lab - Market Intelligence",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Screening Lab",
    description: "Find Alpha Before The Crowd",
    images: ["/og-image.png"],
  },

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}