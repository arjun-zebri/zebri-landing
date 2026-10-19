import type { ReactNode } from 'react';

import { type SitePage } from './nav-links';
import { SiteFooter } from './site-footer';
import { SiteFounding } from './site-founding';
import { SiteNav } from './site-nav';
import { WaitlistPlanProvider } from './waitlist-plan';

/**
 * The frame of every marketing page that is not the home page (Blocks,
 * Guides, Privacy, Terms): the nav with this page marked current, a
 * an h1 and a lead on plain white, the page's own bands, then
 * the waitlist panel, so the nav's Join the waitlist lands on a form
 * here too, and the footer. The nav's Features and Pricing go back to
 * the home page. The hero's sky stays on the home page only (founder,
 * 2026-10-19: "why is there a weird background"), and the header sits
 * close under the nav, the title at 40px and the lead at the landing
 * page's 16px, the same on every sub-page.
 *
 * @module components/site/site-subpage
 */

export interface SiteSubpageProps {
  /** Marks its nav link current; none for a page with no link (Privacy, Terms). */
  page?: SitePage | undefined;
  /**
   * Over the title: only a guide's link back up to the Guides. No page
   * repeats its own name there (founder, 2026-10-19: the green "Blocks"
   * and "Guides" over the headings were removed).
   */
  kicker?: ReactNode;
  /** The page's h1. */
  title: string;
  lead: ReactNode;
  /** Under the lead: who wrote it and when, on a guide. */
  byline?: ReactNode;
  /** The page's own bands, between the header and the waitlist. */
  children: ReactNode;
  /** Ends on the waitlist panel; off for the legal pages. On by default. */
  waitlist?: boolean | undefined;
}

/** A marketing sub-page. See {@link SiteSubpageProps}. */
export function SiteSubpage({ page, kicker, title, lead, byline, children, waitlist = true }: SiteSubpageProps) {
  return (
    <WaitlistPlanProvider>
      <div className="relative isolate min-h-screen overflow-x-clip bg-field text-zebra-950">
        <a
          href="#main"
          className="sr-only rounded-button bg-field px-4 py-2 type-label text-zebra-950 shadow-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-40 focus-mark"
        >
          Skip to content
        </a>
        <SiteNav page={page} />
        <main id="main" tabIndex={-1} className="outline-none">
          <header className="px-5 pb-10 pt-24 sm:px-8 sm:pb-12 sm:pt-32">
            <div className="mx-auto max-w-6xl">
              {kicker ? <div className="mb-4 type-label text-grass-700">{kicker}</div> : null}
              {/* 40px, a landing section title's size, on every sub-page: the 48px is the home hero's alone (founder, 2026-10-19). */}
              <h1 className="max-w-3xl text-balance type-site-title text-zebra-950">{title}</h1>
              <p className="mt-4 max-w-2xl text-pretty type-lead text-zebra-500">{lead}</p>
              {byline ? <div className="mt-6">{byline}</div> : null}
            </div>
          </header>
          {children}
          {waitlist ? (
            <div className="bg-zebra-50">
              <SiteFounding />
            </div>
          ) : null}
        </main>
        <SiteFooter />
      </div>
    </WaitlistPlanProvider>
  );
}
