'use client';

import { useEffect, useState } from 'react';

import type { GuideHeading } from '@/lib/guides';

/**
 * A guide's "On this page" list, beside the article from `lg`: one link
 * per h2, the section being read marked with a grass rule, as a long
 * read on Stripe's or Linear's site does. The server renders the list
 * with nothing marked; after hydration an `IntersectionObserver` marks
 * the last heading to pass the top third of the window.
 *
 * @module components/site/guide-contents
 */

export function GuideContents({ headings }: { headings: GuideHeading[] }) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const els = headings.map((h) => document.getElementById(h.id)).filter((el): el is HTMLElement => el !== null);
    if (els.length === 0 || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      () => {
        // The last heading above the line is the section being read.
        const line = window.innerHeight / 3;
        const passed = els.filter((el) => el.getBoundingClientRect().top <= line);
        setCurrent(passed.at(-1)?.id ?? null);
      },
      { rootMargin: '0px 0px -66% 0px', threshold: [0, 1] },
    );
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav aria-label="On this page">
      <h2 className="type-label text-zebra-950">On this page</h2>
      <ul className="mt-4 border-l border-hairline">
        {headings.map((h) => {
          const on = h.id === current;
          return (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                aria-current={on ? 'location' : undefined}
                className={`-ml-px block border-l py-1.5 pl-4 type-body transition-colors duration-150 focus-mark ${
                  on ? 'border-grass-600 text-zebra-950' : 'border-transparent text-zebra-500 hover:text-zebra-950'
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
