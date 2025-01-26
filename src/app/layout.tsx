import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactWidget } from "@/components/ContactWidget";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site-config";

const inter = Inter({ subsets: ["latin"] });

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ContactWidget />
      </body>
    </html>
  );
}
