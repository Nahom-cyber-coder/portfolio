import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Cpu, Shield, Users, Lightbulb } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Timeline = () => {
  const { translate } = useLanguage();

  const timelineEvents = [
    {
      year: '2019',
      title: 'The Spark of Curiosity',
      description: 'Discovered the fascinating world of programming and digital creation.',
      icon: Lightbulb,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2020',
      title: 'First Lines of Code',
      description: 'Began my journey with Microsoft Offices ,HTML and css Then I learned Javascript',
      icon: Code,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2021',
      title: 'Hardware Awakening',
      description: 'After Learning python the same year I Ventured into the world of Arduino and IoT, bridging the gap between digital and physical.',
      icon: Cpu,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2022',
      title: 'Networking',
      description: 'I learned Networking and some other basic skills to start learning cybersecurity.',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2023',
      title: 'Ethical Hacking',
      description: 'Started studying ethical hacking practices.',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      year: '2024',
      title: 'Brotherhood Building',
      description: 'Strengthened bonds with fellow developers and security enthusiasts.',
      icon: Users,
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            {translate('Timeline')}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto font-serif">
            The chronicle of my ascension from curious novice to aspiring guardian of digital realms.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-amber-600 rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center border-4 border-slate-900 shadow-lg`}
                >
                  <event.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-3">
                    <span className={`text-2xl font-bold text-amber-400 font-serif ${
                      index % 2 === 0 ? 'order-2 ml-3' : 'mr-3'
                    }`}>
                      {event.year}
                    </span>
                    <div className={`w-full h-px bg-amber-500/30 ${
                      index % 2 === 0 ? 'order-1' : ''
                    }`}></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif">
                    {event.title}
                  </h3>
                  <p className="text-amber-200 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;