import { useState } from 'react';
import ExternalLink from './external-link.jsx';

// Large screenshot with clickable thumbnails underneath.
export default function ScreenGallery({ shots, label }) {
  const [index, setIndex] = useState(0);
  const shot = shots[index];

  return (
    <figure className="shots" aria-label={label}>
      <div className="shots-frame">
        <img key={shot.src} src={shot.src} alt={shot.title} loading="lazy" />
      </div>
      <div className="shots-thumbs" style={{ '--cols': shots.length }}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            className="shots-thumb"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            <img src={s.src} alt="" loading="lazy" />
            <span>{s.label}</span>
          </button>
        ))}
      </div>
      <figcaption>
        {shot.title} · Source: <ExternalLink href={shot.source.href}>{shot.source.label}</ExternalLink>
      </figcaption>
    </figure>
  );
}
