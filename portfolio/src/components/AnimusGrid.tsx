import React from 'react';
import { motion } from 'framer-motion';

const AnimusGrid = () => {
  const gridSize = 20;
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-20 gap-1 h-full w-full">
          {cells.map((i) => (
            <motion.div
              key={i}
              className="bg-amber-400/10 border border-amber-400/20"
              initial={{ opacity: 0.1 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Ancient Symbols */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-400/20 text-6xl font-serif"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['⚔️', '🗡️', '🏺', '📜', '🔱', '⚱️', '🗝️', '🌟'][i]}
          </motion.div>
        ))}
      </div>

      {/* Glowing Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimusGrid;