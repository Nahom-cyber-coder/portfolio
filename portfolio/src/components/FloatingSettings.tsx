import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon } from 'lucide-react';
import Settings from './Settings';

const FloatingSettings = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsSettingsOpen(true)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg hover:shadow-xl border-2 border-amber-400/20 flex items-center justify-center group"
      >
        <SettingsIcon className="w-6 h-6 text-white group-hover:text-amber-100" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>

      <Settings isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </>
  );
};

export default FloatingSettings;