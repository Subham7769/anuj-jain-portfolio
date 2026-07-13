import { useState } from 'react';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';
import { profile } from '../../data/profile';
import { useSectionReveal } from '../../hooks/useSectionReveal';

const INPUT_CLASSES =
  'w-full rounded-lg border border-silver-500/25 bg-navy-800/80 px-4 py-3 font-body text-sm text-white placeholder:text-silver-500 focus:border-gold-500 focus:outline-none';

/**
 * Closing CTA. No backend yet — submit composes a mailto: draft so the
 * form works day one. TODO: swap handleSubmit for a form service
 * (Formspree/Basin) or API endpoint when available.
 */
export function Contact() {
  const ref = useSectionReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name} — portfolio site`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      {/* Subtle gold radial glow anchors the eye on the closing CTA */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1fr]">
        <div data-reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            Ready when you are.
          </h2>
          <p className="mt-5 font-body text-lg leading-relaxed text-silver-300">
            Whether it&apos;s an institutional project, a sales leadership role, or an advisory
            conversation — the first step is a conversation.
          </p>
          {/* Tasteful scarcity micro-copy per persuasion spec — no fake countdowns */}
          <p className="mt-4 font-body text-sm text-gold-500">
            Currently taking on a limited number of new engagements.
          </p>

          <dl className="mt-10 space-y-4 font-body text-sm">
            <div className="flex gap-3">
              <dt className="w-16 font-semibold uppercase tracking-wider text-silver-500">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-silver-300 transition-colors hover:text-gold-500">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 font-semibold uppercase tracking-wider text-silver-500">Phone</dt>
              <dd>
                <a href={`tel:+91${profile.phone}`} className="text-silver-300 transition-colors hover:text-gold-500">
                  +91 {profile.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 font-semibold uppercase tracking-wider text-silver-500">Based</dt>
              <dd className="text-silver-300">{profile.location}</dd>
            </div>
          </dl>
          {/* TODO: add calendar booking link + LinkedIn URL when provided [NEEDS CLIENT INPUT] */}
        </div>

        <form data-reveal onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="mb-2 block font-body text-sm font-medium text-silver-300">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={update('name')}
              className={INPUT_CLASSES}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block font-body text-sm font-medium text-silver-300">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={update('email')}
              className={INPUT_CLASSES}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-2 block font-body text-sm font-medium text-silver-300">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="What are you looking to achieve?"
              value={form.message}
              onChange={update('message')}
              className={INPUT_CLASSES}
            />
          </div>
          <Button type="submit" className="w-full">
            Let&apos;s Talk
          </Button>
        </form>
      </div>
    </section>
  );
}
