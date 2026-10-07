import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import type { Shot } from '../data';
import ScreenGallery from './screen-gallery';

const shots: Shot[] = [
  {
    src: '/a.webp',
    label: 'Label A',
    title: 'Title A',
    source: { label: 'Source A', href: 'https://example.com/a' },
  },
  {
    src: '/b.webp',
    label: 'Label B',
    title: 'Title B',
    source: { label: 'Source B', href: 'https://example.com/b' },
  },
];

describe('ScreenGallery', () => {
  it('shows the first screenshot with its attribution', () => {
    render(<ScreenGallery shots={shots} label="Demo screens" />);

    expect(screen.getByRole('figure', { name: 'Demo screens' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Title A' })).toHaveAttribute('src', '/a.webp');
    expect(screen.getByRole('link', { name: /Source A/ })).toHaveAttribute('href', 'https://example.com/a');
    expect(screen.getByRole('button', { name: 'Label A' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Label B' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('switches the screenshot, caption and source when a thumbnail is chosen', async () => {
    const user = userEvent.setup();
    render(<ScreenGallery shots={shots} label="Demo screens" />);

    await user.click(screen.getByRole('button', { name: 'Label B' }));

    expect(screen.getByRole('img', { name: 'Title B' })).toHaveAttribute('src', '/b.webp');
    expect(screen.queryByRole('img', { name: 'Title A' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Source B/ })).toHaveAttribute('href', 'https://example.com/b');
    expect(screen.getByRole('button', { name: 'Label B' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Label A' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('can be operated from the keyboard', async () => {
    const user = userEvent.setup();
    render(<ScreenGallery shots={shots} label="Demo screens" />);

    await user.tab();
    expect(screen.getByRole('button', { name: 'Label A' })).toHaveFocus();
    await user.tab();
    await user.keyboard('{Enter}');

    expect(screen.getByRole('img', { name: 'Title B' })).toBeInTheDocument();
  });
});
