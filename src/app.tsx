import Sidebar from './components/sidebar.jsx';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import CaseStudy from './components/case-study.jsx';
import Skills from './components/skills.jsx';
import Contact from './components/contact.jsx';
import ExternalLink from './components/external-link.jsx';
import { SECTIONS } from './data.js';
import { useActiveSection } from './use-active-section.js';

export default function App() {
  const active = useActiveSection(SECTIONS);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="layout">
        <Sidebar active={active} />
        <div className="content">
          <main id="main" tabIndex={-1}>
            <About />
            <Experience />
            <CaseStudy />
            <Skills />
            <Contact />
          </main>
          <footer>
            Designed and built by John Borges with React + Vite ·{' '}
            <ExternalLink href="https://github.com/johncborges/john-borges-portfolio-react">View source</ExternalLink>
          </footer>
        </div>
      </div>
    </>
  );
}
