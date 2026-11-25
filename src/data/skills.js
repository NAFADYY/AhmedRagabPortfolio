import {
  siHtml5, siCss, siJavascript, siTypescript, siReact, siReactrouter, siNextdotjs, siTailwindcss, siBootstrap, siJquery,
  siRedux, siVite, siAxios, siI18next, siGit, siGithub, siNpm, siPostman, siSwagger,
  siFigma, siFramer, siLinux, siNginx, siPm2, siCpanel, siVercel, siLetsencrypt,
} from 'simple-icons';

// Skills are grouped by real usage evidenced in the projects, experience and resume.
// `icon` is a Simple Icons object (path + brand hex); lucide names are used for concepts.
// No fake percentage bars — `evidence` explains where a skill is used instead.

export const skillGroups = [
  {
    id: 'frontend',
    icon: 'Code2',
    title: { en: 'Frontend Development', ar: 'تطوير الواجهات الأمامية' },
    blurb: {
      en: 'The core of my daily work — building production interfaces with React and modern CSS.',
      ar: 'جوهر عملي اليومي — بناء واجهات إنتاجية باستخدام React و CSS الحديثة.',
    },
    skills: [
      { name: 'React.js', icon: siReact, core: true },
      { name: 'JavaScript (ES6+)', icon: siJavascript, core: true },
      { name: 'TypeScript', icon: siTypescript },
      { name: 'Next.js', icon: siNextdotjs },
      { name: 'React Hooks', icon: siReact },
      { name: 'React Router', icon: siReactrouter },
      { name: 'Tailwind CSS', icon: siTailwindcss, core: true },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss },
      { name: 'Bootstrap', icon: siBootstrap },
      { name: 'jQuery', icon: siJquery },
      { name: 'Responsive Design', lucide: 'MonitorSmartphone' },
    ],
  },
  {
    id: 'architecture',
    icon: 'Blocks',
    title: { en: 'Architecture & Tooling', ar: 'المعمارية والأدوات' },
    blurb: {
      en: 'Structuring large dashboards so they stay maintainable as modules and teams grow.',
      ar: 'هيكلة لوحات التحكم الكبيرة لتظل قابلة للصيانة مع نمو الوحدات والفرق.',
    },
    skills: [
      { name: 'Redux / State Management', icon: siRedux, core: true },
      { name: 'Component-Based Architecture', lucide: 'Component' },
      { name: 'REST API Integration', lucide: 'Plug' },
      { name: 'Axios', icon: siAxios },
      { name: 'i18next (RTL / LTR)', icon: siI18next },
      { name: 'Role-Based Access Control', lucide: 'ShieldCheck' },
      { name: 'Vite', icon: siVite },
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub },
      { name: 'npm', icon: siNpm },
      { name: 'Postman', icon: siPostman },
      { name: 'Swagger', icon: siSwagger },
    ],
  },
  {
    id: 'ui',
    icon: 'PenTool',
    title: { en: 'UI/UX & Motion', ar: 'تجربة المستخدم والحركة' },
    blurb: {
      en: 'Turning Figma designs into accessible, pixel-accurate and delightful interfaces.',
      ar: 'تحويل تصميمات Figma إلى واجهات دقيقة ومتاحة للجميع وممتعة الاستخدام.',
    },
    skills: [
      { name: 'Figma', icon: siFigma, core: true },
      { name: 'Framer Motion', icon: siFramer },
      { name: 'UI Implementation', lucide: 'LayoutTemplate' },
      { name: 'Micro-interactions', lucide: 'MousePointerClick' },
      { name: 'Reusable UI Systems', lucide: 'Layers' },
      { name: 'Accessibility (WCAG)', lucide: 'Accessibility' },
      { name: 'Dark / Light Theming', lucide: 'SunMoon' },
    ],
  },
  {
    id: 'devops',
    icon: 'Server',
    title: { en: 'Deployment & Hosting', ar: 'النشر والاستضافة' },
    blurb: {
      en: 'Shipping what I build: staging and production releases, servers, domains and SSL.',
      ar: 'إطلاق ما أبنيه: إصدارات تجريبية وإنتاجية، خوادم، نطاقات وشهادات SSL.',
    },
    skills: [
      { name: 'Linux / Ubuntu', icon: siLinux },
      { name: 'Nginx', icon: siNginx },
      { name: 'PM2', icon: siPm2 },
      { name: 'Vercel', icon: siVercel },
      { name: 'cPanel', icon: siCpanel },
      { name: 'Domain & DNS Configuration', lucide: 'Globe' },
      { name: 'SSL / HTTPS', icon: siLetsencrypt },
      { name: 'Staging & Production Workflows', lucide: 'GitBranch' },
    ],
  },
];

export const softSkills = {
  en: ['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability', 'Time Management'],
  ar: ['حل المشكلات', 'العمل الجماعي', 'التواصل', 'المرونة', 'إدارة الوقت'],
};

// Marquee items (hero ticker)
export const marqueeTech = [
  siReact, siJavascript, siTypescript, siNextdotjs, siTailwindcss, siRedux, siVite, siAxios, siI18next, siFigma, siFramer, siGit, siNginx, siLinux,
];
