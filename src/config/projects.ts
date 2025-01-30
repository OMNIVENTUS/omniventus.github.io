import { Project } from './types';

export const projects: Project[] = [
    {
        id: 'swarmcrush',
        type: 'mobileApp',
        title: 'SwarmCrush',
        description: 'Fast-paced arcade game where you crush swarms and climb global rankings.',
        longDescription: 'SwarmCrush is an innovative mobile application that helps people discover and connect with others who share their interests, hobbies, and passions...',
        skills: ['React Native', 'TypeScript', 'Firebase', 'Expo', 'UI/UX design', 'Sentry'],
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
            backend: ['firebase', 'sentry'],
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
                { label: 'Active Players', value: '2,500+' }
            ]
        }
    },
    {
        id: 'recipe-ingredient-range',
  type: 'wordpress-plugin',
  title: 'DynamicDish',
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
  ],
  mainImage: {
    url: '/projects/recipe-ingredient-range/main.png',
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
    started: '2024-12',
    completed: '2024-12',
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
  }
    }
    
]; 