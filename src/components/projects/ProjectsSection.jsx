import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/projects';

const CATEGORIES = ['all', 'dashboard', 'platform', 'website'];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const [leadProject, ...restProjects] = filtered;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 md:py-28">
      <div className="container-x space-y-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow={t('work_eyebrow')}
            title={t('work_title')}
            lead={t('work_lead')}
            id="projects-heading"
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={t('filter_label')}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  filter === cat
                    ? 'bg-accent text-on-accent'
                    : 'border border-line bg-elevated text-muted hover:text-fg'
                }`}
              >
                {cat === 'all' ? t('filter_all') : t(`category_${cat}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship featured project */}
        {leadProject && <ProjectCard project={leadProject} variant="featured" index={0} />}

        {/* Bento grid of remaining projects */}
        {restProjects.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {restProjects.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} variant="grid" index={idx + 1} />
            ))}
          </div>
        )}

        {/* Archive CTA */}
        <div className="flex justify-center pt-4">
          <Link to="/projects" className="btn btn-ghost">
            <span>{t('view_all_projects')}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
