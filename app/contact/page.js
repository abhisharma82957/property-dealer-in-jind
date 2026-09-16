import Image from 'next/image';
import Link from 'next/link';
import EnquiryForm from '@/components/EnquiryForm';
import JsonLd from '@/components/JsonLd';
import { site, waDefault } from '@/lib/site';

export const metadata = {
  title: 'Contact a Property Dealer in Jind | Abhishek Sharma',
  description:
    'Contact Satyanarayan Property Dealer in Jind. Call or WhatsApp Abhishek Sharma on 8295754197, email abhisharma82957@gmail.com for plots, kothi, flats and shops.',
  alternates: { canonical: '/contact' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${site.url}/contact` },
  ],
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: `${site.url}/contact`,
  name: 'Contact Satyanarayan Property Dealer, Jind',
  mainEntity: { '@id': `${site.url}/#business` },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-sand bg-white py-14 sm:py-16">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="font-body text-[0.82rem] text-clay">
            <Link href="/" className="hover:text-gold">Home</Link> <span className="px-1">/</span> Contact
          </nav>
          <h1 className="h1 mt-4 max-w-3xl text-ink">Get in touch about property in Jind</h1>
          <p className="lede mt-5 max-w-prose">
            Call, WhatsApp or email — whichever suits you. In the first conversation we will tell
            you what is realistically available in Jind on your budget.
          </p>
        </div>
      </section>

      <section className="wrap py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-8">
            <div className="border border-sand bg-white p-6 sm:p-8">
              <div className="flex items-center gap-4 border-b border-sand pb-6">
                <Image
                  src="/images/abhishek-sharma-jind-property-consultant.webp"
                  alt="Abhishek Sharma, property dealer in Jind"
                  width={800}
                  height={800}
                  sizes="96px"
                  className="h-24 w-24 shrink-0 border border-sand object-cover"
                  priority
                />
                <div>
                  <p className="font-display text-[1.25rem] text-ink">{site.owner}</p>
                  <p className="mt-1 font-body text-[0.85rem] text-gold">
                    Property consultant, {site.city}
                  </p>
                </div>
              </div>
              <h2 className="h3 mt-6 text-ink">Contact details</h2>
              <dl className="mt-5 space-y-5 font-body text-[0.97rem]">
                <div>
                  <dt className="text-[0.8rem] font-semibold tracking-wide text-clay">Name</dt>
                  <dd className="mt-0.5 text-ink">{site.owner}</dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] font-semibold tracking-wide text-clay">Mobile / WhatsApp</dt>
                  <dd className="mt-0.5">
                    <a href={`tel:${site.phoneIntl}`} className="font-display text-[1.45rem] text-gold">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] font-semibold tracking-wide text-clay">Email</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${site.email}`} className="text-ink underline decoration-gold/50 underline-offset-4">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] font-semibold tracking-wide text-clay">Office</dt>
                  <dd className="mt-0.5 text-ink">
                    {site.street}
                    <br />
                    {site.city}, {site.state} {site.postalCode}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.8rem] font-semibold tracking-wide text-clay">Hours</dt>
                  <dd className="mt-0.5 text-ink">{site.hours}</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col gap-3">
                <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold py-3.5">
                  Open WhatsApp
                </a>
                <a href={`tel:${site.phoneIntl}`} className="btn-ink py-3.5">
                  Call now
                </a>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ink py-3.5"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="border-l-2 border-gold bg-white px-6 py-5">
              <h2 className="font-display text-[1.1rem] text-ink">Planning a site visit</h2>
              <p className="mt-2 font-body text-[0.93rem] leading-relaxed text-inksoft">
                Call a day ahead so we can line up two or three properties in a single trip.
                Carry a copy of your ID — several colonies ask for it at the gate.
              </p>
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>

      <JsonLd id="schema-breadcrumb-contact" data={breadcrumb} />
      <JsonLd id="schema-contact" data={contactSchema} />
    </>
  );
}
