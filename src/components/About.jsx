import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="space-y-8">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('about')}</h4>
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-white">{t('about_heading')}</h2>
      </div>

      <motion.div
        className="glass p-10 rounded-premium relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
        <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed relative z-10">
          {t('about_text')}
        </p>
      </motion.div>
    </section>
  );
};

export default About;
