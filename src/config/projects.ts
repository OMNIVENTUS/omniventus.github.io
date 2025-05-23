import { Project } from './types';

export const projects: Project[] = [
  {
    "id": "librechat-custom",
    "type": "webapp",
    "title": "LibreChat Enterprise Customization",
    "description": "Enhanced version of LibreChat with advanced user administration, file sharing, and security features for enterprise use.",
    "longDescription": "LibreChat Enterprise is an enhanced version of LibreChat, an open-source platform providing access to various AI models like GPT-4o, PaLM 2, and others through a unified interface. This customization enriches this foundation with enterprise-grade features: comprehensive user administration, advanced shared file management, permission-based access controls, and a robust administration interface. Hosted on chat.omniventus.com via Digital Ocean, this version maintains all original functionalities (image processing, conversation search, multilingual support) while adding multi-user collaboration capabilities essential for businesses. This fork remains compatible with upstream updates while offering a secure deployment solution for organizations wanting to control their AI data.",
    "skills": [
      "ReactJS",
      "Node.js",
      "TypeScript",
      "Docker",
      "API Integration",
      "Vite",
      "React Router",
      "React Query",
      "Tailwind CSS",
      "Makefile",
      "RAG",
      "LLM Integration",
      "Librechat",
      "nginx"
    ],
    "seoKeywords": [
      "LibreChat",
      "AI chat platform",
      "enterprise AI solution",
      "user management",
      "file sharing",
      "permission system",
      "authentication",
      "admin interface",
      "social login",
      "customized AI platform",
      "React web application",
      "NodeJS backend",
      "Docker deployment",
      "Ollama integration",
      "LLM API integration",
      "TypeScript application",
      "shared file system",
      "RAG integration",
      "admin dashboard",
      "file permissions",
      "github container registry",
      "github actions"
    ],
    "mainImage": {
      "url": "/projects/librechat-custom/main.jpg",
      "alt": "LibreChat customized admin interface"
    },
    "images": [
      {
        "url": "/projects/librechat-custom/screenshot1.jpg",
        "alt": "Admin Panel with shared prompts and user management",
        "caption": "User administration interface with shared prompts"
      },
      {
        "url": "/projects/librechat-custom/screenshot2.jpg",
        "alt": "Multi model and prompt creation",
        "caption": "Multi model and prompt creation"
      },
      {
        "url": "/projects/librechat-custom/screenshot3.jpg",
        "alt": "User Management",
        "caption": "User Management"
      },
      {
        "url": "/projects/librechat-custom/screenshot4.jpg",
        "alt": "File management",
        "caption": "File management"
      },
      {
        "url": "/projects/librechat-custom/screenshot5.jpg",
        "alt": "Customized authentication",
        "caption": "Customized authentication"
      }
    ],
    "links": [
      {
        "url": "https://chat.omniventus.com/",
        "type": "website",
        "label": "Test the customized LibreChat Website"
      },
      {
        "url": "https://www.librechat.ai/",
        "type": "website",
        "label": "Learn about LibreChat"
      },
      
    ],
    "features": [
      {
        "title": "User Administration Panel",
        "description": "Comprehensive interface for user management with tabular view, offering capabilities to add, modify, and delete users with appropriate permissions.",
        "icon": "account-cog"
      },
      {
        "title": "Advanced Permission System",
        "description": "Enhanced role-based access control with fine-grained permissions including USER_ADMIN and DELETE rights, integrated with the existing authentication system.",
        "icon": "shield-account"
      },
      {
        "title": "Group Management",
        "description": "User grouping functionality allowing administrators to organize users and manage shared resources at the group level.",
        "icon": "account-group"
      },
      {
        "title": "Shared File Library",
        "description": "Improved file management with organization-wide and group-specific shared file repositories, visual differentiation of shared files, and scope indicators.",
        "icon": "folder-multiple"
      },
      {
        "title": "Social Authentication",
        "description": "Integration with Google, GitHub, and Apple login services for streamlined user onboarding and authentication.",
        "icon": "login-variant"
      },
      {
        "title": "Local Model Support",
        "description": "Added Ollama integration enabling the use of locally-hosted language models alongside cloud-based services.",
        "icon": "brain"
      },
      {
        "title": "Enhanced UI Customization",
        "description": "Personalized branding elements including custom footer, login page subtitle, and visual refinements.",
        "icon": "palette"
      },
      {
        "title": "Developer Tools",
        "description": "Expanded Makefile with specialized commands for development, testing, and deployment including Ngrok support for external testing.",
        "icon": "developer-board"
      },
      {
        "title": "Secure REST API",
        "description": "New RESTful endpoints for user and file management with middleware-based security controls and authentication checks.",
        "icon": "api"
      },
      {
        "title": "Moderation Controls",
        "description": "Adjusted request throttling to optimize performance while maintaining appropriate usage limits.",
        "icon": "security"
      },
      {
        "title": "Internationalization",
        "description": "Full i18n support across all new features, ensuring consistent multilingual experience throughout the application.",
        "icon": "translate"
      },
      {
        "title": "Non-Intrusive Architecture",
        "description": "Carefully designed to maintain compatibility with upstream LibreChat updates while adding substantial new functionality.",
        "icon": "puzzle"
      }
    ],
    "challenges": [
      "Integrating with existing authentication system without disrupting functionality",
      "Creating a complete user administration panel that matches existing design language",
      "Implementing secure file sharing with proper access controls",
      "Designing a group-based permission system",
      "Building a non-intrusive architecture allowing future upstream updates",
      "Ensuring security for administrative operations",
      "Supporting various social login providers",
      "Implementing proper frontend state management for admin features",
      "Maintaining performance with additional backend operations",
      "Ensuring compatibility with existing LibreChat features"
    ],
    "solutions": [
      "Developed a modular authentication extension that preserves existing flows while adding social login capabilities through secure OAuth integration",
      "Created a React-based admin interface utilizing the existing design system and component library, ensuring visual consistency throughout the application",
      "Implemented a multi-level file sharing system with database-tracked permissions and visual indicators for shared resources",
      "Designed a flexible group management system with inheritance-based permission propagation and efficient database schema",
      "Utilized data providers pattern matching the existing codebase structure to maintain separation of concerns and update compatibility",
      "Implemented security middleware for admin routes with multiple validation layers and protection against critical operations like deleting the last administrator",
      "Integrated OAuth flows for Google, GitHub and Apple with unified session management and profile data synchronization",
      "Leveraged React Query for efficient data fetching, caching and state management in admin interfaces, reducing unnecessary re-renders",
      "Optimized database queries and implemented selective data loading to maintain responsiveness despite increased complexity",
      "Created comprehensive TypeScript interfaces and maintained strict typing across all new code to ensure reliability and maintainability"
    ],
    "techStack": {
      "frontend": [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "React Router v6",
        "React Query",
        "i18n"
      ],
      "backend": [
        "Node.js",
        "Express",
        "MongoDB",
        "OAuth",
        "REST API",
        "JWT",
        "Fast API",
        "LLM",
        "Vector DB",
        "Ollama",
        "OpenAi"
      ],
      "devops": [
        "Docker",
        "Makefile",
        "Ngrok",
        "GitHub",
        "GitHub Actions",
        "GitHub Container Registry",
        "Nginx",
        "CI/CD"
      ]
    },
    "timeline": {
      "started": "2025-02-15",
      "completed": "2025-03-25",
      "status": "completed"
    },
    "team": {
      "size": 1,
      "roles": [
        "Full Stack Developer",
        "UX Designer",
        "DevOps Engineer"
      ]
    },
    "metrics": {
      "users": 50,
      "custom": [
        {
          "label": "Active Administrators",
          "value": "15+"
        },
        {
          "label": "User Groups",
          "value": "25+"
        },
        {
          "label": "Shared Files",
          "value": "100+"
        }
      ]
    }
  },
  {
    "id": "foncier-online",
    "type": "webapp",
    "title": "FoncierOnline",
    "description": "A powerful real estate valuation platform designed to connect property owners with professionals through accurate estimations, secure document management, and expert consultations.",
    "longDescription": "FoncierOnline is a robust and fully-featured real estate valuation platform that optimizes the entire property estimation process. The application enables property owners to submit detailed valuation requests via an intuitive multi-step form, upload relevant documents, and receive tailored assessments from experts. It features dedicated dashboards for both clients and administrators, with secure real-time communication and private consultation workflows. \n\nThe project was developed under the technical leadership of a senior fullstack developer from LAZONE — a company specializing in sourcing reliable French-speaking tech talents. As Lead Developer, I was responsible for structuring the technical roadmap, defining the architecture and tech stack with the development team, managing the planning and feature scope with the client, and ensuring timely delivery. I led a multidisciplinary remote team composed of frontend, backend, DevOps, and UI/UX contributors, handling code reviews, architecture decisions, and overall project coordination from inception to production.\n\nBuilt using a modern monorepo architecture powered by Turborepo, the platform integrates a performant stack including Next.js, Chakra UI, TypeScript, GraphQL, and Strapi CMS, ensuring scalability, modularity, and maintainability.",
    "skills": [
      "React",
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Strapi CMS",
      "Lead developer",
      "Monorepo",
      "Remote Team Management",
      "Client Communication"
    ],
    "seoKeywords": [
      "Formik",
      "Project Structuring",
      "React",
      "Storybook",
      "Chakra UI",
      "real estate valuation",
      "property estimation",
      "real estate platform",
      "property consultation",
      "Next.js real estate application",
      "GraphQL CMS integration",
      "Strapi headless CMS",
      "Chakra UI dashboard",
      "TypeScript web application",
      "monorepo architecture",
      "lead developer",
      "remote team leader",
      "offshore development",
      "remote development",
      "LAZONE developer",
      "project lead",
      "tech team management",
      "Technical Roadmap Planning",
    ],
    "mainImage": {
      "url": "/projects/foncieronline/main.jpg",
      "alt": "FoncierOnline platform dashboard showing property estimation interface"
    },
    "images": [
      {
        "url": "/projects/foncieronline/form_step_1.jpg",
        "alt": "Client form step 1",
        "caption": "Client form step 1"
      },
      {
        "url": "/projects/foncieronline/form_step_2.jpg",
        "alt": "Client form step 2",
        "caption": "Client form step 2"
      },
      {
        "url": "/projects/foncieronline/dashboard_client_1.jpg",
        "alt": "Client dashboard 1",
        "caption": "Client dashboard 1"
      },
      {
        "url": "/projects/foncieronline/dashboard_client_2.jpg",
        "alt": "Client dashboard 2",
        "caption": "Client dashboard 2"
      },
      {
        "url": "/projects/foncieronline/dashboard_admin.jpg",
        "alt": "Admin dashboard",
        "caption": "Admin dashboard"
      }
    ],
    "links": [
      {
        "url": "https://foncieronline.fr",
        "type": "website",
        "label": "Live Website"
      },
      {
        "url": "https://la-zone.io",
        "type": "website",
        "label": "Discover LAZONE"
      }
    ],
    "features": [
      {
        "title": "Multi-step Estimation Request Form",
        "description": "User-friendly form with address autocomplete, property type selection, and document upload features, streamlining the collection of comprehensive property data.",
        "icon": "form"
      },
      {
        "title": "Client Dashboard",
        "description": "Tailored dashboard for property owners to view valuations, track estimation statuses, and manage profile settings.",
        "icon": "dashboard"
      },
      {
        "title": "Admin Management System",
        "description": "Advanced admin interface to manage incoming requests, qualify leads, and facilitate professional consultations.",
        "icon": "admin"
      },
      {
        "title": "Document Management",
        "description": "Secure and scalable system for uploading, viewing, and managing property-related documents, supporting multiple file formats.",
        "icon": "document"
      },
      {
        "title": "Private Consultation System",
        "description": "Integrated workflow for arranging private consultations between owners and real estate professionals or potential investors.",
        "icon": "meeting"
      },
      {
        "title": "User Authentication & Profile Management",
        "description": "Secure login system with password reset functionality and comprehensive profile controls.",
        "icon": "user"
      }
    ],
    "challenges": [
      "Designing a scalable architecture to accommodate multiple user roles and complex workflows",
      "Ensuring document security and access control in a multi-tenant environment",
      "Creating a smooth and dynamic multi-step form for detailed property data",
      "Delivering a fully responsive experience across mobile, tablet, and desktop",
      "Integrating external APIs for location and address validation",
      "Keeping frontend and CMS data in sync with low latency and high reliability"
    ],
    "solutions": [
      "Adopted a monorepo setup with Turborepo for scalable and modular code organization",
      "Leveraged Strapi CMS with custom GraphQL endpoints for flexible, headless content management",
      "Developed reusable and theme-compliant UI components using Storybook",
      "Implemented responsive layouts using Chakra UI and mobile-first design principles",
      "Built a robust form engine with Formik and Yup for validation and error feedback",
      "Secured authentication using JWT tokens and encrypted storage practices"
    ],
    "techStack": {
      "frontend": [
        "React",
        "Next.js",
        "TypeScript",
        "Chakra UI",
        "Formik",
        "Yup",
        "React-Intl"
      ],
      "backend": [
        "Strapi CMS",
        "GraphQL",
        "PostgreSQL",
        "Node.js"
      ],
      "devops": [
        "Docker",
        "Docker Compose",
        "Turborepo"
      ],
      "other": [
        "Storybook",
        "URQL GraphQL Client",
        "Digital Ocean Spaces (S3)"
      ]
    },
    "timeline": {
      "started": "2024-05-01",
      "completed": "2024-09-01",
      "status": "completed"
    },
    "team": {
      "size": 5,
      "roles": [
        "Frontend Developer",
        "Backend Developer",
        "UI/UX Designer",
        "Project Manager",
        "DevOps Engineer"
      ]
    },
    "metrics": {
      users: 1000,
      "custom": [
        {
          "label": "Average Estimation Time",
          "value": "48 hours"
        },
        {
          "label": "User Satisfaction Rate",
          "value": "92%"
        },
        {
          "label": "Supported Property Types",
          "value": "10+"
        }
      ]
    }
  },  
  {
    id: 'swarmcrush',
    type: 'mobileApp',
    title: 'SwarmCrush app',
    description: 'SwarmCrush is a Fast-paced arcade game where you crush mutant swarms and climb global rankings.',
    longDescription: 'SwarmCrush is a modern, React Native-powered arcade game that combines classic target-shooting mechanics with contemporary mobile gaming features. Built using Expo\'s managed workflow, the game demonstrates advanced implementation of real-time touch handling, complex state management, and social gaming features.',
    skills: ['React Native', 'TypeScript', 'Firebase', 'Expo', 'UI/UX design', 'Sentry', 'ios', 'android', 'firebase', 'Cursor Ai', 'Redux-Saga'],
    seoKeywords: [
      'mobile game',
      'arcade game',
      'react native game',
      'expo game',
      'shooting game',
      'target practice',
      'mobile app development',
      'cross-platform game',
      'indie game',
      'casual game',
      'action game',
      'firebase game',
      'real-time game',
      'mobile gaming',
      'game development',
      'Cursor Ai',
      'firestore',
      'reanimated',
      'google analytics',
      'Redux-Saga',
      'react-native'
    ],
    mainImage: {
      url: '/projects/swarmcrush/main.jpg',
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
        url: 'https://play.google.com/store/apps/details?id=com.omniventus.swarmcrush',
        type: 'playStore',
        label: 'Get it on Play Store'
      },
      {
        url: 'https://apps.apple.com/app/swarmcrush/id6737512823',
        type: 'appStore',
        label: 'Download on App Store'
      }
    ],
    features: [
      {
        "title": "Social Authentication",
        "description": "Multiple sign-in options including Apple, Google, and Facebook authentication, with seamless profile synchronization and secure user data management.",
        "icon": "account-multiple"
      },
      {
        "title": "Dynamic Score System",
        "description": "Engaging score animations with energy bursts and floating numbers, providing instant visual feedback for player achievements.",
        "icon": "star-shooting"
      },
      {
        "title": "Social Sharing",
        "description": "Share game progress and achievements across multiple platforms including Instagram Stories, Discord, Telegram, and Snapchat.",
        "icon": "share-variant"
      },
      {
        "title": "Real-time Leaderboard",
        "description": "Competitive global leaderboard system with live updates, friend tracking, and achievement displays.",
        "icon": "trophy-variant"
      },
      {
        "title": "Profile Customization",
        "description": "Personalized user profiles with customizable avatars, usernames, and progress tracking.",
        "icon": "account-edit"
      },
      {
        "title": "Interactive Notifications",
        "description": "Dynamic toast notification system with themed animations providing real-time feedback on game events and achievements.",
        "icon": "bell-ring"
      },
      {
        "title": "Sound Management",
        "description": "Immersive game audio system with configurable sound effects and background music.",
        "icon": "volume-high"
      },
      {
        "title": "Cross-Platform Support",
        "description": "Optimized performance across iOS and Android with platform-specific enhancements and responsive design.",
        "icon": "devices"
      },
      {
        "title": "Secure Data Management",
        "description": "Firebase integration with secure storage rules, data compression, and efficient state management.",
        "icon": "shield-check"
      },
      {
        "title": "Achievement System",
        "description": "Comprehensive trophy and achievement system tracking player progress and milestones.",
        "icon": "medal"
      },
      {
        "title": "Performance Optimization",
        "description": "Optimized animations, state management, and resource handling for smooth gameplay experience.",
        "icon": "lightning-bolt"
      },
      {
        "title": "Error Handling",
        "description": "Robust error tracking and handling with Sentry integration and user-friendly error messages.",
        "icon": "alert-circle-check"
      }
    ],
    challenges: [
      "User authentication complexity across multiple platforms",
      "Social media integration and sharing limitations",
      "Game performance and state management",
      "User profile data synchronization",
      "Real-time leaderboard updates",
      "Secure data handling and privacy",
      "Cross-platform UI consistency",
      "Asset management and loading",
      "Error handling and user feedback",
      "Game progression system"
    ],
    solutions: [
      "Implemented a unified authentication system using Firebase Auth, integrating Apple Sign-In (ASWebAuthenticationSession), Google OAuth, and email/password with TypeScript for type-safe authentication flows",
      "Developed a flexible social sharing system using React Native Share and Expo Linking, supporting Instagram Stories, WhatsApp, and other platforms with dynamic content generation using react-native-view-shot",
      "Optimized game state management using Redux Toolkit, Redux-Saga for side effects, and Firebase Realtime Database, achieving smooth 60 FPS gameplay with React Native Reanimated",
      "Built a real-time profile system using Firebase Cloud Storage for secure avatar management, Firestore for data persistence, and React Query for efficient cache management",
      "Engineered high-performance leaderboard using Firebase Firestore with compound queries, implementing optimistic updates with Redux for instant feedback",
      "Implemented secure data access using Firebase Security Rules, with client-side validation using Zod and server-side validation using TypeScript interfaces",
      "Created a responsive UI system using React Native's StyleSheet, custom theming with React Context, and MaterialCommunityIcons for consistent cross-platform design",
      "Optimized asset loading using Expo Asset system with preloading strategies, implementing progressive image loading with expo-image",
      "Developed a comprehensive error handling system using Sentry for monitoring, custom error boundaries in React, and an animated toast system with Reanimated 2",
      "Architected a progression system using Redux for state management, Firebase Cloud Functions for achievement validation, and custom animations with react-native-reanimated"
    ],
    techStack: {
      frontend: ['React Native', 'expo', 'TypeScript', 'Redux', 'Redux-Saga'],
      backend: ['firebase', 'sentry', 'EAS'],
      devops: ['Docker', 'Makefile', 'GitHub Actions']
    },
    timeline: {
      started: '2024-12-10',
      completed: '2025-02',
      status: 'in-progress'
    },
    team: {
      size: 1,
      roles: ['Mobile Developer', 'Backend Developer', 'UI/UX Designer']
    },
    metrics: {
      users: 10000,
      downloads: 5000,
      custom: [
        { label: 'Active Players', value: '2,500+' }
      ]
    }
  },
  {
    id: 'recipe-ingredient-range',
    type: 'wordpress-plugin',
    title: 'DynamicDish plugin',
    description: 'A recipe ingredient calculator WordPress plugin that adjusts quantities based on servings, supporting both Gutenberg and Elementor.',
    longDescription: 'A WordPress plugin created to help food blogs dynamically calculate recipe ingredient quantities based on serving size. Originally developed for lecarnetdebineta.com, this plugin offers multiple calculation methods, responsive design, and full compatibility with both Gutenberg block editor and Elementor.',
    skills: [
      'wordpress-plugin',
      'Wordpress',
      'React',
      'PHP',
      'JavaScript',
      'SCSS',
      'Gutenberg Blocks',
      'Elementor Widgets',
      'Docker',
      'Cursor AI'
    ],
    mainImage: {
      url: '/projects/recipe-ingredient-range/main.jpg',
      alt: 'Recipe Ingredient Range Calculator Interface',
      caption: 'Dynamic recipe ingredient calculator with serving size controls'
    },
    images: [
      {
        url: '/projects/recipe-ingredient-range/screen2.png',
        alt: '',
        caption: 'customise any part'
      },
      {
        url: '/projects/recipe-ingredient-range/screen3.png',
        alt: 'Elementor Widget Interface',
        caption: 'Change any part'
      },
      {
        url: '/projects/recipe-ingredient-range/screen4.png',
        alt: 'Add any element in the wordpress plugin',
        caption: 'Add element'
      }
    ],
    links: [
      {
        url: 'https://lecarnetdebineta.com/',
        type: 'website',
        label: 'View on Site'
      },
      // {
      //   url: 'https://omniventus.com/plugins/recipe-ingredient-range',
      //   type: 'website',
      //   label: 'Plugin Homepage'
      // }
    ],
    features: [
      {
        title: 'Dynamic Calculation',
        description: 'Adjusts ingredient quantities in real-time based on serving size changes',
        icon: 'calculator'
      },
      {
        title: 'Multiple Calculation Methods',
        description: 'Supports linear, exponential, and custom formula calculations for different ingredient types',
        icon: 'function'
      },
      {
        title: 'Dual Editor Support',
        description: 'Works seamlessly with both Gutenberg block editor and Elementor page builder',
        icon: 'edit'
      },
      {
        title: 'Interactive UI',
        description: 'Responsive design with ingredient cards, images, and intuitive serving controls',
        icon: 'desktop'
      }
    ],
    challenges: [
      'Creating a calculation system that handles different scaling methods for various ingredient types',
      'Ensuring compatibility between Gutenberg and Elementor implementations',
      'Managing responsive design for ingredient cards across different device sizes',
      'Implementing proper data storage and retrieval in WordPress'
    ],
    solutions: [
      'Developed a flexible calculation engine supporting linear, exponential, and custom formulas',
      'Created separate but consistent implementations for both Gutenberg and Elementor',
      'Implemented responsive CSS with proper breakpoints and image handling',
      'Utilized WordPress block attributes and meta storage for data persistence'
    ],
    techStack: {
      frontend: [
        'React',
        'SCSS',
        'WordPress Block Editor',
        'Elementor',

      ],
      backend: [
        'PHP 7.4+',
        'WordPress Plugin API'
      ],
      devops: [
        'Docker',
        'npm',
        'webpack',
        'Cursor AI'
      ]
    },
    timeline: {
      started: '2024-12-10',
      completed: '2024-12-15',
      status: 'completed'
    },
    team: {
      size: 1,
      roles: ['Full Stack WordPress Developer']
    },
    metrics: {
      users: 10000,
      custom: [
        { label: 'WordPress Version', value: '6.0+' },
        { label: 'PHP Version', value: '7.4+' },
        { label: 'Languages', value: 'English, French' },
        { label: 'recipes', value: '500+' },

      ]
    },
    seoKeywords: [
      'wordpress plugin',
      'recipe calculator',
      'ingredient calculator',
      'food blog plugin',
      'recipe scaling',
      'gutenberg block',
      'elementor widget',
      'wordpress development',
      'php plugin',
      'recipe management',
      'cooking calculator',
      'serving size calculator',
      'food blog tools',
      'recipe tools',
      'wordpress customization'
    ]
  },
  {
    "id": "reseau-evolve-capital",
    "type": "website",
    "title": "Réseau Evolve Capital Website",
    "description": "A fast, SEO-optimized website for Réseau Evolve Capital, designed for traffic acquisition, member growth, and sponsorship outreach.",
    "longDescription": "This website was built to enhance the online presence of Réseau Evolve Capital, a business and investment networking association. It aims to attract new members, increase traffic, and facilitate sponsorship acquisition. The site is fully static, leveraging Next.js with Static Site Generation (SSG) for optimal performance and cost efficiency by hosting on GitHub Pages. It includes privacy-first analytics using Cloudflare Analytics, dynamic animations with Framer Motion, and AI-assisted content generation for a streamlined workflow.",
    "skills": ["Next.js", "React", "Tailwind CSS", "Framer Motion", "SEO", "Docker", "GitHub Pages", "Cloudflare Analytics"],
    "mainImage": {
      "url": "/projects/reseau-evolve-capital/main.jpg",
      "alt": "Homepage of Réseau Evolve Capital website"
    },
    "images": [
      {
        "url": "/projects/reseau-evolve-capital/screenshot1.jpg",
        "alt": "fun 404 page"
      },
      {
        "url": "/projects/reseau-evolve-capital/screenshot2.jpg",
        "alt": "Events section of the website"
      }
    ],
    "links": [
      {
        "url": "https://reseauevolvecapital.com/fr/",
        "type": "website",
        "label": "Live Website"
      },
      // {
      //   "url": "https://github.com/your-repo",
      //   "type": "github",
      //   "label": "GitHub Repository"
      // }
    ],
    "features": [
      {
        "title": "SEO-Optimized Static Website",
        "description": "Built with Next.js and SSG to ensure fast loading speeds and high SEO performance."
      },
      {
        "title": "Privacy-First Analytics",
        "description": "Integrated Cloudflare Analytics to track user engagement without compromising privacy."
      },
      {
        "title": "Framer Motion Animations",
        "description": "Smooth animations for an engaging user experience."
      },
      {
        "title": "AI-Assisted Development",
        "description": "Used Cursor AI editor for faster development and better code quality."
      }
    ],
    "challenges": [
      "Building and deploying an SEO-optimized static website on a limited budget.",
      "Ensuring the site remains lightweight and fast while integrating dynamic elements like animations.",
      "Using AI-assisted tools efficiently to speed up development without sacrificing quality."
    ],
    "solutions": [
      "Leveraged Next.js Static Site Generation (SSG) to generate a fast and cost-effective website.",
      "Hosted the site on GitHub Pages to minimize hosting costs.",
      "Used Framer Motion for lightweight yet engaging animations.",
      "Utilized Cursor AI editor for efficient development, reducing build time to 15 hours."
    ],
    "techStack": {
      "frontend": ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      "devops": ["Docker", "GitHub Pages"],
      "other": ["Cloudflare Analytics", "Cursor AI Editor"]
    },
    "timeline": {
      "started": "2025-01-31",
      "completed": "2025-02-03",
      "status": "completed"
    },
    "team": {
      "size": 1,
      "roles": ["Full-Stack Developer", "SEO Specialist", "Content Strategist"]
    },
    metrics: {
      //users: 500, 
      custom: [
        { "label": "Traffic", "value": "1000+" },
        { "label": "Ai Assistance", "value": "99% AI (Cursor)" },
        { "label": "hostingCost", "value": "0€" }
      ]
    },
    seoKeywords: [
      'business network',
      'investment network',
      'nextjs website',
      'static website',
      'seo optimization',
      'business association',
      'networking platform',
      'github pages',
      'cloudflare analytics',
      'static site generation',
      'react website',
      'tailwind css',
      'framer motion',
      'business website',
      'association website'
    ]

  },

  {
    "id": "wisembly-virtual-conference",
    "type": "webapp",
    "title": "Fullstack dev (React/Symfony) on a Video Conferencing Platform",
    "description": "Migration of a Backbone.js application to React.js and UI performance improvements.",
    "longDescription": `I came into a team of 3 developpers as a senior and expert on the React Stack . We did a Complete refactoring of a video conferencing application by migrating the architecture from Backbone.js to React.js.
   The backend was on Symfony. I introduced important changes like typescript , Redux-ducks architecture and optimization of list rendering and user interfaces.This project was a Saas project used by a lot of companies with critical needs for performance and scalability.
   I also autonomously built a gatsby website for the company to showcase their product.`,
    "skills": ["React.js", "Redux", "Symfony 3/4", "TypeScript", "optimization", "gatsby", 'rabbitmq', 'redis'],
    "mainImage": {
      "url": "/projects/wisembly/main.png",
      "alt": "Screenshot of the video conferencing platform"
    },
    "images": [
      {
        "url": "/projects/wisembly/screen1.jpg",
        "alt": "Screenshot of the video conferencing platform",
        "caption": "Screenshot of the video conferencing platform"
      },
      {
        "url": "/projects/wisembly/screen2.jpg",
        "alt": "Screenshot of the video conferencing platform",
        "caption": "Screenshot of the video conferencing platform"
      }
    ],
    "links": [
      {
        "url": "https://www.wisembly.com/en/",
        "type": "website",
        "label": "Live Website"
      }
    ],
    "features": [
      {
        "title": "Event Page and Registration Management",
        "description": "Effortlessly create a personalized page for your event. Customize the design with event colors, include a registration form, schedule, speaker management, and customizable content. Automate the sending of invitations and registration confirmations."
      },
      {
        "title": "Access Badges with QR Code",
        "description": "Set up digital or printable PDF access badges for your event. Sent via email, they are ready to be scanned through our app, ideal for smooth entry management at your in-person events."
      },
      {
        "title": "Interactive Features: Chat, Quizzes, Polls",
        "description": "Encourage interactions by engaging your participants during the live event with interactive features. These include moderated chat, moods, quizzes with leaderboards, polls with various question types, and satisfaction surveys."
      },
      {
        "title": "In-Person Projection Interface",
        "description": "Broadcast the projection interface in your seminar rooms, featuring chat, interactive tools, and documents. Provide your participants with a dedicated mobile interface, without the need for downloads, allowing them to ask questions live."
      },
      {
        "title": "Remote Interface and Video Control",
        "description": "Produce and broadcast your webinars independently with advanced controls: customizable layouts, scene creation, background additions, and RTMP streaming. This enables professional presentations with ease."
      }
    ],
    "challenges": [
      "Managing the migration without service interruption.",
      "build a scalable and performant frontend that will be used by a lot of people at the same time.",
      "Optimizing the performance of the application.",
      "Building quickly a customizable landing page for the company to showcase their product.",
      "Building quickly in a reliable environment "
    ],
    "solutions": [
      "Using a progressive approach and implementing unit tests.",
      "we built with react for reactivity and leverage sockets for real time communication.",
      "big focus on optimization and virtualization of big lists elements like messages or participants.",
      "Using gatsby to build a website and give access to the communication team to write articles.",
      "Using docker to containerize the application and the website."
    ],
    "techStack": {
      "frontend": ["React.js", "Redux", "TypeScript", "gatsby", "figma", "material ui", "storybook", "Redux-Saga", 'redux-orm'],
      "backend": ["Node.js", "symfony 3/4", 'redis', 'rabbitmq', 'graphql'],
      "devops": ["Docker", "CI/CD"]
    },
    "timeline": {
      "started": "2020-07-01",
      "completed": "2023-09-30",
      "status": "completed"
    },
    "team": {
      "size": 5,
      "roles": ["Full-Stack Developer", "Frontend Developer", "UI/UX Designer", "Product Owner"]
    },
    seoKeywords: [
      'virtual conference',
      'video conferencing',
      'react migration',
      'backbone migration',
      'web application',
      'redux implementation',
      'typescript webapp',
      'symfony application',
      'performance optimization',
      'ui optimization',
      'web development',
      'frontend',
      'Saas',
      'enterprise application',
      'conference platform',
      'real-time communication',
      'UI/UX design',
      ''
    ]
  },
  {
    id: 'airshop-loyalty-system',
    type: 'webapp',
    title: 'Lead dev React/Symfony for AirShop Loyalty ',
    description: 'Lead Developer on the AirShop loyalty system used by G20 stores in France, Pomme de Pain, and KFC London.',
    longDescription: 'Contributed to the development and maintenance of the AirShop loyalty system, a mobile commerce platform offering features like 3D product visualization and secure, contactless payments. Initially served as a Full-Stack Developer, focusing on feature development and bug fixes. Later advanced to Lead Developer, overseeing development and maintenance, managing offshore teams, and ensuring code quality.',
    seoKeywords: ['AirShop', 'loyalty system', 'mobile commerce', '3D product visualization', 'contactless payments', 'Symfony', 'React', 'GoLang', 'Lead Developer', 'Fullstack Developer', 'e commerce'],
    skills: ['Symfony', 'React', 'GoLang', 'PHP', 'RabbitMQ', 'Git', 'Zendesk', 'Pivotal'],
    mainImage: {
      url: 'https://wecomin.files.wordpress.com/2012/11/g201.jpg',
      alt: 'AirShop loyalty system interface',
      caption: 'AirShop Loyalty System Interface',
    },
    images: [
      {
        url: 'https://wecomin.files.wordpress.com/2012/11/g201.jpg',
        alt: 'AirShop loyalty system interface',
        caption: 'AirShop Loyalty System Interface',
      },
    ],
    links: [
      {
        url: 'https://wecomin.wordpress.com/2012/11/11/g20-choisit-la-solution-airshop-de-airtag-des-produits-en-3d/',
        type: 'website',
        label: 'G20 Chooses AirShop Solution',
      },
      {
        url: 'https://www.idemia.com/fr/actualite/airtag-ou-le-boom-du-commerce-sur-mobile-2016-09-23',
        type: 'website',
        label: 'AirTag and the Mobile Commerce Boom',
      },
    ],
    features: [
      {
        title: '3D Product Visualization',
        description: 'Allows customers to view products in 3D, enhancing the online shopping experience.',
      },
      {
        title: 'Secure, Contactless Payments',
        description: 'Enables customers to make secure payments through the mobile application.',
      },
      {
        title: 'Order Management',
        description: 'Facilitates order placement and management, including notifications when orders are ready for pickup.',
      },
    ],
    challenges: [
      'Maintaining and updating a complex loyalty system across multiple regions and brands.',
      'Coordinating development efforts with offshore teams to ensure timely delivery and code quality.',
    ],
    solutions: [
      'Implemented robust maintenance protocols and regular updates to keep the system running smoothly.',
      'Established clear communication channels and task management processes to effectively manage offshore development teams.',
    ],
    techStack: {
      frontend: ['React'],
      backend: ['Symfony 2.8', 'PHP', 'GoLang'],
      devops: ['Git', 'RabbitMQ'],
      other: ['Zendesk', 'Pivotal'],
    },
    timeline: {
      started: '2016-09',
      completed: '2020-07',
      status: 'completed',
    },
    team: {
      size: 6,
      roles: ['Full-Stack Developer', 'Lead Developer'],
    },
    metrics: {
      users: 100000,
      downloads: 10000,
      stars: 4.5,
      custom: [
        { label: 'Participating Stores', value: 'G20, Pomme de Pain, KFC London' },
      ],
    },
  },
  {
    id: 'tripartie-api-development',
    type: 'backend',
    title: 'API Development for Tripartie Fintech Application',
    description: 'Developed the Symfony API for Tripartie, a fintech startup specializing in secure transactions and dispute resolution.',
    longDescription: 'As a freelance developer, I collaborated with Tripartie, a fintech startup focused on secure transactions and dispute resolution. Working closely with the CTO and a small team, I developed the Symfony-based API for their payment escrow system, created controllers to manage accounts and transactions, and implemented Doctrine repositories for data retrieval. Additionally, I was responsible for bug fixes and writing specifications.',
    seoKeywords: ['Tripartie', 'fintech', 'API development', 'Symfony', 'payment escrow', 'dispute resolution'],
    skills: ['Symfony', 'PHP', 'Doctrine ORM', 'SQL', 'Git', 'Trello'],
    mainImage: {
      url: '/projects/tripartie/main.jpg',
      alt: 'Tripartie Logo',
      caption: 'Tripartie - Secure Transactions and Dispute Resolution',
    },
    images: [
      // {
      //     url: '/projects/tripartie/screen1.png',
      //     alt: 'Tripartie Platform Interface',
      //     caption: 'Tripartie Platform Interface',
      // },
    ],
    links: [
      {
        url: 'https://tripartie.com/en/',
        type: 'website',
        label: 'Tripartie Official Website',
      },
    ],
    features: [
      {
        title: 'Secure Payment Escrow System',
        description: 'Implemented a payment escrow system to hold funds securely during transactions.',
      },
      {
        title: 'Account and Transaction Management',
        description: 'Developed controllers to manage user accounts and transaction processes.',
      },
      {
        title: 'Data Retrieval with Doctrine ORM',
        description: 'Created repositories using Doctrine ORM for efficient data retrieval and management.',
      },
    ],
    challenges: [
      'Developing a robust API for secure financial transactions in a startup environment.',
      'Collaborating effectively with a small team to meet tight deadlines.',
    ],
    solutions: [
      'Utilized Symfony framework to build a secure and scalable API.',
      'Maintained clear communication and used project management tools like Trello to coordinate tasks.',
    ],
    techStack: {
      backend: ['Symfony', 'PHP', 'Doctrine ORM', 'SQL'],
      devops: ['Git'],
      other: ['Trello'],
    },
    timeline: {
      started: '2018-02',
      completed: '2018-04',
      status: 'completed',
    },
    team: {
      size: 3,
      roles: ['API Developer', 'CTO', 'Project Manager'],
    },
    metrics: {
      custom: [
        { label: 'Project Duration', value: '2 months' },
      ],
    },
  },
  {
    id: 'lecole-francaise-fullstack-development',
    type: 'website',
    title: 'Full-Stack dev for L\'École Française LMS',
    description: 'Led full-stack development and modernization efforts for L\'École Française, focusing on microservices architecture, lead acquisition form, and system integrations.',
    longDescription: 'As a senior full-stack developer at L\'École Française, an online education platform, I spearheaded the development and migration of multiple PHP cloud functions within a microservices architecture. I created a lead acquisition form using React.js, Docker, and PHP cloud functions, designed to qualify prospects and convert them into clients. My role also involved writing unit and functional tests for React.js, PHP cloud functions. Additionally, I migrated functions and APIs from WordPress to PHP cloud functions and modernized the business application by customizing plugins and themes, including refactoring an outdated WordPress site by developing a new plugin from scratch. I integrated APIs from ActiveCampaign, Zoho, and ChargeBee to enhance the platform\'s capabilities. This experience required close collaboration with various stakeholders across the company to understand and address their needs effectively.',
    seoKeywords: ['L\'École Française', 'full-stack development', 'microservices', 'lead acquisition', 'Functional Testing', 'React.js', 'Symfony', 'WordPress', 'PHP', 'cloud functions', 'API integration', 'ActiveCampaign', 'Zoho', 'ChargeBee'],
    skills: ['React.js', 'Symfony', 'WordPress', 'PHP', 'Docker', 'Unit Testing', 'API', 'ActiveCampaign', 'Zoho', 'ChargeBee'],
    mainImage: {
      url: '/projects/ecole-francaise/main.jpg',
      alt: 'L\'École Française Logo',
      caption: 'L\'École Française - Online Certified Training',
    },
    images: [
      {
        url: '/projects/ecole-francaise/screen1.png',
        alt: 'L\'École Française Platform Interface',
        caption: 'L\'École Française Platform Interface',
      },
    ],
    links: [
      {
        url: 'https://lecolefrancaise.fr/',
        type: 'website',
        label: 'L\'École Française Official Website',
      },
    ],
    features: [
      {
        title: 'Microservices Architecture',
        description: 'Developed and migrated multiple PHP cloud functions to enhance system modularity and scalability.',
      },
      {
        title: 'Lead Acquisition Form',
        description: 'Created a React.js-based form to qualify prospects and facilitate their conversion into clients.',
      },
      {
        title: 'System Modernization',
        description: 'Refactored and modernized the business application by customizing WordPress plugins and themes, including developing a new plugin from scratch.',
      },
      {
        title: 'API Integrations',
        description: 'Integrated APIs from ActiveCampaign, Zoho, and ChargeBee to enhance platform capabilities.',
      },
    ],
    challenges: [
      'Transitioning from a monolithic to a microservices architecture.',
      'Ensuring seamless integration of various third-party services.',
      'Collaborating with diverse stakeholders to understand and address their specific needs.',
    ],
    solutions: [
      'Implemented PHP cloud functions to facilitate the migration to a microservices architecture.',
      'Developed robust integration strategies for ActiveCampaign, Zoho, and ChargeBee APIs.',
      'Maintained open communication channels with stakeholders to gather requirements and provide effective solutions.',
    ],
    techStack: {
      frontend: ['React.js'],
      backend: ['Symfony', 'PHP', 'WordPress', 'PHP Cloud Functions', 'Google Cloud Functions'],
      devops: ['Docker'],
      other: ['ActiveCampaign API', 'Zoho API', 'ChargeBee API'],
    },
    timeline: {
      started: '2023-10',
      completed: '2024-11',
      status: 'completed',
    },
    team: {
      size: 10,
      roles: ['Senior Full-Stack Developer', 'CTO', 'Project Manager', 'Backend Developer', 'UI/UX Designer', 'Product Owner'],
    },
    metrics: {
      custom: [
        { label: 'Daily traffic', value: '10000' },
      ],
    },
  }




]; 