import { lazy, Suspense } from 'react';
import { Button } from '../ui/Button';
import { profile } from '../../data/profile';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// Lazy-load the 3D scene: three.js is ~150KB gzipped and purely decorative,
// so it must never block first paint. Suspense fallback is null — the navy
// gradient backdrop stands alone until the canvas hydrates in.
const HeroScene = lazy(() => import('../three/HeroScene'));

// TODO: replace with client-provided headshot
// Placeholder: royalty-free stock — businessperson in dark suit, neutral background (Unsplash).
const PLACEHOLDER_HEADSHOT =
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden">
      {/* Layer 0: 3D backdrop — skipped entirely under prefers-reduced-motion
          (no canvas, no three.js download) rather than rendered frozen */}
      <div className="absolute inset-0 -z-10">
        {!reducedMotion && (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
        {/* Radial navy wash keeps text contrast AA regardless of scene state */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-navy-900)_78%)]" />
      </div>

      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.2fr_0.8fr] lg:py-0">
        <div className="max-w-2xl">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
            {profile.title} · {profile.location.split(',')[0]}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] text-white md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-silver-300 md:text-xl">
            {profile.valueProp}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={profile.ctas.primary.href}>{profile.ctas.primary.label}</Button>
            <Button variant="secondary" href={profile.ctas.secondary.href} download>
              {profile.ctas.secondary.label}
            </Button>
          </div>
        </div>

        {/* Headshot — duotone-style navy overlay treatment per photography spec */}
        <figure className="relative mx-auto w-64 md:w-80 lg:w-full lg:max-w-sm">
          <div aria-hidden="true" className="absolute -inset-3 rounded-2xl border border-gold-500/30" />
          <img
            src={PLACEHOLDER_HEADSHOT}
            alt={`${profile.name}, ${profile.title}`}
            loading="eager"
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-premium"
          />
          <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-navy-900/30 mix-blend-multiply" />
        </figure>
      </div>

      {/* Gold hairline handoff into the next section */}
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </section>
  );
}
