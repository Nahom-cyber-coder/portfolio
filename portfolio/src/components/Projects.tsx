import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Projects = () => {
  const { translate } = useLanguage();

  const projects = [
    {
      id: '1',
      title: 'GenjutsuEdit',
      description: 'A comprehensive photo editing website where people can do manythings into their photos.',
      technologies: ['React', 'Typescript'],
      image: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/97167b9b757dcf2bba0d13f87a9517b68938b836_2025-07-11-020504-genjutsuedit-advanced-photo-editing-application-screenclip.png',
      githubUrl: 'https://github.com/Nahom-cyber-coder/GenjutsuEdit',
      demoUrl: 'https://genjutsuedit.netlify.app/'
    },
    {
      id: '2',
      title: 'VoiceChanger',
      description: 'Is a website that allows users to use vast amount of voice effects on their audios',
      technologies: ['Typescript', 'React'],
      image: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/996a27292ac3ec70f49f5576af9c866abbb0466a_2025-07-11-020403-voicechanger-pro-transform-your-voice-screenclip.png',
      githubUrl: 'https://github.com/Nahom-cyber-coder/Voice-changer',
      demoUrl: 'https://voicechangermn.netlify.app/'
    },
    {
      id: '3',
      title: 'Checkers Game',
      description: 'I built this game using JS, css and html. And It is a website where users can play checkers with ai or multiplayer on one website .',
      technologies: ['Java script', 'HTML', 'CSS'],
      image: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/e0d648a8266db95458da623bd39241363082974d_2025-07-11-020100-neon-checkers-game-screenclip.png',
      githubUrl: 'https://github.com/Nahom-cyber-coder/checkers-game',
      demoUrl: 'https://nahom-cyber-coder.github.io/checkers-game/'
    },
    {
      id: '4',
      title: 'Particle Simulator application',
      description: 'Advanced Particle simmulation website.',
      technologies: ['Java script', 'HTML', 'CSS'],
      image: 'https://hc-cdn.hel1.your-objectstorage.com/s/v3/0b836c553024a135b824b405ef1677134d51b097_2025-07-11-015940-particle-simulator-screenclip.png',
      githubUrl: 'https://github.com/Nahom-cyber-coder/Simulator-application',
      demoUrl: 'https://nahom-cyber-coder.github.io/Simulator-application/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            {translate('Projects')}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto font-serif">
            Behold the artifacts of my digital craftsmanship, forged in the fires of innovation and tempered by the wisdom of experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-amber-200 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>{translate('GitHub')}</span>
                  </motion.a>
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{translate('Live Demo')}</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;