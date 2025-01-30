import { SiteConfig, Skill } from './types';
import { projects } from './projects';

export const siteConfig: SiteConfig = {
  name: 'Omniventus',
  slogan: "Building What's Next",
  description: 'Explore the tech universe of innovative projects and solutions',
  url: 'https://omniventus.com',
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
    },
    {
      name: 'WordPress',
      category: 'CMS',
      level: 85,
      description: 'Building custom plugins and themes with WordPress ecosystem',
      yearsOfExperience: 5,
    },
    {
      name: 'PHP',
      category: 'Backend',
      level: 80,
      description: 'Developing WordPress plugins and backend services',
      yearsOfExperience: 5,
    },
    {
      name: 'Gutenberg',
      category: 'WordPress',
      level: 85,
      description: 'Creating custom blocks and extending the WordPress block editor',
      yearsOfExperience: 3,
    },
    {
      name: 'Elementor',
      category: 'WordPress',
      level: 82,
      description: 'Building custom widgets and extending Elementor functionality',
      yearsOfExperience: 3,
    },
    {
      name: 'SCSS',
      category: 'Frontend',
      level: 85,
      description: 'Writing maintainable and scalable stylesheets with SCSS',
      yearsOfExperience: 6,
    }
  ] as Skill[],
  projects
}; 