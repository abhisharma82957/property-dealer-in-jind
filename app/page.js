import Image from 'next/image';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import JsonLd from '@/components/JsonLd';
import { properties } from '@/lib/properties';
import { posts } from '@/lib/posts';
import { site, areas, waDefault } from '@/lib/site';

export const metadata = {
  title: 'Property Dealer in Jind | Plots, Kothi, Shops & Land',
  description:
    'Satyanarayan Property Dealer is a trusted property dealer in Jind for plots, kothi, flats, shops and land. Call Abhishek Sharma on 8295754197 for a site visit.',
  alternates: { canonical: '/' },
};

const services = [
  {
    name: 'Buy',
    text: 'A shortlist built around your budget and preferred area, with the papers checked and site visits arranged before you commit.',
  },
  {
    name: 'Sell',
    text: 'An honest valuation, a listing with real photographs, and direct conversations with serious buyers only.',
  },
  {
    name: 'Rent',
    text: 'Rental property for families, students and shop owners, including tenant verification and the rent agreement.',
  },
  {
    name: 'Invest',
    text: 'Options in the newer sectors and the bypass belt where rates are still low and development is underway.',
  },
];

const steps = [
  { t: 'Tell us what you need', d: 'Share your budget, area and purpose on a call or WhatsApp. Five minutes is enough.' },
  { t: 'Two or three options', d: 'We send only properties that match, with photographs and the exact asking rate.' },
  { t: 'Site visit', d: 'We visit at your convenience so you can see the road, sewer, level and surroundings yourself.' },
  { t: 'Paper check', d: 'Jamabandi, title chain, mutation and colony approval — all verified before any token money.' },
  { t: 'Registry and possession', d: 'Bayana, stamp duty, the tehsil date, mutation and the handover of keys.' },
];

const faqs = [
  {
    q: 'Who is the most reliable property dealer in Jind?',
    a: 'Reliability comes down to three things: real knowledge of the local market, a full check of the papers, and a straight answer on the rate. Satyanarayan Property Dealer works across every category in Jind — plots, kothi, flats, shops and agricultural land — and verifies the jamabandi, title chain and colony approval on every deal before any money changes hands. You can speak to Abhishek Sharma directly on 8295754197.',
  },
  {
    q: 'What are current plot rates in Jind?',
    a: 'Rates depend heavily on the colony. Developed colonies such as Urban Estate and Defence Colony run 20-30% above the town average, while the newer sectors beyond the bypass are considerably cheaper. The right way to compare is per gaj, looking separately at the premium for a corner position, road width and a park-facing aspect. Call us for the current area-wise picture.',
  },
  {
    q: 'How much commission does a property dealer charge?',
    a: 'In Jind and the surrounding market, the usual practice is 1-2% on a sale and one month\u2019s rent on a rental. We tell you our fee on the first day rather than on the day of the deal, so there is never any confusion later.',
  },
  {
    q: 'Can I get a bank loan on a plot or a house here?',
    a: 'Loans go through easily in approved colonies. On plots, banks typically fund 70-75%, and a composite plot-plus-construction loan is also an option. Unapproved colonies do not qualify, which is why we tell you the approval status up front and help you put the bank file together.',
  },
  {
    q: 'Do you handle the paperwork and registry as well?',
    a: 'Yes. The bayana agreement, the stamp duty calculation based on the collector rate, the registry date at the tehsil, and the mutation (intkaal) afterwards are all part of the process. We also follow up on the electricity and water meter transfer right through to possession.',
  },
  {
    q: 'Which areas of Jind do you cover?',
    a: 'Urban Estate, Rohtak Road, Gohana Road, Safidon Road, Hansi Road, Patiala Chowk, Rani Talab and the bypass belt within Jind city, along with Narwana, Uchana and Julana in the district.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink">
        <Image
          src="/images/jind-property-dealer-hero.webp"
          alt="Property dealer in Jind, Haryana — plots, kothi and shops"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" aria-hidden="true" />
        <div className="wrap relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="font-body text-[0.85rem] font-semibold tracking-[0.16em] text-goldlight">
              Jind · Haryana
            </p>
            <h1 className="h1 mt-4 text-ivory">
              A property dealer in Jind who shows you the papers first and the price second
            </h1>
            <p className="lede mt-6 max-w-xl text-ivory/75">
              Plots, kothi, flats, shops and agricultural land across Jind city and out to Narwana,
              Uchana and Julana. Speak directly to {site.owner}, get a straight answer on the rate,
              and have support from registry through to mutation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold">
                Chat on WhatsApp
              </a>
              <a href={`tel:${site.phoneIntl}`} className="btn-ghost">
                Call {site.phone}
              </a>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-ivory/15 pt-7">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl text-goldlight sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 font-body text-[0.78rem] leading-snug text-ivory/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hidden justify-self-center lg:block">
            <div className="border border-goldlight/40 bg-ivory p-5 shadow-lift">
              <Image
                src="/logo.webp"
                alt="Satyanarayan Property Dealer logo — buy, sell, rent, invest"
                width={420}
                height={420}
                className="w-[19rem]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / EXPLANATION */}
      <section className="wrap py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <span className="rule-gold" />
            <h2 className="h2 mt-5 text-ink">
              Land, homes and shops in Jind, handled by someone who works here every day
            </h2>
          </div>
          <div className="space-y-5 font-body text-[1.02rem] leading-[1.8] text-inksoft">
            <p>
              Satyanarayan Property Dealer is a local property consultancy based in Jind. We work
              this market daily, from the lanes of Urban Estate to the commercial belt on Gohana
              Road. So when you ask which plot is worth taking, or which area actually rents out,
              the answer comes from the deals closing this month — not from hearsay.
            </p>
            <p>
              Showing you property is only part of the job. Before any deal we check the jamabandi,
              the mutation, the 13 year title chain, the khasra number and the colony&apos;s approval
              status. If something is wrong with a property, we say so plainly, even when it costs
              us the commission. That is why most of our work in Jind still comes by referral.
            </p>
            <p>
              Whether you are buying your first home, selling a property you have held for years,
              putting a house on rent, or looking at a plot in a new sector as an investment, the
              first conversation costs nothing. Tell us your budget, area and purpose and we will
              come back with realistic options — and tell you honestly if what you want is not
              possible in that budget.
            </p>
            <div className="mt-8 flex flex-col gap-5 border border-sand bg-white p-5 sm:flex-row sm:items-center">
              <Image
                src="/images/abhishek-sharma-jind-property-consultant.webp"
                alt="Abhishek Sharma, property consultant in Jind"
                width={800}
                height={800}
                sizes="(max-width: 640px) 100vw, 160px"
                className="h-40 w-40 shrink-0 border border-sand object-cover"
              />
              <div>
                <p className="font-display text-[1.3rem] text-ink">{site.owner}</p>
                <p className="mt-1 font-body text-[0.85rem] text-gold">
                  Property consultant · {site.brand}
                </p>
                <p className="mt-3 font-body text-[0.92rem] leading-relaxed text-inksoft">
                  Every enquiry is handled by him personally — the first call, the site visit and
                  the tehsil on registry day.
                </p>
                <p className="mt-3 font-body text-[0.92rem] font-semibold text-ink">
                  {site.phone} · {site.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-sand bg-white py-16 sm:py-20">
        <div className="wrap">
          <h2 className="h2 text-ink">Buy, sell, rent, invest</h2>
          <p className="lede mt-3 max-w-prose">
            Four kinds of work, one point of contact — all of it within Jind and the district.
          </p>
          <div className="mt-10 grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.name} className="bg-white p-7">
                <h3 className="font-display text-[1.35rem] text-gold">{s.name}</h3>
                <p className="mt-3 font-body text-[0.94rem] leading-relaxed text-inksoft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="wrap py-16 sm:py-20" id="properties">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="rule-gold" />
            <h2 className="h2 mt-5 text-ink">Property in Jind — available now</h2>
            <p className="lede mt-3 max-w-prose">
              Our inventory changes every week. Message us about anything you like and we will send
              the latest status and the exact location.
            </p>
          </div>
          <Link href="/properties" className="btn-ink">
            View all properties
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} p={p} priority={i < 3} />
          ))}
        </div>
        <p className="mt-6 font-body text-[0.85rem] text-clay">
          Rates and availability can change. Please call or message to confirm.
        </p>
      </section>

      {/* PROCESS */}
      <section className="bg-ink py-16 text-ivory sm:py-20">
        <div className="wrap">
          <h2 className="h2 text-ivory">How a deal works</h2>
          <p className="lede mt-3 max-w-prose text-ivory/70">
            Five steps, and at every one of them you know what happens next.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li key={s.t} className="border-t border-goldlight/30 pt-5">
                <span className="font-display text-2xl text-goldlight">{i + 1}</span>
                <h3 className="mt-2 font-display text-[1.15rem] text-ivory">{s.t}</h3>
                <p className="mt-2 font-body text-[0.9rem] leading-relaxed text-ivory/65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AREAS */}
      <section className="wrap py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="rule-gold" />
            <h2 className="h2 mt-5 text-ink">Areas of Jind we work in</h2>
            <p className="lede mt-4">
              From the established colonies inside the city to the bypass belt and the towns across
              the district. If your area is not on this list, ask anyway — there is usually
              something available.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-px border border-sand bg-sand sm:grid-cols-3">
            {areas.map((a) => (
              <li key={a} className="bg-white px-4 py-4 font-body text-[0.9rem] text-inksoft">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOG TEASERS */}
      <section className="border-y border-sand bg-white py-16 sm:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="h2 text-ink">Jind property guides</h2>
            <Link href="/blog" className="btn-ink">
              Read the blog
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.slug} className="flex flex-col">
                <Link href={`/blog/${p.slug}`} className="block">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </Link>
                <h3 className="mt-5 font-display text-[1.2rem] leading-snug text-ink">
                  <Link href={`/blog/${p.slug}`} className="hover:text-gold">
                    {p.h1}
                  </Link>
                </h3>
                <p className="mt-2 font-body text-[0.92rem] leading-relaxed text-clay">{p.excerpt}</p>
                <p className="mt-3 font-body text-[0.8rem] text-clay/80">{p.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap py-16 sm:py-20">
        <span className="rule-gold" />
        <h2 className="h2 mt-5 text-ink">Frequently asked questions</h2>
        <div className="mt-8 max-w-3xl divide-y divide-sand border-y border-sand">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-[1.1rem] text-ink">
                {f.q}
                <span className="mt-1 shrink-0 font-body text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 font-body text-[0.97rem] leading-[1.75] text-inksoft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="wrap pb-4">
        <div className="border border-gold/40 bg-white p-8 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
            <div>
              <h2 className="h2 text-ink">Tell us what you are looking for</h2>
              <p className="lede mt-3">
                One message is enough to start. You will get current rates, the options available
                now, and a clear picture of where the papers stand.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold">
                WhatsApp {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="btn-ink">
                Send an email
              </a>
            </div>
          </div>
        </div>
      </section>

      <JsonLd id="schema-faq" data={faqSchema} />
    </>
  );
}
