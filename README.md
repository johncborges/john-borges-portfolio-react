# John Borges — Portfolio

A personal portfolio site built with React + Vite.

## Stack

- React 18
- Vite (build tool / dev server)
- Plain CSS (no framework — custom design tokens in `src/index.css`)

## Project structure

```
src/
  components/
    Sidebar.jsx      sticky sidebar: name, nav, social links
    About.jsx        intro / positioning section
    Job.jsx           single job entry (used by Experience)
    Experience.jsx    maps over JOBS data → Job components
    CaseStudy.jsx     Dojo → Angular migration case study
    Skills.jsx        maps over SKILL_GROUPS data
    Contact.jsx       closing CTA + contact links
    Tag.jsx           small reusable pill/tag
  data.js             all content (jobs, skills, nav sections) as data
  useActiveSection.js custom hook: highlights nav link for section in view
  App.jsx             composes all sections
  main.jsx            React entry point
  index.css           global styles / design tokens
index.html            Vite HTML entry
```

Content lives in `src/data.js` — update job history, skills, or bullets there
without touching component code.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deploying

`npm run build` outputs a static `dist/` folder that can be hosted anywhere
that serves static files (Vercel, Netlify, GitHub Pages, S3, etc.).
