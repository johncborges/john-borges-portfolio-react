import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sections) {
  const [active, setActive] = useState(sections[0]?.id);
  const refs = useRef({});

  useEffect(() => {
    sections.forEach((s) => {
      refs.current[s.id] = document.getElementById(s.id);
    });

    function onScroll() {
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (nearBottom) {
        setActive(sections[sections.length - 1].id);
        return;
      }
      const scrollPos = window.scrollY + 120;
      let current = sections[0].id;
      sections.forEach((s) => {
        const el = refs.current[s.id];
        if (el && el.offsetTop <= scrollPos) current = s.id;
      });
      setActive(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return active;
}
