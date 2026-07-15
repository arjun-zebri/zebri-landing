import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";
import { Nav } from "@/components/ui/Nav";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.metaTitle ?? post.title} | Zebri Blog`,
    description: post.metaDescription ?? post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4 pt-8 pb-16 md:pt-10 md:pb-24">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-gray-900 transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to blog
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <time className="text-xs text-[#6B7280]">{formatDate(post.date)}</time>
              <span className="text-gray-200">·</span>
              <span className="text-xs text-[#6B7280]">{post.readTime}</span>
            </div>
            <h1 className="text-[1.75rem] md:text-[2.25rem] font-semibold text-gray-900 leading-tight tracking-tight mb-0">
              {post.title}
            </h1>
          </header>

          <hr className="border-gray-100 mb-10" />

          {/* Post content */}
          <div
            className="prose prose-gray max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-gray-900 prose-a:underline prose-a:underline-offset-2 prose-li:text-[#6B7280] prose-p:text-[#374151] prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-1">Run your weddings from one place.</p>
            <p className="text-sm text-[#6B7280] mb-4">14-day free trial. No credit card required.</p>
            <a
              href="https://app.zebri.com.au/signup"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-md transition-colors"
            >
              Get Started →
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors">
            ← Back to Zebri
          </Link>
          <p className="text-xs text-[#6B7280]">© 2026 Zebri</p>
        </div>
      </footer>
    </>
  );
}
