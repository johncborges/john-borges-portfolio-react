import Tag from './Tag.jsx';

export default function Job({ dates, title, company, bullets, tags }) {
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
