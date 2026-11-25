import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Code2,
  Blocks,
  PenTool,
  Server,
  MonitorSmartphone,
  Component,
  Plug,
  ShieldCheck,
  LayoutTemplate,
  MousePointerClick,
  Layers,
  Accessibility,
  SunMoon,
  Globe,
  GitBranch,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { skillGroups, softSkills } from '../../data/skills';
import { BrandIcon } from '../shared/Icons';
import { useLocalized } from '../../context/AppContext';

const LUCIDE_MAP = {
  Code2,
  Blocks,
  PenTool,
  Server,
  MonitorSmartphone,
  Component,
  Plug,
  ShieldCheck,
  LayoutTemplate,
  MousePointerClick,
  Layers,
  Accessibility,
  SunMoon,
  Globe,
  GitBranch,
};

const Skills = () => {
  const { t } = useTranslation();
  const pick = useLocalized();
  const [activeGroup, setActiveGroup] = useState('all');

  const visibleGroups = activeGroup === 'all' ? skillGroups : skillGroups.filter((g) => g.id === activeGroup);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 md:py-28">
      <div className="container-x space-y-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow={t('skills_eyebrow')}
            title={t('skills_title')}
            lead={t('skills_lead')}
            id="skills-heading"
          />

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={t('skills_eyebrow')}>
            <button
              type="button"
              role="tab"
              aria-selected={activeGroup === 'all'}
              onClick={() => setActiveGroup('all')}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                activeGroup === 'all'
                  ? 'bg-accent text-on-accent'
                  : 'border border-line bg-elevated text-muted hover:text-fg'
              }`}
            >
              {t('filter_all')}
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={activeGroup === group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  activeGroup === group.id
                    ? 'bg-accent text-on-accent'
                    : 'border border-line bg-elevated text-muted hover:text-fg'
                }`}
              >
                {pick(group.title)}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized skill cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleGroups.map((group, idx) => {
            const GroupIcon = LUCIDE_MAP[group.icon];
            return (
              <motion.article
                key={group.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="card flex flex-col gap-6 p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl font-semibold text-fg">{pick(group.title)}</h3>
                    <p className="text-sm leading-relaxed text-muted">{pick(group.blurb)}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-bg text-accent-text">
                    {GroupIcon && <GroupIcon size={20} aria-hidden="true" />}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => {
                    const ConceptIcon = skill.lucide ? LUCIDE_MAP[skill.lucide] : null;
                    return (
                      <li key={skill.name}>
                        <div
                          className={`group inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                            skill.core
                              ? 'border-accent/35 bg-accent-soft text-fg hover:border-accent'
                              : 'border-line bg-bg text-fg/90 hover:border-line-strong'
                          }`}
                        >
                          {skill.icon ? (
                            <BrandIcon
                              icon={skill.icon}
                              size={16}
                              className="shrink-0 text-accent-text transition-transform duration-200 group-hover:scale-110"
                            />
                          ) : ConceptIcon ? (
                            <ConceptIcon
                              size={15}
                              aria-hidden="true"
                              className="shrink-0 text-accent-2 transition-transform duration-200 group-hover:scale-110"
                            />
                          ) : null}
                          <span>{skill.name}</span>
                          {skill.core && (
                            <span
                              className="h-1.5 w-1.5 rounded-full bg-accent-2"
                              title={t('core_label')}
                              aria-label={t('core_label')}
                            />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.article>
            );
          })}
        </div>

        {/* Soft Skills + Legend */}
        <div className="card flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-7" data-reveal>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
              <Sparkles size={14} className="text-accent-2" aria-hidden="true" />
              {t('soft_skills')}:
            </span>
            {pick(softSkills).map((s) => (
              <span key={s} className="chip text-xs">
                {s}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-accent-2" aria-hidden="true" />
            {t('core_label')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
