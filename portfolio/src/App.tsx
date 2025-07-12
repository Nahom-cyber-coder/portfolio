import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import FloatingSettings from './components/FloatingSettings';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 from-gray-50 via-white to-gray-100 text-white dark:text-white text-gray-900">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
        <FloatingSettings />
        <ScrollToTop />
        <Footer />
        <BackgroundMusic />
      </div>
    </ThemeProvider>
  );
}

export default App;