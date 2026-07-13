import { useCountUp } from '../../hooks/useCountUp';

/**
 * Gold-accented metric card with GSAP count-up.
 * Purely presentational — number/labels come from src/data/metrics.js.
 */
export function StatCard({ value, prefix = '', suffix = '', label, context }) {
  const numberRef = useCountUp(value, { prefix, suffix });

  return (
    <article
      data-reveal
      className="rounded-xl border border-silver-500/15 bg-navy-800/80 p-8 shadow-premium transition-colors duration-300 hover:border-gold-500/40"
    >
      {/* Initial textContent matches the final value for no-JS/SEO; GSAP overwrites it */}
      <p
        ref={numberRef}
        className="font-display text-5xl font-semibold text-gold-500 tabular-nums md:text-6xl"
      >
        {`${prefix}${value.toLocaleString('en-IN')}${suffix}`}
      </p>
      <div aria-hidden="true" className="mt-4 h-px w-12 bg-gold-500/40" />
      <h3 className="mt-4 font-body text-base font-semibold text-white">{label}</h3>
      {context && <p className="mt-1.5 font-body text-sm leading-relaxed text-silver-500">{context}</p>}
    </article>
  );
}
