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
      'Technical Lead for a frontend team of 3–12 engineers; guided UI architecture direction, including a micro frontend system, for ExtremeCloud IQ / Extreme Platform ONE',
      "Led my team's portion of the incremental migration of ExtremeCloud IQ's UI from Dojo to Angular — one of several teams migrating different areas of the platform — see case study below",
      'Built a shared component library with Lit (LitElement), publishing framework-agnostic Web Components via Storybook for use across both Angular and React projects',
      'Took a 200,000+ line Angular codebase to 99% unit test coverage; built Dojo testing infrastructure from scratch to 95%+',
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
