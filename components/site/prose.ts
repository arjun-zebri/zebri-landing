/**
 * The site's long-form text, for a guide and for the legal pages: the
 * landing page's own sizes and nothing else (founder, 2026-10-19: "make
 * it consistent"). Body text is the landing's 13px `type-body`, h2s its
 * 19px card title, h3s its 16px lead; ink and greys from the palette,
 * links underlined in grass.
 *
 * @module components/site/prose
 */

export const SITE_PROSE = [
  'prose prose-zinc max-w-none type-body prose-p:type-body prose-li:type-body',
  'prose-p:text-zebra-700 prose-li:text-zebra-700 prose-strong:text-zebra-950 prose-strong:font-semibold',
  'prose-headings:text-zebra-950 prose-headings:font-semibold prose-headings:tracking-[-0.015em]',
  'prose-h2:mt-12 prose-h2:mb-3 prose-h2:text-[1.1875rem] prose-h2:leading-[1.47] prose-h2:tracking-[-0.01em] prose-h2:scroll-mt-24',
  'prose-h3:mt-8 prose-h3:mb-2 prose-h3:text-base',
  'prose-a:font-medium prose-a:text-zebra-950 prose-a:underline prose-a:decoration-grass-400 prose-a:decoration-2 prose-a:underline-offset-4 hover:prose-a:decoration-grass-700',
  'prose-blockquote:border-l-2 prose-blockquote:border-grass-500 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-zebra-950',
  'prose-li:marker:text-zebra-400 prose-hr:border-hairline',
  // Nothing pushes the text down from the hairline above it (the legal pages wrap each part in a section).
  '[&>:first-child]:mt-0 [&>:first-child>:first-child]:mt-0',
].join(' ');
