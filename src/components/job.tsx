import Tag from './tag';
import type { Job as JobData } from '../data';

export default function Job({ dates, title, company, bullets, tags }: JobData) {
  return (
    <div className="job">
      <div className="dates">{dates}</div>
      <div>
        <h3>{title}</h3>
        <p className="company">{company}</p>
        {bullets && (
          <ul>
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        {tags && (
          <div className="tags">
            {tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
