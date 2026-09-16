import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { site, areas, waDefault } from '@/lib/site';

export const metadata = {
  title: 'About Satyanarayan Property Dealer in Jind Haryana',
  description:
    'Know the team behind Satyanarayan Property Dealer, a local property dealer in Jind. How we verify papers, price property honestly and support you till registry.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    t: 'Papers before price',
    d: 'Jamabandi, mutation, title chain and colony approval, all checked before any token money. If there is doubt, we walk away from the deal.',
  },
  {
    t: 'A straight answer on rates',
    d: 'We tell you the market rate, not what you want to hear, and we will not waste your time on an over-priced property.',
  },
  {
    t: 'Commission agreed up front',
    d: 'Our fee is settled in the first meeting. Nothing new appears on the day of the deal.',
  },
  {
    t: 'Support after registry',
    d: 'Mutation, electricity and water meter transfer, and follow-up until possession. The phone still gets answered after the commission is paid.',
  },
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${site.url}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-sand bg-white py-14 sm:py-16">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="font-body text-[0.82rem] text-clay">
            <Link href="/" className="hover:text-gold">Home</Link> <span className="px-1">/</span> About
          </nav>
          <h1 className="h1 mt-4 max-w-3xl text-ink">
            A local dealer in Jind, working on a reputation built in his own town
          </h1>
        </div>
      </section>

      <section className="wrap py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-5 font-body text-[1.02rem] leading-[1.8] text-inksoft">
            <p>
              Satyanarayan Property Dealer handles plots, kothi, flats, shops and agricultural land
              in Jind. Conversations start at the office, but the real work happens on site —
              measuring the road width, checking the level, working out how far the sewer line is,
              and matching the papers against the record at the tehsil.
            </p>
            <p>
              Two kinds of people come to us. The first are buying a plot or a house for themselves
              for the first time, and are worried about getting caught in something. The second are
              investing, and want their money to grow over three to five years. The method is the
              same for both: papers first, then the rate, then the decision.
            </p>
            <p>
              Jind is a small town. One bad deal here ends a reputation. So we do not list property
              whose papers are not clean, and we point out the weaknesses a seller would rather not
              mention — a drain running alongside, an unapproved colony, or a plot sitting below
              road level.
            </p>
            <h2 className="h2 pt-4 text-ink">Who you will be dealing with</h2>
            <p>
              <strong>{site.owner}</strong>, property consultant. He speaks to both buyers and
              sellers himself, comes along on every site visit, and is present at the tehsil on
              registry day. Available {site.hours}.
            </p>
            <p>
              Number: <a href={`tel:${site.phoneIntl}`} className="font-semibold text-gold">{site.phone}</a>
              {' · '}
              Email: <a href={`mailto:${site.email}`} className="font-semibold text-gold">{site.email}</a>
            </p>
          </div>

          <div>
            <figure className="m-0">
              <Image
                src="/images/abhishek-sharma-property-dealer-jind.webp"
                alt="Abhishek Sharma, property dealer in Jind, Haryana"
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full border border-sand object-cover"
                priority
              />
              <figcaption className="mt-3 border-l-2 border-gold pl-3 font-body text-[0.85rem] leading-snug text-clay">
                {site.owner} — property consultant, {site.brand}, {site.city}
              </figcaption>
            </figure>
            <div className="mt-6 border border-sand bg-white p-6">
              <h2 className="font-display text-[1.15rem] text-ink">Questions worth asking us</h2>
              <ul className="mt-4 space-y-2.5 font-body text-[0.93rem] text-inksoft">
                <li>Which areas of Jind are realistic on my budget?</li>
                <li>What is the registry and loan status of this colony?</li>
                <li>What would my property honestly sell for today?</li>
                <li>How long will it take to rent this out?</li>
              </ul>
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold mt-6 w-full py-3.5">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <span className="rule-gold" />
          <h2 className="h2 mt-5 text-ink">How we work</h2>
          <div className="mt-8 grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.t} className="bg-white p-7">
                <h3 className="font-display text-[1.2rem] text-gold">{v.t}</h3>
                <p className="mt-3 font-body text-[0.93rem] leading-relaxed text-inksoft">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <span className="rule-gold" />
          <h2 className="h2 mt-5 text-ink">Coverage</h2>
          <p className="lede mt-3 max-w-prose">
            Colonies inside Jind city, the bypass belt and towns across the district — active in
            more than {areas.length} locations.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li key={a} className="border border-sand bg-white px-3.5 py-2 font-body text-[0.86rem] text-inksoft">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd id="schema-breadcrumb-about" data={breadcrumb} />
    </>
  );
}
