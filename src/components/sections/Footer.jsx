import { profile } from '../../data/profile';

const NAV = [
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-silver-500/10 bg-navy-900 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-semibold text-white">
            {profile.name}
            <span className="text-gold-500">.</span>
          </p>
          <p className="mt-1 font-body text-sm text-silver-500">
            {profile.title} · {profile.location.split(',')[0]}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-6">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-silver-300 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-body text-xs text-silver-500">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
