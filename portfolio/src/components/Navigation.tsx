import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translate } = useLanguage();

  const navItems = [
    { name: translate('Home'), href: '#home' },
    { name: translate('About'), href: '#about' },
    { name: translate('Projects'), href: '#projects' },
    { name: translate('Skills'), href: '#skills' },
    { name: translate('Timeline'), href: '#timeline' },
    { name: translate('Contact'), href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 dark:bg-slate-900/90 bg-white/90 backdrop-blur-xl border-b border-amber-500/20 dark:border-amber-500/20 border-amber-600/30"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-amber-400 dark:text-amber-400 text-amber-600 font-serif"
          >
            ⚔️ NB
          </motion.div>

          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#f59e0b' }}
                className="text-white dark:text-white text-gray-800 hover:text-amber-400 dark:hover:text-amber-400 hover:text-amber-600 transition-colors font-serif relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 dark:bg-amber-400 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          
          <button
            className="md:hidden text-white dark:text-white text-gray-800 hover:text-amber-400 dark:hover:text-amber-400 hover:text-amber-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>


        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block py-2 text-white dark:text-white text-gray-800 hover:text-amber-400 dark:hover:text-amber-400 hover:text-amber-600 transition-colors font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
