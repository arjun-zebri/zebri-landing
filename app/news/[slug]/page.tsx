import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNewsPosts, getNewsPostBySlug, formatNewsDate } from "@/lib/news";
import { Nav } from "@/components/ui/Nav";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export function generateStaticParams() {
  return getAllNewsPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.metaTitle ?? post.title} | Zebri News`,
    description: post.metaDescription ?? post.excerpt,
  };
}

const proseClasses =
  "prose prose-gray max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-2 prose-li:text-[#6B7280] prose-p:text-[#374151] prose-p:leading-relaxed [&>*:first-child]:mt-0";

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 pt-8 pb-16 md:pt-10 md:pb-24">
          {/* Back link */}
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-gray-900 transition-colors mb-10"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to news
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <time className="text-xs text-[#6B7280]">
                {formatNewsDate(post.date)}
              </time>
              {post.eyebrow && (
                <>
                  <span className="text-gray-200">·</span>
                  <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                    {post.eyebrow}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold text-gray-900 leading-tight tracking-tight mb-4">
              {post.title}
            </h1>
            {post.heroLine && (
              <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
                {post.heroLine}
              </p>
            )}
          </header>

          <hr className="border-gray-100 mb-10" />

          {/* Content blocks */}
          {post.blocks.map((block, i) =>
            block.type === "html" ? (
              <div
                key={i}
                className={proseClasses}
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            ) : (
              <ImageCarousel
                key={i}
                images={block.images}
                label={block.label}
              />
            )
          )}

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Run your weddings from one place.
            </p>
            <p className="text-sm text-[#6B7280] mb-4">
              14-day free trial. No credit card required.
            </p>
            <a
              href="https://app.zebri.com.au/signup"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Start free trial →
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors"
          >
            Back to Zebri
          </Link>
          <p className="text-xs text-[#6B7280]">&copy; 2026 Zebri</p>
        </div>
      </footer>
    </>
  );
}
