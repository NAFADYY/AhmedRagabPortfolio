import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/personalData';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 space-y-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-2xl font-black tracking-tighter">
          AN<span className="text-primary">.</span>
        </div>

        <div className="flex gap-6">
          {[
            { icon: GithubIcon, url: personalData.github },
            { icon: LinkedinIcon, url: personalData.linkedin }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-500 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-zinc-600 text-sm font-medium">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
