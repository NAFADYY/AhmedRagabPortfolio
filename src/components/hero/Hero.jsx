import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, Download, Layers, Globe, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import { profile, stats } from '../../data/profile';
import { marqueeTech } from '../../data/skills';
import { BrandIcon, GithubIcon, LinkedinIcon } from '../shared/Icons';
import portraitImg from '../../assets/AhmedRagab.webp';
import resumePdf from '../../assets/Resume/Ahmed_Ragab_Nafady_Resume.pdf';
import paxiLogo from '../../assets/icons/companies/Paxilogo.svg';
import roboeyeLogo from '../../assets/icons/companies/roboeyeTec.jpg';
import ulmcareLogo from '../../assets/icons/companies/Ulmcarelogo.svg';
import ulmconnectLogo from '../../assets/icons/companies/UlmConnectLogo.svg';
import surgiLogo from '../../assets/icons/companies/surgi-expo.webp';

const COMPANIES = [
  { name: 'RoboEye Tec', logo: roboeyeLogo },
  { name: 'UlmConnect', logo: ulmconnectLogo },
  { name: 'Paxi Go', logo: paxiLogo },
  { name: 'Ulm Care', logo: ulmcareLogo },
  { name: 'Surgi Expo', logo: surgiLogo },
];

const HeroVisual = ({ t }) => (
  <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ms-auto">
    {/* Subtle architectural accent backdrop */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_70%_20%,rgb(99_102_241_/_0.22),transparent_60%),radial-gradient(circle_at_20%_85%,rgb(34_211_238_/_0.14),transparent_55%)]"
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="card relative overflow-hidden p-5 sm:p-6"
    >
      {/* Top chrome bar */}
      <div className="mb-5 flex items-center justify-between border-b border-line pb-3.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-2/70" />
        </div>
        <span className="font-mono text-[11px] text-muted" dir="ltr">
          ahmed-ragab.dev · react-engineer
        </span>
      </div>

      {/* Portrait frame */}
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-2xl border border-line bg-surface-2">
        <img
          src={portraitImg}
          alt={t('hero_photo_alt')}
          width="480"
          height="504"
          fetchPriority="high"
          className="h-full w-full object-cover object-top"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent"
        />
        {/* Floating architecture status pill */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-xl border border-line bg-bg/85 px-3.5 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-accent-text">
              <CheckCircle2 size={16} aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-fg">{t('hv_status')}</p>
              <p className="font-mono text-[11px] text-muted">{t('hv_status_sub')}</p>
            </div>
          </div>
          <span className="rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-accent-2">
            {t('hv_locales')}
          </span>
        </div>
      </div>

      {/* Interactive capability strip */}
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <div className="flex items-center gap-2.5 rounded-xl border border-line bg-bg/60 px-3.5 py-2.5">
          <Layers size={15} className="shrink-0 text-accent-text" aria-hidden="true" />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold">{t('hv_modules')}</p>
            <p className="truncate font-mono text-[11px] text-muted">React · Redux · RBAC</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl border border-line bg-bg/60 px-3.5 py-2.5">
          <Globe size={15} className="shrink-0 text-accent-2" aria-hidden="true" />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold">{t('hv_perf')}</p>
            <p className="truncate font-mono text-[11px] text-muted">RTL / LTR · SEO</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const Hero = () => {
  const { t } = useTranslation();
  const roles = t('hero_roles', { returnObjects: true });
  const roleList = Array.isArray(roles) ? roles : ['Front-End Developer'];
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % roleList.length), 3200);
    return () => clearInterval(id);
  }, [roleList.length]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left editorial column */}
          <div className="space-y-7 lg:col-span-7">
            {/* Availability + location pill */}
            <div className="flex flex-wrap items-center gap-3">
              {profile.available && (
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-elevated px-4 py-1.5 text-xs font-medium text-fg">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-dot" aria-hidden="true" />
                  <span>{t('available')}</span>
                </span>
              )}
              <span className="font-mono text-xs text-muted">{t('hero_eyebrow')}</span>
            </div>

            {/* Expressive Display Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-[clamp(2.85rem,7vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.04em] text-fg">
                <span className="hero-line">
                  <span style={{ '--d': '40ms' }}>{t('display_name')}</span>
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xl font-medium text-accent-text sm:text-2xl">
                <Sparkles size={18} className="text-accent-2" aria-hidden="true" />
                <div className="relative h-9 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleList[roleIdx % roleList.length]}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="block font-display font-semibold"
                    >
                      {roleList[roleIdx % roleList.length]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Intro & Expertise */}
            <div className="max-w-2xl space-y-3">
              <p className="text-lg font-medium leading-relaxed text-fg/90 sm:text-xl">
                {t('hero_intro')}
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {t('hero_expertise')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" onClick={scrollTo('projects')} className="btn btn-primary">
                <span>{t('explore_work')}</span>
                <ArrowDownRight size={17} aria-hidden="true" />
              </a>
              <a href={resumePdf} download={profile.resumeFileName} className="btn btn-ghost">
                <Download size={16} aria-hidden="true" />
                <span>{t('download_cv')}</span>
              </a>
              <a href="#contact" onClick={scrollTo('contact')} className="btn btn-ghost">
                <Mail size={16} aria-hidden="true" />
                <span>{t('contact_me')}</span>
              </a>
            </div>

            {/* Quick social & stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-line pt-7 sm:max-w-lg">
              {stats.map((stat) => (
                <div key={stat.key}>
                  <p className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted">{t(stat.key)}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted transition-colors hover:text-fg"
              >
                <GithubIcon size={16} />
                <span>github.com/NAFADYY</span>
              </a>
              <span className="text-line-strong" aria-hidden="true">/</span>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted transition-colors hover:text-fg"
              >
                <LinkedinIcon size={16} />
                <span>linkedin.com/in/nafady</span>
              </a>
            </div>
          </div>

          {/* Right visual column */}
          <div className="lg:col-span-5">
            <HeroVisual t={t} />
          </div>
        </div>

        {/* Tech Marquee Strip */}
        <div className="mt-16 border-y border-line py-5" aria-label={t('marquee_label')}>
          <div className="mask-fade-x overflow-hidden">
            <div className="flex w-max items-center gap-10 animate-marquee" dir="ltr">
              {[...marqueeTech, ...marqueeTech].map((icon, i) => (
                <div key={`${icon.slug}-${i}`} className="flex items-center gap-2.5 text-muted transition-colors hover:text-fg">
                  <BrandIcon icon={icon} size={18} />
                  <span className="font-mono text-xs font-medium">{icon.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Companies / Products Strip */}
        <div className="mt-10 flex flex-col items-center gap-6">
          <p className="eyebrow">{t('companies_label')}</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {COMPANIES.map((c) => (
              <div
                key={c.name}
                className="flex items-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  className="h-8 w-auto max-w-[120px] rounded object-contain sm:h-9"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
