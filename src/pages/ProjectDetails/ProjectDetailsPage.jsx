import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Layers, Lock, Wrench } from 'lucide-react';
import Seo from '../../components/shared/Seo';
import ProjectGallery from '../../components/gallery/ProjectGallery';
import ProjectCard from '../../components/projects/ProjectCard';
import { GithubIcon } from '../../components/shared/Icons';
import { getProjectBySlug, getRelatedProjects, projects } from '../../data/projects';
import { useLocalized } from '../../context/AppContext';
import { projectSchema } from '../../utils/seo';
import NotFoundPage from '../NotFound/NotFoundPage';

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const pick = useLocalized();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFoundPage />;

  const title = pick(project.title);
  const related = getRelatedProjects(project, 2);
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <>
      <Seo
        title={project.title.en}
        description={project.summary.en}
        path={`/projects/${project.slug}`}
        image={project.screenshots?.[0]?.src}
        type="article"
        jsonLd={projectSchema(project)}
      />

      <article className="py-12 md:py-20">
        <div className="container-x space-y-16">
          {/* Breadcrumb / Back */}
          <div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              <span>{t('back_to_projects')}</span>
            </Link>
          </div>

          {/* Hero Header */}
          <header className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="space-y-5 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.featured && (
                  <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-semibold text-accent-text">
                    {t('featured')}
                  </span>
                )}
                <span className="chip font-mono text-xs">{t(`category_${project.category}`)}</span>
                <span className="font-mono text-xs text-muted">{t(`industry_${project.industry}`)}</span>
              </div>

              <h1 className="font-display text-balance text-[clamp(2.3rem,5.5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.035em] text-fg">
                {title}
              </h1>

              <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {pick(project.summary)}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <span>{t('live_demo')}</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <GithubIcon size={17} />
                  <span>{t('source_code')}</span>
                </a>
              )}
            </div>
          </header>

          {/* Interactive Screenshot Gallery */}
          <section aria-label={t('screenshots')} className="space-y-3">
            <ProjectGallery
              screenshots={project.screenshots}
              title={title}
              showThumbnails
              aspectClass="aspect-[16/9]"
            />
            {project.authProtected && (
              <p className="inline-flex items-center gap-2 text-xs text-muted">
                <Lock size={13} className="shrink-0 text-accent-2" aria-hidden="true" />
                <span>{t('auth_note')}</span>
              </p>
            )}
          </section>

          {/* Metadata & Content Grid */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Sticky Project Info Sidebar */}
            <aside className="lg:col-span-4">
              <div className="card space-y-6 p-6 sm:p-7 lg:sticky lg:top-28">
                <p className="eyebrow">{t('project_info')}</p>

                <dl className="divide-y divide-line text-sm">
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted">{t('role')}</dt>
                    <dd className="text-end font-medium text-fg">{pick(project.role)}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted">{t('category')}</dt>
                    <dd className="font-medium text-fg">{t(`category_${project.category}`)}</dd>
                  </div>
                  <div className="flex justify-between gap-4 py-3">
                    <dt className="text-muted">{t('industry')}</dt>
                    <dd className="font-medium text-fg">{t(`industry_${project.industry}`)}</dd>
                  </div>
                </dl>

                <div className="space-y-3 border-t border-line pt-5">
                  <p className="eyebrow">{t('technologies')}</p>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li key={tech} className="chip font-mono text-xs">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Case Study Sections */}
            <div className="space-y-10 lg:col-span-8">
              {/* Overview */}
              <section className="card space-y-4 p-7 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-fg">{t('overview')}</h2>
                <p className="leading-relaxed text-muted">{pick(project.overview)}</p>
              </section>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <section className="card space-y-3 p-6 sm:p-7">
                  <p className="eyebrow text-accent-text">{t('problem')}</p>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">{pick(project.problem)}</p>
                </section>
                <section className="card space-y-3 p-6 sm:p-7">
                  <p className="eyebrow text-accent-2">{t('solution')}</p>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">{pick(project.solution)}</p>
                </section>
              </div>

              {/* Objectives */}
              <section className="card space-y-4 p-7 sm:p-8">
                <h2 className="font-display text-2xl font-semibold text-fg">{t('objectives')}</h2>
                <ul className="space-y-3">
                  {pick(project.objectives).map((obj) => (
                    <li key={obj} className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-accent-2" aria-hidden="true" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* My Role & Responsibilities + Key Features */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="card space-y-4 p-6 sm:p-7">
                  <h2 className="font-display text-xl font-semibold text-fg">{t('my_role')}</h2>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                    {pick(project.responsibilities).map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-text" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="card space-y-4 p-6 sm:p-7">
                  <h2 className="font-display text-xl font-semibold text-fg">{t('key_features')}</h2>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
                    {pick(project.features).map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Architecture Overview */}
              {project.architecture && (
                <section className="card space-y-3 p-7 sm:p-8">
                  <div className="flex items-center gap-2.5">
                    <Layers size={18} className="text-accent-text" aria-hidden="true" />
                    <h2 className="font-display text-xl font-semibold text-fg">{t('architecture')}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">{pick(project.architecture)}</p>
                </section>
              )}

              {/* Challenges & Solutions */}
              {project.challenges?.length > 0 && (
                <section className="card space-y-5 p-7 sm:p-8">
                  <div className="flex items-center gap-2.5">
                    <Wrench size={18} className="text-accent-2" aria-hidden="true" />
                    <h2 className="font-display text-xl font-semibold text-fg">{t('challenges')}</h2>
                  </div>
                  <div className="space-y-4">
                    {project.challenges.map((c, idx) => (
                      <div key={idx} className="rounded-2xl border border-line bg-bg p-5 space-y-2.5">
                        <p className="text-sm font-semibold text-fg">
                          <span className="me-2 font-mono text-xs uppercase text-accent-text">{t('challenge')}:</span>
                          {pick(c.challenge)}
                        </p>
                        <p className="text-sm leading-relaxed text-muted">
                          <span className="me-2 font-mono text-xs uppercase text-accent-2">{t('approach')}:</span>
                          {pick(c.approach)}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Next Project Banner */}
          {nextProject && (
            <div className="card flex flex-col items-start justify-between gap-4 p-7 sm:flex-row sm:items-center sm:p-9">
              <div>
                <p className="eyebrow">{t('next_project')}</p>
                <p className="mt-1 font-display text-2xl font-semibold text-fg">{pick(nextProject.title)}</p>
              </div>
              <Link to={`/projects/${nextProject.slug}`} className="btn btn-primary">
                <span>{t('view_details')}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          )}

          {/* Related Projects */}
          {related.length > 0 && (
            <section className="space-y-8 border-t border-line pt-14">
              <h2 className="font-display text-2xl font-semibold text-fg sm:text-3xl">{t('related_projects')}</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {related.map((p, idx) => (
                  <ProjectCard key={p.slug} project={p} variant="grid" index={idx} />
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
};

export default ProjectDetailsPage;
