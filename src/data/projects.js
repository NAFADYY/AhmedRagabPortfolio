// Centralized project data — single source of truth for homepage cards,
// /projects archive, /projects/:slug detail pages, sitemap, and JSON-LD.

const makeShots = (slug, count, labelEn, labelAr) =>
  Array.from({ length: count }, (_, i) => ({
    src: `/projects/${slug}/${String(i + 1).padStart(2, '0')}.webp`,
    caption: {
      en: `${labelEn} — Screen ${i + 1}`,
      ar: `${labelAr} — شاشة ${i + 1}`,
    },
  }));

export const projects = [
  {
    slug: 'al-azhar-dashboard',
    featured: true,
    hasRealScreenshots: true,
    category: 'dashboard',
    industry: 'education',
    accent: '#6366F1',
    title: {
      en: 'Al-Azhar University Dashboard',
      ar: 'لوحة تحكم جامعة الأزهر',
    },
    tagline: {
      en: 'Large-scale university administration dashboard with RBAC, bilingual RTL/LTR support, and multi-module workflows.',
      ar: 'لوحة تحكم إدارية ضخمة لجامعة الأزهر مع نظام صلاحيات حسب الدور، دعم عربي/إنجليزي، ووحدات إدارية متعددة.',
    },
    summary: {
      en: 'Enterprise React administration platform engineered for Al-Azhar University, unifying multiple academic and operational modules with role-based access control, dark/light themes, and staging-to-production deployment workflows.',
      ar: 'منصة إدارة مؤسسية مبنية بـ React لجامعة الأزهر، تجمع وحدات أكاديمية وتشغيلية متعددة مع صلاحيات دقيقة حسب الدور، وضع داكن وفاتح، وتدفقات نشر من التجريبي إلى الإنتاج.',
    },
    overview: {
      en: 'A comprehensive university administration dashboard built to centralize daily operations across departments. The application handles complex permissions, bilingual content switching between Arabic (RTL) and English (LTR), rich data tables, and API-driven administrative workflows.',
      ar: 'لوحة تحكم إدارية شاملة بُنيت لتوحيد العمليات اليومية عبر الأقسام المختلفة. يتعامل التطبيق مع صلاحيات معقدة، وتبديل سلس بين العربية والإنجليزية، وجداول بيانات غنية، وتدفقات عمل مرتبطة بواجهات البرمجة.',
    },
    objectives: {
      en: [
        'Provide a unified, responsive admin workspace for multiple university departments.',
        'Enforce strict Role-Based Access Control (RBAC) across routes, navigation, and actions.',
        'Support seamless Arabic (RTL) and English (LTR) switching with full dark and light themes.',
        'Maintain reliable staging and production deployment pipelines.',
      ],
      ar: [
        'توفير مساحة عمل إدارية موحّدة ومتجاوبة لعدة أقسام جامعية.',
        'تطبيق نظام صلاحيات صارم حسب الدور على المسارات والقوائم والإجراءات.',
        'دعم التبديل السلس بين العربية (RTL) والإنجليزية (LTR) مع الوضعين الداكن والفاتح.',
        'الحفاظ على تدفقات نشر مستقرة بين بيئة التجربة والإنتاج.',
      ],
    },
    problem: {
      en: 'University administrative operations spanned many distinct modules and user roles, requiring an interface that stayed fast, clear, and permission-safe without duplicating UI logic across modules.',
      ar: 'كانت العمليات الإدارية الجامعية تمتد عبر وحدات وأدوار مستخدمين متعددة، مما تطلب واجهة تبقى سريعة وواضحة وآمنة من حيث الصلاحيات دون تكرار منطق الواجهة.',
    },
    solution: {
      en: 'Built a modular React architecture with reusable layout primitives, centralized RBAC guards, Axios API integration with consistent error/loading handling, i18next localization, and structured staging/production deployment workflows.',
      ar: 'بناء معمارية React معيارية بمكونات تخطيط قابلة لإعادة الاستخدام، وحراسة مركزية للصلاحيات، وربط API عبر Axios مع معالجة موحّدة للأخطاء والتحميل، ودعم i18next، ومسارات نشر منظّمة.',
    },
    role: {
      en: 'Front-End Developer & Deployment Lead',
      ar: 'مطور واجهات أمامية ومسؤول النشر',
    },
    responsibilities: {
      en: [
        'Architected modular React views and shared dashboard components.',
        'Implemented Role-Based Access Control (RBAC) for routes, menus, and UI actions.',
        'Integrated REST APIs with consistent loading, empty, and error states.',
        'Built Arabic/English localization (RTL/LTR) and dark/light theme support.',
        'Managed staging and production frontend deployment workflows.',
      ],
      ar: [
        'تصميم وبناء صفحات React معيارية ومكونات لوحة تحكم مشتركة.',
        'تنفيذ نظام الصلاحيات حسب الدور (RBAC) للمسارات والقوائم والإجراءات.',
        'ربط واجهات REST API مع حالات تحميل وأخطاء متسقة.',
        'بناء دعم اللغتين العربية والإنجليزية والوضعين الداكن والفاتح.',
        'إدارة تدفقات نشر الواجهة الأمامية لبيئتي التجربة والإنتاج.',
      ],
    },
    features: {
      en: [
        'Role-Based Access Control (RBAC)',
        'Multiple administrative modules',
        'REST API integration',
        'Arabic (RTL) & English (LTR) localization',
        'Dark & light theme switcher',
        'Responsive desktop, tablet & mobile UI',
        'Staging & production deployment pipeline',
      ],
      ar: [
        'نظام صلاحيات حسب الدور (RBAC)',
        'وحدات إدارية متعددة',
        'ربط كامل مع واجهات REST API',
        'دعم اللغتين العربية والإنجليزية (RTL/LTR)',
        'تبديل الوضع الداكن والفاتح',
        'واجهة متجاوبة لكل الشاشات',
        'تدفقات نشر لبيئتي التجربة والإنتاج',
      ],
    },
    architecture: {
      en: 'Feature-based React structure separating domain modules, shared UI primitives, permission guards, localization dictionaries, and API service layers.',
      ar: 'هيكلة React قائمة على الميزات تفصل بين وحدات العمل، والمكونات المشتركة، وحراسة الصلاحيات، وملفات الترجمة، وطبقة خدمات الـ API.',
    },
    challenges: [
      {
        challenge: {
          en: 'Keeping navigation, routes, and action buttons synchronized with dynamic user roles.',
          ar: 'مزامنة القوائم والمسارات وأزرار الإجراءات مع أدوار المستخدمين الديناميكية.',
        },
        approach: {
          en: 'Centralized permission checks into reusable route guards and conditional UI helpers.',
          ar: 'مركزة فحوصات الصلاحيات في حراس مسارات ومكونات مساعدة قابلة لإعادة الاستخدام.',
        },
      },
      {
        challenge: {
          en: 'Maintaining layout precision across both RTL Arabic and LTR English in dense data tables.',
          ar: 'الحفاظ على دقة التخطيط في الاتجاهين RTL و LTR داخل جداول البيانات الكثيفة.',
        },
        approach: {
          en: 'Adopted logical CSS properties and Tailwind RTL utilities across all shared components.',
          ar: 'اعتماد خصائص CSS المنطقية وأدوات Tailwind RTL في جميع المكونات المشتركة.',
        },
      },
    ],
    tech: ['React.js', 'Tailwind CSS', 'REST API', 'Axios', 'i18next', 'RBAC', 'Nginx'],
    liveUrl: 'https://dashboard.azhar-test.com/',
    githubUrl: null,
    authProtected: false,
    screenshots: makeShots('al-azhar-dashboard', 9, 'Al-Azhar University Dashboard', 'لوحة تحكم جامعة الأزهر'),
  },
  {
    slug: 'al-azhar-website',
    featured: true,
    hasRealScreenshots: true,
    category: 'website',
    industry: 'education',
    accent: '#22D3EE',
    title: {
      en: 'Al-Azhar University Website',
      ar: 'موقع جامعة الأزهر',
    },
    tagline: {
      en: 'Modern bilingual institutional web portal for Al-Azhar University with structured academic sections and responsive design.',
      ar: 'بوابة إلكترونية مؤسسية حديثة وثنائية اللغة لجامعة الأزهر بأقسام أكاديمية منظّمة وتصميم متجاوب.',
    },
    summary: {
      en: 'Public institutional website built for Al-Azhar University, delivering structured access to university news, faculties, academic programs, and campus services in a responsive, bilingual React experience.',
      ar: 'الموقع الرسمي لجامعة الأزهر، يقدّم وصولاً منظماً للأخبار والكليات والبرامج الأكاديمية وخدمات الجامعة عبر تجربة React متجاوبة وثنائية اللغة.',
    },
    overview: {
      en: 'Designed as the public digital gateway for Al-Azhar University, connecting students, faculty members, and visitors with university information, announcements, and academic directories.',
      ar: 'صُمم ليكون البوابة الرقمية الرسمية لجامعة الأزهر، لربط الطلاب وأعضاء هيئة التدريس والزوار بمعلومات الجامعة والإعلانات والأدلة الأكاديمية.',
    },
    objectives: {
      en: [
        'Deliver a clear, dignified institutional web presence for a major university.',
        'Organize news, faculties, and academic content for effortless discovery.',
        'Ensure full responsiveness and Arabic (RTL) / English (LTR) support.',
      ],
      ar: [
        'تقديم حضور رقمي مؤسسي واضح ولائق بجامعة كبرى.',
        'تنظيم الأخبار والكليات والمحتوى الأكاديمي لسهولة التصفح والوصول.',
        'ضمان التجاوب الكامل ودعم العربية (RTL) والإنجليزية (LTR).',
      ],
    },
    problem: {
      en: 'Large university websites often suffer from cluttered navigation and slow, inconsistent page layouts across mobile and desktop.',
      ar: 'غالبًا ما تعاني مواقع الجامعات الكبرى من ازدحام القوائم وبطء التحميل وعدم تناسق التخطيط عبر الأجهزة.',
    },
    solution: {
      en: 'Built a clean, component-based React frontend connected to the university CMS/dashboard APIs with clear information architecture and responsive layouts.',
      ar: 'بناء واجهة React نظيفة وقائمة على المكونات مرتبطة بواجهات لوحة التحكم الخاصة بالجامعة مع هيكلة معلومات واضحة وتصميم متجاوب.',
    },
    role: {
      en: 'Front-End Developer',
      ar: 'مطور واجهات أمامية',
    },
    responsibilities: {
      en: [
        'Developed responsive institutional pages and reusable content sections.',
        'Connected dynamic content feeds from the university dashboard APIs.',
        'Implemented bilingual RTL/LTR layouts and responsive navigation.',
      ],
      ar: [
        'تطوير صفحات مؤسسية متجاوبة وأقسام محتوى قابلة لإعادة الاستخدام.',
        'ربط المحتوى الديناميكي من واجهات برمجة لوحة تحكم الجامعة.',
        'تنفيذ التخطيط ثنائي اللغة (RTL/LTR) والتنقل المتجاوب.',
      ],
    },
    features: {
      en: [
        'Structured academic & faculty sections',
        'Dynamic content driven by university APIs',
        'Arabic (RTL) & English (LTR) support',
        'Mobile-first responsive layout',
      ],
      ar: [
        'أقسام أكاديمية وكليات منظّمة',
        'محتوى ديناميكي مرتبط بواجهات برمجة الجامعة',
        'دعم اللغتين العربية والإنجليزية (RTL/LTR)',
        'تصميم متجاوب لجميع الشاشات',
      ],
    },
    architecture: {
      en: 'Component-driven React frontend consuming REST APIs managed by the Al-Azhar University Dashboard.',
      ar: 'واجهة React قائمة على المكونات تستهلك واجهات REST API المدارة عبر لوحة تحكم جامعة الأزهر.',
    },
    challenges: [
      {
        challenge: {
          en: 'Presenting high volumes of institutional content without overwhelming visitors.',
          ar: 'عرض حجم كبير من المحتوى المؤسسي دون إرباك الزائر.',
        },
        approach: {
          en: 'Structured clear section hierarchies, scannable cards, and intuitive navigation menus.',
          ar: 'تنظيم تسلسل واضح للأقسام وبطاقات سهلة القراءة وقوائم تنقل بديهية.',
        },
      },
    ],
    tech: ['React.js', 'Tailwind CSS', 'REST API', 'i18next'],
    liveUrl: null,
    githubUrl: null,
    screenshots: makeShots('al-azhar-website', 8, 'Al-Azhar University Website', 'موقع جامعة الأزهر'),
  },
  {
    slug: 'azhar-ranking',
    featured: true,
    hasRealScreenshots: true,
    category: 'platform',
    industry: 'education',
    accent: '#22D3EE',
    title: {
      en: 'Azhar Ranking',
      ar: 'تصنيف الأزهر',
    },
    tagline: {
      en: 'Official ranking platform for Al-Azhar University featuring academic metrics and data visualization.',
      ar: 'منصة التصنيف الرسمية لجامعة الأزهر مع عرض مرئي للبيانات والمؤشرات الأكاديمية.',
    },
    summary: {
      en: 'Public-facing academic ranking platform for Al-Azhar University, presenting university performance indicators, research metrics, and structured visualizations in a fast, responsive React interface.',
      ar: 'منصة التصنيف الأكاديمي لجامعة الأزهر، تعرض مؤشرات أداء الجامعة والبيانات البحثية برسوم مرئية واضحة وواجهة React سريعة ومتجاوبة.',
    },
    overview: {
      en: 'Azhar Ranking presents Al-Azhar University’s academic standing and institutional metrics in an accessible, modern web experience designed for students, researchers, and international evaluators.',
      ar: 'تعرض منصة تصنيف الأزهر مكانة جامعة الأزهر ومؤشراتها المؤسسية في تجربة ويب حديثة وسهلة الوصول للطلاب والباحثين والمقيمين الدوليين.',
    },
    objectives: {
      en: [
        'Present academic indicators and ranking data clearly across desktop and mobile.',
        'Deliver smooth motion transitions without sacrificing load speed.',
        'Ensure clean information hierarchy for institutional reporting.',
      ],
      ar: [
        'عرض المؤشرات الأكاديمية وبيانات التصنيف بوضوح على كل الأجهزة.',
        'تقديم انتقالات حركية سلسة دون التأثير على سرعة التحميل.',
        'ضمان تسلسل بصري واضح للتقارير المؤسسية.',
      ],
    },
    problem: {
      en: 'Academic ranking metrics can easily overwhelm visitors when displayed as raw tables or static documents.',
      ar: 'قد تبدو مؤشرات التصنيف الأكاديمي مربكة للزوار عند عرضها كجداول جامدة أو مستندات ثابتة.',
    },
    solution: {
      en: 'Crafted an interactive React interface with structured sections, clear visual metrics, and subtle Framer Motion transitions.',
      ar: 'تصميم واجهة React تفاعلية بأقسام منظّمة ومؤشرات مرئية واضحة وانتقالات سلسة باستخدام Framer Motion.',
    },
    role: {
      en: 'Front-End Developer',
      ar: 'مطور واجهات أمامية',
    },
    responsibilities: {
      en: [
        'Built responsive page layouts and reusable metric visualization cards.',
        'Implemented smooth UI animations using Framer Motion.',
        'Optimized responsive typography and visual hierarchy.',
      ],
      ar: [
        'بناء تخطيطات متجاوبة وبطاقات عرض مرئي للمؤشرات.',
        'تنفيذ حركات واجهة سلسة باستخدام Framer Motion.',
        'تحسين التجاوب والتسلسل البصري عبر الشاشات.',
      ],
    },
    features: {
      en: [
        'Academic metrics & ranking visualization',
        'Responsive layout for all viewports',
        'Smooth Framer Motion transitions',
        'Clean institutional design system',
      ],
      ar: [
        'عرض مرئي للمؤشرات الأكاديمية والتصنيف',
        'تخطيط متجاوب لجميع الشاشات',
        'انتقالات سلسة بـ Framer Motion',
        'نظام تصميم مؤسسي نظيف',
      ],
    },
    architecture: {
      en: 'Component-based React & Tailwind CSS application structured around reusable data display sections.',
      ar: 'تطبيق React و Tailwind CSS قائم على المكونات ومبني حول أقسام عرض بيانات قابلة لإعادة الاستخدام.',
    },
    challenges: [
      {
        challenge: {
          en: 'Balancing rich visual presentation with fast initial load.',
          ar: 'الموازنة بين العرض البصري الغني وسرعة التحميل الأولى.',
        },
        approach: {
          en: 'Used lightweight Tailwind styling and hardware-accelerated motion primitives.',
          ar: 'استخدام أنماط Tailwind خفيفة وحركات مسرّعة عبر العتاد.',
        },
      },
    ],
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://azhar-ranking.com/',
    githubUrl: 'https://github.com/NAFADYY',
    screenshots: makeShots('azhar-ranking', 11, 'Azhar Ranking', 'تصنيف الأزهر'),
  },
  {
    slug: 'quality-of-visions',
    featured: true,
    hasRealScreenshots: true,
    category: 'dashboard',
    industry: 'education',
    accent: '#818CF8',
    title: {
      en: 'Quality of Visions',
      ar: 'رؤية الجودة',
    },
    tagline: {
      en: 'Academic quality assurance dashboard managing programs, courses, regulations, standards, self-studies, and reports.',
      ar: 'لوحة تحكم أكاديمية متكاملة لإدارة ضمان الجودة والبرامج والمقررات واللوائح والمعايير والدراسة الذاتية والتقارير.',
    },
    summary: {
      en: 'Complex academic and quality assurance dashboard built for educational institutions to manage programs, courses, regulations, accreditation standards, self-study workflows, and structured report generation.',
      ar: 'لوحة تحكم أكاديمية معقدة لإدارة ضمان الجودة في المؤسسات التعليمية لمتابعة البرامج والمقررات واللوائح ومعايير الاعتماد والدراسة الذاتية وإصدار التقارير.',
    },
    overview: {
      en: 'Quality of Visions streamlines institutional accreditation and academic quality workflows by organizing interconnected entities—programs, courses, standards, regulations, and self-study documentation—into a single manageable dashboard.',
      ar: 'تبسّط منصة رؤية الجودة إجراءات الاعتماد المؤسسي وضمان الجودة الأكاديمية عبر تنظيم الكيانات المترابطة مثل البرامج والمقررات والمعايير واللوائح والدراسة الذاتية في لوحة تحكم واحدة.',
    },
    objectives: {
      en: [
        'Manage interconnected academic entities (programs, courses, regulations, standards).',
        'Support multi-step self-study documentation and report generation.',
        'Keep complex state predictable with Redux and structured API calls.',
      ],
      ar: [
        'إدارة الكيانات الأكاديمية المترابطة (البرامج، المقررات، اللوائح، المعايير).',
        'دعم توثيق الدراسة الذاتية متعددة الخطوات وإصدار التقارير.',
        'الحفاظ على حالة بيانات مستقرة باستخدام Redux وربط API منظّم.',
      ],
    },
    problem: {
      en: 'Educational quality assurance teams relied on fragmented spreadsheets and documents to track accreditation standards and self-study progress.',
      ar: 'كانت فرق ضمان الجودة التعليمية تعتمد على جداول ومستندات متفرقة لمتابعة معايير الاعتماد وتقدم الدراسة الذاتية.',
    },
    solution: {
      en: 'Engineered a React + Redux dashboard backed by Axios API services that models the full accreditation hierarchy and simplifies generating institutional reports.',
      ar: 'تطوير لوحة تحكم بـ React و Redux مع خدمات Axios تمثّل الهيكل الكامل لمعايير الاعتماد وتبسط إصدار التقارير المؤسسية.',
    },
    role: {
      en: 'Front-End Developer',
      ar: 'مطور واجهات أمامية',
    },
    responsibilities: {
      en: [
        'Developed interconnected academic management modules and forms.',
        'Managed complex application state with Redux.',
        'Integrated REST APIs via Axios for CRUD operations and reporting.',
        'Built responsive dashboard layouts with Tailwind CSS.',
      ],
      ar: [
        'تطوير وحدات ونماذج الإدارة الأكاديمية المترابطة.',
        'إدارة حالة التطبيق المعقدة باستخدام Redux.',
        'ربط واجهات REST API عبر Axios لعمليات الإدارة والتقارير.',
        'بناء تخطيطات لوحة تحكم متجاوبة بـ Tailwind CSS.',
      ],
    },
    features: {
      en: [
        'Programs & courses management',
        'Regulations & accreditation standards tracking',
        'Self-study workflow management',
        'Automated report generation views',
        'Redux state management & Axios API layer',
      ],
      ar: [
        'إدارة البرامج والمقررات الدراسية',
        'متابعة اللوائح ومعايير الاعتماد',
        'إدارة خطوات الدراسة الذاتية',
        'واجهات إصدار التقارير المنظّمة',
        'إدارة الحالة بـ Redux وطبقة API بـ Axios',
      ],
    },
    architecture: {
      en: 'Modular React SPA with Redux slices per academic domain and centralized Axios interceptors.',
      ar: 'تطبيق React معياري مع شرائح Redux لكل مجال أكاديمي وطبقة Axios مركزية.',
    },
    challenges: [
      {
        challenge: {
          en: 'Handling deeply nested relationships between programs, courses, and quality standards.',
          ar: 'التعامل مع العلاقات المتداخلة بين البرامج والمقررات ومعايير الجودة.',
        },
        approach: {
          en: 'Normalized Redux state slices and built reusable hierarchical form/table components.',
          ar: 'تنظيم شرائح Redux وبناء مكونات جداول ونماذج هرمية قابلة لإعادة الاستخدام.',
        },
      },
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'Axios'],
    liveUrl: 'http://76.13.55.204:5000/',
    githubUrl: null,
    authProtected: false,
    screenshots: makeShots('quality-of-visions', 6, 'Quality of Visions', 'رؤية الجودة'),
  },
  {
    slug: 'paxi-dashboard',
    featured: false,
    hasRealScreenshots: true,
    category: 'dashboard',
    industry: 'mobility',
    accent: '#6366F1',
    title: {
      en: 'Paxi Dashboard',
      ar: 'لوحة تحكم باكسي',
    },
    tagline: {
      en: 'Comprehensive operations dashboard controlling and monitoring the Paxi Go app and website.',
      ar: 'نظام إدارة شامل للتحكم في تطبيق وموقع باكسي جو ومتابعة العمليات.',
    },
    summary: {
      en: 'Centralized management dashboard built with React, Redux, and Tailwind CSS to control and monitor operations across the Paxi Go mobility application and web platform.',
      ar: 'لوحة تحكم مركزية مبنية بـ React و Redux و Tailwind CSS لإدارة ومتابعة كل عمليات تطبيق وموقع باكسي جو.',
    },
    overview: {
      en: 'Paxi Dashboard equips operations teams with a single control center for managing rides, delivery services, content, and platform configuration for Paxi Go.',
      ar: 'تمنح لوحة تحكم باكسي فرق التشغيل مركز تحكم واحد لإدارة الرحلات وخدمات التوصيل والمحتوى وإعدادات منصة باكسي جو.',
    },
    objectives: {
      en: [
        'Centralize control over the Paxi Go mobile app and website.',
        'Provide real-time operational visibility with clean navigation.',
        'Deliver a responsive, maintainable React + Redux codebase.',
      ],
      ar: [
        'مركزة التحكم في تطبيق وموقع باكسي جو.',
        'توفير رؤية تشغيلية واضحة وتنقل سلس.',
        'تقديم قاعدة كود React و Redux متجاوبة وقابلة للصيانة.',
      ],
    },
    problem: {
      en: 'Operating both a mobility app and website required a unified admin panel to monitor and update live operational data.',
      ar: 'تطلبت إدارة تطبيق وموقع للنقل والتوصيل لوحة إدارة موحّدة لمتابعة وتحديث البيانات التشغيلية.',
    },
    solution: {
      en: 'Built a structured React + Redux admin dashboard styled with Tailwind CSS for fast operational workflows.',
      ar: 'بناء لوحة إدارة منظّمة بـ React و Redux مع Tailwind CSS لتسريع العمليات اليومية.',
    },
    role: {
      en: 'Front-End Developer',
      ar: 'مطور واجهات أمامية',
    },
    responsibilities: {
      en: [
        'Engineered operational dashboard views and management tables.',
        'Implemented centralized state management with Redux.',
        'Designed responsive UI layouts with Tailwind CSS.',
      ],
      ar: [
        'تطوير شاشات العمليات وجداول الإدارة.',
        'تنفيذ إدارة الحالة المركزية باستخدام Redux.',
        'بناء تخطيطات متجاوبة بـ Tailwind CSS.',
      ],
    },
    features: {
      en: [
        'App & website operational controls',
        'Centralized Redux state management',
        'Responsive management tables & forms',
        'Clean, high-contrast admin UI',
      ],
      ar: [
        'تحكم شامل في التطبيق والموقع',
        'إدارة حالة مركزية بـ Redux',
        'جداول ونماذج إدارة متجاوبة',
        'واجهة إدارية واضحة وعالية التباين',
      ],
    },
    architecture: {
      en: 'Component-driven React SPA with Redux store modules and Tailwind CSS utility classes.',
      ar: 'تطبيق React قائم على المكونات مع وحدات Redux وأنماط Tailwind CSS.',
    },
    challenges: [
      {
        challenge: {
          en: 'Presenting dense operational controls cleanly across screen sizes.',
          ar: 'عرض أدوات التحكم التشغيلية الكثيفة بوضوح عبر مقاسات الشاشات.',
        },
        approach: {
          en: 'Grouped controls into scannable cards with collapsible navigation and responsive tables.',
          ar: 'تجميع الأدوات في بطاقات واضحة مع قائمة جانبية قابلة للطي وجداول متجاوبة.',
        },
      },
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS'],
    liveUrl: 'https://paxi-dashboard.vercel.app/',
    githubUrl: null,
    screenshots: makeShots('paxi-dashboard', 5, 'Paxi Dashboard', 'لوحة تحكم باكسي'),
  },
  {
    slug: 'paxigo-website',
    featured: false,
    hasRealScreenshots: true,
    category: 'website',
    industry: 'mobility',
    accent: '#22D3EE',
    title: {
      en: 'PaxiGo Website',
      ar: 'موقع باكسي جو',
    },
    tagline: {
      en: 'High-performance logistics and ride-hailing web platform built with Next.js for SEO and speed.',
      ar: 'منصة لوجستية ونقل احترافية مبنية بـ Next.js لتحقيق أداء قوي وتحسين محركات البحث.',
    },
    summary: {
      en: 'Marketing and product showcase website for PaxiGo, built with Next.js, Tailwind CSS, and Framer Motion to maximize search visibility, responsiveness, and smooth bilingual presentation.',
      ar: 'موقع تعريفي وتسويقي لمنصة باكسي جو، مبني بـ Next.js و Tailwind CSS و Framer Motion لتعزيز الظهور في محركات البحث والأداء السريع.',
    },
    overview: {
      en: 'PaxiGo Website introduces riders and delivery customers to the PaxiGo mobility ecosystem with crisp Arabic/English storytelling, service showcases, and mobile app conversion flows.',
      ar: 'يعرّف موقع باكسي جو المستخدمين بمنظومة النقل والتوصيل عبر عرض بصري حديث وتفاصيل الخدمات وتحميل التطبيق.',
    },
    objectives: {
      en: [
        'Achieve strong SEO and fast page loads using Next.js.',
        'Showcase ride-hailing and delivery services with engaging motion.',
        'Support Arabic and English visitors seamlessly.',
      ],
      ar: [
        'تحقيق SEO قوي وسرعة تحميل عالية باستخدام Next.js.',
        'عرض خدمات التنقل والتوصيل بحركات جذابة.',
        'دعم الزوار باللغتين العربية والإنجليزية بسلاسة.',
      ],
    },
    problem: {
      en: 'Consumer mobility websites need immediate clarity, strong mobile performance, and SEO readiness to drive app downloads.',
      ar: 'تحتاج مواقع خدمات النقل إلى وضوح فوري وأداء ممتاز على الهواتف وجاهزية لمحركات البحث لتحفيز تحميل التطبيق.',
    },
    solution: {
      en: 'Built a Next.js site with Tailwind CSS and Framer Motion combining server-friendly rendering with fluid visual sections.',
      ar: 'بناء موقع Next.js باستخدام Tailwind CSS و Framer Motion يجمع بين الأداء العالي والأقسام التفاعلية السلسة.',
    },
    role: {
      en: 'Front-End Developer',
      ar: 'مطور واجهات أمامية',
    },
    responsibilities: {
      en: [
        'Developed responsive Next.js pages and reusable landing sections.',
        'Implemented interactive animations with Framer Motion.',
        'Structured pages for SEO and mobile performance.',
      ],
      ar: [
        'تطوير صفحات Next.js متجاوبة وأقسام هبوط قابلة لإعادة الاستخدام.',
        'تنفيذ الحركات التفاعلية باستخدام Framer Motion.',
        'هيكلة الصفحات لتحسين محركات البحث وأداء الهواتف.',
      ],
    },
    features: {
      en: [
        'Next.js performance & SEO architecture',
        'Arabic & English bilingual support',
        'Framer Motion scroll & reveal interactions',
        'Mobile-first responsive design',
      ],
      ar: [
        'معمارية Next.js للأداء وتحسين محركات البحث',
        'دعم ثنائي اللغة عربي وإنجليزي',
        'تفاعلات حركية بـ Framer Motion',
        'تصميم متجاوب يبدأ من الموبايل',
      ],
    },
    architecture: {
      en: 'Next.js application with modular landing sections, Tailwind CSS styling, and Framer Motion animations.',
      ar: 'تطبيق Next.js بأقسام هبوط معيارية وأنماط Tailwind CSS وحركات Framer Motion.',
    },
    challenges: [
      {
        challenge: {
          en: 'Keeping rich landing animations smooth on mid-range mobile devices.',
          ar: 'الحفاظ على سلاسة الحركات التفاعلية على الهواتف المتوسطة.',
        },
        approach: {
          en: 'Animated transform/opacity properties only and kept viewport triggers lightweight.',
          ar: 'تحريك خصائص transform و opacity فقط مع تشغيل خفيف عند الظهور.',
        },
      },
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://paxi.company/ar',
    githubUrl: null,
    screenshots: makeShots('paxigo-website', 4, 'PaxiGo Website', 'موقع باكسي جو'),
  },
  {
    slug: 'ulmconnect',
    featured: false,
    hasRealScreenshots: true,
    category: 'platform',
    industry: 'healthcare',
    accent: '#22D3EE',
    title: {
      en: 'UlmConnect',
      ar: 'أولم كونكت (UlmConnect)',
    },
    tagline: {
      en: 'Integrated medical services platform connecting doctors, nurses, labs, and hospitals directly with patients.',
      ar: 'منصة خدمات طبية متكاملة تربط الأطباء والممرضين والمعامل والمستشفيات بالمرضى مباشرة.',
    },
    summary: {
      en: 'Healthcare marketplace and connection platform built with React, Redux, and Tailwind CSS, enabling medical providers across specialties to publish and deliver services to patients seamlessly.',
      ar: 'منصة ربط وخدمات طبية مبنية بـ React و Redux و Tailwind CSS، تتيح لمقدمي الرعاية الصحية عرض وتقديم خدماتهم للمرضى بسهولة.',
    },
    overview: {
      en: 'UlmConnect bridges the gap between healthcare providers—doctors, nurses, diagnostic labs, and hospitals—and patients seeking accessible medical care.',
      ar: 'تجسر أولم كونكت الفجوة بين مقدمي الرعاية الصحية من أطباء وممرضين ومعامل ومستشفيات وبين المرضى الباحثين عن رعاية ميسّرة.',
    },
    objectives: {
      en: [
        'Connect multiple healthcare provider types with patients in one platform.',
        'Provide intuitive discovery and service browsing.',
        'Ensure mobile-friendly accessibility for patients on any device.',
      ],
      ar: [
        'ربط مختلف فئات مقدمي الرعاية الصحية بالمرضى في منصة واحدة.',
        'توفير تصفح واكتشاف سهل للخدمات الطبية.',
        'ضمان سهولة الوصول على الهواتف لكل المرضى.',
      ],
    },
    problem: {
      en: 'Patients needed a single, trustworthy interface to find and connect with diverse medical providers without navigating separate portals.',
      ar: 'احتاج المرضى إلى واجهة واحدة موثوقة للعثور على مختلف مقدمي الرعاية الصحية والتواصل معهم بسهولة.',
    },
    solution: {
      en: 'Created a unified React + Redux web platform with structured service categories and responsive UI flows.',
      ar: 'إنشاء منصة ويب موحّدة بـ React و Redux بتصنيفات خدمات منظّمة وتدفقات استخدام متجاوبة.',
    },
    role: {
      en: 'Front-End React Developer',
      ar: 'مطور واجهات أمامية React',
    },
    responsibilities: {
      en: [
        'Developed provider and patient-facing React interfaces.',
        'Managed shared application state with Redux.',
        'Built responsive layouts with Tailwind CSS.',
      ],
      ar: [
        'تطوير واجهات React لمقدمي الخدمة والمرضى.',
        'إدارة الحالة المشتركة للتطبيق باستخدام Redux.',
        'بناء تخطيطات متجاوبة بـ Tailwind CSS.',
      ],
    },
    features: {
      en: [
        'Multi-provider medical directory (doctors, nurses, labs, hospitals)',
        'Patient-friendly service discovery',
        'Redux state management',
        'Responsive design across devices',
      ],
      ar: [
        'دليل طبي متعدد الفئات (أطباء، تمريض، معامل، مستشفيات)',
        'تصفح سهل للخدمات الطبية',
        'إدارة الحالة بـ Redux',
        'تصميم متجاوب لجميع الأجهزة',
      ],
    },
    architecture: {
      en: 'React + Redux single-page application organized around medical service domains.',
      ar: 'تطبيق React و Redux منظّم حول مجالات الخدمات الطبية.',
    },
    challenges: [
      {
        challenge: {
          en: 'Serving distinct service types (clinics, labs, home nursing) within one consistent UI.',
          ar: 'خدمة فئات طبية مختلفة داخل واجهة واحدة متسقة.',
        },
        approach: {
          en: 'Built flexible, reusable service card and profile components adaptable per provider type.',
          ar: 'بناء بطاقات خدمات وملفات شخصية مرنة وقابلة للتكيّف مع كل فئة.',
        },
      },
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS'],
    liveUrl: 'https://ulmconnect.com/',
    githubUrl: null,
    screenshots: makeShots('ulmconnect', 8, 'UlmConnect', 'أولم كونكت'),
  },
  {
    slug: 'ulm-care',
    featured: false,
    hasRealScreenshots: true,
    category: 'platform',
    industry: 'healthcare',
    accent: '#818CF8',
    title: {
      en: 'Ulm Care',
      ar: 'أولم كير (Ulm Care)',
    },
    tagline: {
      en: 'Comprehensive medical services platform with an integrated appointment booking system.',
      ar: 'منصة خدمات طبية شاملة مع نظام متكامل لحجز المواعيد.',
    },
    summary: {
      en: 'Patient-centered healthcare platform built with React, Tailwind CSS, and Axios, featuring service browsing, medical tourism options, provider profiles, and integrated appointment booking.',
      ar: 'منصة رعاية صحية موجّهة للمرضى مبنية بـ React و Tailwind CSS و Axios، تضم تصفح الخدمات والسياحة العلاجية وملفات الأطباء ونظام حجز مواعيد متكامل.',
    },
    overview: {
      en: 'Ulm Care delivers an accessible digital gateway to healthcare services, guiding patients from exploring medical specialties to booking appointments smoothly.',
      ar: 'تقدم أولم كير بوابة رقمية ميسّرة للخدمات الصحية، ترشد المرضى من استكشاف التخصصات الطبية وحتى حجز المواعيد بسلاسة.',
    },
    objectives: {
      en: [
        'Offer clear browsing of healthcare services and medical centers.',
        'Provide a smooth, reliable appointment booking flow.',
        'Support bilingual users with responsive design.',
      ],
      ar: [
        'تقديم تصفح واضح للخدمات الصحية والمراكز الطبية.',
        'توفير تجربة حجز مواعيد سلسة وموثوقة.',
        'دعم المستخدمين بتصميم متجاوب وثنائي اللغة.',
      ],
    },
    problem: {
      en: 'Booking medical appointments online often breaks down due to cluttered forms and unclear feedback.',
      ar: 'غالبًا ما تتعثر تجربة حجز المواعيد الطبية عبر الإنترنت بسبب النماذج المزدحمة وغياب الوضوح.',
    },
    solution: {
      en: 'Engineered a clean React frontend with Axios API integration, step-by-step booking UX, and responsive Tailwind layouts.',
      ar: 'تطوير واجهة React نظيفة مرتبطة بـ Axios مع تجربة حجز واضحة وتخطيطات Tailwind متجاوبة.',
    },
    role: {
      en: 'Front-End React Developer',
      ar: 'مطور واجهات أمامية React',
    },
    responsibilities: {
      en: [
        'Built responsive service pages and appointment booking flows.',
        'Integrated REST APIs with Axios and robust error handling.',
        'Implemented accessible, mobile-friendly UI components.',
      ],
      ar: [
        'بناء صفحات الخدمات المتجاوبة وتدفقات حجز المواعيد.',
        'ربط واجهات REST API بـ Axios مع معالجة قوية للأخطاء.',
        'تنفيذ مكونات واجهة متاحة ومتوافقة مع الهواتف.',
      ],
    },
    features: {
      en: [
        'Integrated appointment booking system',
        'Medical services & providers directory',
        'Axios REST API integration',
        'Responsive desktop & mobile experience',
      ],
      ar: [
        'نظام متكامل لحجز المواعيد',
        'دليل الخدمات الطبية ومقدمي الرعاية',
        'ربط API عبر Axios',
        'تجربة متجاوبة على الكمبيوتر والموبايل',
      ],
    },
    architecture: {
      en: 'React frontend with Axios service layer and Tailwind CSS component styling.',
      ar: 'واجهة React مع طبقة خدمات Axios وأنماط مكونات Tailwind CSS.',
    },
    challenges: [
      {
        challenge: {
          en: 'Handling API latency and validation smoothly during appointment booking.',
          ar: 'معالجة زمن استجابة الـ API والتحقق من البيانات بسلاسة أثناء الحجز.',
        },
        approach: {
          en: 'Added clear loading indicators, inline field validation, and resilient Axios error handling.',
          ar: 'إضافة مؤشرات تحميل واضحة وتحقق فوري للحقول ومعالجة مرنة لأخطاء Axios.',
        },
      },
    ],
    tech: ['React.js', 'Tailwind CSS', 'Axios'],
    liveUrl: 'https://ulmcare.com/',
    githubUrl: null,
    screenshots: makeShots('ulm-care', 7, 'Ulm Care', 'أولم كير'),
  },
  {
    slug: 'certiverify',
    featured: false,
    hasRealScreenshots: true,
    category: 'dashboard',
    industry: 'education',
    accent: '#38BDF8',
    title: {
      en: 'CertiVerify',
      ar: 'سيرتي فيريفاي (CertiVerify)',
    },
    tagline: {
      en: 'Certificate verification & management system for the Faculty of Engineering, Al-Azhar University.',
      ar: 'نظام التحقق من الشهادات وإدارتها لكلية الهندسة بجامعة الأزهر مع العلامات المائية ورموز QR.',
    },
    summary: {
      en: 'Built for the Faculty of Engineering, Al-Azhar University. Enables administrators to manage users, track certificate creation statistics, apply watermarks, and verify authenticity via QR code scanning.',
      ar: 'مبني لكلية الهندسة بجامعة الأزهر؛ يتيح للمسؤولين إدارة المستخدمين وتتبع إحصائيات إصدار الشهادات وتطبيق العلامات المائية والتحقق من الصحة عبر مسح رموز QR.',
    },
    overview: {
      en: 'CertiVerify digitizes academic certificate issuance and verification, giving faculty administrators full visibility over issued certificates while offering instant QR-based authenticity checks.',
      ar: 'يرقمن نظام CertiVerify إصدار الشهادات الأكاديمية والتحقق منها، مما يمنح مسؤولي الكلية رؤية كاملة للشهادات الصادرة مع تحقق فوري عبر رمز QR.',
    },
    objectives: {
      en: [
        'Enable secure user and certificate lifecycle management.',
        'Provide creation statistics and watermarking workflows.',
        'Support fast QR code verification for issued certificates.',
      ],
      ar: [
        'تمكين إدارة آمنة للمستخدمين ودورة حياة الشهادات.',
        'توفير إحصائيات الإصدار وتدفقات إضافة العلامات المائية.',
        'دعم التحقق السريع من الشهادات عبر رموز QR.',
      ],
    },
    problem: {
      en: 'Manual verification of academic certificates was time-consuming and vulnerable to forgery.',
      ar: 'كان التحقق اليدوي من الشهادات الأكاديمية يستغرق وقتًا طويلاً وعرضة للتزوير.',
    },
    solution: {
      en: 'Built a dedicated React + Redux management dashboard with certificate tracking statistics, watermark controls, and QR verification flows.',
      ar: 'بناء لوحة إدارة متخصصة بـ React و Redux مع إحصائيات تتبع الشهادات وأدوات العلامات المائية وتدفقات التحقق بـ QR.',
    },
    role: {
      en: 'Front-End Developer',
      ar: 'مطور واجهات أمامية',
    },
    responsibilities: {
      en: [
        'Built user management, statistics views, and certificate issuance UI.',
        'Implemented watermark preview and QR verification workflows.',
        'Integrated backend APIs with Axios and Redux.',
      ],
      ar: [
        'بناء واجهات إدارة المستخدمين والإحصائيات وإصدار الشهادات.',
        'تنفيذ معاينة العلامة المائية وتدفقات التحقق بـ QR.',
        'ربط واجهات الخلفية باستخدام Axios و Redux.',
      ],
    },
    features: {
      en: [
        'Administrator & user management',
        'Certificate creation statistics',
        'Document watermarking controls',
        'QR code scanning & verification',
      ],
      ar: [
        'إدارة المسؤولين والمستخدمين',
        'إحصائيات إصدار الشهادات',
        'إضافة العلامات المائية للوثائق',
        'مسح رموز QR والتحقق الفوري',
      ],
    },
    architecture: {
      en: 'React + Redux dashboard integrated with REST APIs via Axios for authenticated admin operations and public QR checks.',
      ar: 'لوحة تحكم React و Redux متكاملة مع واجهات REST عبر Axios للعمليات الإدارية والتحقق عبر QR.',
    },
    challenges: [
      {
        challenge: {
          en: 'Making certificate verification instant and clear on mobile devices.',
          ar: 'جعل التحقق من الشهادات فوريًا وواضحًا على الهواتف المحمولة.',
        },
        approach: {
          en: 'Designed a focused mobile-first verification view with unambiguous status feedback.',
          ar: 'تصميم شاشة تحقق مخصصة للموبايل بحالات نتيجة واضحة وفورية.',
        },
      },
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS', 'Axios'],
    liveUrl: 'https://centerofplanning.org/login',
    githubUrl: null,
    authProtected: false,
    screenshots: makeShots('certiverify', 7, 'CertiVerify', 'سيرتي فيريفاي'),
  },
  {
    slug: 'newulm-dashboard',
    featured: false,
    hasRealScreenshots: false,
    category: 'dashboard',
    industry: 'healthcare',
    accent: '#6366F1',
    title: {
      en: 'Newulm Dashboard',
      ar: 'لوحة تحكم نيو أولم',
    },
    tagline: {
      en: 'Healthcare administration dashboard with dynamic data management and real-time updates.',
      ar: 'لوحة تحكم متقدمة لإدارة الرعاية الصحية مع إدارة ديناميكية للبيانات وتحديثات فورية.',
    },
    summary: {
      en: 'Admin system built at Newulm Medical Company using React, Redux, and Tailwind CSS to manage healthcare operations, dynamic records, and diagnostic workflows.',
      ar: 'نظام إدارة مبني في شركة نيو أولم الطبية باستخدام React و Redux و Tailwind CSS لإدارة عمليات الرعاية الصحية والبيانات الديناميكية.',
    },
    overview: {
      en: 'Newulm Dashboard powers healthcare administrators with responsive views for managing providers, patients, bookings, and dynamic operational metrics.',
      ar: 'تمكّن لوحة تحكم نيو أولم مسؤولي الرعاية الصحية من إدارة مقدمي الخدمة والمرضى والحجوزات والمؤشرات التشغيلية بواجهة متجاوبة.',
    },
    objectives: {
      en: [
        'Manage dynamic healthcare records and administrative workflows.',
        'Ensure responsive usability for medical operations staff.',
        'Maintain predictable state across real-time updates.',
      ],
      ar: [
        'إدارة السجلات الصحية الديناميكية وتدفقات العمل الإدارية.',
        'ضمان سهولة الاستخدام والتجاوب لفرق التشغيل الطبي.',
        'الحفاظ على استقرار الحالة مع التحديثات الفورية.',
      ],
    },
    problem: {
      en: 'Healthcare administration involves frequent status changes and multi-role data entry that demand speed and clarity.',
      ar: 'تتضمن إدارة الرعاية الصحية تغييرات متكررة في الحالات وإدخال بيانات متعددة تتطلب سرعة ووضوحًا.',
    },
    solution: {
      en: 'Implemented a Redux-backed React dashboard with reusable data tables, filters, and clean feedback states.',
      ar: 'تنفيذ لوحة تحكم React مدعومة بـ Redux مع جداول وفلاتر قابلة لإعادة الاستخدام وحالات استجابة واضحة.',
    },
    role: {
      en: 'Front-End React Developer',
      ar: 'مطور واجهات أمامية React',
    },
    responsibilities: {
      en: [
        'Built complex healthcare dashboard modules with Redux and Tailwind CSS.',
        'Developed dynamic data management screens and forms.',
        'Improved UX and responsiveness across operational workflows.',
      ],
      ar: [
        'بناء وحدات لوحة تحكم طبية معقدة بـ Redux و Tailwind CSS.',
        'تطوير شاشات ونماذج إدارة البيانات الديناميكية.',
        'تحسين تجربة المستخدم والتجاوب عبر تدفقات العمل.',
      ],
    },
    features: {
      en: [
        'Dynamic healthcare data management',
        'Real-time operational updates',
        'Redux state architecture',
        'Responsive admin layout',
      ],
      ar: [
        'إدارة ديناميكية للبيانات الصحية',
        'تحديثات تشغيلية فورية',
        'معمارية حالة بـ Redux',
        'تخطيط إداري متجاوب',
      ],
    },
    architecture: {
      en: 'Modular React + Redux administration platform styled with Tailwind CSS.',
      ar: 'منصة إدارة React و Redux معيارية ومصممة بـ Tailwind CSS.',
    },
    challenges: [
      {
        challenge: {
          en: 'Keeping UI responsive while handling frequent data refreshes.',
          ar: 'الحفاظ على استجابة الواجهة مع التحديثات المتكررة للبيانات.',
        },
        approach: {
          en: 'Scoped Redux selectors and memoized heavy table rows to avoid unnecessary re-renders.',
          ar: 'تحديد نطاق محددات Redux وتقليل إعادة التصيير غير الضرورية في الجداول.',
        },
      },
    ],
    tech: ['React.js', 'Redux', 'Tailwind CSS'],
    liveUrl: 'https://dashboard.ulmcare.com/login',
    githubUrl: null,
    authProtected: true,
    screenshots: [
      {
        src: '/projects/placeholders/newulm-dashboard-1.svg',
        caption: { en: 'Healthcare administration overview', ar: 'نظرة عامة على إدارة الرعاية الصحية' },
      },
      {
        src: '/projects/placeholders/newulm-dashboard-2.svg',
        caption: { en: 'Dynamic records & operational workflows', ar: 'السجلات الديناميكية وتدفقات العمل' },
      },
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);

export const getRelatedProjects = (project, limit = 3) => {
  const others = projects.filter((p) => p.slug !== project.slug);
  const scored = others.map((p) => ({
    project: p,
    score: (p.category === project.category ? 2 : 0) + (p.industry === project.industry ? 2 : 0) + (p.featured ? 1 : 0),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.project);
};
