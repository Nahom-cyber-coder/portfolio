import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Cog, Users } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const About = () => {
  const { translate } = useLanguage();

  const hobbies = [
    { name: 'Coding', icon: Code, description: 'Building digital solutions' },
    { name: 'Arduino Projects', icon: Cpu, description: 'Hardware experimentation' },
    { name: 'Mechanical Engineering', icon: Cog, description: 'Engineering innovation' },
    { name: 'Chilling with Friends', icon: Users, description: 'Brotherhood bonds' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/50 dark:bg-slate-900/50 bg-white/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white text-gray-900 mb-6 font-serif">
            {translate('About Me')}
          </h2>
          <div className="w-24 h-1 bg-amber-400 dark:bg-amber-400 bg-amber-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/80 p-8 rounded-xl border border-amber-500/20 dark:border-amber-500/20 border-amber-600/30 backdrop-blur-sm">
              <p className="text-lg text-amber-100 dark:text-amber-100 text-gray-800 leading-relaxed font-serif">
                Greetings, fellow seekers of knowledge. I am Nahom Beletew, an initiate on the path to becoming a master of cybersecurity. 
                My journey spans the realms of digital warfare, ancient mechanisms, and the sacred arts of engineering.
              </p>
            </div>

            <div className="bg-slate-800/50 dark:bg-slate-800/50 bg-white/80 p-8 rounded-xl border border-amber-500/20 dark:border-amber-500/20 border-amber-600/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-400 dark:text-amber-400 text-amber-700 mb-4 font-serif">
                {translate('Future Goal')}
              </h3>
              <p className="text-lg text-amber-100 dark:text-amber-100 text-gray-800 leading-relaxed font-serif">
                {translate('Becoming a Cybersecurity Specialist')} - To stand as guardian of digital realms, 
                protecting the innocent from the shadows of cyberspace.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-amber-400 dark:text-amber-400 text-amber-700 mb-6 font-serif">
              {translate('Hobbies')}
            </h3>
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-800/30 dark:bg-slate-800/30 bg-white/60 rounded-lg border border-amber-500/10 dark:border-amber-500/10 border-amber-600/20 hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:border-amber-600/50 transition-all duration-300"
              >
                <div className="p-3 bg-amber-500/20 dark:bg-amber-500/20 bg-amber-600/20 rounded-lg">
                  <hobby.icon className="w-6 h-6 text-amber-400 dark:text-amber-400 text-amber-700" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white dark:text-white text-gray-900 font-serif">{hobby.name}</h4>
                  <p className="text-amber-200 dark:text-amber-200 text-amber-700 text-sm">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;