import { useTranslation } from 'react-i18next';
import { Briefcase } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { experience } from '../../data/profile';
import { useLocalized } from '../../context/AppContext';

const Experience = () => {
  const { t } = useTranslation();
  const pick = useLocalized();

  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 md:py-28">
      <div className="container-x space-y-12">
        <SectionHeading
          index="04"
          eyebrow={t('experience_eyebrow')}
          title={t('experience_title')}
          id="experience-heading"
        />

        <ol className="relative space-y-6 before:absolute before:bottom-4 before:top-4 before:start-5 before:w-px before:bg-line md:before:start-6">
          {experience.map((item, idx) => (
            <li
              key={item.company.en}
              data-reveal
              style={{ '--reveal-delay': `${idx * 70}ms` }}
              className="relative ps-14 md:ps-16"
            >
              <span
                aria-hidden="true"
                className={`absolute start-2.5 top-7 grid h-5 w-5 place-items-center rounded-full border md:start-3.5 ${
                  item.current
                    ? 'border-accent bg-accent text-on-accent'
                    : 'border-line-strong bg-surface text-muted'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
              </span>

              <article className="card p-6 sm:p-8">
                <div className="flex flex-col justify-between gap-3 border-b border-line pb-5 sm:flex-row sm:items-center">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">
                        {pick(item.company)}
                      </h3>
                      {item.current && (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] font-semibold text-accent-text">
                          {t('current')}
                        </span>
                      )}
                    </div>
                    <p className="flex items-center gap-2 text-sm font-medium text-muted">
                      <Briefcase size={14} className="text-accent-2" aria-hidden="true" />
                      <span>{pick(item.role)}</span>
                    </p>
                  </div>

                  <span className="self-start rounded-full border border-line bg-bg px-3.5 py-1.5 font-mono text-xs text-muted sm:self-center">
                    {pick(item.period)}
                  </span>
                </div>

                <ul className="mt-5 grid grid-cols-1 gap-2.5 text-sm leading-relaxed text-muted md:grid-cols-2">
                  {pick(item.points).map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-text" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
