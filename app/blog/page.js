import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { posts } from '@/lib/posts';
import { site, waDefault } from '@/lib/site';

export const metadata = {
  title: 'Jind Property Blog | Rates, Papers and Buying Tips',
  description:
    'Guides on property in Jind — how to choose a property dealer in Jind, area wise rates, plot papers, registry, mutation and bank loan help from a local dealer.',
  alternates: { canonical: '/blog' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
  ],
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${site.url}/blog#blog`,
  name: 'Jind property guides',
  url: `${site.url}/blog`,
  publisher: { '@id': `${site.url}/#business` },
  blogPost: posts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.h1,
    url: `${site.url}/blog/${p.slug}`,
    datePublished: p.date,
    dateModified: p.updated,
  })),
};

function fmt(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogIndex() {
  return (
    <>
      <section className="border-b border-sand bg-white py-14 sm:py-16">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="font-body text-[0.82rem] text-clay">
            <Link href="/" className="hover:text-gold">Home</Link> <span className="px-1">/</span> Blog
          </nav>
          <h1 className="h1 mt-4 max-w-3xl text-ink">Jind property guides</h1>
          <p className="lede mt-5 max-w-prose">
            Rates, papers, loans and registry — the questions people actually ask in the office,
            answered here. All of it specific to Jind, not general advice.
          </p>
        </div>
      </section>

      <section className="wrap py-14 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {posts.map((p) => (
    <article
      key={p.slug}
      className="overflow-hidden border border-sand bg-white"
    >
      <Link href={`/blog/${p.slug}`} className="block">
        <Image
          src={p.image}
          alt={p.alt}
          width={1200}
          height={675}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="aspect-[16/9] w-full object-cover"
        />
      </Link>

     <div className="p-5">
        <p className="font-body text-[0.8rem] text-clay">
          {fmt(p.date)} · {p.readTime}
        </p>

        <h2 className="h3 mt-2 text-ink">
          <Link href={`/blog/${p.slug}`} className="hover:text-gold">
            {p.h1}
          </Link>
        </h2>

        <p className="mt-3 font-body text-[0.95rem] leading-[1.7] text-inksoft">
          {p.excerpt}
        </p>

        <Link
          href={`/blog/${p.slug}`}
          className="mt-4 inline-block font-body text-[0.9rem] font-semibold text-gold underline decoration-gold/40 underline-offset-4"
        >
          Read the full guide
        </Link>
      </div>
    </article>
  ))}
</div>

        <div className="mt-6 border border-gold/40 bg-white p-8">
          <h2 className="h3 text-ink">Question not covered here?</h2>
          <p className="lede mt-3 max-w-prose">
            Ask us on WhatsApp. If it is a common question, it will probably become the next
            guide.
          </p>
          <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6">
            WhatsApp {site.phone}
          </a>
        </div>
      </section>

      <JsonLd id="schema-breadcrumb-blog" data={breadcrumb} />
      <JsonLd id="schema-blog" data={blogSchema} />
    </>
  );
}
