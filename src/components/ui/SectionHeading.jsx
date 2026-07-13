import { Eyebrow } from './Eyebrow';

/**
 * Standard section header: eyebrow + display headline (+ optional lede).
 * `tone` flips text color for light (offwhite) vs dark (navy) backgrounds —
 * gold eyebrow works on both, so it stays constant.
 */
export function SectionHeading({ eyebrow, title, lede, tone = 'dark' }) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-navy-900';
  const ledeColor = tone === 'dark' ? 'text-silver-300' : 'text-silver-500';

  return (
    <div data-reveal className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {lede && <p className={`mt-5 font-body text-lg leading-relaxed ${ledeColor}`}>{lede}</p>}
    </div>
  );
}
