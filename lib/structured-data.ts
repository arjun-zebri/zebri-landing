import { CATALOG } from '@/components/site/catalog';
import { FAQS } from '@/components/site/faq-data';
import { FOUNDING_PRICE } from '@/components/site/founding-offer';
import { OFFERS } from '@/components/site/plan-pricing';

import type { Guide } from './guides';

/**
 * The site's schema.org JSON-LD, for search and answer engines: who Zebri
 * is (Organization, on every page), what it sells and for how much
 * (SoftwareApplication with its offers) and its FAQ (FAQPage) on the home
 * page, and each guide as an Article with its breadcrumb. Built from the
 * same data the pages show, so the two never disagree.
 *
 * @module lib/structured-data
 */

export const SITE_URL = 'https://zebri.com.au';

const ORG_ID = `${SITE_URL}/#organization`;

/** Zebri, the company. */
export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Zebri',
  legalName: 'Knotify Pty Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}/zebri-logo.svg`,
  email: 'arjun@zebri.com.au',
  founder: { '@type': 'Person', name: 'Arjun Punekar' },
  address: { '@type': 'PostalAddress', addressLocality: 'Sydney', addressRegion: 'NSW', addressCountry: 'AU' },
};

/** The product and its plans, at the prices the pricing band shows. */
export const softwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Zebri',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  description:
    'Software for Australian wedding MCs and Celebrants: enquiries, proposals, contracts, card payments, run sheets, ceremony scripts and NSW BDM lodgement in one place.',
  featureList: CATALOG.filter((b) => !b.soon).map((b) => `${b.name}: ${b.pitch}`),
  audience: { '@type': 'BusinessAudience', audienceType: 'Wedding MCs and Celebrants' },
  publisher: { '@id': ORG_ID },
  offers: OFFERS.map((o) => ({
    '@type': 'Offer',
    name: o.name,
    // Max is offered to founding members at the founding price.
    price: String(o.tier === 'max' ? FOUNDING_PRICE : o.was),
    priceCurrency: 'AUD',
    description: o.tier === 'max' ? `Founding members, a month for the first 12 months (usually $${o.was})` : 'A month',
  })),
};

/** The home page's questions and answers. */
export const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/** A guide, and where it sits on the site. */
export function guideData(g: Guide) {
  const url = `${SITE_URL}/guides/${g.slug}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: g.title,
      description: g.metaDescription ?? g.excerpt,
      datePublished: g.date,
      dateModified: g.date,
      author: { '@type': 'Person', name: 'Arjun Punekar' },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Zebri', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: g.title, item: url },
      ],
    },
  ];
}
