import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Observes every [data-reveal] element and adds `.is-in` once it enters the viewport.
 * Re-scans on route change. Works with the CSS in styles/index.css.
 */
export function useRevealObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    const scan = () => document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => observer.observe(el));
    scan();
    // Pick up nodes rendered later (filters, language switch, lazy content)
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
}
