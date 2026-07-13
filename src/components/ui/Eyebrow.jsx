/**
 * Section label ("RESULTS", "EXPERIENCE"...) — all-caps, tight tracking,
 * gold hairline lead-in, per typography spec.
 */
export function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
      <span aria-hidden="true" className="h-px w-10 bg-gold-500/60" />
      {children}
    </p>
  );
}
