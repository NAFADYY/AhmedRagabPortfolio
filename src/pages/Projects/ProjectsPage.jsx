import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Seo from '../../components/shared/Seo';
import SectionHeading from '../../components/shared/SectionHeading';
import ProjectCard from '../../components/projects/ProjectCard';
import { projects } from '../../data/projects';

const CATEGORIES = ['all', 'dashboard', 'platform', 'website'];

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Seo
        title="Projects"
        description="Explore all production dashboards, web platforms, and websites engineered by Ahmed Ragab using React.js, Next.js, Redux, and Tailwind CSS."
        path="/projects"
      />
      <section className="py-16 md:py-24">
        <div className="container-x space-y-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              as="h1"
              index={t('projects_count', { count: filtered.length })}
              eyebrow={t('work_eyebrow')}
              title={t('projects_page_title')}
              lead={t('projects_page_lead')}
            />

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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} variant="grid" index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
