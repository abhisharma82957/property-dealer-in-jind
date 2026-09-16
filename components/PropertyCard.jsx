import Image from 'next/image';
import { waLink } from '@/lib/site';

export default function PropertyCard({ p, priority = false }) {
  return (
    <article className="card flex flex-col">
      <div className="relative aspect-[3/2] overflow-hidden bg-sand">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
        <span className="absolute left-0 top-4 bg-ink/90 px-3 py-1.5 font-body text-[0.72rem] font-semibold tracking-wide text-goldlight">
          {p.deal} · {p.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.12rem] leading-snug text-ink">{p.title}</h3>
        <p className="mt-1 font-body text-[0.86rem] text-clay">{p.location}</p>

        <div className="mt-4 flex items-baseline justify-between border-t border-sand pt-4">
          <span className="font-display text-[1.3rem] text-gold">{p.price}</span>
          <span className="font-body text-[0.82rem] text-clay">{p.size}</span>
        </div>

        <ul className="mt-4 space-y-1.5">
          {p.points.map((pt) => (
            <li key={pt} className="relative pl-4 font-body text-[0.86rem] text-inksoft">
              <span className="absolute left-0 top-[0.55em] h-1 w-1 bg-gold" />
              {pt}
            </li>
          ))}
        </ul>

        <a
          href={waLink(`Hello, I would like details of this property: ${p.title} (${p.location}) — ${p.price}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ink mt-6 w-full py-3"
        >
          Details on WhatsApp
        </a>
      </div>
    </article>
  );
}
