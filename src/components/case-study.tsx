import ExternalLink from './external-link';
import ScreenGallery from './screen-gallery';
import { CASE_STUDY_SHOTS } from '../data';

export default function CaseStudy() {
  return (
    <section id="case-study">
      <p className="eyebrow">Case Study</p>
      <h2>From a tangled Dojo UI to a tested Angular platform</h2>
      <div className="case-study">
        <div className="cs-step">
          <div className="cs-num">1</div>
          <div>
            <h3>Phase 1: Stabilizing the Dojo UI</h3>
            <p>
              When I joined Aerohive, the cloud UI was a monolithic, spaghetti-style Dojo codebase with no
              unit tests, and constant merge conflicts made every commit painful. Instead of waiting for a
              rewrite, I improved it in place: restructured it around MVVM, built unit testing from scratch
              with Intern (95%+ coverage), gave it a more modern look, improved load performance, and
              standardized the code so committing and merging became easy.
            </p>
            <ScreenGallery shots={CASE_STUDY_SHOTS.dojo} label="Dojo UI before and after" />
          </div>
        </div>
        <div className="cs-step">
          <div className="cs-num">2</div>
          <div>
            <h3>Phase 2: Migrating to Angular</h3>
            <p>
              Later, the decision was made to move the UI — ExtremeCloud IQ, which has since evolved into{' '}
              <ExternalLink href="https://www.extremenetworks.com/platform-one">
                Extreme Platform ONE
              </ExternalLink>{' '}
              — to Angular. Several teams migrated different areas in parallel; my team and I took on several
              modules.
            </p>
            <ul>
              <li>
                Moved modules over incrementally while keeping a biweekly release cadence, including ongoing
                bug fixes on the live product.
              </li>
              <li>Standardized our codebase and built unit testing from scratch (Jest) to 99% coverage.</li>
              <li>
                Added automated quality checks: custom ESLint rules for accessibility, architectural integrity
                and automation tags, plus Stylelint rules and GitHub checks.
              </li>
            </ul>
          </div>
        </div>
        <div className="cs-step">
          <div className="cs-num">3</div>
          <div>
            <h3>The outcome</h3>
            <p>
              My team's portion was largely complete by the time I left, with only a few legacy modules
              remaining. Both codebases ended up with a durable safety net of tests and automated standards,
              giving the team room to keep shipping quickly without regressions.
            </p>
            <ScreenGallery shots={CASE_STUDY_SHOTS.angular} label="Extreme Platform ONE screens" />
          </div>
        </div>
      </div>
    </section>
  );
}
