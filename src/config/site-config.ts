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
  url: 'https://omniventus.github.io',
  author: {
    name: 'Lionel Zoclanclounon',
    role: 'Lead / Full Stack Developer / Freelancer',
    bio: 'Passionate about building innovative solutions...',
    avatar: '/images/avatar.png',
    social: {
      github: 'https://github.com/LionelZoc',
      linkedin: 'https://www.linkedin.com/in/lionel-zoclanclounon-061140a3/',
      twitter: 'https://x.com/amir_muerte',
      whatsapp: 'https://wa.me/33752234882',
      email: 'lionel@omniventus.com',
      buyMeACoffee: 'https://www.buymeacoffee.com/lionel.z'
    }
  },
  contactWidget: {
    messages: [
      "Let's build together! 🚀",
      "Need help with a project? 💡",
      "I can help you build your solution 🛠️",
      "Let's create something amazing! ✨",
      "Got an idea? Let's talk! 💭"
    ],
    displayDelay: 5000, // ms
    messageRotationInterval: 7000, // ms
  },
  skills: [
    {
      name: 'React',
      category: 'Frontend',
      level: 90,
      description: 'Building modern web applications with React and its ecosystem',
      yearsOfExperience: 7,
    },
    {
      name: 'Next.js',
      category: 'Frontend',
      level: 85,
      description: 'Creating performant and SEO-friendly web applications',
      yearsOfExperience: 2,
    },
    {
      name: 'TypeScript',
      category: 'Language',
      level: 88,
      description: 'Writing type-safe and maintainable code',
      yearsOfExperience: 4,
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
      yearsOfExperience: 5,
      },
        {
          name: 'React Native',
          category: 'Mobile Development',
          level: 85,
          description: 'Building cross-platform mobile applications with native performance',
          yearsOfExperience: 5,
        },
        {
          name: 'Expo',
          category: 'Mobile Development',
          level: 80,
          description: 'Developing and deploying mobile apps with managed workflow and OTA updates',
          yearsOfExperience: 5,
        },
        {
          name: 'Firebase',
          category: 'Backend',
          level: 78,
          description: 'Implementing authentication, real-time database, and cloud functions',
          yearsOfExperience: 6,
        },
        {
          name: 'Redux',
          category: 'State Management',
          level: 85,
          description: 'Managing complex application state with Redux, Saga, and middleware',
          yearsOfExperience: 8,
        },
        {
          name: 'OAuth',
          category: 'Authentication',
          level: 75,
          description: 'Implementing social authentication with Google and Facebook',
          yearsOfExperience: 8,
        },
        {
          name: 'Responsive Design',
          category: 'UI/UX',
          level: 85,
          description: 'Creating adaptive layouts and responsive components for various screen sizes',
          yearsOfExperience: 8,
        },
        {
          name: 'CI/CD',
          category: 'DevOps',
          level: 70,
          description: 'Setting up automated builds and deployments with EAS and app stores',
          yearsOfExperience: 4,
        },
        {
          name: 'Sentry',
          category: 'Monitoring',
          level: 70,
          description: 'Implementing error tracking and performance monitoring',
          yearsOfExperience: 5,
        }
    
  ] as Skill[],
  projects: [
    {
      id: 'swarmcrush',
      type: 'mobileApp',
      title: 'SwarmCrush',
      description: 'Fast-paced arcade game where you crush swarms and climb global rankings.',
      longDescription: 'SwarmCrush is an innovative mobile application that helps people discover and connect with others who share their interests, hobbies, and passions...',
      skills: ['React Native', 'TypeScript', 'Firebase', 'Expo', 'UI/UX design'],
      mainImage: {
        url: '/projects/swarmcrush/main.png',
        alt: 'SwarmCrush App Screenshot'
      },
      images: [
        {
          url: '/projects/swarmcrush/screen1.png',
          alt: 'Screenshot 1',
          caption: 'IOS app store screenshots'
        },
        {
          url: '/projects/swarmcrush/screen2.png',
          alt: 'Screenshot 2',
          caption: 'action game'
        },
        {
          url: '/projects/swarmcrush/screen3.png',
          alt: 'Screenshot 3',
          caption: 'IOS app store screenshot 3'
        },
        {
          url: '/projects/swarmcrush/screen4.png',
          alt: 'Screenshot 4',
          caption: 'Built with Expo'
        },
        {
          url: '/projects/swarmcrush/screen5.png',
          alt: 'Screenshot 5',
          caption: 'Built with AI'
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
        frontend: ['React Native', 'expo', 'TypeScript', 'Redux'],
        backend: ['firebase'],
        devops: ['Docker', 'Makefile', 'GitHub Actions']
      },
      timeline: {
        started: '2024-11',
        completed: '2025-01',
        status: 'completed'
      },
      team: {
        size: 1,
        roles: ['Mobile Developer', 'Backend Developer', 'UI/UX Designer']
      },
      metrics: {
        users: 10000,
        downloads: 5000,
        custom: [
          { label: 'Active Players', value: '2,500+' },
          //{ label: 'Matches Made', value: '15,000+' }
        ]
      }
    }
  ] as Project[]
}; 