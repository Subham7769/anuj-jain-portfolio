import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';
import { useSectionReveal } from '../../hooks/useSectionReveal';

function QuoteCard({ testimonial }) {
  return (
    <figure
      data-reveal
      className="flex flex-col rounded-xl border border-silver-500/15 bg-navy-900/70 p-8 shadow-premium"
    >
      {/* Oversized gold quotation mark per spec — decorative */}
      <span aria-hidden="true" className="font-display text-6xl leading-none text-gold-500/60">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 font-body text-base italic leading-relaxed text-silver-300">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-silver-500/15 pt-5">
        <p className="font-body text-sm font-semibold text-white">{testimonial.attribution}</p>
        <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-silver-500">
          {testimonial.context}
        </p>
      </figcaption>
    </figure>
  );
}

/**
 * Testimonials — placed directly before the Contact CTA per the persuasion
 * spec (social proof immediately preceding every call to action).
 * Content is placeholder-only until real quotes are supplied.
 */
export function Testimonials() {
  const ref = useSectionReveal();

  return (
    <section id="testimonials" ref={ref} className="bg-navy-800 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients and colleagues say."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <QuoteCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
