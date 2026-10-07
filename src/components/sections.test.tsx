import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Experience from './experience';
import Job from './job';
import Skills from './skills';
import { JOBS, SKILL_GROUPS } from '../data';

describe('Job', () => {
  it('renders title, company, dates, bullets and tags', () => {
    render(
      <Job
        dates="2020 — 2022"
        title="Staff Engineer"
        company="Example Co"
        bullets={['Did one thing', 'Did another thing']}
        tags={['React', 'TypeScript']}
      />,
    );

    expect(screen.getByRole('heading', { level: 3, name: 'Staff Engineer' })).toBeInTheDocument();
    expect(screen.getByText('Example Co')).toBeInTheDocument();
    expect(screen.getByText('2020 — 2022')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('omits the tag list when a job has no tags', () => {
    const { container } = render(
      <Job dates="2000" title="Earlier" company="Somewhere" bullets={['One bullet']} tags={null} />,
    );
    expect(container.querySelector('.tags')).toBeNull();
  });
});

describe('Experience', () => {
  it('renders every job from the data file', () => {
    render(<Experience />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings.map((h) => h.textContent)).toEqual(JOBS.map((j) => j.title));
  });
});

describe('Skills', () => {
  it('renders every skill group and each skill', () => {
    render(<Skills />);
    for (const group of SKILL_GROUPS) {
      expect(screen.getByText(group.label)).toBeInTheDocument();
      for (const item of group.items) {
        expect(screen.getAllByText(item).length).toBeGreaterThan(0);
      }
    }
  });
});
