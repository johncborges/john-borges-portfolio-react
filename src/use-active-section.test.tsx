import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Section } from './data';
import { pickActiveSectionId, useActiveSection } from './use-active-section';

describe('pickActiveSectionId', () => {
  const ids = ['a', 'b', 'c'];
  const tops = { a: 0, b: 500, c: 1000 };

  it('returns the first section at the top of the page', () => {
    expect(pickActiveSectionId(ids, tops, 0, false)).toBe('a');
  });

  it('switches once a section is within the offset of the viewport top', () => {
    expect(pickActiveSectionId(ids, tops, 379, false)).toBe('a');
    expect(pickActiveSectionId(ids, tops, 380, false)).toBe('b');
    expect(pickActiveSectionId(ids, tops, 900, false)).toBe('c');
  });

  it('returns the last section when scrolled to the bottom', () => {
    expect(pickActiveSectionId(ids, tops, 0, true)).toBe('c');
  });

  it('ignores sections that are missing from the page', () => {
    expect(pickActiveSectionId(ids, { a: 0, b: undefined, c: 1000 }, 600, false)).toBe('a');
  });
});

describe('useActiveSection', () => {
  const sections: Section[] = [
    { id: 'one', label: 'One' },
    { id: 'two', label: 'Two' },
    { id: 'three', label: 'Three' },
  ];
  const tops: Record<string, number> = { one: 0, two: 500, three: 1000 };
  let elements: HTMLElement[] = [];

  function Harness() {
    const active = useActiveSection(sections);
    return <p data-testid="active">{active}</p>;
  }

  function scrollTo(y: number) {
    Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
  }

  beforeEach(() => {
    elements = sections.map(({ id }) => {
      const el = document.createElement('section');
      el.id = id;
      Object.defineProperty(el, 'offsetTop', { value: tops[id], configurable: true });
      document.body.appendChild(el);
      return el;
    });
    Object.defineProperty(document.documentElement, 'scrollHeight', { value: 5000, configurable: true });
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true });
  });

  afterEach(() => {
    elements.forEach((el) => el.remove());
    Reflect.deleteProperty(document.documentElement, 'scrollHeight');
    vi.restoreAllMocks();
  });

  it('starts on the first section', () => {
    render(<Harness />);
    expect(screen.getByTestId('active')).toHaveTextContent('one');
  });

  it('follows the scroll position, including the bottom of the page', () => {
    render(<Harness />);

    scrollTo(600);
    expect(screen.getByTestId('active')).toHaveTextContent('two');

    scrollTo(4300);
    expect(screen.getByTestId('active')).toHaveTextContent('three');

    scrollTo(0);
    expect(screen.getByTestId('active')).toHaveTextContent('one');
  });

  it('removes its scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<Harness />);
    unmount();
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
