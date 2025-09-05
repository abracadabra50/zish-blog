'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/writing', label: 'Writing' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/cv', label: 'CV' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Editorial Style */}
            <Link href="/" className="group">
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="font-serif text-2xl text-gray-900">
                  Zish
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Horizontal List */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group"
                >
                  <span className={`text-sm transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}>
                    {item.label}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-gray-900"
                      layoutId="activeNav"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button - Minimal */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 -mr-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <motion.span 
                  className="block h-px bg-gray-900 origin-left"
                  animate={{ 
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? -1 : 0,
                    width: isMenuOpen ? '24px' : '24px'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="block h-px bg-gray-900"
                  animate={{ 
                    opacity: isMenuOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span 
                  className="block h-px bg-gray-900 origin-left"
                  animate={{ 
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 1 : 0,
                    width: isMenuOpen ? '24px' : '16px'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Editorial */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAFAF8] md:hidden"
          >
            <div className="h-full flex flex-col justify-center px-12">
              <nav className="space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-4xl font-serif ${
                        pathname === item.href
                          ? 'text-gray-900 italic'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-gray-200"
              >
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/zishan-ashraf-95610938/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-600"
                  >
                    LinkedIn ↗
                  </a>
                  <a 
                    href="mailto:hello@zish.xyz"
                    className="block text-gray-600"
                  >
                    hello@zish.xyz
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}