import { useEffect, useRef, useState } from 'react';

// Shows a local thumbnail and only loads the YouTube player once the visitor presses play.
export default function VideoEmbed({ id, title, thumbnail, duration, children }) {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    if (playing) frameRef.current?.focus();
  }, [playing]);

  return (
    <figure className="video">
      <div className="video-frame">
        {playing ? (
          <iframe
            ref={frameRef}
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="video-play" onClick={() => setPlaying(true)}>
            <img src={thumbnail} alt="" width="1280" height="720" loading="lazy" />
            <span className="video-play-badge" aria-hidden="true">
              <span className="video-play-icon"></span>
              Play · {duration}
            </span>
            <span className="sr-only">Play video: {title}</span>
          </button>
        )}
      </div>
      <figcaption>{children}</figcaption>
    </figure>
  );
}
