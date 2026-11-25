import { useEffect } from 'react';
import { buildHead } from '../../utils/seo';

/**
 * Client-side head manager. The same `buildHead()` output is injected into the
 * prerendered HTML at build time (scripts/prerender.mjs), so crawlers and social
 * scrapers receive complete metadata without executing JavaScript.
 */
const Seo = (props) => {
  const key = JSON.stringify(props);

  useEffect(() => {
    const head = buildHead(JSON.parse(key));
    document.title = head.title;

    // Remove tags managed on the previous route, then insert the new ones.
    document.head.querySelectorAll('[data-seo]').forEach((el) => el.remove());
    const frag = document.createDocumentFragment();
    head.meta.forEach((attrs) => {
      const el = document.createElement('meta');
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      el.setAttribute('data-seo', '');
      frag.appendChild(el);
    });
    head.links.forEach((attrs) => {
      const el = document.createElement('link');
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      el.setAttribute('data-seo', '');
      frag.appendChild(el);
    });
    head.jsonLd.forEach((data) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.textContent = JSON.stringify(data);
      el.setAttribute('data-seo', '');
      frag.appendChild(el);
    });
    document.head.appendChild(frag);
  }, [key]);

  return null;
};

export default Seo;
