import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { CASE_STUDY_SHOTS, JOBS, SECTIONS, SKILL_GROUPS } from './data';

const inPublic = (path: string) => existsSync(join(process.cwd(), 'public', path));

describe('content data', () => {
  it('has unique section ids and job titles (they are used as React keys)', () => {
    const ids = SECTIONS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);

    const titles = JOBS.map((j) => j.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it('gives every job dates, a company and at least one bullet', () => {
    for (const job of JOBS) {
      expect(job.dates).not.toBe('');
      expect(job.company).not.toBe('');
      expect(job.bullets.length).toBeGreaterThan(0);
    }
  });

  it('has no empty or duplicate skills within a group', () => {
    for (const group of SKILL_GROUPS) {
      expect(group.items.length).toBeGreaterThan(0);
      expect(new Set(group.items).size).toBe(group.items.length);
    }
  });

  it('only references screenshots that exist in public/ and cites an https source for each', () => {
    const shots = Object.values(CASE_STUDY_SHOTS).flat();
    expect(shots.length).toBeGreaterThan(0);

    for (const shot of shots) {
      expect(inPublic(shot.src), `${shot.src} is missing from public/`).toBe(true);
      expect(shot.source.href).toMatch(/^https:\/\//);
      expect(shot.title).not.toBe('');
    }
  });

  it('ships the files the page links to', () => {
    for (const file of ['john-borges-resume.pdf', 'john-photo.jpg', 'og-image.jpg', 'favicon.svg']) {
      expect(inPublic(file), `${file} is missing from public/`).toBe(true);
    }
  });
});
