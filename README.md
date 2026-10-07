# John Borges — Portfolio

My personal portfolio site, built with React, TypeScript and Vite. It is also a working sample of how I
build in React: typed components, a custom hook, tests, accessibility linting and CI.

## Stack

- React 18 + TypeScript (strict)
- Vite (build tool and dev server)
- Plain CSS with design tokens in `src/index.css` (no CSS framework)
- Vitest + React Testing Library for tests
- ESLint (`typescript-eslint`, `react-hooks`, `jsx-a11y`) and Prettier
- GitHub Actions for CI

## Scripts

```bash
npm install
npm run dev            # local dev server
npm run build          # production build → dist/
npm run preview        # preview the production build locally

npm run lint           # ESLint, including jsx-a11y accessibility rules
npm run typecheck      # tsc --noEmit
npm test               # run the test suite once
npm run test:watch     # tests in watch mode
npm run test:coverage  # tests with a coverage report
npm run check          # lint + typecheck + tests
npm run format         # Prettier, write
npm run format:check   # Prettier, check only
```

## Project structure

File names use lowercase kebab-case; component names in code stay PascalCase.

```
src/
  components/
    sidebar.tsx          sticky sidebar: name, nav, contact links
    about.tsx            intro / positioning section
    job.tsx              single job entry (used by Experience)
    experience.tsx       maps over JOBS data → Job components
    case-study.tsx       Dojo stabilization → Angular migration case study
    screen-gallery.tsx   screenshot viewer with thumbnails and source credit
    skills.tsx           maps over SKILL_GROUPS data
    contact.tsx          closing CTA + contact links
    tag.tsx              small reusable pill/tag
    external-link.tsx    link that opens in a new tab, with screen-reader notice
    icon.tsx             inline SVG icons (email, LinkedIn, GitHub, resume)
  test/
    setup.ts             Testing Library / jest-dom setup
  data.ts               typed jobs, skills, nav sections and case study screenshots
  use-active-section.ts custom hook: highlights the nav link for the section in view
  app.tsx               composes all sections
  main.tsx              React entry point
  index.css             global styles / design tokens
public/
  favicon.svg           browser tab icon
  john-photo.jpg        sidebar avatar
  og-image.jpg          social link preview image
  product/              case study screenshots (credited in data.ts)
  john-borges-resume.pdf  downloadable resume
index.html              Vite HTML entry (title, meta and social preview tags)
```

Job history, skills, nav sections and screenshot credits live in `src/data.ts`, so they can be updated
without touching component code. The About, Case Study and Contact text lives directly in their components.

## Design decisions

- **Content as typed data.** Jobs, skills and screenshots are plain typed objects rendered by small
  components, so a content change never needs a component change, and the compiler catches malformed entries.
- **Logic separate from the DOM.** `useActiveSection` is a thin hook around a pure function
  (`pickActiveSectionId`), which is unit tested without a browser.
- **Accessibility built in, not bolted on.** Skip link, `aria-current` on the active nav link, visible focus
  styles, reduced-motion support, an "opens in new tab" notice on external links, and `jsx-a11y` lint rules
  that fail the build.
- **No runtime dependencies beyond React.** Small bundle, nothing to keep patched.
- **Screenshots are credited.** Every product image links to the public video it was taken from.

## Testing

Tests live beside the code (`*.test.ts` / `*.test.tsx`) and cover:

- the active-section logic and the hook's scroll behavior
- the screenshot gallery, including keyboard use
- rendering of jobs and skills from the data file
- the page's landmarks, nav, external-link safety and resume download
- content integrity: unique keys, and every referenced image or file exists in `public/`

CI runs lint, typecheck, tests with coverage, and the production build on every push and pull request
(`.github/workflows/ci.yml`).

## Deploying

`npm run build` outputs a static `dist/` folder that can be hosted anywhere that serves static files
(Vercel, Netlify, GitHub Pages, S3, etc.).
