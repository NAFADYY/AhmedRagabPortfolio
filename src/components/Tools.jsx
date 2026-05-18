import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';

const Tools = () => {
  const { t } = useTranslation();

  return (
    <section id="tools" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('tools')}</h4>
        <h2 className="text-4xl font-bold">{t('tech_toolbox')}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {personalData.skills.tools.map((tool, index) => (
          <motion.div
            key={index}
            className="glass p-6 rounded-2xl flex flex-col items-center gap-4 group hover:text-primary hover:border-primary/50 transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
              <span className="text-xs font-black">{tool.slice(0, 2).toUpperCase()}</span>
            </div>
            <span className="text-sm font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-primary dark:group-hover:text-white transition-colors">{tool}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
