import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, X, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../hooks/useLanguage';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const { isDark, isCreedMode, soundEnabled, toggleTheme, toggleCreedMode, toggleSound } = useTheme();
  const { translate } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="bg-slate-800 rounded-xl p-8 max-w-md w-full border border-amber-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white font-serif flex items-center">
                <SettingsIcon className="w-6 h-6 mr-2 text-amber-400" />
                {translate('Settings')}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Theme Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {isDark ? (
                    <Moon className="w-5 h-5 text-amber-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-400" />
                  )}
                  <span className="text-white font-serif">
                    {isDark ? translate('Dark Mode') : translate('Light Mode')}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    isDark ? 'bg-amber-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      isDark ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </motion.button>
              </div>

              {/* Creed Language Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">⚔️</span>
                  <span className="text-white font-serif">
                    {translate('Creed Language')}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleCreedMode}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    isCreedMode ? 'bg-amber-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      isCreedMode ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </motion.button>
              </div>

              {/* Sound Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {soundEnabled ? (
                    <Volume2 className="w-5 h-5 text-amber-400" />
                  ) : (
                    <VolumeX className="w-5 h-5 text-amber-400" />
                  )}
                  <span className="text-white font-serif">
                    {translate('Background Sound')}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleSound}
                  className={`w-12 h-6 rounded-full p-1 transition-colors ${
                    soundEnabled ? 'bg-amber-500' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      soundEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </motion.button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-amber-500/20">
              <p className="text-amber-200 text-sm text-center font-serif">
                "Nothing is true, everything is permitted."
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Settings;