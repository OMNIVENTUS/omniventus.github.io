import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactWidget } from "@/components/ContactWidget";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site-config";

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
  keywords: ["portfolio", "developer", "tech", "projects", "skills", "web development"],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.author.avatar],
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
      </body>
    </html>
  );
}
