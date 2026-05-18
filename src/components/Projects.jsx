import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { personalData } from '../data/personalData';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-primary font-bold uppercase tracking-widest text-sm">{t('projects')}</h4>
        <h2 className="text-4xl font-bold">{t('featured_works')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalData.projects.map((project, index) => (
          <motion.div
            key={index}
            className="group glass rounded-premium overflow-hidden hover:border-primary/50 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={t(project.titleKey, project.title)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                )}
                <a href={personalData.github} target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <GithubIcon size={20} />
                </a>
              </div>
            </div>

            <div className="p-8 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold">{t(project.titleKey, project.title)}</h3>
              <p className="text-zinc-400 text-sm line-clamp-2">{t(project.descriptionKey, project.description)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
