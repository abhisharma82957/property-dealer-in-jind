# Satyanarayan Property Dealer — Jind (Next.js website)

Next.js 15 (App Router) + Tailwind CSS. Every page is statically generated, so the site loads
fast and is easy for Google to crawl.

Primary keyword: **property dealer in Jind**
Supporting: property in jind, plots for sale in jind, house for sale in jind, flats in jind,
commercial property in jind, best property dealer in jind, real estate agent in jind.

---

## 1. Running it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build check
```

Node.js 18.18 or newer is required.

## 2. Easiest way to go live (free)

1. Push the code to GitHub.
2. Sign in at [vercel.com](https://vercel.com) → **Add New Project** → select the repo → Deploy.
3. In Vercel, go to **Settings → Domains**, add your domain (e.g.
   `satyanarayanpropertyjind.com`) and add the DNS records it shows you at your domain provider.

## 3. Five things to change BEFORE going live

| Where | What to change |
|---|---|
| `lib/site.js` → `url` | Your real domain (important — sitemap, canonical tags and schema are all built from it) |
| `lib/site.js` → `street`, `geo`, `mapUrl` | Your actual office address, lat/long from Google Maps, and your map link |
| `lib/site.js` → `stats` | Your real experience and deal numbers (the current values are samples) |
| `lib/properties.js` | Your real listings — title, price, size, location |
| `public/images/*.webp` | Your own property photographs (see point 5) |

The name `Abhishek Sharma`, number `8295754197` and email `abhisharma82957@gmail.com` are
already set. The whole site, the WhatsApp button, the schema and the footer all read from
`lib/site.js`, so the number only ever needs changing in one place.

## 4. Adding a new blog post or listing

**Blog:** add one object to `lib/posts.js`. The URL comes from the slug (`/blog/your-slug`), and
the page, the sitemap and the blog index all update automatically. Rules: `title` 50-60
characters, `description` 150-160 characters, keyword near the start of both.

**Listing:** add an object to `lib/properties.js` and put the image in `public/images/`. Write
alt text with the keyword and the location in it — image search brings real traffic.

## 5. Photographs (important)

The images shipped with the site are **brand-coloured illustration placeholders**, not real
photographs. Replace them with your own:

- Format: **WebP** (smaller files, faster loading). Convert JPGs at [squoosh.app](https://squoosh.app).
- Sizes: **1200 x 800** for property cards, **1200 x 675** for blog images, **1600 x 900** for the hero.
- Use keyword file names: `plot-for-sale-urban-estate-jind.webp`.
- Keep the same file names used in `lib/properties.js` and you will not have to touch any code.

## 6. SEO already built in

- A unique `<title>` (50-60 characters) and meta description (150-160 characters) on every page
- Keyword URLs: `/blog/property-dealer-in-jind`, `/blog/property-in-jind`,
  `/blog/plots-for-sale-in-jind`
- Canonical tags, Open Graph and Twitter cards, plus an OG image
- `robots.txt` (`/robots.txt`) and an XML sitemap (`/sitemap.xml`), both generated automatically
- Schema (JSON-LD): `RealEstateAgent` (local business, address, geo, hours, areaServed),
  `WebSite`, `FAQPage` (home), `BlogPosting` + `BreadcrumbList` (blog), `ContactPage`, `ItemList`
- Mobile-first responsive layout, visible keyboard focus, reduced-motion support, one H1 per page
- Internal linking between home, properties, blog and contact

## 7. After launch (this is what actually moves rankings)

1. **Google Search Console**: add the property and submit `sitemap.xml`. Paste the verification
   code into the `verification` block in `app/layout.js` (uncomment it first).
2. **Google Business Profile** (the Google Maps listing): this is the single biggest factor for
   appearing in the local pack for "property dealer in Jind". Add the address, hours, photos and
   the website link.
3. **Reviews**: ask every satisfied client for a Google review. Do not put invented reviews on
   the website — Google penalises it, which is why review schema has deliberately been left out.
4. **NAP consistency**: write the name, address and phone number identically everywhere
   (Justdial, Sulekha, Facebook, Instagram bio).
5. Publish one or two new posts a month — for example "plot rates in Jind 2026", "property in
   Narwana", "houses for rent in Jind". New content means more keywords ranking.
6. Check speed at [pagespeed.web.dev](https://pagespeed.web.dev) once you are live.

## 8. Folder structure

```
app/
  layout.js          global SEO + schema + header/footer
  page.js            home (hero, intro, 12 listings, FAQ, blog teasers)
  properties/        all listings
  about/  contact/   about and contact (WhatsApp enquiry form)
  blog/              blog index
  blog/[slug]/       one page per post
  sitemap.js  robots.js  not-found.js
components/          Header, Footer, FloatingActions (WhatsApp), PropertyCard, EnquiryForm
lib/site.js          contact details and areas  ← edit this first
lib/properties.js    12 listings
lib/posts.js         3 blog posts
public/images/       WebP images
```
