import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactWidget } from "@/components/ContactWidget";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site-config";
import { Analytics } from '@/components/Analytics';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: '#111827',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} - ${siteConfig.slogan}`,
  description: siteConfig.description,
  keywords: ["fullstack developer", "senior react developer", "mobile developer", "wordpress developer", "developpeur react", "développer symfony", "freelance react", "freelance wordpress"],

  // Enhanced SEO settings
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    images: [
      {
        url: siteConfig.author.avatar,
        type: "image/png",
        width: 1200,
        height: 630,
      },
      // {
      //   url: siteConfig.author.avatar,
      //   type: "image/png",
      //   width: 1200,
      //   height: 630,
      // },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.author.avatar],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-[100dvh] flex flex-col`}>
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Footer />
        <ContactWidget />
        <Analytics />
      </body>
    </html>
  );
}
