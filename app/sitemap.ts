import type { MetadataRoute } from 'next';

import { getAllGuides } from '@/lib/guides';
import { SITE_URL } from '@/lib/structured-data';

/** Every page on the site, for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/blocks', '/guides', '/privacy', '/terms'].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.6,
  }));
  const guides = getAllGuides().map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: g.date,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));
  return [...pages, ...guides];
}
