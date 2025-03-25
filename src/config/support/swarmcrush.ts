import { SupportConfig } from "./types";
import { siteConfig } from "../site-config";

export const swarmcrushSupport: SupportConfig = {
    appName: "SwarmCrush",
    version: "1.0.0",
    //supportEmail: siteConfig.author.social.email,
    legalAddress: {
        company: "OMNIVENTUS SAS",
        street: "181 Boulevard Macdonald",
        city: "Paris",
        country: "France",
        postalCode: "75019"
    },
    contacts: [
        {
            type: 'email',
            label: "Support Email",
            value: `mailto:${siteConfig.author.social.email}`,
            icon: "mail"
        },
        {
            type: 'social',
            label: "X (Twitter)",
            value: siteConfig.author.social.twitter,
            icon: "twitter"
        },
        {
            type: 'social',
            label: "WhatsApp",
            value: siteConfig.author.social.whatsapp,
            icon: "whatsapp"
        }
    ],
    faq: [
        {
            question: "How do I get started with SwarmCrush?",
            answer: "Download the app from your preferred app store, create an account, and start playing! The tutorial will guide you through the basics.",
            category: "Getting Started"
        },
        {
            question: "How do I report a bug?",
            answer: "You can report bugs through our support email or by using the contact form below. Please include as much detail as possible, including your device model and OS version.",
            category: "Technical Support"
        },
        {
            question: "Is my data secure?",
            answer: "Yes, we take data security seriously. All user data is encrypted and stored securely on Firebase servers. Read our Privacy Policy for more details.",
            category: "Privacy & Security"
        }
    ],
    sbom: [
        {
            name: "React Native",
            version: "0.72.0",
            license: "MIT",
            url: "https://github.com/facebook/react-native"
        },
        {
            name: "Firebase",
            version: "10.0.0",
            license: "Apache-2.0",
            url: "https://github.com/firebase/firebase-js-sdk"
        },
        {
            name: "Expo",
            version: "49.0.0",
            license: "MIT",
            url: "https://github.com/expo/expo"
        }
    ],
    supportHours: {
        timezone: "Europe/Paris",
        hours: "9:00 AM - 6:00 PM",
        days: "Monday - Friday"
    },
    responseTime: "Within 24 hours",
    links: {
        privacyPolicy: "/projects/swarmcrush/policy",
        termsOfService: "/projects/swarmcrush/terms",
        appStore: "https://apps.apple.com/app/swarmcrush",
        playStore: "https://play.google.com/store/apps/details?id=com.swarmcrush"
    },
    status: {
        status: "operational",
        message: "All systems are operational",
        lastUpdated: new Date().toISOString()
    }
}; 