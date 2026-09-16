'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { site, waDefault } from '@/lib/site';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand bg-ivory/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-mark.webp"
            alt="Satyanarayan Property Dealer Jind logo"
            width={152}
            height={112}
            className="h-11 w-auto"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] tracking-wide text-ink sm:text-[1.2rem]">
              Satyanarayan
            </span>
            <span className="block font-body text-[0.68rem] tracking-[0.18em] text-gold">
              Property Dealer, Jind
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-body text-sm font-medium text-inksoft transition-colors hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <a href={`tel:${site.phoneIntl}`} className="btn-gold px-5 py-2.5">
            Call {site.phone}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-ink/20 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-[2px] w-5 bg-ink transition-transform ${open ? 'top-1.5 rotate-45' : 'top-0'}`}
            />
            <span className={`absolute left-0 top-1.5 h-[2px] w-5 bg-ink ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span
              className={`absolute left-0 h-[2px] w-5 bg-ink transition-transform ${open ? 'top-1.5 -rotate-45' : 'top-3'}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-sand bg-ivory lg:hidden">
          <nav className="wrap flex flex-col py-2" aria-label="Mobile">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand py-3.5 font-body text-[0.95rem] text-inksoft"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-3 py-4">
              <a href={`tel:${site.phoneIntl}`} className="btn-gold flex-1 px-4 py-3">
                Call now
              </a>
              <a
                href={waDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink flex-1 px-4 py-3"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
