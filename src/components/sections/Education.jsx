import { SectionHeading } from '../ui/SectionHeading';
import { education, certifications } from '../../data/skills';
import { useSectionReveal } from '../../hooks/useSectionReveal';

/**
 * Education badges — clean grid per spec §4.8.
 * Certifications array is empty ([NEEDS CLIENT INPUT]); the block renders
 * conditionally so nothing fake ships.
 */
export function Education() {
  const ref = useSectionReveal();

  return (
    <section id="education" ref={ref} className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Credentials" title="Education" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.id}
              data-reveal
              className="rounded-xl border-l-2 border-gold-500 bg-navy-800/80 p-7 shadow-premium"
            >
              <h3 className="font-display text-lg font-semibold text-white">{item.degree}</h3>
              {item.institution && (
                <p className="mt-2 font-body text-sm leading-relaxed text-silver-300">
                  {item.institution}
                </p>
              )}
              <p className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                {item.period}
              </p>
            </article>
          ))}
        </div>

        {certifications.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display text-2xl font-semibold text-white">Certifications</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {certifications.map((cert) => (
                <article key={cert.id} data-reveal className="rounded-xl bg-navy-800/80 p-7">
                  <h4 className="font-display text-lg font-semibold text-white">{cert.name}</h4>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
