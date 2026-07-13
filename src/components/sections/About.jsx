import { SectionHeading } from '../ui/SectionHeading';
import { about } from '../../data/about';
import { useSectionReveal } from '../../hooks/useSectionReveal';

/**
 * About / Philosophy — the empathy section. Light background gives the
 * page its first "breath" of white space after two navy sections.
 */
export function About() {
  const ref = useSectionReveal();

  return (
    <section id="about" ref={ref} className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Philosophy" title={about.headline} tone="light" />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal className="space-y-6">
            {about.narrative.map((paragraph, i) => (
              <p
                key={i}
                className={`font-body leading-relaxed ${
                  i === 0
                    ? 'font-display text-xl font-medium text-navy-900 md:text-2xl'
                    : 'text-base text-navy-800/80 md:text-lg'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-5">
            {about.principles.map((principle, i) => (
              <article
                key={principle.id}
                data-reveal
                className="rounded-xl border border-silver-300/60 bg-white p-7 shadow-premium"
              >
                <p aria-hidden="true" className="font-display text-sm font-semibold text-gold-500">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy-900">
                  {principle.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-silver-500">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
