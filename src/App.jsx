import Sidebar from './components/Sidebar.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import ExternalLink from './components/ExternalLink.jsx';
import { SECTIONS } from './data.js';
import { useActiveSection } from './useActiveSection.js';

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
