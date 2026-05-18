import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';

const Skills = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="space-y-8">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('skills')}</h4>
        <h2 className="text-4xl font-bold">{t('skills_title')}</h2>
      </div>

      <div className="space-y-12">
        {Object.entries(personalData.skills).map(([category, skills]) => (
          <div key={category} className="space-y-6">
            <h5 className="text-lg font-bold uppercase text-zinc-500 tracking-widest">{category}</h5>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill, i) => (
                <motion.div 
                  key={i}
                  variants={item}
                  className="glass p-4 rounded-2xl flex items-center justify-center text-center font-bold text-zinc-800 dark:text-white border border-black/10 dark:border-white/10 hover:bg-primary/10 hover:border-primary/50 hover:text-primary dark:hover:text-white transition-all cursor-default shadow-sm"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
