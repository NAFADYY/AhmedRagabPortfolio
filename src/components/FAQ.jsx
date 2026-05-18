import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('faq')}</h4>
        <h2 className="text-4xl font-bold">{t('faq_heading')}</h2>
      </div>

      <div className="space-y-4 max-w-4xl">
        {personalData.faq.map((item, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden">
            <button
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="text-lg font-bold">{t(item.qKey, item.q)}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                    {t(item.aKey, item.a)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
