import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download, Eye, FileText } from 'lucide-react';
import resumePdf from '../assets/Resume/Ahmed_Ragab_Nafady_Resume.pdf';

const previewLines = [
  'w-3/4',
  'w-full',
  'w-5/6',
  'w-2/3',
  'w-full',
  'w-4/5',
  'w-1/2'
];

const Resume = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="space-y-12">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.55 }}
      >
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('resume')}</h4>
        <h2 className="text-4xl font-bold">{t('resume_heading')}</h2>
      </motion.div>

      <motion.div
        className="glass rounded-premium overflow-hidden border border-white/5 hover:border-primary/40 transition-colors duration-500"
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        whileHover={{ y: -6 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-0">
          <div className="p-8 lg:p-10 flex flex-col justify-between gap-8 bg-primary/5 border-b lg:border-b-0 ltr:lg:border-r rtl:lg:border-l border-white/5">
            <div className="space-y-5">
              <motion.div
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary"
                initial={{ rotate: -8, scale: 0.85 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, type: 'spring', stiffness: 180 }}
              >
                <FileText size={28} />
              </motion.div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{t('resume_card_title')}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {t('resume_card_description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-4 glass rounded-xl font-bold hover:border-primary/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                <Eye size={18} className="shrink-0" />
                <span>{t('view_cv')}</span>
              </a>
              <a
                href={resumePdf}
                download="Ahmed_Ragab_Nafady_Resume.pdf"
                className="px-5 py-4 bg-primary rounded-xl font-bold hover:bg-secondary transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
              >
                <Download size={18} className="shrink-0" />
                <span>{t('download_cv')}</span>
              </a>
            </div>
          </div>

          <div className="min-h-[360px] lg:min-h-[400px] bg-[#0B0B0F] p-6 lg:p-8 flex items-center justify-center overflow-hidden">
            <motion.a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              aria-label={t('view_cv')}
              className="relative w-full max-w-[340px] lg:max-w-[360px] aspect-[0.72] rounded-2xl bg-white text-zinc-900 shadow-2xl overflow-hidden group"
              initial={{ opacity: 0, rotate: 3, y: 28 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.15, duration: 0.75, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, rotate: -1 }}
            >
              <div className="absolute inset-x-0 top-0 h-3 bg-primary" />
              <div className="p-7 space-y-6">
                <div className="space-y-2.5">
                  <div className="h-4 w-32 rounded-full bg-primary/20" />
                  <div className="h-8 w-56 rounded-lg bg-zinc-900" />
                  <div className="h-3 w-44 rounded-full bg-zinc-300" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[0, 1, 2].map((item) => (
                    <motion.div
                      key={item}
                      className="h-16 rounded-xl bg-primary/10"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 + item * 0.08 }}
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  {previewLines.map((width, index) => (
                    <motion.div
                      key={`${width}-${index}`}
                      className={`h-3 rounded-full bg-zinc-200 ${width}`}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + index * 0.05 }}
                    />
                  ))}
                </div>

                <div className="absolute bottom-6 ltr:right-6 rtl:left-6 rounded-xl bg-primary text-white px-4 py-2 text-xs font-black uppercase tracking-widest shadow-lg">
                  PDF
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
