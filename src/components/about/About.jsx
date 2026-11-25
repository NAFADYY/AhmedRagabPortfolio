import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Blocks, Plug, MonitorSmartphone, Gauge, Rocket, Download, Eye, MapPin } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { services, profile } from '../../data/profile';
import resumePdf from '../../assets/Resume/Ahmed_Ragab_Nafady_Resume.pdf';

const ICON_MAP = {
  LayoutDashboard,
  Blocks,
  Plug,
  MonitorSmartphone,
  Gauge,
  Rocket,
};

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 md:py-28">
      <div className="container-x space-y-14">
        <SectionHeading
          index="02"
          eyebrow={t('about_eyebrow')}
          title={t('about_title')}
          id="about-heading"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Narrative card */}
          <div className="card flex flex-col justify-between gap-8 p-7 sm:p-10 lg:col-span-5" data-reveal>
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3.5 py-1.5 text-xs font-mono text-muted">
                <MapPin size={13} className="text-accent-2" aria-hidden="true" />
                <span>{t('location_label')}</span>
              </div>
              <p className="text-lg font-medium leading-relaxed text-fg">{t('about_lead')}</p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{t('about_body')}</p>
            </div>

            <div className="flex flex-wrap gap-3 border-t border-line pt-6">
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn btn-ghost min-h-11 px-5 text-sm">
                <Eye size={15} aria-hidden="true" />
                <span>{t('view_cv')}</span>
              </a>
              <a href={resumePdf} download={profile.resumeFileName} className="btn btn-primary min-h-11 px-5 text-sm">
                <Download size={15} aria-hidden="true" />
                <span>{t('download_cv')}</span>
              </a>
            </div>
          </div>

          {/* 6 Engineering Capabilities Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {services.map((service, idx) => {
              const Icon = ICON_MAP[service.icon];
              return (
                <article
                  key={service.key}
                  data-reveal
                  style={{ '--reveal-delay': `${idx * 60}ms` }}
                  className="card group flex flex-col gap-3.5 p-6 transition-colors hover:border-line-strong"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg text-accent-text transition-colors group-hover:border-accent/40 group-hover:bg-accent-soft">
                      {Icon && <Icon size={20} aria-hidden="true" />}
                    </span>
                    <span className="font-mono text-xs text-muted">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {t(`service_${service.key}_title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {t(`service_${service.key}_text`)}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
