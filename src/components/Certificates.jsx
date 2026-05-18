import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Eye, X } from 'lucide-react';
import weInnovateCertificate from '../assets/Certificates/WeInnovate.png';
import routeAcademyCertificate from '../assets/Certificates/RouteAcademy.jpeg';
import itidaCertificate from '../assets/Certificates/ITIDA.jpeg';

const certificates = [
  {
    titleKey: 'certificate_we_innovate_title',
    issuerKey: 'certificate_we_innovate_issuer',
    descriptionKey: 'certificate_we_innovate_description',
    image: weInnovateCertificate
  },
  {
    titleKey: 'certificate_route_title',
    issuerKey: 'certificate_route_issuer',
    descriptionKey: 'certificate_route_description',
    image: routeAcademyCertificate
  },
  {
    titleKey: 'certificate_itida_title',
    issuerKey: 'certificate_itida_issuer',
    descriptionKey: 'certificate_itida_description',
    image: itidaCertificate
  }
];

const Certificates = () => {
  const { t } = useTranslation();
  const [activeCertificate, setActiveCertificate] = useState(null);

  return (
    <section id="certificates" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('certificates')}</h4>
        <h2 className="text-4xl font-bold">{t('certificates_heading')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.titleKey}
            className="group glass rounded-premium overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ y: -8 }}
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(certificate)}
              className="relative block w-full aspect-[4/3] overflow-hidden text-left"
              aria-label={t('certificate_view_label', { title: t(certificate.titleKey) })}
            >
              <img
                src={certificate.image}
                alt={t(certificate.titleKey)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                  <Eye size={20} />
                </span>
              </div>
            </button>

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award size={20} />
                </span>
                <p className="text-xs uppercase tracking-widest font-black">{t(certificate.issuerKey)}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{t(certificate.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {t(certificate.descriptionKey)}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute -top-12 ltr:right-0 rtl:left-0 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors"
                aria-label={t('certificate_close_label')}
              >
                <X size={22} />
              </button>
              <img
                src={activeCertificate.image}
                alt={t(activeCertificate.titleKey)}
                className="w-full max-h-[82vh] object-contain rounded-premium border border-white/10 shadow-2xl bg-[#0B0B0F]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
