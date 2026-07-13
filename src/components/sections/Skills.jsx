import { SectionHeading } from '../ui/SectionHeading';
import { skills } from '../../data/skills';
import { useSectionReveal } from '../../hooks/useSectionReveal';

/**
 * Core skills — clean 2-column list per spec, gold diamond markers and
 * silver hairline rules instead of proficiency bars (bars imply fake
 * percentages we don't have data for).
 */
export function Skills() {
  const ref = useSectionReveal();

  return (
    <section id="skills" ref={ref} className="bg-offwhite py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Expertise"
          title="The full sales cycle, owned end to end."
          lede="From first cold conversation to signed contract to renewal — capabilities built across furniture, DTH, and apparel."
          tone="light"
        />

        <ul className="mt-14 grid gap-x-14 sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill.id}
              data-reveal
              className="group flex items-center gap-4 border-b border-silver-300/60 py-5"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rotate-45 bg-gold-500 transition-transform duration-300 group-hover:scale-125"
              />
              <span className="font-body text-base font-medium text-navy-900">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
