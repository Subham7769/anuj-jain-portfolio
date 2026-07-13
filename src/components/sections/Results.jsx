import { Eyebrow } from '../ui/Eyebrow';
import { StatCard } from '../ui/StatCard';
import { metrics } from '../../data/metrics';
import { useSectionReveal } from '../../hooks/useSectionReveal';

/**
 * "Results / Key Metrics" — bold numbers section per trait mapping
 * (clear result-orientation). Cards stagger-reveal, numbers count up.
 */
export function Results() {
  const sectionRef = useSectionReveal();

  return (
    <section id="results" ref={sectionRef} className="bg-navy-900 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div data-reveal>
          <Eyebrow>Results</Eyebrow>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            A track record measured in delivered projects, not promises.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <StatCard
              key={metric.id}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              context={metric.context}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
