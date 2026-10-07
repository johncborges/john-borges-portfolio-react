import { useEffect, useState } from 'react';
import type { Section } from './data';

// Sections count as "current" once their top edge is within this many pixels of the viewport top.
const SCROLL_OFFSET = 120;

/**
 * Pure selection logic, kept separate from the DOM so it is easy to test.
 * Returns the last section whose top has scrolled past the offset, or the final
 * section when the page is scrolled to the bottom (short last sections would
 * otherwise never become active).
 */
export function pickActiveSectionId(
  ids: readonly string[],
  tops: Readonly<Record<string, number | undefined>>,
  scrollY: number,
  nearBottom: boolean,
): string {
  if (nearBottom) return ids[ids.length - 1];
  const scrollPos = scrollY + SCROLL_OFFSET;
  let current = ids[0];
  for (const id of ids) {
    const top = tops[id];
    if (top !== undefined && top <= scrollPos) current = id;
  }
  return current;
}

/** Tracks which section is in view so the sidebar nav can highlight it. */
export function useActiveSection(sections: readonly Section[]): string {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const elements = ids.map((id) => [id, document.getElementById(id)] as const);

    function onScroll() {
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      const tops: Record<string, number | undefined> = {};
      for (const [id, el] of elements) tops[id] = el?.offsetTop;
      setActive(pickActiveSectionId(ids, tops, window.scrollY, nearBottom));
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return active;
}
