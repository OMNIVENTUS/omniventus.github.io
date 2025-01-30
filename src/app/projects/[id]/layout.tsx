import { siteConfig } from '@/config/site-config';
import { Metadata } from 'next';
import type { Project } from '@/config/types';

type Props = {
    params: Promise<{ id: string }>
    children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const data = await params;
    const project = siteConfig.projects.find((p: Project) => p.id === data.id);

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.'
        };
    }

    return {
        title: `${project.title} - ${siteConfig.name}`,
        description: project.description,
        openGraph: {
            title: `${project.title} - ${siteConfig.name}`,
            description: project.description,
            images: [
                {
                    url: `/projects/${project.id}/main.png`,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} Screenshot`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${project.title} - ${siteConfig.name}`,
            description: project.description,
            images: [`/projects/${project.id}/main.png`],
            creator: siteConfig.author.social.twitter
        }
    };
}

export default function ProjectLayout({ children }: Props) {
    return children;
} 