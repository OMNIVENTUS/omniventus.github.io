'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/Logo';
import { Project } from '@/config/site-config';
import { useState } from 'react';

const iconMap = {
    github: FiGithub,
    playStore: FaGooglePlay,
    appStore: FaAppStore,
    website: FiExternalLink,
    demo: FiExternalLink,
    other: FiExternalLink,
} as const;

export default function ProjectContent({ project }: { project: Project }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <motion.div whileHover={{ x: -3 }} className="text-gray-400 group-hover:text-white">
                            <FiArrowLeft size={20} />
                        </motion.div>
                        <Logo size={32} />
                    </Link>
                    <div className="flex gap-4">
                        {project.links.map((link) => {
                            const Icon = iconMap[link.type];
                            return (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-400 mb-8">{project.description}</p>

                    {/* Main Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                        <Image
                            src={project.mainImage.url}
                            alt={project.mainImage.alt}
                            fill
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {Object.entries(project.techStack).map(([category, technologies]) => (
                            technologies && technologies.length > 0 && (
                                <div key={category} className="bg-gray-800/50 rounded-lg p-6">
                                    <h3 className="text-lg font-semibold capitalize mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    {/* Features */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feature) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-800/50 rounded-lg p-6"
                                >
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges & Solutions */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">Challenges & Solutions</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Challenges</h3>
                                <ul className="space-y-4">
                                    {project.challenges.map((challenge, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-sm">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-300">{challenge}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Solutions</h3>
                                <ul className="space-y-4">
                                    {project.solutions.map((solution, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center text-sm">
                                                {index + 1}
                                            </span>
                                            <span className="text-gray-300">{solution}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Metrics */}
                    {project.metrics && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-8">Impact & Metrics</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {project.metrics.users && (
                                    <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                                        <div className="text-3xl font-bold text-blue-400">
                                            {project.metrics.users.toLocaleString()}+
                                        </div>
                                        <div className="text-gray-400 mt-2">Active Users</div>
                                    </div>
                                )}
                                {project.metrics.downloads && (
                                    <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                                        <div className="text-3xl font-bold text-purple-400">
                                            {project.metrics.downloads.toLocaleString()}+
                                        </div>
                                        <div className="text-gray-400 mt-2">Downloads</div>
                                    </div>
                                )}
                                {project.metrics.custom?.map((metric, index) => (
                                    <div key={index} className="bg-gray-800/50 rounded-lg p-6 text-center">
                                        <div className="text-3xl font-bold text-green-400">
                                            {metric.value}
                                        </div>
                                        <div className="text-gray-400 mt-2">{metric.label}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Screenshots */}
                    {project.images.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-3xl font-bold mb-8">Screenshots</h2>
                            {project.type === 'mobileApp' ? (
                                <div className="relative">
                                    <div className="flex overflow-x-auto pb-6 gap-4 snap-x snap-mandatory">
                                        {project.images.map((image, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                className="relative flex-shrink-0 w-[280px] h-[600px] rounded-[32px] overflow-hidden snap-center cursor-pointer"
                                                onClick={() => setSelectedImage(image.url)}
                                            >
                                                <Image
                                                    src={image.url}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {image.caption && (
                                                    <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <p className="text-white text-center px-4">{image.caption}</p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                                            onClick={() => setSelectedImage(image.url)}
                                        >
                                            <Image
                                                src={image.url}
                                                alt={image.alt}
                                                fill
                                                className="w-full h-full object-cover"
                                            />
                                            {image.caption && (
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                    <p className="text-white text-center px-4">{image.caption}</p>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}
                </motion.div>
            </main>

            {/* Image Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="relative max-w-full max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                            >
                                <FiX size={24} />
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                width={1200}
                                height={800}
                                className="max-h-[90vh] w-auto object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 