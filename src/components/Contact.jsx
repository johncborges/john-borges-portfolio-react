import ExternalLink from './ExternalLink.jsx';

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
        <a href="mailto:johncborges@gmail.com">johncborges@gmail.com</a>
        <ExternalLink href="https://www.linkedin.com/in/johnborges/">linkedin.com/in/johnborges</ExternalLink>
      </div>
    </section>
  );
}
