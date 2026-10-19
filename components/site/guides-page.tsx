import Link from 'next/link';

import { EmptyState } from '@/components/ui-v2/empty-state';
import { ArrowForwardIcon, DocumentsIcon } from '@/components/ui-v2/icons';
import { formatDate, getAllGuides } from '@/lib/guides';

import { GUIDES_PATH } from './nav-links';
import { SiteSubpage } from './site-subpage';

/**
 * The site's Guides: straight answers to what MCs and Celebrants search
 * for, the pages search and answer engines will cite. Guides, not a blog
 * or news: pre-launch, a news page with a few posts makes the company look
 * smaller, and a guide that answers one question is what gets found and
 * quoted. Each guide is its own page (`/guides/<slug>`); with none, the
 * page says so plainly.
 *
 * Set like an editorial index (founder, 2026-10-19: "super premium",
 * matching the landing page): the newest guide as one wide card (no
 * pull quote beside it: it only repeated the title, founder 2026-10-19),
 * then the rest as rows split by hairlines, the date in its own column. The cards are the landing
 * page's resting cards; no gradient box (kept for the hero and BDM).
 * Only the landing page's type sizes: 40px for the page title, 19px for
 * every card title, 16px for the lead under the title, 13px body text
 * (excerpts) and labels (founder,
 * 2026-10-19: the guides had drifted to 33px and 28px titles).
 *
 * @module components/site/guides-page
 */

type GuideSummary = ReturnType<typeof getAllGuides>[number];

/** "8 May 2026 · 5 min read". */
function Meta({ guide }: { guide: GuideSummary }) {
  return (
    <p className="type-body text-zebra-500">
      <time dateTime={guide.date}>{formatDate(guide.date)}</time> · {guide.readTime}
    </p>
  );
}

/** The newest guide, across the page. The whole card is the link. */
function FeaturedGuide({ guide }: { guide: GuideSummary }) {
  return (
    <article className="group relative rounded-panel bg-field shadow-lg ring-1 ring-zebra-950/10 transition-shadow duration-150 hover:shadow-xl">
      <div className="p-6 sm:p-10">
        <p className="type-label text-grass-700">Latest guide</p>
        <h2 className="mt-3 max-w-2xl text-balance type-heading text-zebra-950">
          {/* The link's pad covers the card. */}
          <Link
            href={`${GUIDES_PATH}/${guide.slug}`}
            className="rounded-check focus-mark after:absolute after:inset-0 after:rounded-panel after:content-['']"
          >
            {guide.title}
          </Link>
        </h2>
        <p className="mt-2 line-clamp-3 max-w-2xl text-pretty type-body text-zebra-500">{guide.excerpt}</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Meta guide={guide} />
          <span aria-hidden="true" className="inline-flex items-center gap-1.5 type-label text-zebra-950">
            Read the guide
            <ArrowForwardIcon className="size-4 text-zebra-500 transition-colors duration-150 group-hover:text-zebra-950" />
          </span>
        </div>
      </div>
    </article>
  );
}

/** One more guide, as a row of the index. */
function GuideRow({ guide }: { guide: GuideSummary }) {
  return (
    <li className="group relative grid gap-3 py-8 sm:grid-cols-[10rem_1fr_auto] sm:gap-10">
      <Meta guide={guide} />
      <div>
        <h3 className="text-balance type-heading text-zebra-950">
          <Link
            href={`${GUIDES_PATH}/${guide.slug}`}
            className="rounded-check focus-mark after:absolute after:inset-0 after:content-['']"
          >
            {guide.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 max-w-2xl text-pretty type-body text-zebra-500">{guide.excerpt}</p>
      </div>
      <ArrowForwardIcon
        aria-hidden="true"
        className="hidden size-5 self-center text-zebra-300 transition-colors duration-150 group-hover:text-zebra-950 sm:block"
      />
    </li>
  );
}

/** Guides: the newest guide, then every other, newest first. */
export function GuidesPage() {
  const [latest, ...rest] = getAllGuides();
  return (
    <SiteSubpage
      page="guides"
      title="Guides for wedding MCs and Celebrants."
      lead="Straight answers on lodgement, contracts, pricing and running your business, from people who do the job."
    >
      <section aria-label="Guides" className="px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          {latest ? (
            <>
              <FeaturedGuide guide={latest} />
              {rest.length > 0 ? (
                <div className="mt-20">
                  <h2 className="type-label text-zebra-500">More guides</h2>
                  <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
                    {rest.map((g) => (
                      <GuideRow key={g.slug} guide={g} />
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-panel bg-field shadow-lg ring-1 ring-zebra-950/10">
              <EmptyState
                compact
                icon={DocumentsIcon}
                title="The first guides are on the way"
                body="Join the waitlist and we’ll send them to you as they’re published."
              />
            </div>
          )}
        </div>
      </section>
    </SiteSubpage>
  );
}
