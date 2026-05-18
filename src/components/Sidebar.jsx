import React from 'react';
import { Mail, MapPin, ExternalLink, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/personalData';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profileImg from '../assets/AhmedRagab.png';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="glass p-8 rounded-premium flex flex-col items-center gap-6 text-center border border-black/10 dark:border-white/10"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Profile Image */}
      <div className="relative w-48 h-48 rounded-premium overflow-hidden border-2 border-primary/30 glow-purple group">
        <img
          src={profileImg}
          alt={personalData.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{t('name')}</h2>
        <p className="text-primary font-bold">{t('title')}</p>
      </div>

      <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 text-sm font-medium">
        <MapPin size={16} className="text-primary" />
        <span>{t('location')}</span>
      </div>

      {/* Socials */}
      <div className="flex gap-4">
        {[
          { icon: GithubIcon, url: personalData.github },
          { icon: LinkedinIcon, url: personalData.linkedin },
          { icon: Mail, url: `mailto:${personalData.email}` }
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-primary transition-colors hover:border-primary/50 shadow-sm border border-black/5 dark:border-white/5"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon size={20} />
          </motion.a>
        ))}
      </div>

      <motion.a
        href="https://wa.me/201065856802"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 bg-primary rounded-xl font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-secondary transition-all flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Phone size={20} />
        <span>{t('lets_talk')}</span>
      </motion.a>
    </motion.div>
  );
};

export default Sidebar;
