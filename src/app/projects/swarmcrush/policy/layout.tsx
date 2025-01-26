import { siteConfig } from '@/config/site-config';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Privacy Policy - Swarmcrush`,
    description: `Privacy Policy for Swarmcrush mobile application`,
    openGraph: {
        title: `Privacy Policy - Swarmcrush`,
        description: `Privacy Policy for Swarmcrush mobile application`,
        images: [
            {
                url: '/projects/swarmcrush/main.png',
                width: 400,
                height: 400,
                alt: 'Swarmcrush App Screenshot'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `Privacy Policy - Swarmcrush`,
        description: `Privacy Policy for Swarmcrush mobile application`,
        images: [siteConfig.author.avatar],
        creator: siteConfig.author.social.twitter
    }
};

export default function PolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 