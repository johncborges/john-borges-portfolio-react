import ExternalLink from './ExternalLink.jsx';
import { SECTIONS } from '../data.js';

export default function Sidebar({ active }) {
  return (
    <header className="sidebar">
      <div>
        <div className="avatar">
          <img src="/john-photo.jpg" alt="" width="76" height="76" />
        </div>
        <h1>John Borges</h1>
        <p className="role">Principal Frontend Engineer</p>
        <p className="loc">California, US — Open to Remote</p>
        <nav aria-label="Section navigation">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? 'active' : ''}
                  aria-current={active === s.id ? 'true' : undefined}
                >
                  <span className="bar"></span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="social">
        <a href="mailto:johncborges@gmail.com">Email</a>
        <ExternalLink href="https://www.linkedin.com/in/johnborges/">LinkedIn</ExternalLink>
      </div>
    </header>
  );
}
