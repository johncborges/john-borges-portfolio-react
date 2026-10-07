import ExternalLink from './external-link.jsx';
import Icon from './icon.jsx';

export default function Contact() {
  return (
    <section id="contact">
      <p className="eyebrow">Contact</p>
      <h2>Let's talk</h2>
      <p>
        I'm looking for a fully remote Principal, Staff, or Technical Lead Frontend Engineer role. If my
        background looks like a fit, I'd love to hear from you.
      </p>
      <div className="contact-links">
        <a href="mailto:johncborges@gmail.com">
          <Icon name="email" />
          johncborges@gmail.com
        </a>
        <ExternalLink href="https://www.linkedin.com/in/johnborges/">
          <Icon name="linkedin" />
          linkedin.com/in/johnborges
        </ExternalLink>
        <ExternalLink href="https://github.com/johncborges">
          <Icon name="github" />
          github.com/johncborges
        </ExternalLink>
        <a href="/john-borges-resume.pdf" download>
          <Icon name="resume" />
          Download resume (PDF)
        </a>
      </div>
    </section>
  );
}
