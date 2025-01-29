export type FAQItem = {
    question: string;
    answer: string;
    category?: string;
};

export type SBOMItem = {
    name: string;
    version: string;
    license: string;
    url?: string;
};

export type SupportContact = {
    type: 'email' | 'phone' | 'address' | 'social';
    label: string;
    value: string;
    icon?: 'mail' | 'twitter' | 'github' | 'phone' | 'whatsapp' | 'address';
};

export type SupportStatus = {
    status: 'operational' | 'partial_outage' | 'major_outage' | 'maintenance';
    message: string;
    lastUpdated: string;
};

export type SupportConfig = {
    appName: string;
    version: string;
    status: SupportStatus;
    links: {
        appStore: string;
        playStore: string;
        privacyPolicy: string;
        termsOfService: string;
    };
    legalAddress: {
        company: string;
        street: string;
        city: string;
        postalCode: string;
        country: string;
    };
    supportHours: {
        days: string;
        hours: string;
        timezone: string;
    };
    responseTime: string;
    contacts: SupportContact[];
    faq: FAQItem[];
    sbom?: SBOMItem[];
}; 