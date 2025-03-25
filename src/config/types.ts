export type Skill = {
    name: string;
    category: string;
    level: number;
    description: string;
    icon?: string;
    yearsOfExperience?: number;
};

export type ProjectImage = {
    url: string;
    alt: string;
    caption?: string;
};

export type ProjectLink = {
    url: string;
    type: 'github' | 'website' | 'appStore' | 'playStore' | 'demo' | 'other';
    label: string;
};

export type ProjectFeature = {
    title: string;
    description: string;
    icon?: string;
};

export type Project = {
    id: string;
    type: 'mobileApp' | 'website' | 'backend' | 'wordpress-plugin' | 'webapp';
    title: string;
    description: string;
    longDescription: string;
    skills: string[];
    seoKeywords: string[];
    mainImage: ProjectImage;
    images: ProjectImage[];
    links: ProjectLink[];
    features: ProjectFeature[];
    challenges: string[];
    solutions: string[];
    techStack: {
        frontend?: string[];
        backend?: string[];
        mobile?: string[];
        devops?: string[];
        other?: string[];
    };
    timeline: {
        started: string;
        completed?: string;
        status: 'completed' | 'in-progress' | 'planned';
    };
    team?: {
        size: number;
        roles: string[];
    };
    metrics?: {
        users?: number;
        downloads?: number;
        stars?: number;
        custom?: { label: string; value: string }[];
    };
};

export type SiteConfig = {
    name: string;
    slogan: string;
    description: string;
    url: string;
    author: {
        name: string;
        role: string;
        bio: string;
        avatar: string;
        social: {
            github: string;
            linkedin: string;
            twitter: string;
            whatsapp: string;
            email: string;
            buyMeACoffee: string;
        };
    };
    contactWidget: {
        messages: string[];
        displayDelay: number;
        messageRotationInterval: number;
    };
    skills: Skill[];
    projects: Project[];
}; 