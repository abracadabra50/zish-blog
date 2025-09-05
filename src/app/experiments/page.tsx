'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github, Palette, Zap, Cpu, ArrowUpRight, MessageSquare } from 'lucide-react';

export default function ExperimentsPage() {
  const [filter, setFilter] = useState<string>('all');

  const experiments = [
    {
      id: 'chat-assistant',
      title: 'Chat with My Assistant',
      description: 'An AI assistant that knows everything about me. (Note: Requires server-side deployment, coming soon)',
      category: 'ai',
      status: 'coming-soon',
      tags: ['AI', 'Claude', 'Next.js'],
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: 'color-palette-generator',
      title: 'Colour Palette Generator',
      description: 'Generate beautiful colour palettes from a base colour using colour theory principles.',
      category: 'design',
      status: 'coming-soon',
      tags: ['React', 'Color Theory', 'Design'],
      icon: <Palette className="w-5 h-5" />,
    },
    {
      id: 'text-animation-playground',
      title: 'Text Animation Playground',
      description: 'Experiment with different text animations and transitions using CSS and JavaScript.',
      category: 'animation',
      status: 'coming-soon',
      tags: ['CSS', 'Animation', 'Typography'],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: 'algorithm-visualiser',
      title: 'Algorithm Visualiser',
      description: 'Interactive visualisations of common algorithms and data structures.',
      category: 'education',
      status: 'coming-soon',
      tags: ['Algorithms', 'Data Structures', 'Education'],
      icon: <Cpu className="w-5 h-5" />,
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI' },
    { id: 'design', label: 'Design' },
    { id: 'animation', label: 'Animation' },
    { id: 'education', label: 'Education' },
  ];

  const filteredExperiments = filter === 'all' 
    ? experiments 
    : experiments.filter(exp => exp.category === filter);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-6">
              Experiments
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Interactive demos, prototypes, and digital explorations. A playground for testing ideas 
              and pushing the boundaries of what&apos;s possible on the web.
            </p>
          </div>

          {/* Filter */}
          <div className="mb-12">
            <div className="flex items-center gap-6 border-b border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`pb-4 text-sm uppercase tracking-wider transition-all relative ${
                    filter === category.id
                      ? 'text-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {category.label}
                  {filter === category.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-px bg-gray-900"
                      layoutId="activeFilter"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Experiments Grid */}
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredExperiments.map((experiment, index) => (
              <motion.div
                key={experiment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ExperimentCard experiment={experiment} />
              </motion.div>
            ))}
          </motion.div>

          {filteredExperiments.length === 0 && (
            <EmptyState filter={filter} />
          )}

          {/* Coming Soon Notice */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 italic">
              More experiments launching soon
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

interface Experiment {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  tags: string[];
  icon: React.ReactNode;
  link?: string;
}

function ExperimentCard({ experiment }: { experiment: Experiment }) {
  const isComingSoon = experiment.status === 'coming-soon';
  const isLive = experiment.status === 'live';

  const cardContent = (
    <>
      {/* Status */}
      {isComingSoon && (
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            Coming Soon
          </span>
        </div>
      )}
      {isLive && (
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider text-green-600">
            Live
          </span>
        </div>
      )}

      {/* Icon and Title */}
      <div className="mb-4">
        <div className={`inline-flex p-2 mb-3 ${
          isComingSoon 
            ? 'text-gray-400' 
            : 'text-gray-700'
        }`}>
          {experiment.icon}
        </div>
        <h3 className={`font-serif text-2xl ${
          isComingSoon ? 'text-gray-600' : 'text-gray-900'
        }`}>
          {experiment.title}
        </h3>
      </div>

      <p className={`mb-6 leading-relaxed ${
        isComingSoon ? 'text-gray-500' : 'text-gray-600'
      }`}>
        {experiment.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {experiment.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-xs uppercase tracking-wider text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        {isComingSoon ? (
          <span className="text-sm text-gray-400 italic">In Development</span>
        ) : isLive && experiment.link ? (
          <>
            <Link href={experiment.link} className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
              <span className="text-sm">Try It</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <button className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
              <span className="text-sm">View Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="text-gray-400 hover:text-gray-900 transition-colors">
              <Github className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </>
  );

  if (isLive && experiment.link) {
    return (
      <Link href={experiment.link} className="block">
        <div className={`group border border-gray-200 p-6 transition-all duration-300 ${
          isComingSoon 
            ? 'bg-gray-50' 
            : 'bg-white hover:border-gray-400 hover:shadow-md'
        }`}>
          {cardContent}
        </div>
      </Link>
    );
  }

  return (
    <div className={`group border border-gray-200 p-6 transition-all duration-300 ${
      isComingSoon 
        ? 'bg-gray-50' 
        : 'bg-white hover:border-gray-400'
    }`}>
      {cardContent}
    </div>
  );
}

function EmptyState({ filter }: { filter: string }) {
  return (
    <div className="py-20 text-center">
      <p className="font-serif text-3xl text-gray-400 italic">
        No experiments in {filter} yet
      </p>
    </div>
  );
}