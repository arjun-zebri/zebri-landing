import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { getAllNewsPosts, formatNewsDate } from "@/lib/news";

export const metadata = {
  title: "News | Zebri",
  description:
    "Weekly product updates from Zebri. What's shipping, what's changing, and what it means for professional wedding MCs.",
};

export default function NewsPage() {
  const posts = getAllNewsPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
              News
            </p>
            <h1 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight">
              What shipped this week.
            </h1>
          </div>

          {/* Post list */}
          <div className="divide-y divide-gray-100">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0">
                <Link href={`/news/${post.slug}`} className="group block">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xs text-[#9CA3AF]">
                      {formatNewsDate(post.date)}
                    </p>
                    {post.eyebrow && (
                      <>
                        <span className="text-gray-200">·</span>
                        <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                          {post.eyebrow}
                        </p>
                      </>
                    )}
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-gray-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-3 text-sm font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                    Read &rarr;
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors"
          >
            &larr; Back to Zebri
          </Link>
          <p className="text-xs text-[#6B7280]">&copy; 2026 Zebri</p>
        </div>
      </footer>
    </>
  );
}
