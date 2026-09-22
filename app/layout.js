import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import JsonLd from '@/components/JsonLd';
import { site, areas } from '@/lib/site';

export const metadata = {
  verification: {
  google: "3SGiMTVpcCRKIjTvA74FQzv6P84zyPWDkVGk_wsHuls",
},
  metadataBase: new URL(site.url),
  title: {
    default: 'Property Dealer in Jind | Plots, Kothi, Shops & Land',
    template: '%s | Satyanarayan Property Dealer Jind',
  },
  description:
    'Satyanarayan Property Dealer is a trusted property dealer in Jind for plots, kothi, flats, shops and land. Call Abhishek Sharma on 8295754197 for a site visit.',
  keywords: [
    'property dealer in jind',
    'property in jind',
    'plots for sale in jind',
    'house for sale in jind',
    'flats in jind',
    'commercial property in jind',
    'best property dealer in jind',
    'real estate agent in jind',
    'jind property rates',
    'property dealer in jind haryana',
  ],
  authors: [{ name: site.owner }],
  creator: site.brand,
  publisher: site.brand,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: site.brand,
    title: 'Property Dealer in Jind | Plots, Kothi, Shops & Land',
    description:
      'Buy, sell, rent or invest in Jind property with a local dealer. Plots, kothi, flats, shops and agricultural land with clear papers. Call 8295754197 today.',
    images: [
      {
        url: '/images/og-property-dealer-in-jind.webp',
        width: 1200,
        height: 630,
        alt: 'Satyanarayan Property Dealer, property dealer in Jind, Haryana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Dealer in Jind | Plots, Kothi, Shops & Land',
    description:
      'Plots, kothi, flats, shops and agricultural land in Jind with clear papers and honest rates. Call Abhishek Sharma on 8295754197 for a site visit in Jind.',
    images: ['/images/og-property-dealer-in-jind.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  // TODO: paste your Google Search Console verification code here.
  // verification: { google: 'your-verification-code' },
  category: 'Real Estate',
};

export const viewport = {
  themeColor: '#16130F',
  width: 'device-width',
  initialScale: 1,
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${site.url}/#business`,
  name: site.brand,
  alternateName: 'Satyanarayan Property Dealer Jind',
  description:
    'Property dealer in Jind, Haryana for plots, kothi, flats, shops, showrooms and agricultural land. Buying, selling, renting and investment help with paper verification.',
  url: site.url,
  telephone: site.phoneIntl,
  email: site.email,
  image: `${site.url}/logo.webp`,
  logo: `${site.url}/logo.webp`,
  slogan: site.tagline,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Cheque, Bank transfer, UPI',
  founder: { '@type': 'Person', name: site.owner },
  employee: {
    '@type': 'Person',
    name: site.owner,
    jobTitle: 'Property Consultant',
    image: `${site.url}/images/abhishek-sharma-property-dealer-jind.webp`,
    telephone: site.phoneIntl,
    email: site.email,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.postalCode,
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Jind' },
    ...areas.map((a) => ({ '@type': 'Place', name: a })),
  ],
  knowsLanguage: ['hi', 'en'],
  makesOffer: ['Plot', 'Kothi / independent house', 'Flat', 'Commercial shop', 'Agricultural land'].map(
    (n) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: `${n} buying and selling in Jind` },
    })
  ),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: site.phoneIntl,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['Hindi', 'English'],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.brand,
  inLanguage: 'en-IN',
  publisher: { '@id': `${site.url}/#business` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Libre+Franklin:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
            <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-M5QBRB6LG7"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-M5QBRB6LG7');
  `}
</Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingActions />
        <JsonLd id="schema-business" data={businessSchema} />
        <JsonLd id="schema-website" data={websiteSchema} />
      </body>
    </html>
  );
}
