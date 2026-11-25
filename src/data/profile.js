// Single source of truth for personal / professional information.
// Everything here comes from the previous portfolio content and resume.

export const profile = {
  firstName: 'Ahmed',
  lastName: 'Ragab',
  fullName: 'Ahmed Ragab Nafady',
  displayName: 'Ahmed Ragab',
  jobTitle: 'Front-End Developer',
  location: { city: 'Cairo', country: 'Egypt', countryCode: 'EG' },
  email: 'nafady.352001@gmail.com',
  phone: '+201065856802',
  phoneDisplay: '+20 106 585 6802',
  whatsapp: 'https://wa.me/201065856802',
  github: 'https://github.com/NAFADYY',
  linkedin: 'https://linkedin.com/in/nafady',
  resumeFileName: 'Ahmed_Ragab_Nafady_Resume.pdf',
  // Availability is stated on the previous portfolio ("available for full-time roles and freelance projects").
  available: true,
  knowsLanguages: ['Arabic', 'English'],
};

export const stats = [
  { value: '3+', key: 'stat_years' },
  { value: '30+', key: 'stat_projects' },
  { value: '100+', key: 'stat_components' },
];

export const socialLinks = [
  { id: 'github', label: 'GitHub', href: profile.github },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  { id: 'email', label: 'Email', href: `mailto:${profile.email}` },
  { id: 'whatsapp', label: 'WhatsApp', href: profile.whatsapp },
];

export const experience = [
  {
    company: { en: 'RoboEye Tec', ar: 'روبو أي تك (RoboEye Tec)' },
    role: { en: 'Senior Front-End Developer', ar: 'مطور واجهات أمامية أول' },
    period: { en: 'Jan 2026 – Present', ar: 'يناير 2026 – الآن' },
    current: true,
    points: {
      en: [
        'Architected scalable React applications with micro-frontend architecture',
        'Optimized application performance by 40% through advanced code-splitting',
        'Mentored junior developers and established modern code quality standards',
        'Integrated complex real-time data streaming and advanced dashboards',
        'Led the migration to TypeScript for enhanced system maintainability',
      ],
      ar: [
        'تصميم وبناء تطبيقات React قابلة للتوسع باستخدام معمارية الواجهات المصغّرة (Micro-frontend)',
        'تحسين أداء التطبيقات بنسبة 40% من خلال تقنيات تقسيم الكود المتقدمة',
        'توجيه المطورين المبتدئين وإرساء معايير حديثة لجودة الكود',
        'دمج تدفق البيانات الحية وبناء لوحات تحكم متقدمة',
        'قيادة الانتقال إلى TypeScript لتحسين قابلية صيانة النظام',
      ],
    },
  },
  {
    company: { en: 'Newulm Medical Company', ar: 'شركة نيو أولم الطبية' },
    role: { en: 'Front-End React Developer · Remote, Part-Time', ar: 'مطور واجهات أمامية React · عن بُعد، دوام جزئي' },
    period: { en: 'Oct 2024 – Jan 2026', ar: 'أكتوبر 2024 – يناير 2026' },
    points: {
      en: [
        'Built complex dashboards using Redux and Tailwind CSS',
        'Developed responsive admin systems with dynamic data management',
        'Improved UX and performance for medical diagnostic tools',
        'Created scalable company websites and real-time dashboards',
      ],
      ar: [
        'بناء لوحات تحكم معقدة باستخدام Redux و Tailwind CSS',
        'تطوير أنظمة إدارة متجاوبة مع إدارة ديناميكية للبيانات',
        'تحسين تجربة المستخدم وأداء أدوات التشخيص الطبي',
        'إنشاء مواقع شركات قابلة للتوسع ولوحات تحكم لحظية',
      ],
    },
  },
  {
    company: { en: 'Surgi Web Company', ar: 'شركة سيرجي ويب' },
    role: { en: 'Front-End Developer · Full-Time', ar: 'مطور واجهات أمامية · دوام كامل' },
    period: { en: 'May 2023 – Jun 2024', ar: 'مايو 2023 – يونيو 2024' },
    points: {
      en: [
        'Developed responsive React interfaces for medical platforms',
        'Improved application speed by 25% through asset optimization',
        'Reduced API errors by 10% by implementing robust error handling',
        'Integrated complex APIs using Axios with custom middleware',
        'Implemented accessible UI components following WCAG guidelines',
      ],
      ar: [
        'تطوير واجهات React متجاوبة للمنصات الطبية',
        'تحسين سرعة التطبيق بنسبة 25% من خلال تحسين الأصول',
        'تقليل أخطاء واجهات البرمجة بنسبة 10% عبر معالجة أخطاء قوية',
        'ربط واجهات برمجة معقدة باستخدام Axios مع Middleware مخصص',
        'تنفيذ مكونات واجهة متاحة للجميع وفق إرشادات WCAG',
      ],
    },
  },
];

export const services = [
  { icon: 'LayoutDashboard', key: 'dashboard' },
  { icon: 'Blocks', key: 'architecture' },
  { icon: 'Plug', key: 'api' },
  { icon: 'MonitorSmartphone', key: 'responsive' },
  { icon: 'Gauge', key: 'performance' },
  { icon: 'Rocket', key: 'deployment' },
];

export const faq = ['services', 'technologies', 'dashboards', 'apis', 'figma', 'multilingual', 'deployment'];
