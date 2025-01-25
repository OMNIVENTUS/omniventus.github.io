'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { siteConfig } from '@/config/site-config';
import Image from 'next/image';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(siteConfig.projects);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      setFilteredProjects(siteConfig.projects);
      return;
    }

    const matchedSkills = siteConfig.skills
      .filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(skill => skill.name);

    setSuggestions(matchedSkills);

    const matched = siteConfig.projects.filter(project =>
      project.skills.some(skill =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );

    setFilteredProjects(matched);
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Logo and Title */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Logo size={80} className="animate-float" />
          </div>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {siteConfig.name}
          </h1>
          <p className="text-gray-400 mt-4 text-xl">{siteConfig.slogan}</p>
        </motion.div>

        {/* Search Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-16 relative"
        >
          <div className={`
            relative rounded-full border-2 
            ${isSearchFocused
              ? 'border-blue-500 shadow-lg shadow-blue-500/20'
              : 'border-gray-700'
            }
            transition-all duration-300
          `}>
            <FiSearch className="absolute left-4 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              placeholder="Search technologies, projects..."
              className="w-full py-3 px-12 bg-gray-800/50 rounded-full focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-300"
              >
                <FiX size={20} />
              </button>
            )}
          </div>

          {/* Suggestions Dropdown */}
          {suggestions.length > 0 && isSearchFocused && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute w-full mt-2 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden z-10"
            >
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(suggestion)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                  <Image
                    src={project.mainImage.url}
                    alt={project.mainImage.alt}
                    fill
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
