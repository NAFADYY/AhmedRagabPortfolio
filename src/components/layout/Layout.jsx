import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../navigation/Navbar';
import Footer from './Footer';
import { useRevealObserver } from '../../hooks/useRevealObserver';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const CursorSpotlight = () => {
  const finePointer = useMediaQuery('(pointer: fine)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    if (!finePointer || reducedMotion) return undefined;
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [finePointer, reducedMotion]);

  if (!finePointer || reducedMotion) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-70 transition-opacity duration-300"
      style={{
        background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgb(99 102 241 / 0.065), transparent 72%)`,
      }}
    />
  );
};

const ScrollToTopButton = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label={t('back_to_top')}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="icon-btn fixed bottom-6 right-6 z-40 h-12 w-12 shadow-lg hover:border-accent"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();
  useRevealObserver();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
    return undefined;
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div aria-hidden="true" className="bg-blueprint pointer-events-none fixed inset-0 -z-10 opacity-70" />
      <CursorSpotlight />
      <Navbar />
      <main id="main-content" className="pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
