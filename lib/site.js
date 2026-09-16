// ---------------------------------------------------------------------------
// EDIT THIS FILE FIRST. Everything on the site reads contact details from here.
// ---------------------------------------------------------------------------

export const site = {
  // TODO: put your real domain here before going live (no trailing slash).
  url: 'https://www.satyanarayanpropertydealerjind.com',
  brand: 'Satyanarayan Property Dealer',
  tagline: 'A better place for a brighter tomorrow',
  owner: 'Abhishek Sharma',
  phone: '8295754197',
  phoneIntl: '+918295754197',
  whatsapp: '918295754197',
  email: 'abhisharma82957@gmail.com',
  city: 'Jind',
  state: 'Haryana',
  postalCode: '126102',
  // TODO: replace with your exact shop/office address line.
  geo: { lat: 29.3159, lng: 76.315 },
  hours: 'Mon-Sun, 9:00 am - 8:00 pm',
  // TODO: paste your real profile links here, or leave the array empty.
  social: [],
  // TODO: paste your Google Business Profile map embed/share link here.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=property+dealer+in+Jind+Haryana',
  // TODO: update these figures to your real track record.
  stats: [
    { value: '12+', label: 'years working in the Jind property market' },
    { value: '900+', label: 'plot, house and shop deals closed' },
    { value: '40+', label: 'colonies and sectors covered across Jind' },
  ],
};

export const areas = [
  'Urban Estate, Jind',
  'Rohtak Road',
  'Gohana Road',
  'Safidon Road',
  'Hansi Road',
  'Patiala Chowk',
  'Rani Talab',
  'Bhiwani Road',
  'Defence Colony',
  'Shiv Nagar',
  'Narwana',
  'Uchana',
  'Julana',
  'Alipura & Jind Bypass',
];

export function waLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waDefault = waLink(
  `Hello ${site.owner}, I would like some information about property in Jind. (via the Satyanarayan Property Dealer website)`
);
