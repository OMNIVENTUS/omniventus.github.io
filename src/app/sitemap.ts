import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site-config';

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

// Add these exports for static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL from site config
  const baseUrl = siteConfig.url;

  // Get current date for lastModified
  const currentDate = new Date();

  // Generate project URLs
  const projectUrls = siteConfig.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: project.timeline.completed 
      ? new Date(project.timeline.completed).toISOString()
      : currentDate.toISOString(),
    changeFrequency: (project.timeline.status === 'completed' ? 'monthly' : 'weekly') as ChangeFrequency,
    priority: 0.8
  }));

  // Generate support page URLs for mobile apps
  const supportUrls = siteConfig.projects
    .filter(project => project.type === 'mobileApp')
    .map((project) => ({
      url: `${baseUrl}/projects/${project.id}/support`,
      lastModified: currentDate.toISOString(),
      changeFrequency: 'weekly' as ChangeFrequency,
      priority: 0.7
    }));

  // Generate policy page URLs for mobile apps
  const policyUrls = siteConfig.projects
    .filter(project => project.type === 'mobileApp')
    .map((project) => ({
      url: `${baseUrl}/projects/${project.id}/policy`,
      lastModified: currentDate.toISOString(),
      changeFrequency: 'monthly' as ChangeFrequency,
      priority: 0.6
    }));

  // Combine all URLs
  return [
    {
      url: baseUrl,
      lastModified: currentDate.toISOString(),
      changeFrequency: 'daily' as ChangeFrequency,
      priority: 1
    },
    ...projectUrls,
    ...supportUrls,
    ...policyUrls
  ];
} 