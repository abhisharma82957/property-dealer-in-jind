import Link from 'next/link';
import { site, waDefault } from '@/lib/site';

export const metadata = { title: 'Page not found', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <section className="wrap py-24 text-center">
      <p className="font-display text-5xl text-gold">404</p>
      <h1 className="h2 mt-4 text-ink">This page could not be found</h1>
      <p className="lede mx-auto mt-4 max-w-prose">
        The link may be out of date. Start again from the property list or the blog, or just
        call us on {site.phone}.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/properties" className="btn-gold">View properties</Link>
        <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-ink">WhatsApp</a>
      </div>
    </section>
  );
}
