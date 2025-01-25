

import Link from "next/link";
import { siteConfig } from "@/config/site-config";
import dynamic from "next/dynamic";

const ProjectContent = dynamic(() => import("./ProjectContent"), {
    ssr: true,
    loading: () => <p>Loading project...</p>,
});

type ProjectPageProps = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
    return siteConfig.projects.map((project) => ({
        id: project.id,
    }));
}


export default async function ProjectPage({ params }: ProjectPageProps) {

    const data = await params;
    const project = siteConfig.projects.find((p) => p.id === data.id);
    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/" className="text-blue-400 hover:text-blue-300">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectContent project={project} />;

}
