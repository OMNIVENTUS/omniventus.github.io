'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiX, FiCalendar, FiClock } from 'react-icons/fi';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { siteConfig } from '@/config/site-config';
import Image from 'next/image';
import type { Project } from '@/config/types';
import moment from 'moment';

// Helper function to get timeline info
const getTimelineInfo = (project: Project) => {
  const startDate = moment(project.timeline.started);
  const timeAgo = startDate.fromNow();
  const status = project.timeline.status;
  const duration = project.timeline.completed
    ? moment.duration(moment(project.timeline.completed).diff(startDate))
    : moment.duration(moment().diff(startDate));

  const durationText = duration.asMonths() >= 12
    ? `${Math.floor(duration.asYears())}y ${Math.floor(duration.asMonths() % 12)}m`
    : duration.asMonths() >= 1 ? `${Math.floor(duration.asMonths())}m` : `${Math.floor(duration.asDays())}d`;

  return { timeAgo, status, durationText, startDate };
};

// Helper function to get status color
// const getStatusColor = (status: string) => {
//   switch (status) {
//     case 'completed':
//       return 'bg-green-500/10 text-green-400';
//     case 'in-progress':
//       return 'bg-blue-500/10 text-blue-400';
//     case 'planned':
//       return 'bg-yellow-500/10 text-yellow-400';
//     default:
//       return 'bg-gray-500/10 text-gray-400';
//   }
// };

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(() => {
    // Sort projects by start date (most recent first) when initializing state
    return [...siteConfig.projects].sort((a, b) =>
      moment(b.timeline.started).valueOf() - moment(a.timeline.started).valueOf()
    );
  });
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Helper function to get all searchable terms from a project
  const getProjectSearchTerms = (project: Project): string[] => {
    const terms = [
      ...project.skills,
      ...(project?.seoKeywords || []),
      // Flatten techStack arrays
      ...(project.techStack.frontend || []),
      ...(project.techStack.backend || []),
      ...(project.techStack.mobile || []),
      ...(project.techStack.devops || []),
      ...(project.techStack.other || [])
    ];

    // Remove duplicates and convert to lowercase
    return Array.from(new Set(terms.map(term => term.toLowerCase())));
  };

  // Update useEffect to maintain sorting when filtering
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProjects([...siteConfig.projects].sort((a, b) =>
        moment(b.timeline.started).valueOf() - moment(a.timeline.started).valueOf()
      ));
      setSuggestions([]);
      return;
    }

    const searchTerm = searchQuery.toLowerCase();

    // Get all unique searchable terms from projects
    const allProjectTerms = siteConfig.projects.flatMap(getProjectSearchTerms);

    // Get matching skills from skills list
    const matchedSkills = siteConfig.skills
      .filter(skill => skill.name.toLowerCase().includes(searchTerm))
      .map(skill => skill.name);

    // Combine with matching project terms and remove duplicates
    const allSuggestions = Array.from(new Set([
      ...matchedSkills,
      ...allProjectTerms.filter(term => term.includes(searchTerm))
    ]));

    setSuggestions(allSuggestions);

    // Filter and sort projects
    const matched = siteConfig.projects
      .filter(project => {
        const searchTerms = getProjectSearchTerms(project);
        return searchTerms.some(term => term.includes(searchTerm));
      })
      .sort((a, b) => moment(b.timeline.started).valueOf() - moment(a.timeline.started).valueOf());

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
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
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
          {filteredProjects.map((project, index) => {
            const { timeAgo, durationText } = getTimelineInfo(project);
            return (
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
                    {/* Timeline Badge */}
                    {/* <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(status)}`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </span>
                    </div> */}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    {/* Timeline Info */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <FiCalendar size={16} />
                      <span>{timeAgo}</span>
                      <span className="mx-2">•</span>
                      <FiClock size={16} />
                      <span>{durationText}</span>
                    </div>
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
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
