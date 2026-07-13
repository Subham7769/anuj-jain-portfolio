import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';
import { useSectionReveal } from '../../hooks/useSectionReveal';

function TimelineEntry({ entry }) {
  return (
    <li data-reveal className="relative pl-10 md:pl-14">
      {/* Gold node on the timeline spine */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 h-3 w-3 -translate-x-[5px] rotate-45 border border-gold-500 bg-navy-900"
      />
      <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
        {entry.period.start} — {entry.period.end}
      </p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{entry.role}</h3>
      <p className="mt-1 font-body text-base text-silver-300">
        {entry.company}
        {entry.location && <span className="text-silver-500"> · {entry.location}</span>}
      </p>
      <ul className="mt-4 space-y-2.5">
        {entry.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3 font-body text-sm leading-relaxed text-silver-300/90">
            <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-gold-500/60" />
            {highlight}
          </li>
        ))}
      </ul>
    </li>
  );
}

/**
 * Vertical scroll-triggered timeline. The spine is a silver hairline with
 * gold diamond nodes — same visual language as the Skills markers.
 */
export function ExperienceTimeline() {
  const ref = useSectionReveal();

  return (
    <section id="experience" ref={ref} className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Fifteen-plus years, three industries, one standard."
          lede="From founding an apparel business to closing institutional contracts — every role built on the last."
        />

        <ol className="relative mt-16 space-y-16 border-l border-silver-500/20">
          {experience.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </ol>
      </div>
    </section>
  );
}
