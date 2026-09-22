import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { posts, getPost } from '@/lib/posts';
import { site, waDefault } from '@/lib/site';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Article not found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      url: `${site.url}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      images: [{ url: post.image, width: 1200, height: 675, alt: post.alt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function fmt(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function Block({ b }) {
  if (b.type === 'h2') return <h2>{b.text}</h2>;
  if (b.type === 'h3') return <h3>{b.text}</h3>;

  if (b.type === 'quote')
    return (
      <blockquote className="my-8 border-l-2 border-gold bg-white px-6 py-5 font-display text-[1.15rem] leading-relaxed text-ink">
        {b.text}
      </blockquote>
    );

  if (b.type === 'ul')
    return (
      <ul>
        {b.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );

  if (b.linkKeyword && b.linkHref) {
    const position = b.text.indexOf(b.linkKeyword);

    if (position !== -1) {
      return (
        <p>
          {b.text.slice(0, position)}
          <Link
            href={b.linkHref}
            className="font-semibold text-gold underline decoration-gold/40 underline-offset-4"
          >
            {b.linkKeyword}
          </Link>
          {b.text.slice(position + b.linkKeyword.length)}
        </p>
      );
    }
  }

  return <p>{b.text}</p>;
}



export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${site.url}${post.image}`,
    datePublished: post.date,
    dateModified: post.updated,
    inLanguage: 'en-IN',
    keywords: post.keywords.join(', '),
    author: { '@type': 'Person', name: site.owner, url: `${site.url}/about` },
    publisher: { '@id': `${site.url}/#business` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${site.url}/blog/${post.slug}` },
    about: { '@type': 'Thing', name: 'Property in Jind, Haryana' },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.h1, item: `${site.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <article>
        <header className="border-b border-sand bg-white py-12 sm:py-14">
          <div className="wrap max-w-3xl">
            <nav aria-label="Breadcrumb" className="font-body text-[0.82rem] text-clay">
              <Link href="/" className="hover:text-gold">Home</Link>
              <span className="px-1">/</span>
              <Link href="/blog" className="hover:text-gold">Blog</Link>
            </nav>
            <h1 className="h1 mt-4 text-ink">{post.h1}</h1>
            <p className="mt-5 font-body text-[0.85rem] text-clay">
              {site.owner} · {fmt(post.date)} · {post.readTime}
              {post.updated !== post.date && ` · updated ${fmt(post.updated)}`}
            </p>
          </div>
        </header>

        <div className="wrap max-w-3xl py-10 sm:py-12">
          <Image
            src={post.image}
            alt={post.alt}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="mb-10 aspect-[16/9] w-full border border-sand object-cover"
          />

          <div className="prose-page">
            {post.body.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>

          <div className="mt-12 border border-gold/40 bg-white p-7">
            <h2 className="h3 text-ink">Looking for property in Jind?</h2>
            <p className="mt-2 font-body text-[0.97rem] leading-relaxed text-inksoft">
              Speak to {site.owner} on {site.phone}. You will get a paper check and today&apos;s
              rate, both stated plainly.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Chat on WhatsApp
              </a>
              <Link href="/properties" className="btn-ink">
                Available properties
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="h3 text-ink">Read next</h2>
            <ul className="mt-4 space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/blog/${o.slug}`}
                    className="font-body text-[0.99rem] font-medium text-gold underline decoration-gold/40 underline-offset-4"
                  >
                    {o.h1}
                  </Link>
                  <p className="mt-1 font-body text-[0.9rem] text-clay">{o.excerpt}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <JsonLd id="schema-article" data={articleSchema} />
      <JsonLd id="schema-breadcrumb-post" data={breadcrumb} />
    </>
  );
}
