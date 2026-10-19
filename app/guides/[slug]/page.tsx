import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { GuideArticle } from '@/components/site/guide-article';
import { JsonLd } from '@/components/site/json-ld';
import { getAllGuides, getGuideBySlug } from '@/lib/guides';
import { guideData } from '@/lib/structured-data';

/**
 * One guide, built at deploy time for every slug in `lib/guides.ts`.
 *
 * @module app/guides/[slug]/page
 */

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const guide = getGuideBySlug((await params).slug);
  if (!guide) return {};
  return {
    title: { absolute: guide.metaTitle ?? `${guide.title} · Zebri` },
    description: guide.metaDescription ?? guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { type: 'article', publishedTime: guide.date, title: guide.title, description: guide.metaDescription ?? guide.excerpt },
  };
}

export default async function Page({ params }: Params) {
  const guide = getGuideBySlug((await params).slug);
  if (!guide) notFound();
  return (
    <>
      <JsonLd data={guideData(guide)} />
      <GuideArticle guide={guide} />
    </>
  );
}
