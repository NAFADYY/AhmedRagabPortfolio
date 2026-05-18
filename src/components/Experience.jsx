import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('experience')}</h4>
        <h2 className="text-4xl font-bold">{t('career_journey')}</h2>
      </div>

      <div className="space-y-8">
        {t('experience_list', { returnObjects: true }).map((exp, index) => (
          <motion.div
            key={index}
            className="glass p-8 rounded-premium border-primary ltr:border-l-4 rtl:border-r-4 rtl:border-l-0 relative group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute top-8 ltr:right-8 rtl:left-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
              <Briefcase size={32} />
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">{exp.date}</span>
                <h3 className="text-2xl font-bold mt-3">{exp.company}</h3>
                <p className="text-zinc-400 font-medium">{exp.role}</p>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-zinc-500 flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
