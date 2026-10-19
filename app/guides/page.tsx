import type { Metadata } from 'next';

import { GuidesPage } from '@/components/site/guides-page';

/**
 * Guides for wedding MCs and Celebrants. See {@link GuidesPage}.
 *
 * @module app/guides/page
 */

export const metadata: Metadata = {
  title: 'Guides for wedding MCs and Celebrants',
  description:
    'Straight answers on lodgement, contracts, pricing and running a wedding MC or Celebrant business, from people who do the job.',
  alternates: { canonical: '/guides' },
};

export default function Page() {
  return <GuidesPage />;
}
