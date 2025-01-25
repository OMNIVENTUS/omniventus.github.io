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
  type: 'mobileApp' | 'website' | 'backend';
  title: string;
  description: string;
  longDescription: string;
  skills: string[];
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

export const siteConfig = {
  name: 'Omniventus',
  slogan: "Building What's Next",
  description: 'Explore the tech universe of innovative projects and solutions',
  author: {
    name: 'Your Name',
    role: 'Full Stack Developer',
    bio: 'Passionate about building innovative solutions...',
    avatar: '/images/avatar.jpg',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      twitter: 'https://twitter.com/yourusername',
    }
  },
  skills: [
    {
      name: 'React',
      category: 'Frontend',
      level: 90,
      description: 'Building modern web applications with React and its ecosystem',
      yearsOfExperience: 4,
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      level: 85,
      description: 'Creating performant and SEO-friendly web applications',
      yearsOfExperience: 3,
    },
    {
      name: 'TypeScript',
      category: 'Language',
      level: 88,
      description: 'Writing type-safe and maintainable code',
      yearsOfExperience: 3,
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 82,
      description: 'Building scalable backend services and APIs',
      yearsOfExperience: 4,
    },
    {
      name: 'Docker',
      category: 'DevOps',
      level: 75,
      description: 'Containerizing applications for consistent deployment',
      yearsOfExperience: 2,
    },
  ] as Skill[],
  projects: [
    {
      id: 'swarmcrush',
      type: 'mobileApp',
      title: 'SwarmCrush',
      description: 'A mobile application for connecting people with similar interests',
      longDescription: 'SwarmCrush is an innovative mobile application that helps people discover and connect with others who share their interests, hobbies, and passions...',
      skills: ['React Native', 'TypeScript', 'Node.js'],
      mainImage: {
        url: '/projects/swarmcrush/main.png',
        alt: 'SwarmCrush App Screenshot'
      },
      images: [
        {
          url: '/projects/swarmcrush/screen1.png',
          alt: 'Screenshot 1',
          caption: 'IOS app store screenshot 1'
        },
        {
          url: '/projects/swarmcrush/screen2.png',
          alt: 'Screenshot 2',
          caption: 'IOS app store screenshot 2'
        },
        {
          url: '/projects/swarmcrush/screen3.png',
          alt: 'Screenshot 3',
          caption: 'IOS app store screenshot 3'
        },
        {
          url: '/projects/swarmcrush/screen4.png',
          alt: 'Screenshot 4',
          caption: 'IOS app store screenshot 4'
        },
        {
          url: '/projects/swarmcrush/screen5.png',
          alt: 'Screenshot 5',
          caption: 'IOS app store screenshot 5'
        },
      ],
      links: [
        {
          url: 'https://play.google.com/store/apps/details?id=com.swarmcrush',
          type: 'playStore',
          label: 'Get it on Play Store'
        },
        {
          url: 'https://apps.apple.com/app/swarmcrush',
          type: 'appStore',
          label: 'Download on App Store'
        }
      ],
      features: [
        {
          title: 'Interest Matching',
          description: 'Advanced algorithm to match users based on shared interests'
        },
        {
          title: 'Real-time Chat',
          description: 'Seamless communication with matched connections'
        }
      ],
      challenges: [
        'Implementing real-time features at scale',
        'Ensuring user privacy and data security',
        'Building a responsive and intuitive UI'
      ],
      solutions: [
        'Used WebSocket for real-time communication',
        'Implemented end-to-end encryption',
        'Adopted React Native for cross-platform development'
      ],
      techStack: {
        frontend: ['React Native', 'TypeScript', 'Redux'],
        backend: ['Node.js', 'Express', 'MongoDB'],
        devops: ['Docker', 'AWS', 'GitHub Actions']
      },
      timeline: {
        started: '2023-06',
        completed: '2024-01',
        status: 'completed'
      },
      team: {
        size: 5,
        roles: ['Mobile Developer', 'Backend Developer', 'UI/UX Designer']
      },
      metrics: {
        users: 10000,
        downloads: 5000,
        custom: [
          { label: 'Active Chats', value: '2,500+' },
          { label: 'Matches Made', value: '15,000+' }
        ]
      }
    }
  ] as Project[]
}; 