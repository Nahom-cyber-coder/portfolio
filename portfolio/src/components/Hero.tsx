import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import AnimusGrid from './AnimusGrid';

const Hero = () => {
  const { translate } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-amber-50 via-white to-amber-100">
      <AnimusGrid />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4 font-serif"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Nahom
            </span>
            <br />
            <span className="text-white dark:text-white text-gray-900">Beletew</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-amber-200 dark:text-amber-200 text-amber-800 mb-2 font-serif"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {translate('Aspiring Cybersecurity Expert')}
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-amber-300 dark:text-amber-300 text-amber-700 mb-8 font-serif"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {translate('Defender of the Digital Brotherhood')}
          </motion.p>
          
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-serif text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245, 158, 11, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">{translate('Explore My Codex')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-amber-400 w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;