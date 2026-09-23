import Link from 'next/link';
import Image from 'next/image';
import { site, areas } from '@/lib/site';
import { posts } from '@/lib/posts';

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ivory">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="inline-block border border-goldlight/30 bg-ivory p-3">
            <Image
              src="/logo-mark.webp"
              alt="Satyanarayan Property Dealer, Jind"
              width={190}
              height={140}
              className="h-14 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm font-body text-[0.95rem] leading-relaxed text-ivory/70">
            A trusted property dealer in Jind for plots, houses, flats, shops and agricultural
            land. {site.tagline}.
          </p>
          <div className="mt-6 space-y-1.5 font-body text-[0.95rem] text-ivory/85">
            <p className="font-semibold text-goldlight">{site.owner}</p>
            <p>
              <a href={`tel:${site.phoneIntl}`} className="hover:text-goldlight">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-goldlight">
                {site.email}
              </a>
            </p>
            <p className="text-ivory/60">
              {site.street} {site.city}, {site.state}, {site.postalCode}
            </p>
            <p className="text-ivory/60">{site.hours}</p>
            {/* Social Media */}
<div className="mt-5 flex items-center gap-4">

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/19UbkuLDCX/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-goldlight/40 text-goldlight transition hover:bg-goldlight hover:text-ink"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M22 12a10 10 0 1 0-11.563 9.875v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.987A10.002 10.002 0 0 0 22 12Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/satyanarayan_propeties"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-goldlight/40 text-goldlight transition hover:bg-goldlight hover:text-ink"
  >
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  </a>

</div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-lg text-goldlight">Pages</h2>
          <span className="mt-3 block h-[2px] w-10 bg-gold" />
          <ul className="mt-5 space-y-2.5 font-body text-[0.95rem] text-ivory/80">
            <li><Link href="/" className="hover:text-goldlight">Property dealer in Jind</Link></li>
            <li><Link href="/properties" className="hover:text-goldlight">Properties in Jind</Link></li>
            <li><Link href="/about" className="hover:text-goldlight">About us</Link></li>
            <li><Link href="/contact" className="hover:text-goldlight">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-goldlight">Blog</Link></li>
          </ul>
          <h2 className="mt-8 font-display text-lg text-goldlight">Guides</h2>
          <span className="mt-3 block h-[2px] w-10 bg-gold" />
          <ul className="mt-5 space-y-2.5 font-body text-[0.95rem] text-ivory/80">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="hover:text-goldlight">
                  {p.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg text-goldlight">Areas we cover</h2>
          <span className="mt-3 block h-[2px] w-10 bg-gold" />
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 font-body text-[0.9rem] text-ivory/75">
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="wrap flex flex-col gap-2 py-6 font-body text-[0.82rem] text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.brand}, {site.city}. All rights reserved.
          </p>
          <p>Buy · Sell · Rent · Invest</p>
        </div>
      </div>
    </footer>
  );
}
