import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  isCreedMode: boolean;
  soundEnabled: boolean;
  toggleTheme: () => void;
  toggleCreedMode: () => void;
  toggleSound: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isCreedMode, setIsCreedMode] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('creed-mode', isCreedMode);
  }, [isDark, isCreedMode]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleCreedMode = () => setIsCreedMode(!isCreedMode);
  const toggleSound = () => setSoundEnabled(!soundEnabled);

  return (
    <ThemeContext.Provider value={{
      isDark,
      isCreedMode,
      soundEnabled,
      toggleTheme,
      toggleCreedMode,
      toggleSound
    }}>
      {children}
    </ThemeContext.Provider>
  );
};