import PropertyCard from '@/components/PropertyCard';
import JsonLd from '@/components/JsonLd';
import { properties, propertyTypes } from '@/lib/properties';
import { site, waDefault } from '@/lib/site';

export const metadata = {
  title: 'Property in Jind for Sale and Rent | Plots & Kothi',
  description:
    'Browse property in Jind — residential plots, kothi, flats, shops and agricultural land for sale or rent. Rates, sizes and locations updated by a local dealer.',
  alternates: { canonical: '/properties' },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Properties in Jind', item: `${site.url}/properties` },
  ],
};

const listSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Property in Jind for sale and rent',
  numberOfItems: properties.length,
  itemListElement: properties.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${p.title}, ${p.location}`,
  })),
};

export default function PropertiesPage() {
  return (
    <>
      <section className="border-b border-sand bg-white py-14 sm:py-16">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="font-body text-[0.82rem] text-clay">
            <a href="/" className="hover:text-gold">Home</a> <span className="px-1">/</span> Properties
          </nav>
          <h1 className="h1 mt-4 max-w-3xl text-ink">Property in Jind for sale and rent</h1>
          <p className="lede mt-5 max-w-prose">
            Everything currently available in and around Jind city — plots, kothi, flats, shops
            and agricultural land, with the size, asking rate and location stated on each listing.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {propertyTypes.map((t) => (
              <span
                key={t}
                className="border border-sand bg-ivory px-3.5 py-1.5 font-body text-[0.82rem] text-inksoft"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p, i) => (
            <PropertyCard key={p.id} p={p} priority={i < 3} />
          ))}
        </div>

        <div className="mt-14 border border-gold/40 bg-white p-8">
          <h2 className="h3 text-ink">Not finding what you need here?</h2>
          <p className="lede mt-3 max-w-prose">
            We do not list everything online. Tell us your budget and preferred area and we will
            send off-market options too.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waDefault} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Ask on WhatsApp
            </a>
            <a href={`tel:${site.phoneIntl}`} className="btn-ink">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <JsonLd id="schema-breadcrumb-properties" data={breadcrumb} />
      <JsonLd id="schema-itemlist" data={listSchema} />
    </>
  );
}
