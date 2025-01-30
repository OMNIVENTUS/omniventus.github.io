'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiMail, FiTwitter, FiGithub, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Logo } from '@/components/Logo';
import { useState, useEffect } from 'react';
import type { SupportConfig } from '@/config/support/types';
import { analyticsEvents } from '@/lib/analytics';

const iconMap = {
    mail: FiMail,
    twitter: FiTwitter,
    github: FiGithub,
    phone: FiPhone,
    whatsapp: FaWhatsapp,
    address: FiMapPin,
};

const statusColors = {
    operational: 'bg-green-500',
    partial_outage: 'bg-yellow-500',
    major_outage: 'bg-red-500',
    maintenance: 'bg-blue-500',
};

type SupportContentProps = {
    supportConfig: SupportConfig;
    projectId: string;
}

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
const FORM_SECRET = process.env.NEXT_PUBLIC_FORM_SECRET_KEY;

export function SupportContent({ supportConfig, projectId }: SupportContentProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

    const categories = Array.from(new Set(supportConfig.faq.map(item => item.category || null)));
    const filteredFAQ = selectedCategory
        ? supportConfig.faq.filter(item => item.category === selectedCategory)
        : supportConfig.faq;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitResult(null);

        const lastSubmission = localStorage.getItem('lastSubmission');
        if (lastSubmission && Date.now() - parseInt(lastSubmission) < 30000) {
            const error = 'Please wait 30 seconds between submissions';
            setSubmitResult({
                success: false,
                message: error
            });
            analyticsEvents.form.error('support', error);
            return;
        }

        if (!formData.email.includes('@')) {
            const error = 'Please enter a valid email address';
            setSubmitResult({
                success: false,
                message: error
            });
            analyticsEvents.form.error('support', error);
            return;
        }

        if (!GOOGLE_SCRIPT_URL) {
            const error = 'Form submission is currently unavailable';
            setSubmitResult({
                success: false,
                message: error
            });
            analyticsEvents.form.error('support', error);
            return;
        }

        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                redirect: "follow",
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    ...formData,
                    secret: FORM_SECRET,
                    project: projectId
                })
            });

            const result = await response.json();
            if (result.status === 'success') {
                setSubmitResult({ success: true, message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                localStorage.setItem('lastSubmission', Date.now().toString());
                analyticsEvents.form.submitted(`support ${projectId}`);

            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Error sending message. Please try again later.';
            setSubmitResult({
                success: false,
                message: errorMessage
            });
            analyticsEvents.form.error('support', errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Track page view on component mount
    useEffect(() => {
        analyticsEvents.navigation.pageView(`/projects/${projectId}/support`);
    }, [projectId]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href={`/projects/${projectId}`} className="flex items-center gap-3 group">
                        <motion.div whileHover={{ x: -3 }} className="text-gray-400 group-hover:text-white">
                            <FiArrowLeft size={20} />
                        </motion.div>
                        <Logo size={32} />
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    {/* Hero Section */}
                    <section className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            {supportConfig.appName} Support
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            We&apos;re here to help you with any questions or issues you might have.
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${statusColors[supportConfig.status.status]}`} />
                            <span className="text-sm">{supportConfig.status.message}</span>
                        </div>
                    </section>

                    {/* Quick Links */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href={supportConfig.links.appStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <span>App Store</span>
                            <FiExternalLink />
                        </a>
                        <a
                            href={supportConfig.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <span>Play Store</span>
                            <FiExternalLink />
                        </a>
                        <Link
                            href={supportConfig.links.privacyPolicy}
                            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <span>Privacy Policy</span>
                            <FiExternalLink />
                        </Link>
                        <Link
                            href={supportConfig.links.termsOfService}
                            className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                        >
                            <span>Terms of Service</span>
                            <FiExternalLink />
                        </Link>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800/50 p-6 rounded-lg">
                                <h3 className="font-semibold mb-4">Legal Address</h3>
                                <address className="not-italic space-y-2 text-gray-300">
                                    <p>{supportConfig.legalAddress.company}</p>
                                    <p>{supportConfig.legalAddress.street}</p>
                                    <p>
                                        {supportConfig.legalAddress.city}, {supportConfig.legalAddress.postalCode}
                                    </p>
                                    <p>{supportConfig.legalAddress.country}</p>
                                </address>
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-lg">
                                <h3 className="font-semibold mb-4">Support Hours</h3>
                                <div className="space-y-2 text-gray-300">
                                    <p>{supportConfig.supportHours.days}</p>
                                    <p>{supportConfig.supportHours.hours}</p>
                                    <p>Timezone: {supportConfig.supportHours.timezone}</p>
                                    <p>Response Time: {supportConfig.responseTime}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Methods */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Contact Methods</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {supportConfig.contacts.map((contact, index) => {
                                const Icon = contact.icon ? iconMap[contact.icon as keyof typeof iconMap] : FiExternalLink;
                                return (
                                    <a
                                        key={index}
                                        href={contact.value}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                                    >
                                        <Icon size={20} />
                                        <span>{contact.label}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                        {categories.length > 1 && (
                            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                                <button
                                    onClick={() => setSelectedCategory(null)}
                                    className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === null
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                        }`}
                                >
                                    All
                                </button>
                                {categories.filter(Boolean).map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full whitespace-nowrap ${selectedCategory === category
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div className="space-y-4">
                            {filteredFAQ.map((item, index) => (
                                <details
                                    key={index}
                                    className="group bg-gray-800/50 rounded-lg"
                                >
                                    <summary className="flex justify-between items-center cursor-pointer p-4">
                                        <span className="font-medium">{item.question}</span>
                                        <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">
                                            ▼
                                        </span>
                                    </summary>
                                    <div className="px-4 pb-4 text-gray-300">
                                        {item.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Contact Form */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-4 gform">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={5}
                                    className="w-full px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full px-6 py-3 rounded-lg transition-colors relative ${isSubmitting
                                    ? 'bg-blue-500/50 cursor-not-allowed'
                                    : 'bg-blue-500 hover:bg-blue-600'
                                    }`}
                            >
                                <span className={`inline-flex items-center gap-2 ${isSubmitting ? 'invisible' : ''}`}>
                                    Send Message
                                </span>
                                {isSubmitting && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                    </div>
                                )}
                            </button>
                        </form>
                        {submitResult && (
                            <div className={`p-4 rounded-lg ${submitResult.success
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                                }`}>
                                {submitResult.message}
                            </div>
                        )}
                    </section>

                    {/* SBOM Section */}
                    {supportConfig.sbom && (
                        <section>
                            <h2 className="text-2xl font-bold mb-6">Software Bill of Materials (SBOM)</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="text-left py-3 px-4">Package</th>
                                            <th className="text-left py-3 px-4">Version</th>
                                            <th className="text-left py-3 px-4">License</th>
                                            <th className="text-left py-3 px-4">Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {supportConfig.sbom.map((item, index) => (
                                            <tr key={index} className="border-b border-gray-800">
                                                <td className="py-3 px-4">{item.name}</td>
                                                <td className="py-3 px-4">{item.version}</td>
                                                <td className="py-3 px-4">{item.license}</td>
                                                <td className="py-3 px-4">
                                                    {item.url && (
                                                        <a
                                                            href={item.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-400 hover:text-blue-300"
                                                        >
                                                            View
                                                        </a>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    )}
                </motion.div>
            </main>
        </div>
    );
} 