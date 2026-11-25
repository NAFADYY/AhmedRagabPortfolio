import { site, absoluteUrl } from '../config/site';
import { profile } from '../data/profile';

/**
 * Generates complete head tags (title, meta, Open Graph, Twitter Card,
 * canonical link, and Schema.org JSON-LD) for any route.
 */
export function buildHead({
  title,
  description,
  path = '/',
  image = site.defaultOgImage,
  type = 'website',
  noindex = false,
  jsonLd = [],
} = {}) {
  const fullTitle = title ? `${title} | ${site.shortName}` : `${profile.displayName} — Front-End Developer & React Engineer`;
  const desc =
    description ||
    'Portfolio of Ahmed Ragab, a Front-End Developer based in Cairo, Egypt specializing in React.js, Next.js, enterprise dashboards, bilingual web platforms, and production deployment.';
  const canonical = absoluteUrl(path);
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image);

  const meta = [
    { name: 'description', content: desc },
    { name: 'robots', content: noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large' },
    { name: 'author', content: profile.fullName },
    {
      name: 'keywords',
      content:
        'Ahmed Ragab, Ahmed Ragab Frontend Developer, Ahmed Ragab React Developer, Frontend Developer Egypt, React.js Developer, Frontend Engineer Portfolio, React Dashboard Developer, Web Developer Egypt, DevOps Deployment',
    },
    { property: 'og:type', content: type },
    { property: 'og:site_name', content: site.name },
    { property: 'og:locale', content: site.locale },
    { property: 'og:locale:alternate', content: site.alternateLocale },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: desc },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: fullTitle },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: desc },
    { name: 'twitter:image', content: ogImage },
  ];

  if (site.twitterHandle) {
    meta.push({ name: 'twitter:creator', content: site.twitterHandle });
  }

  return {
    title: fullTitle,
    meta,
    links: [{ rel: 'canonical', href: canonical }],
    jsonLd: Array.isArray(jsonLd) ? jsonLd : [jsonLd],
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: profile.fullName,
    alternateName: profile.displayName,
    url: site.url,
    jobTitle: profile.jobTitle,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: profile.location.city,
      addressCountry: profile.location.countryCode,
    },
    sameAs: [profile.github, profile.linkedin],
    knowsLanguage: profile.knowsLanguages,
    knowsAbout: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Redux',
      'Frontend Architecture',
      'REST API Integration',
      'Web Performance',
      'Nginx',
      'Linux Deployment',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: ['en', 'ar'],
    author: { '@id': `${site.url}/#person` },
  };
}

export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${site.url}/#profilepage`,
    url: site.url,
    name: site.name,
    mainEntity: { '@id': `${site.url}/#person` },
  };
}

export function projectSchema(project) {
  const isApp = project.category === 'dashboard' || project.category === 'platform';
  return [
    {
      '@context': 'https://schema.org',
      '@type': isApp ? 'SoftwareApplication' : 'CreativeWork',
      name: project.title.en,
      description: project.summary.en,
      url: absoluteUrl(`/projects/${project.slug}`),
      ...(isApp ? { applicationCategory: 'WebApplication', operatingSystem: 'Web' } : {}),
      ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
      author: { '@id': `${site.url}/#person` },
      keywords: project.tech.join(', '),
      image: absoluteUrl(project.screenshots?.[0]?.src || site.defaultOgImage),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Projects', item: absoluteUrl('/projects') },
        { '@type': 'ListItem', position: 3, name: project.title.en, item: absoluteUrl(`/projects/${project.slug}`) },
      ],
    },
  ];
}
