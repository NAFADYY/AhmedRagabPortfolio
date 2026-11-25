import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Languages, Menu, Moon, Sun, X, ArrowUpRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { useActiveSection } from '../../hooks/useActiveSection';
import Logo from '../shared/Logo';
import resumePdf from '../../assets/Resume/Ahmed_Ragab_Nafady_Resume.pdf';
import { profile } from '../../data/profile';

const NAV_ITEMS = [
  { id: 'projects', key: 'nav_work' },
  { id: 'about', key: 'nav_about' },
  { id: 'skills', key: 'nav_skills' },
  { id: 'experience', key: 'nav_experience' },
  { id: 'contact', key: 'nav_contact' },
];
const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

const Navbar = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, toggleLanguage } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const activeSection = useActiveSection(SECTION_IDS, isHome);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `/#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-on-accent"
      >
        {t('skip_to_content')}
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line bg-bg/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between gap-4">
          <Logo onClick={() => setMenuOpen(false)} />

          {/* Desktop Navigation */}
          <nav aria-label={t('nav_primary')} className="hidden items-center gap-1 rounded-full border border-line bg-elevated/80 p-1.5 backdrop-blur-md lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive =
                (isHome && activeSection === item.id) ||
                (!isHome && item.id === 'projects' && location.pathname.startsWith('/projects'));
              return (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-on-accent' : 'text-muted hover:text-fg'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                    />
                  )}
                  {t(item.key)}
                </a>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={resumePdf}
              download={profile.resumeFileName}
              className="hidden items-center gap-2 rounded-full border border-line bg-elevated px-4 py-2.5 text-xs font-semibold text-fg transition-colors hover:border-line-strong xl:inline-flex"
            >
              <Download size={14} aria-hidden="true" />
              <span>{t('download_cv')}</span>
            </a>

            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-elevated px-3.5 text-xs font-mono font-semibold text-fg transition-all duration-200 hover:-translate-y-px hover:border-line-strong"
              aria-label={t('lang_toggle')}
              title={t('lang_toggle')}
            >
              <Languages size={15} className="shrink-0" aria-hidden="true" />
              <span>{t('lang_short')}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={t('theme_toggle')}
              title={t('theme_toggle')}
            >
              {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
            </button>

            <a
              href="/#contact"
              onClick={handleNavClick('contact')}
              className="btn btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex"
            >
              <span>{t('lets_talk')}</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="icon-btn lg:hidden"
              aria-label={menuOpen ? t('nav_menu_close') : t('nav_menu_open')}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={t('nav_primary')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bg/98 px-6 pb-10 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={handleNavClick(item.id)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.35 }}
                  className="flex items-baseline justify-between border-b border-line py-4 font-display text-3xl font-semibold tracking-tight text-fg transition-colors hover:text-accent-text"
                >
                  <span>{t(item.key)}</span>
                  <span className="font-mono text-xs text-muted">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <a
                href={resumePdf}
                download={profile.resumeFileName}
                className="btn btn-ghost w-full"
              >
                <Download size={16} aria-hidden="true" />
                <span>{t('download_cv')}</span>
              </a>
              <a
                href="/#contact"
                onClick={handleNavClick('contact')}
                className="btn btn-primary w-full"
              >
                <span>{t('contact_me')}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
