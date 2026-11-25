import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { faq } from '../../data/profile';

const FAQ = () => {
  const { t } = useTranslation();
  const [openKey, setOpenKey] = useState(faq[0]);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-16 md:py-24">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="06"
              eyebrow={t('faq_eyebrow')}
              title={t('faq_title')}
              id="faq-heading"
            />
          </div>

          <div className="divide-y divide-line border-y border-line lg:col-span-7">
            {faq.map((key) => {
              const isOpen = openKey === key;
              return (
                <div key={key} className="py-1">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${key}`}
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-start transition-colors hover:text-accent-text"
                  >
                    <span className="font-display text-base font-semibold text-fg sm:text-lg">
                      {t(`faq_${key}_q`)}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted">
                      {isOpen ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${key}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pe-10 text-sm leading-relaxed text-muted sm:text-base">
                          {t(`faq_${key}_a`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
