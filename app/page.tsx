import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { Features } from "@/components/sections/Features";
import { Rewards } from "@/components/sections/Rewards";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full">
        <Hero />
        <PainPoints />
        <Features />
        <Rewards />
        <FAQ />
        <FinalCTA />

        {/* Footer */}
        <footer className="bg-gray-950 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Brand column */}
              <div className="md:col-span-5">
                <div className="mb-3">
                  <span className="text-lg font-bold tracking-tight text-white">
                    Zebri
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  The command centre for professional wedding MCs. One place for
                  your timeline, scripts, couple details, and live performance
                  mode.
                </p>
              </div>

              {/* Product column */}
              <div className="md:col-span-3">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Product
                </h4>
                <ul className="space-y-2.5">
                  {[
                    "Client Management",
                    "Timeline Builder",
                    "Couple Portal",
                    "Script Organiser",
                    "Event Mode",
                  ].map((label) => (
                    <li key={label}>
                      <span className="text-sm text-gray-400 cursor-default">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect column */}
              <div className="md:col-span-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Connect
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="mailto:arjun@zebri.com.au"
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2.5"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      arjun@zebri.com.au
                    </a>
                  </li>
                </ul>

                {/* Mini CTA */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <a
                    href="#join-beta"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    Join the Beta
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
              <p>&copy; 2026 Zebri. Built for professional wedding MCs.</p>
              <p className="flex items-center gap-1.5">
                Made with
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#EF4444"
                  stroke="none"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                for MCs everywhere
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
