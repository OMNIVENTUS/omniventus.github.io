'use client';

import Script from 'next/script';

export function Analytics() {
    const analyticsToken = process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN;
    
    if (!analyticsToken) {
        console.warn('Cloudflare Analytics token is missing');
        return null;
    }
    
    return (
        <Script
            defer
            src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon={`{"token": "${analyticsToken}"}`}
            strategy="afterInteractive"
        />
    );
} 