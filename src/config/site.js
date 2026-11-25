// Central site configuration used by SEO helpers, sitemap and prerendering.
// Override the production origin with VITE_SITE_URL if the domain changes.
const envUrl = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SITE_URL : undefined;

export const SITE_URL = (envUrl || 'https://ahmed-ragab-portfolio.vercel.app').replace(/\/$/, '');

export const site = {
  url: SITE_URL,
  name: 'Ahmed Ragab — Front-End Developer',
  shortName: 'Ahmed Ragab',
  locale: 'en_US',
  alternateLocale: 'ar_EG',
  themeColor: '#0B0D12',
  defaultOgImage: '/og/og-default.jpg',
  twitterHandle: undefined, // add e.g. '@handle' if you have an X/Twitter account
};

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
