import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site-config';
import { swarmcrushSupport } from '@/config/support/swarmcrush';
import { SupportContent } from './SupportContent';

// Map of project IDs to their support configurations
const projectSupport = {
    swarmcrush: swarmcrushSupport,
} as const;

// Helper function to check if a project has support data
function hasProjectSupport(projectId: string): boolean {
    return projectId in projectSupport;
}

// Static params generation
export async function generateStaticParams() {
    // Only generate support pages for mobile app projects that have support data
    return siteConfig.projects
        .filter(project =>
            project.type === 'mobileApp' &&
            hasProjectSupport(project.id)
        )
        .map(project => ({
            id: project.id,
        }));
}

type Props = {
    params: Promise<{ id: string }>
}

export default async function SupportPage({ params }: Props) {
    const data = await params;
    // Check if project exists and has support data
    if (!hasProjectSupport(data.id)) {
        notFound();
    }

    const supportConfig = projectSupport[data.id as keyof typeof projectSupport];

    return <SupportContent supportConfig={supportConfig} projectId={data.id} />;
} 
