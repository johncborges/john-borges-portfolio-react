export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const JOBS = [
  {
    dates: '2018 — 2026',
    title: 'Principal Frontend Engineer',
    company: 'Extreme Networks · joined via acquisition of Aerohive Networks',
    bullets: [
      'Technical Lead for a frontend team of 3–12 engineers; shaped frontend technical direction, including a micro frontend system, for Extreme Platform ONE',
            "Modernized the legacy Dojo UI: replaced a monolithic codebase with MVVM, built unit testing from scratch (95%+), delivered a more modern look and faster load times, and standardized the code to end chronic merge conflicts",
      "Led my team's portion of the later incremental migration to Angular — one of several teams migrating different areas of the platform — owning several modules while keeping a biweekly release cadence (see case study)",
      "Built Angular unit testing from scratch to 99% coverage on a 1,000,000+ line codebase; wrote custom ESLint/Stylelint rules enforcing accessibility, architectural integrity and automation tags, plus GitHub checks",
      'Built a shared component library with Lit (LitElement), publishing framework-agnostic Web Components via Storybook for use across both Angular and React projects',
      'Conducted technical interviews, onboarded new team members, mentored developers',
    ],
    tags: ['Angular', 'Dojo', 'TypeScript', 'Jest', 'Intern', 'Selenium', 'GitHub Copilot', 'Claude Code', 'Lit', 'Web Components', 'Storybook'],
  },
  {
    dates: '2010 — 2018',
    title: 'Senior Software Engineer',
    company: 'OpenText · joined via acquisition of Daegis',
    bullets: [
      'Built the OpenText AppWorks web UI (Aurelia, Node.js) with custom controls, RTL and multi-language support',
      'Owned engineering for Daegis Edge, an eDiscovery SaaS product — production issues, releases, code review',
      'Migrated Daegis Edge from ASP to C#/Silverlight/WCF RIA Services; decoupled its UI to the MVVM pattern',
    ],
    tags: ['Aurelia', 'Node.js', 'C#', 'Silverlight', 'REST API', 'SQL Server'],
  },
  {
    dates: '2008 — 2012',
    title: 'Software Architect & Lead Software Engineer',
    company: 'Briance Creative · Side business, run alongside full-time roles',
    bullets: ['Architected and led development of websites for a handful of small businesses'],
    tags: ['PHP', 'WordPress', 'Zend Framework', 'MySQL'],
  },
  {
    dates: '2000 — 2010',
    title: 'Earlier career',
    company: 'CrestPoint Solutions · Contra Costa County · Maxim Integrated · Wells Fargo · Integrated Silicon Solution',
    bullets: ['Enterprise .NET, ASP.NET, SQL Server and Oracle application development, database design, and business systems consulting'],
    tags: null,
  },
];

export const SKILL_GROUPS = [
  {
    label: 'Frontend',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Aurelia', 'Dojo', 'Lit', 'Web Components', 'Storybook', 'React'],
  },
  {
    label: 'Design & UX',
    items: ['Pixel-Perfect UI Craft', 'Visual Design', 'Interaction Design', 'Typography'],
  },
  {
    label: 'Quality & Tooling',
    items: ['Jest', 'Intern', 'Selenium', 'Robot Framework', 'ESLint', 'Stylelint', 'Git', 'JIRA', 'TeamCity'],
  },
  {
    label: 'AI-Assisted Development',
    items: ['GitHub Copilot', 'Claude Code'],
  },
  {
    label: 'Leadership',
    items: ['Technical Leadership', 'Mentoring', 'Technical Interviewing', 'Code Review'],
  },
];

// Product screenshots for the case study, taken from public demo videos.
const SOURCES = {
  hivemanager: { label: 'Aerohive demo by Cerdant (2018)', href: 'https://www.youtube.com/watch?v=ocQeTNd5sek' },
  xiq: { label: 'ExtremeCloud IQ New Features (2020)', href: 'https://www.youtube.com/watch?v=qrhCoZJlJy8' },
  platformOne: { label: 'Extreme Platform ONE demo (2025)', href: 'https://www.youtube.com/watch?v=-IRG4TWVQxg' },
};

export const CASE_STUDY_SHOTS = {
  dojo: [
    {
      src: '/product/hivemanager-client360.webp',
      label: '2018 · Before',
      title: 'Client 360 in HiveManager NG, the Dojo UI I inherited at Aerohive',
      source: SOURCES.hivemanager,
    },
    {
      src: '/product/xiq-client360.webp',
      label: '2020 · After',
      title: 'The same Client 360 view in ExtremeCloud IQ, after the Dojo modernization',
      source: SOURCES.xiq,
    },
  ],
  angular: [
    {
      src: '/product/p1-dashboard.webp',
      label: 'Dashboard',
      title: 'Extreme Platform ONE monitoring dashboard',
      source: SOURCES.platformOne,
    },
    {
      src: '/product/p1-visualize.webp',
      label: 'Visualize',
      title: 'Extreme Platform ONE topology view',
      source: SOURCES.platformOne,
    },
    {
      src: '/product/p1-network-devices.webp',
      label: 'Network devices',
      title: 'Extreme Platform ONE network devices list',
      source: SOURCES.platformOne,
    },
  ],
};
