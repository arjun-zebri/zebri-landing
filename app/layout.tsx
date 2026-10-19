import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { FocusModality } from '@/components/site/focus-modality';
import { JsonLd } from '@/components/site/json-ld';
import { organization, SITE_URL } from '@/lib/structured-data';

import { PostHogProvider } from './providers';
import './globals.css';

/**
 * The site's root: Inter, the v2 focus and scrollbar behaviour the design
 * system expects (`FocusModality`, `v2-scroll`), PostHog, and the
 * Organization data every page carries. Each page sets its own title
 * through the template.
 *
 * @module app/layout
 */

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const DESCRIPTION =
  'Software for Australian wedding MCs and Celebrants. Zebri drafts your replies, sends proposals and contracts, chases deposits and gets the marriage paperwork ready to lodge.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Zebri · You run the event. Zebri does the rest.', template: '%s · Zebri' },
  description: DESCRIPTION,
  applicationName: 'Zebri',
  openGraph: {
    type: 'website',
    siteName: 'Zebri',
    locale: 'en_AU',
    url: SITE_URL,
    title: 'Zebri · You run the event. Zebri does the rest.',
    description: DESCRIPTION,
    images: [{ url: '/site/hero-dashboard.png', width: 2560, height: 1472, alt: 'The Zebri dashboard' }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className={`${inter.className} v2-scroll bg-field text-zebra-950 antialiased`}>
        <FocusModality />
        <JsonLd data={organization} />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
