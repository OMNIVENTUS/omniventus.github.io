'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Logo } from '@/components/Logo';
import { siteConfig } from '@/config/site-config';

export default function PrivacyPolicy() {
    const effectiveDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href={`/projects/swarmcrush`} className="flex items-center gap-3 group">
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
                    className="prose prose-invert prose-lg max-w-none"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Privacy Policy for SwarmCrush</h1>
                    <p className="text-gray-400 mb-8">Effective Date: {effectiveDate}</p>

                    <div className="text-gray-300 space-y-6">
                        <p>
                            OMNIVENTUS SAS (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy of users (&ldquo;you,&rdquo; &ldquo;your&rdquo;)
                            of the mobile application &ldquo;SwarmCrush&rdquo; (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use,
                            and protect your personal information when you use our App. By using SwarmCrush, you agree to the terms
                            outlined in this Privacy Policy.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>

                            <div className="pl-4 space-y-4">
                                <h3 className="text-xl font-semibold text-white">1.1 Account Information</h3>
                                <p>We use Firebase Authentication to enable users to log in to the App via:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Email and password</li>
                                    <li>Facebook login</li>
                                    <li>Google login</li>
                                </ul>
                                <p>When you register or log in, Firebase may collect the following information:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your email address</li>
                                    <li>Your display name (if applicable)</li>
                                    <li>Your profile picture (if applicable)</li>
                                </ul>
                            </div>

                            <div className="pl-4 space-y-4">
                                <h3 className="text-xl font-semibold text-white">1.2 Automatically Collected Information</h3>
                                <p>
                                    In future updates, we may integrate analytics tools to collect non-personally identifiable
                                    information such as:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Device type and model</li>
                                    <li>Operating system</li>
                                    <li>App usage data (e.g., features accessed, time spent in the app)</li>
                                </ul>
                            </div>

                            <div className="pl-4">
                                <h3 className="text-xl font-semibold text-white">1.3 Advertising</h3>
                                <p>
                                    Currently, the App does not contain any advertising. However, this may change in future updates.
                                    If advertising is implemented, we will update this Privacy Policy accordingly.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">2. How We Use Your Information</h2>
                            <p>We use your information for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>To provide and maintain the functionality of the App</li>
                                <li>To enable secure login and authentication</li>
                                <li>To improve the App based on usage patterns (if analytics is integrated in the future)</li>
                                <li>To communicate with you regarding App updates or issues</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">3. Sharing Your Information</h2>
                            <p>
                                We do not sell, rent, or share your personal information with third parties, except as necessary
                                for the functioning of the App or as required by law. Specifically:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Firebase Authentication processes your login data securely as part of its authentication service.</li>
                                <li>If required by law, we may disclose your information to comply with legal obligations.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">4. Data Storage and Security</h2>
                            <p>
                                We take appropriate technical and organizational measures to protect your personal data. User
                                information collected through Firebase is securely stored on Google&rsquo;s servers, and we rely on
                                Firebase&rsquo;s robust security measures to protect your data.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">5. Your Rights</h2>
                            <p>As a resident of the European Union, you have the following rights under the General Data Protection Regulation (GDPR):</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to access your personal data</li>
                                <li>The right to rectify inaccurate or incomplete data</li>
                                <li>The right to request the deletion of your personal data</li>
                                <li>The right to restrict or object to processing of your data</li>
                                <li>The right to data portability</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact us at{' '}
                                <a href={`mailto:${siteConfig.author.social.email}`} className="text-blue-400 hover:text-blue-300">
                                    {siteConfig.author.social.email}
                                </a>
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">6. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. If we make significant changes, we will notify
                                you through the App or other appropriate means. The &ldquo;Effective Date&rdquo; at the top of this Privacy Policy
                                will indicate when it was last updated.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
                            <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us at:</p>
                            <div className="pl-4">
                                <p>OMNIVENTUS SAS</p>
                                <p>181 Boulevard Macdonald</p>
                                <p>Paris, France</p>
                                <p>Email:{' '}
                                    <a href={`mailto:${siteConfig.author.social.email}`} className="text-blue-400 hover:text-blue-300">
                                        {siteConfig.author.social.email}
                                    </a>
                                </p>
                            </div>
                        </section>

                        <hr className="border-gray-700 my-8" />

                        <p className="text-sm text-gray-400">
                            This Privacy Policy has been drafted in accordance with applicable laws, including the GDPR.
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
} 