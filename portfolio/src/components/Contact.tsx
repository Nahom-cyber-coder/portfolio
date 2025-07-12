import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Contact = () => {
  const { translate } = useLanguage();

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:nahombeletew@gmail.com',
      color: 'from-red-500 to-red-600',
      description: translate('Email')
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/Nahom-cyber-coder',
      color: 'from-gray-500 to-gray-600',
      description: translate('GitHub')
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nahom-beletew-aba231322/',
      color: 'from-blue-500 to-blue-600',
      description: translate('LinkedIn')
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/zabuzamn/',
      color: 'from-pink-500 to-pink-600',
      description: 'Instagram'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            {translate('Contact')}
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
          <p className="text-xl text-amber-200 max-w-3xl mx-auto font-serif">
            {translate('Get In Touch')} - The Brotherhood stands ready to welcome new allies in the digital realm.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-amber-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-amber-200 mb-2 font-serif">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-amber-200 mb-2 font-serif">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="your.email@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-amber-200 mb-2 font-serif">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-amber-500/20 rounded-lg text-white focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-serif flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">
                Connect with the Brotherhood
              </h3>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-6 bg-slate-800/50 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
                >
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${link.color} group-hover:scale-110 transition-transform`}>
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white font-serif">{link.name}</h4>
                    <p className="text-amber-200">{link.description}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;