const VARIANTS = {
  // Gold = achievement accent, reserved for primary CTAs per palette rule
  primary:
    'bg-gold-500 text-navy-900 hover:bg-gold-400 hover:shadow-[0_0_24px_rgb(201_162_75_/_0.45)] hover:scale-[1.02]',
  // Secondary stays in navy/silver so gold keeps its emphasis
  secondary:
    'border border-silver-500/50 text-silver-300 hover:border-gold-500 hover:text-gold-500',
};

export function Button({ variant = 'primary', href, children, className = '', ...props }) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
