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
    sidebar.jsx         sticky sidebar: name, nav, contact links
    about.jsx           intro / positioning section
    job.jsx             single job entry (used by Experience)
    experience.jsx      maps over JOBS data → Job components
    case-study.jsx      Dojo stabilization → Angular migration case study
    skills.jsx          maps over SKILL_GROUPS data
    contact.jsx         closing CTA + contact links
    tag.jsx             small reusable pill/tag
    external-link.jsx   link that opens in a new tab, with screen-reader notice
    icon.jsx            inline SVG icons (email, LinkedIn, GitHub, resume)
    video-embed.jsx     click-to-load YouTube embed with local thumbnail
  data.js               jobs, skills, and nav sections as data
  use-active-section.js custom hook: highlights nav link for section in view
  app.jsx               composes all sections
  main.jsx              React entry point
  index.css             global styles / design tokens
public/
  favicon.svg           browser tab icon
  john-photo.jpg        sidebar avatar
  og-image.jpg          social link preview image
  ecq-walkthrough.jpg   case study video thumbnail
  john-borges-resume.pdf  downloadable resume
index.html              Vite HTML entry (title, meta and social preview tags)
```

File names use lowercase kebab-case; component names in code stay PascalCase.

Job history, skills, and nav sections live in `src/data.js`, so they can be
updated without touching component code. The About, Case Study, and Contact
text lives directly in their components.

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
