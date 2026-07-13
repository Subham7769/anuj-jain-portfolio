import { clients } from '../../data/clients';

/**
 * Trust bar — institutional clients as styled text marks (silver, muted)
 * until real logos arrive. Sits tight under the hero as immediate social
 * proof before the visitor reaches the numbers.
 */
export function TrustBar() {
  return (
    <section aria-label="Clients and institutions served" className="border-y border-silver-500/10 bg-navy-800/60 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-body text-xs font-semibold uppercase tracking-[0.25em] text-silver-500">
          Institutions served
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client) => (
            <li
              key={client.id}
              className="font-display text-base font-medium text-silver-300/70 transition-colors duration-300 hover:text-gold-500"
            >
              {/* TODO: render <img> logo when client provides asset files */}
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
