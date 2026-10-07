import Sidebar from './components/sidebar';
import About from './components/about';
import Experience from './components/experience';
import CaseStudy from './components/case-study';
import Skills from './components/skills';
import Contact from './components/contact';
import ExternalLink from './components/external-link';
import { SECTIONS } from './data';
import { useActiveSection } from './use-active-section';

export default function App() {
  const active = useActiveSection(SECTIONS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
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
            <ExternalLink href="https://github.com/johncborges/john-borges-portfolio-react">
              View source
            </ExternalLink>
          </footer>
        </div>
      </div>
    </>
  );
}
