'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/config/site-config';
import { usePathname } from 'next/navigation';

type ContactOption = {
    icon: React.ReactNode;
    label: string;
    href: string;
    color: string;
};

const contactOptions: ContactOption[] = [
    {
        icon: <FiLinkedin size={24} />,
        label: 'LinkedIn',
        href: siteConfig.author.social.linkedin,
        color: 'bg-[#0077B5]'
    },
    {
        icon: <FaWhatsapp size={24} />,
        label: 'WhatsApp',
        href: siteConfig.author.social.whatsapp,
        color: 'bg-[#25D366]'
    },
    {
        icon: <FiMail size={24} />,
        label: 'Email',
        href: `mailto:${siteConfig.author.social.email}`,
        color: 'bg-blue-500'
    }
];

export function ContactWidget() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(0);
    const messages = siteConfig.contactWidget.messages;

    // Reset widget when pathname changes
    useEffect(() => {
        setIsVisible(false);
        setIsExpanded(false);
        setCurrentMessage(0);

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, siteConfig.contactWidget.displayDelay);

        return () => clearTimeout(timer);
    }, [pathname]);

    // Rotate messages with slower transitions
    useEffect(() => {
        if (!isVisible) return;

        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, siteConfig.contactWidget.messageRotationInterval);

        return () => clearInterval(interval);
    }, [isVisible, messages.length]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-10 right-4 z-50">
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 flex flex-col gap-2 items-end"
                    >
                        {contactOptions.map((option) => (
                            <motion.a
                                key={option.label}
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-white ${option.color} hover:opacity-90 transition-opacity`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {option.icon}
                                <span className="text-sm font-medium">{option.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-end gap-4"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentMessage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white text-gray-800 px-4 py-2 rounded-t-xl rounded-bl-xl shadow-lg"
                    >
                        <p className="text-sm font-medium whitespace-nowrap">
                            {messages[currentMessage]}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Image
                        src={siteConfig.author.avatar}
                        alt={`Contact ${siteConfig.author.name}`}
                        fill
                        className="object-cover"
                    />
                </motion.button>
            </motion.div>
        </div>
    );
} 