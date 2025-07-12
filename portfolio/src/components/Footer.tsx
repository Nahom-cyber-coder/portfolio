import React from 'react';
import { motion } from 'framer-motion';
import { Sword, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 dark:bg-slate-900/80 bg-white/90 border-t border-amber-500/20 dark:border-amber-500/20 border-amber-600/30 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-amber-200 dark:text-amber-200 text-amber-800 font-serif">Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Sword className="w-5 h-5 text-amber-600 dark:text-amber-500" />
            </motion.div>
            <span className="text-amber-200 dark:text-amber-200 text-amber-800 font-serif">by</span>
            <span className="text-amber-400 dark:text-amber-400 text-amber-900 font-bold font-serif">Nahom Beletew</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-amber-300 dark:text-amber-300 text-amber-700">
            <GraduationCap className="w-5 h-5" />
            <span className="font-serif">A student at Haile Manas Academy</span>
          </div>
          
          <div className="mt-4 pt-4 border-t border-amber-500/20 dark:border-amber-500/20 border-amber-600/30">
            <p className="text-amber-200/60 dark:text-amber-200/60 text-amber-700/80 text-sm font-serif">
              "Nothing is true, everything is permitted." - The Assassin's Creed
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;