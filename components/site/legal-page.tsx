import { Children, isValidElement, type ReactElement, type ReactNode } from 'react';

import type { GuideHeading } from '@/lib/guides';

import { GuideContents } from './guide-contents';
import { SITE_PROSE } from './prose';
import { SiteSubpage } from './site-subpage';

/**
 * Privacy and Terms: the site's frame (nav, white header, footer) round the
 * legal text in the guides' long-form style (`SITE_PROSE`), laid out as a
 * guide is: the text at the reading measure on the left, an "On this page"
 * rail on the right from `lg` (the guides' `GuideContents`), so the page
 * uses its width and a 20-section document can be jumped through. The text
 * alone at 34rem left half the page empty (founder, 2026-10-19). No
 * waitlist panel: a legal page is read, not sold from.
 *
 * The rail is read from the text itself, on the server: each top-level
 * `<section>` whose first `<h2>` has an `id` and plain-text title gives one
 * entry, so the titles are never kept twice.
 *
 * @module components/site/legal-page
 */

export interface LegalPageProps {
  title: string;
  /** "10 March 2026". */
  updated: string;
  /** The text: one `<section>` per part, each opening with an `<h2 id="…">` and plain text. */
  children: ReactNode;
}

type WithChildren = ReactElement<{ id?: string; children?: ReactNode }>;

/** The `h2`s that open the page's sections, as rail entries. */
function headingsOf(children: ReactNode): GuideHeading[] {
  return Children.toArray(children).flatMap((section) => {
    if (!isValidElement(section)) return [];
    const h2 = Children.toArray((section as WithChildren).props.children).find(
      (c): c is WithChildren => isValidElement(c) && c.type === 'h2',
    );
    const { id, children: text } = h2?.props ?? {};
    return id && typeof text === 'string' ? [{ id, text }] : [];
  });
}

/** A legal page. See {@link LegalPageProps}. */
export function LegalPage({ title, updated, children }: LegalPageProps) {
  const headings = headingsOf(children);
  return (
    <SiteSubpage title={title} lead={`Last updated ${updated}.`} waitlist={false}>
      <div className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto grid max-w-6xl gap-16 border-t border-hairline pt-10 sm:pt-12 lg:grid-cols-[minmax(0,40rem)_1fr] lg:gap-24">
          <div className={SITE_PROSE}>{children}</div>
          {headings.length > 1 ? (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <GuideContents headings={headings} />
              </div>
            </aside>
          ) : null}
        </div>
      </div>
    </SiteSubpage>
  );
}
