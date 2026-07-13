import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';

const LINKS = [
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Testimonials', href: '#testimonials' },
];

/**
 * Anchor nav — shrinks and gains a blurred navy backdrop after scroll.
 * Scroll listener is passive + threshold-only state, so it re-renders
 * exactly twice (crossing 24px), not per scroll event.
 * Mobile: links collapse behind a disclosure button (no router needed
 * for a single-page anchor nav).
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-navy-900/90 py-3 shadow-premium backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6" aria-label="Main">
        <a href="#hero" className="font-display text-xl font-semibold text-white">
          {profile.name.split(' ')[0]}
          <span className="text-gold-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-silver-300 transition-colors hover:text-gold-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg border border-gold-500/60 px-5 py-2 font-body text-sm font-semibold text-gold-500 transition-colors hover:bg-gold-500 hover:text-navy-900"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-silver-300 transition-transform ${open ? 'translate-y-1 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-silver-300 transition-transform ${open ? '-translate-y-1 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="border-t border-silver-500/10 px-6 py-4 md:hidden">
          {[...LINKS, { label: "Let's Talk", href: '#contact' }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-body text-base font-medium text-silver-300 transition-colors hover:text-gold-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
