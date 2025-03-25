import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site-config';


// Add these exports for static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Disallow private or sensitive routes
      disallow: [
        '/private/',
        '/api/',
        '/_next/',
        '/static/',
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
} 