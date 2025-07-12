import { useTheme } from '../contexts/ThemeContext';

const translations = {
  // Navigation
  'Home': 'Sanctuary',
  'About': 'Origins',
  'Projects': 'Codex Archives',
  'Skills': 'Arsenal',
  'Timeline': 'Chronicles',
  'Contact': 'Call of the Brotherhood',
  
  // Hero Section
  'Aspiring Cybersecurity Expert': 'Guardian of Digital Realms',
  'Defender of the Digital Brotherhood': 'Protector of Sacred Knowledge',
  'Explore My Codex': 'Enter the Animus',
  
  // About Section
  'About Me': 'The Initiate\'s Path',
  'Hobbies': 'Sacred Arts',
  'Future Goal': 'Destined Purpose',
  'Becoming a Cybersecurity Specialist': 'Ascending to Master Guardian',
  
  // Projects Section
  'Live Demo': 'Experience Vision',
  'GitHub': 'Code Scriptorium',
  'Technologies': 'Tools of the Trade',
  
  // Skills Section
  'Cybersecurity': 'Digital Warfare',
  'Arduino': 'Ancient Mechanisms',
  'Web Development': 'Web Mastery',
  'Mechanical Engineering': 'Engineering Arts',
  
  // Timeline
  'Journey': 'Path of Enlightenment',
  'Growth': 'Evolution',
  'Learning': 'Knowledge Acquisition',
  
  // Contact
  'Get In Touch': 'Summon the Brotherhood',
  'Email': 'Encrypted Missive',
  'LinkedIn': 'Professional Guild',
  'Instagram': 'Visual Chronicles',
  
  // Settings
  'Settings': 'Animus Configuration',
  'Dark Mode': 'Assassin\'s Shadow',
  'Light Mode': 'Templar\'s Light',
  'Creed Language': 'Ancient Tongue',
  'Background Sound': 'Animus Resonance',
};

export const useLanguage = () => {
  const { isCreedMode } = useTheme();
  
  const translate = (text: string): string => {
    if (!isCreedMode) return text;
    return translations[text as keyof typeof translations] || text;
  };
  
  return { translate };
};