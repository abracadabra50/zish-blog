'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { motion } from 'framer-motion';
import { ArrowUpRight, Circle } from 'lucide-react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      
      {/* Hero Section - Editorial Style */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Date and Time - Editorial Touch */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-12">
            <span>{new Date().toLocaleDateString('en-GB', { 
              day: 'numeric',
              month: 'long', 
              year: 'numeric' 
            })}</span>
            <Circle className="w-1 h-1 fill-current" />
            <span>Edinburgh, UK</span>
            <Circle className="w-1 h-1 fill-current" />
            <span>{currentTime}</span>
          </div>

          {/* Main Title - Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-[4rem] md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-[-0.02em] text-gray-900 mb-8">
              Zishan
              <br />
              <span className="italic font-light">Ashraf</span>
            </h1>
            
            <div className="max-w-3xl">
              <p className="text-2xl md:text-3xl lg:text-4xl leading-[1.2] text-gray-800 font-light mb-8">
                Revenue Technology Lead at Shopify. Building AI systems that help teams move faster, 
                sell smarter, and operate at 10x.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Serial entrepreneur with multiple exits. Created viral content reaching millions. 
                My work sits at the intersection of AI, crypto, and e-commerce.
              </p>
            </div>
          </motion.div>

          {/* Navigation Links - Editorial Style */}
          <motion.div 
            className="mt-16 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/writing" className="group">
              <div className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors">
                <span className="text-lg">Writing</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
            <Link href="/experiments" className="group">
              <div className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors">
                <span className="text-lg">Experiments</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
            <Link href="/cv" className="group">
              <div className="flex items-center gap-3 text-gray-900 hover:text-gray-600 transition-colors">
                <span className="text-lg">Curriculum Vitae</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Achievements - Editorial Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-20 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-12">Notable Achievements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              <Achievement
                number="01"
                title="$1B+ GMV Managed"
                description="Scaled merchant success across global markets at Shopify, consistently beating revenue retention targets."
              />
              <Achievement
                number="02"
                title="6M+ Video Views"
                description="Created and produced viral content including a rap video that reached millions globally."
              />
              <Achievement
                number="03"
                title="3 Companies Built"
                description="Serial entrepreneur with successful exits including Electric Scootz UK (acquired 2023)."
              />
              <Achievement
                number="04"
                title="AI Revenue Systems"
                description="Architecting internal AI tools and automations delivering 10x productivity improvements."
              />
              <Achievement
                number="05"
                title="735K Social Reach"
                description="Built Humans of Edinburgh campaign, outperforming celebrity posts with community-driven content."
              />
              <Achievement
                number="06"
                title="Crypto Infrastructure"
                description="Developed trading bots and DeFi strategies, experimenting with stablecoins and prediction markets."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Focus - Magazine Layout */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Current Focus</h2>
              <h3 className="font-serif text-4xl lg:text-5xl leading-tight text-gray-900">
                Building the future of commerce
              </h3>
            </div>
            
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  At Shopify, I&apos;m architecting AI systems that transform how revenue teams operate. 
                  We&apos;re not just automating tasks—we&apos;re reimagining entire workflows, 
                  enabling teams to focus on strategic work while AI handles the operational complexity.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  My approach combines deep technical expertise with business acumen gained from managing 
                  over $1B in GMV and building multiple successful companies. This unique perspective 
                  allows me to build solutions that are both technically elegant and commercially impactful.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Beyond Shopify, I&apos;m actively exploring the convergence of AI, blockchain, and 
                  e-commerce. Whether it&apos;s building trading algorithms, creating viral content, 
                  or advising startups, I&apos;m drawn to projects that push boundaries and challenge conventions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Writing - Editorial Style */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500">Latest Writing</h2>
              <Link href="/writing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                View all →
              </Link>
            </div>
            
            <div className="space-y-12">
              <ArticlePreview
                date="02 January 2025"
                title="Hello World: Building a Digital Home"
                excerpt="The story behind creating this blog and what I hope to share in this digital space."
                readTime="2 min read"
                href="/writing/hello-world"
              />
              
              <div className="py-12 text-center">
                <p className="text-gray-500 italic">More articles coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal Editorial */}
      <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-gray-600">© 2025 Zishan Ashraf</p>
              <p className="text-sm text-gray-500 mt-1">Edinburgh, United Kingdom</p>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/zishan-ashraf-95610938/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:hello@zish.xyz"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Achievement({ number, title, description }: { 
  number: string; 
  title: string; 
  description: string; 
}) {
  return (
    <motion.div 
      className="group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-xs text-gray-400 font-mono">{number}</span>
      <h3 className="font-serif text-2xl text-gray-900 mt-2 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function ArticlePreview({ date, title, excerpt, readTime, href }: {
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  href: string;
}) {
  return (
    <Link href={href} className="block group">
      <article className="border-l-2 border-gray-200 pl-6 hover:border-gray-400 transition-colors">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <Circle className="w-1 h-1 fill-current" />
          <span>{readTime}</span>
        </div>
        <h3 className="font-serif text-3xl text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {excerpt}
        </p>
      </article>
    </Link>
  );
}