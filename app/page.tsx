import type { Metadata } from 'next';

import { JsonLd } from '@/components/site/json-ld';
import { WebsitePage } from '@/components/site/website-page';
import { faqPage, softwareApplication } from '@/lib/structured-data';

/**
 * The home page: the whole marketing page, with the product's offers and
 * the FAQ as structured data.
 *
 * @module app/page
 */

export const metadata: Metadata = {
  // Sydney only for what is stored there (records and files).
  description:
    'Enquiries, proposals, contracts, payments, run sheets and BDM lodgement in one place, for wedding MCs and Celebrants. Built in Australia, your couples’ records stored in Sydney, never used to train AI.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareApplication} />
      <JsonLd data={faqPage} />
      <WebsitePage />
    </>
  );
}
