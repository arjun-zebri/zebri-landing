import Link from 'next/link';

import { Avatar } from '@/components/ui-v2/avatar';
import { ArrowForwardIcon, ArrowLeftIcon } from '@/components/ui-v2/icons';
import type { Guide } from '@/lib/guides';
import { formatDate, getAllGuides, outlineGuide } from '@/lib/guides';

import { GuideContents } from './guide-contents';
import { GUIDES_PATH } from './nav-links';
import { SITE_PROSE } from './prose';
import { SiteSubpage } from './site-subpage';

/**
 * One guide's page, set as a long read (founder, 2026-10-19: "super
 * premium", matching the landing page): a link back to the Guides over
 * the title, the founder's byline with his photo, then the article at a
 * book's measure in the landing page's body text (`type-body`), with its contents beside it from `lg`.
 * After it, the next guide to read, then the waitlist panel.
 *
 * @module components/site/guide-article
 */

/** Who wrote it and when, under the lead. */
function Byline({ guide }: { guide: Guide }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar name="Arjun Punekar" src="/headshot.jpeg" className="size-10" />
      <div>
        <p className="type-label text-zebra-950">Arjun Punekar, founder of Zebri</p>
        <p className="type-body text-zebra-500">
          <time dateTime={guide.date}>{formatDate(guide.date)}</time> · {guide.readTime}
        </p>
      </div>
    </div>
  );
}

/** The site's long-form text, the opening paragraph in ink as a lede. */
const PROSE = `${SITE_PROSE} [&>p:first-child]:text-zebra-950`;

/** A guide. `guide.content` is trusted HTML from `lib/guides.ts`. */
export function GuideArticle({ guide }: { guide: Guide }) {
  const { html, headings } = outlineGuide(guide.content);
  const next = getAllGuides().find((g) => g.slug !== guide.slug);
  return (
    <SiteSubpage
      page="guides"
      kicker={
        <Link
          href={GUIDES_PATH}
          className="group inline-flex items-center gap-1.5 rounded-check focus-mark"
        >
          <ArrowLeftIcon aria-hidden="true" className="size-4 text-grass-600 transition-colors duration-150 group-hover:text-grass-800" />
          Guides
        </Link>
      }
      title={guide.title}
      lead={guide.excerpt}
      byline={<Byline guide={guide} />}
    >
      <div className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto grid max-w-6xl gap-16 border-t border-hairline pt-10 sm:pt-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-24">
          <article className={PROSE} dangerouslySetInnerHTML={{ __html: html }} />
          {headings.length > 1 ? (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <GuideContents headings={headings} />
              </div>
            </aside>
          ) : null}
        </div>

        {next ? (
          <div className="mx-auto mt-24 max-w-6xl">
            <h2 className="type-label text-zebra-500">Keep reading</h2>
            <article className="group relative mt-4 flex flex-col gap-6 rounded-panel bg-field p-6 shadow-lg ring-1 ring-zebra-950/10 transition-shadow duration-150 hover:shadow-xl sm:flex-row sm:items-end sm:justify-between sm:p-10">
              <div className="max-w-2xl">
                <p className="type-body text-zebra-500">
                  <time dateTime={next.date}>{formatDate(next.date)}</time> · {next.readTime}
                </p>
                <h3 className="mt-3 text-balance type-heading text-zebra-950">
                  <Link
                    href={`${GUIDES_PATH}/${next.slug}`}
                    className="rounded-check focus-mark after:absolute after:inset-0 after:rounded-panel after:content-['']"
                  >
                    {next.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-2 text-pretty type-body text-zebra-500">{next.excerpt}</p>
              </div>
              <span aria-hidden="true" className="inline-flex shrink-0 items-center gap-1.5 type-label text-zebra-950">
                Read the guide
                <ArrowForwardIcon className="size-4 text-zebra-500 transition-colors duration-150 group-hover:text-zebra-950" />
              </span>
            </article>
          </div>
        ) : null}
      </div>
    </SiteSubpage>
  );
}
