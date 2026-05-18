import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import * as Icons from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('services')}</h4>
        <h2 className="text-4xl font-bold">{t('what_i_do')}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {personalData.services.map((service, index) => {
          const IconComponent = Icons[service.icon];
          const title = t(service.titleKey, service.title);
          return (
            <motion.div
              key={index}
              className="glass p-8 rounded-premium group hover:bg-primary/5 hover:border-primary/40 transition-all border border-white/5"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {IconComponent && <IconComponent size={28} />}
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {t(service.descriptionKey)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
