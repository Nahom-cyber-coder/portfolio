import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code, Cog, Lock, Globe, Database, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Skills = () => {
  const { translate } = useLanguage();

  const skillCategories = [
    {
      title: translate('Cybersecurity'),
      icon: Shield,
      skills: [
        { name: 'Network Security', level: 75, icon: '🛡️' },
        { name: 'Ethical Hacking', level: 70, icon: '🔓' },
        { name: 'Cryptography', level: 65, icon: '🔐' },
        { name: 'Incident Response', level: 60, icon: '🚨' }
      ]
    },
    {
      title: translate('Arduino'),
      icon: Cpu,
      skills: [
        { name: 'Microcontroller Programming', level: 85, icon: '🤖' },
        { name: 'IoT Development', level: 80, icon: '📡' },
        { name: 'Sensor Integration', level: 75, icon: '📊' },
        { name: 'Circuit Design', level: 70, icon: '⚡' }
      ]
    },
    {
      title: translate('Web Development'),
      icon: Code,
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Python', level: 75, icon: '🐍' }
      ]
    },
    {
      title: translate('Mechanical Engineering'),
      icon: Cog,
      skills: [
        { name: 'CAD Design', level: 80, icon: '📐' },
        { name: '3D Printing', level: 75, icon: '🖨️' },
        { name: 'Prototyping', level: 85, icon: '🔧' },
        { name: 'Analysis', level: 70, icon: '📈' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            {translate('Skills')}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto font-serif">
            The arsenal of a modern digital warrior, honed through countless battles in the realms of code and circuitry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-amber-500/20 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-amber-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full relative"
                      >
                        <div className="absolute right-0 top-0 h-2 w-2 bg-amber-300 rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;