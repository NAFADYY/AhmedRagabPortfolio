import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import ProjectGallery from '../gallery/ProjectGallery';
import { GithubIcon } from '../shared/Icons';
import { useLocalized } from '../../context/AppContext';

const ProjectCard = ({ project, variant = 'grid', index = 0 }) => {
  const { t } = useTranslation();
  const pick = useLocalized();
  const title = pick(project.title);
  const isFeatured = variant === 'featured';

  return (
    <article
      data-reveal
      style={{ '--reveal-delay': `${(index % 4) * 60}ms` }}
      className={`card group overflow-hidden transition-colors hover:border-line-strong ${
        isFeatured ? 'grid grid-cols-1 gap-8 p-5 sm:p-7 lg:grid-cols-12 lg:items-center lg:p-8' : 'flex flex-col p-5'
      }`}
    >
      {/* Interactive Gallery */}
      <div className={isFeatured ? 'lg:col-span-7' : 'mb-5'}>
        <ProjectGallery
          screenshots={project.screenshots}
          title={title}
          showThumbnails={isFeatured}
          compact={!isFeatured}
          aspectClass={isFeatured ? 'aspect-[16/10]' : 'aspect-[16/10]'}
        />
      </div>

      {/* Project Content */}
      <div className={`flex flex-1 flex-col justify-between gap-5 ${isFeatured ? 'lg:col-span-5' : ''}`}>
        <div className="space-y-4">
          {/* Category & Industry badges */}
          <div className="flex flex-wrap items-center gap-2">
            {project.featured && (
              <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-[11px] font-semibold text-accent-text">
                {t('featured')}
              </span>
            )}
            <span className="chip text-[11px] font-mono">{t(`category_${project.category}`)}</span>
            <span className="font-mono text-[11px] text-muted">{t(`industry_${project.industry}`)}</span>
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h3 className={`font-display font-semibold tracking-tight text-fg ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
              <Link to={`/projects/${project.slug}`} className="link-underline hover:text-accent-text">
                {title}
              </Link>
            </h3>
            <p className={`text-sm leading-relaxed text-muted ${isFeatured ? 'sm:text-base' : 'line-clamp-3'}`}>
              {pick(isFeatured ? project.summary : project.tagline)}
            </p>
          </div>

          {/* Tech Stack */}
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li key={tech} className="rounded-lg border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-muted">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            to={`/projects/${project.slug}`}
            className="btn btn-primary min-h-10 px-4 text-xs sm:text-sm"
          >
            <span>{t('view_details')}</span>
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-3.5 py-2 text-xs font-medium text-fg transition-colors hover:border-accent hover:text-accent-text"
              >
                <span>{t('live_demo')}</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} — ${t('source_code')}`}
                title={t('source_code')}
                className="icon-btn h-9 w-9"
              >
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
