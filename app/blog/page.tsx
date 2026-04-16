import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata = {
  title: "Blog | Zebri",
  description:
    "Practical guides and resources for professional wedding MCs. Run better weddings, manage your business, and stay sharp.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          {/* Header */}
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
              Blog
            </p>
            <h1 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight">
              For professional wedding MCs.
            </h1>
          </div>

          {/* Post list */}
          <div className="divide-y divide-gray-100">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <p className="text-xs text-[#9CA3AF] mb-2">
                    {formatDate(post.date)} &middot; {post.readTime}
                  </p>
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
          <Link href="/" className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors">
            &larr; Back to Zebri
          </Link>
          <p className="text-xs text-[#6B7280]">&copy; 2026 Zebri</p>
        </div>
      </footer>
    </>
  );
}
