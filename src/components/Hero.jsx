import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import { BadgeCheck } from 'lucide-react';
import paxiLogo from '../assets/icons/companies/Paxilogo.svg';
import roboeyeLogo from '../assets/icons/companies/roboeyeTec.jpg';
import ulmcareLogo from '../assets/icons/companies/Ulmcarelogo.svg';
import ulmconnectLogo from '../assets/icons/companies/UlmConnectLogo.svg';
import surgiLogo from '../assets/icons/companies/SURGI EXPO LOGO.png';
import resumePdf from '../assets/Resume/Ahmed_Ragab_Nafady_Resume.pdf';

const Hero = () => {
  const { t } = useTranslation();

  const companies = [
    { name: t('company_roboeye'), logo: roboeyeLogo, showName: false },
    { name: t('company_ulmconnect'), logo: ulmconnectLogo, showName: false },
    { name: t('company_paxi'), logo: paxiLogo, showName: false },
    { name: t('company_ulmcare'), logo: ulmcareLogo, showName: false },
    { name: 'Surgi Expo', logo: surgiLogo, showName: false }
  ];

  return (
    <section className="space-y-12">
      <div className="space-y-6">
        <motion.h1 
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('hero_title').split(' ').map((word, i) => (
            <span key={i} className={i >= 2 && i <= 3 ? "text-primary" : ""}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a href={resumePdf} download="Ahmed_Ragab_Nafady_Resume.pdf" className="px-8 py-4 bg-primary rounded-xl font-bold hover:bg-secondary transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] block text-center">
            {t('download_cv')}
          </a>
          <a href="#contact" className="px-8 py-4 glass rounded-xl font-bold hover:border-primary/50 transition-all block text-center">
            {t('contact_me')}
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personalData.stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="glass p-8 rounded-premium text-center space-y-2 group hover:border-primary/40 transition-all"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 * index }}
          >
            <h3 className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">
              {stat.value}
            </h3>
            <p className="text-sm uppercase tracking-widest text-zinc-500 font-bold">{t(stat.labelKey)}</p>
          </motion.div>
        ))}
      </div>

      {/* Logos Area */}
      <div className="pt-8 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center justify-center gap-2 mb-8">
          <BadgeCheck className="text-blue-500" size={20} />
          <p className="text-xs font-bold uppercase tracking-[0.2em]">{t('trusted_by')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {companies.map((company, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <img src={company.logo} alt={company.name} className="h-10 object-contain rounded-md" />
              {company.showName && <span className="text-xl font-black italic">{company.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
