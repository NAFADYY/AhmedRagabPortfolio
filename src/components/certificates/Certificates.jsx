import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, Eye, X } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import weInnovateCertificate from '../../assets/Certificates/WeInnovate.webp';
import routeAcademyCertificate from '../../assets/Certificates/RouteAcademy.webp';
import itidaCertificate from '../../assets/Certificates/ITIDA.webp';

const CERTIFICATES = [
  {
    id: 'we-innovate',
    titleKey: 'certificate_we_innovate_title',
    issuerKey: 'certificate_we_innovate_issuer',
    descriptionKey: 'certificate_we_innovate_description',
    image: weInnovateCertificate,
  },
  {
    id: 'route',
    titleKey: 'certificate_route_title',
    issuerKey: 'certificate_route_issuer',
    descriptionKey: 'certificate_route_description',
    image: routeAcademyCertificate,
  },
  {
    id: 'itida',
    titleKey: 'certificate_itida_title',
    issuerKey: 'certificate_itida_issuer',
    descriptionKey: 'certificate_itida_description',
    image: itidaCertificate,
  },
];

const Certificates = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <section id="certificates" aria-labelledby="certificates-heading" className="py-16 md:py-24">
      <div className="container-x space-y-12">
        <SectionHeading
          index="05"
          eyebrow={t('certificates_eyebrow')}
          title={t('certificates_title')}
          id="certificates-heading"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CERTIFICATES.map((cert, idx) => (
            <article
              key={cert.id}
              data-reveal
              style={{ '--reveal-delay': `${idx * 70}ms` }}
              className="card group overflow-hidden transition-colors hover:border-line-strong"
            >
              <button
                type="button"
                onClick={() => setActive(cert)}
                aria-label={t('certificate_view_label', { title: t(cert.titleKey) })}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-surface-2 text-start"
              >
                <img
                  src={cert.image}
                  alt={t(cert.titleKey)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-bg/0 transition-colors duration-300 group-hover:bg-bg/55">
                  <span className="grid h-11 w-11 scale-90 place-items-center rounded-full bg-fg text-bg opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Eye size={18} aria-hidden="true" />
                  </span>
                </span>
              </button>

              <div className="space-y-2.5 p-6">
                <p className="inline-flex items-center gap-2 font-mono text-xs text-accent-text">
                  <Award size={14} aria-hidden="true" />
                  <span>{t(cert.issuerKey)}</span>
                </p>
                <h3 className="font-display text-lg font-semibold text-fg">{t(cert.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted">{t(cert.descriptionKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t(active.titleKey)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label={t('certificate_close_label')}
                className="icon-btn absolute -top-14 end-0 bg-bg/90 text-fg"
              >
                <X size={20} aria-hidden="true" />
              </button>
              <img
                src={active.image}
                alt={t(active.titleKey)}
                className="max-h-[82vh] w-full rounded-2xl border border-line object-contain bg-bg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
