import ExternalLink from './ExternalLink.jsx';

export default function CaseStudy() {
  return (
    <section id="case-study">
      <p className="eyebrow">Case Study</p>
      <h2>Leading a team through a Dojo-to-Angular migration</h2>
      <div className="case-study">
        <div className="cs-step">
          <div className="cs-num">1</div>
          <div>
            <h3>The problem</h3>
            <p>
              ExtremeCloud IQ — Extreme Networks' cloud network management product, which has since evolved into{' '}
              <ExternalLink href="https://www.extremenetworks.com/platform-one">Extreme Platform ONE</ExternalLink>{' '}
              — had a UI built on Dojo, an aging framework with no unit tests and no code coverage. It's a large
              platform, so multiple teams were migrating different areas in parallel. I led my own team's portion:
              modernizing several of our modules to Angular without disrupting a product customers were actively
              using to run their networks.
            </p>
          </div>
        </div>
        <div className="cs-step">
          <div className="cs-num">2</div>
          <div>
            <h3>The approach</h3>
            <p>
              Rather than a risky rewrite, my team migrated our modules incrementally onto Angular — helped by a
              micro frontend architecture that let pieces ship independently of what other teams were doing
              elsewhere in the platform. This wasn't a side project: we kept up a biweekly release cadence the
              whole time, including ongoing bug fixes on the live product, so the migration had to happen without
              slowing down what customers were shipping and depending on. In parallel, I built testing
              infrastructure from the ground up: Intern for the legacy Dojo modules still in use, Jest for the
              growing Angular codebase, plus custom ESLint/Stylelint rules and GitHub CI checks to hold the line
              on quality as the app grew past 200,000 lines.
            </p>
          </div>
        </div>
        <div className="cs-step">
          <div className="cs-num">3</div>
          <div>
            <h3>The outcome</h3>
            <p>
              My team's portion was largely complete by the time I left, with only a few legacy modules
              remaining. Test coverage went from effectively zero to a durable safety net across both frameworks
              — giving my team room to keep shipping quickly without regressions.
            </p>
          </div>
        </div>
        <div className="metrics">
          <div className="metric">
            <div className="num">99%</div>
            <div className="label">Angular coverage, 200K+ lines</div>
          </div>
          <div className="metric">
            <div className="num">95%+</div>
            <div className="label">Dojo coverage, built from zero</div>
          </div>
          <div className="metric">
            <div className="num">3–12</div>
            <div className="label">Engineers guided through it</div>
          </div>
        </div>
      </div>
    </section>
  );
}
