import type { Metadata } from 'next';

import { BlocksPage } from '@/components/site/blocks-page';

/**
 * Blocks: every block in Zebri. See {@link BlocksPage}.
 *
 * @module app/blocks/page
 */

export const metadata: Metadata = {
  title: 'Blocks',
  description:
    'Every block in Zebri, from enquiries and booking links to proposals, contracts, payments, run sheets, ceremony scripts and NSW BDM lodgement.',
  alternates: { canonical: '/blocks' },
};

export default function Page() {
  return <BlocksPage />;
}
