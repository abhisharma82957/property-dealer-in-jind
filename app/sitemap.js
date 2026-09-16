import { posts } from '@/lib/posts';
import { site } from '@/lib/site';

export default function sitemap() {
  const now = new Date();

  const pages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' },
    { url: '/properties', priority: 0.9, changeFrequency: 'weekly' },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { url: '/about', priority: 0.6, changeFrequency: 'yearly' },
    { url: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  ].map((p) => ({
    url: `${site.url}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const articles = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...pages, ...articles];
}
