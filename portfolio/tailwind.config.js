/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)' },
        },
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      colors: {
        'assassin': {
          'dark': '#0f1419',
          'darker': '#0a0e13',
          'gold': '#d4af37',
          'red': '#8B0000',
          'blue': '#1e3a8a',
        },
        'templar': {
          'light': '#f8fafc',
          'lighter': '#ffffff',
          'gold': '#fbbf24',
          'red': '#dc2626',
          'blue': '#3b82f6',
        }
      }
    },
  },
  plugins: [],
};