# Anuj Jain — Sales Portfolio

Premium single-page portfolio for sales professional Anuj Jain. Navy/gold/white/silver luxury-trust branding, React 19 + Tailwind CSS 4, GSAP ScrollTrigger animations, lazy-loaded Three.js hero scene.

## Stack

- React 19 (Vite 6)
- Tailwind CSS 4 (CSS-first `@theme` tokens in `src/styles/global.css`)
- GSAP + ScrollTrigger (scroll reveals, stat count-ups)
- Three.js via @react-three/fiber + drei (hero scene, lazy-loaded)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── components/
│   ├── ui/         # Button, StatCard, SectionHeading, Navbar...
│   ├── sections/   # Hero, Results, About, Timeline, Skills, Testimonials, Contact, Footer
│   └── three/      # HeroScene (lazy-loaded)
├── hooks/          # useCountUp, useSectionReveal, usePrefersReducedMotion
├── data/           # resume-derived content (edit here, not in components)
└── styles/         # global.css with brand @theme tokens
```

## Pending client inputs

- Real headshot (`src/components/sections/Hero.jsx` — marked TODO)
- Testimonial quotes (`src/data/testimonials.js`)
- Client logo files (`src/data/clients.js`)
- LinkedIn URL, revenue/quota figures (`src/data/profile.js`, `metrics.js`)
