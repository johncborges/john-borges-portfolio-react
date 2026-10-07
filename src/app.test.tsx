import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './app';
import { SECTIONS } from './data';

describe('App', () => {
  it('has the landmarks and skip link a keyboard or screen-reader user needs', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main');
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'John Borges' })).toBeInTheDocument();
  });

  it('renders every section and links to it from the nav', () => {
    render(<App />);

    const nav = screen.getByRole('navigation', { name: 'Section navigation' });
    const links = within(nav).getAllByRole('link');
    expect(links.map((l) => l.textContent)).toEqual(SECTIONS.map((s) => s.label));

    for (const { id } of SECTIONS) {
      expect(document.getElementById(id)).not.toBeNull();
      expect(
        within(nav).getByRole('link', { name: SECTIONS.find((s) => s.id === id)!.label }),
      ).toHaveAttribute('href', `#${id}`);
    }
  });

  it('marks exactly one nav link as the current section', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Section navigation' });
    const current = within(nav)
      .getAllByRole('link')
      .filter((l) => l.getAttribute('aria-current') === 'true');
    expect(current).toHaveLength(1);
  });

  it('opens every external link safely and announces it', () => {
    render(<App />);
    const external = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'));

    expect(external.length).toBeGreaterThan(0);
    for (const link of external) {
      expect(link.rel).toContain('noopener');
      expect(link.rel).toContain('noreferrer');
      expect(link).toHaveTextContent('(opens in new tab)');
    }
  });

  it('offers the resume as a download', () => {
    render(<App />);
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });

    expect(resumeLinks.length).toBeGreaterThanOrEqual(2);
    for (const link of resumeLinks) {
      expect(link).toHaveAttribute('href', '/john-borges-resume.pdf');
      expect(link).toHaveAttribute('download');
    }
  });

  it('shows the case study with both screenshot galleries and the source link in the footer', () => {
    render(<App />);

    expect(screen.getAllByRole('figure')).toHaveLength(2);
    expect(screen.getByRole('link', { name: /View source/ })).toHaveAttribute(
      'href',
      'https://github.com/johncborges/john-borges-portfolio-react',
    );
  });
});
