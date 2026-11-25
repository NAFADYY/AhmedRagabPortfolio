import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowUp, Mail } from 'lucide-react';
import Logo from '../shared/Logo';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../shared/Icons';
import { profile } from '../../data/profile';

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const jump = (id) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="mt-28 border-t border-line bg-elevated/60">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted">{t('footer_tagline')}</p>
            <p className="font-mono text-xs text-muted">{t('contact_location')}</p>
          </div>

          <div className="space-y-4 md:col-span-3">
            <p className="eyebrow">{t('footer_nav')}</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/#projects" onClick={jump('projects')} className="link-underline text-muted hover:text-fg">
                  {t('nav_work')}
                </a>
              </li>
              <li>
                <Link to="/projects" className="link-underline text-muted hover:text-fg">
                  {t('projects_page_title')}
                </Link>
              </li>
              <li>
                <a href="/#about" onClick={jump('about')} className="link-underline text-muted hover:text-fg">
                  {t('nav_about')}
                </a>
              </li>
              <li>
                <a href="/#skills" onClick={jump('skills')} className="link-underline text-muted hover:text-fg">
                  {t('nav_skills')}
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={jump('contact')} className="link-underline text-muted hover:text-fg">
                  {t('nav_contact')}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:col-span-4">
            <p className="eyebrow">{t('footer_connect')}</p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { label: 'GitHub', href: profile.github, Icon: GithubIcon },
                { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
                { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
                { label: 'WhatsApp', href: profile.whatsapp, Icon: WhatsappIcon },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  title={label}
                  className="icon-btn hover:border-accent hover:text-accent-text"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a href={`mailto:${profile.email}`} className="link-underline inline-block font-mono text-xs text-muted hover:text-fg">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {t('full_name')}. {t('rights')}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-muted transition-colors hover:text-fg"
          >
            <span>{t('back_to_top')}</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
