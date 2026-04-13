import Link from "next/link";
import { Nav } from "@/components/ui/Nav";

export const metadata = {
  title: "Blog | Zebri",
  description:
    "Practical guides and resources for professional wedding MCs. Run better weddings, manage your business, and stay sharp.",
};

export default function BlogPage() {
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
            <h1 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight mb-4">
              Coming soon.
            </h1>
            <p className="text-base text-[#6B7280] leading-relaxed">
              We&apos;re working on practical guides for professional wedding MCs. Check back soon.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            ← Back to Zebri
          </Link>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors">
            ← Back to Zebri
          </Link>
          <p className="text-xs text-[#6B7280]">© 2026 Zebri</p>
        </div>
      </footer>
    </>
  );
}
