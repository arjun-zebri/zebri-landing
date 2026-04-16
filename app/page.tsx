import { Mail, ArrowRight } from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Hero } from "@/components/sections/Hero";
import { PainPoints } from "@/components/sections/PainPoints";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="w-full">
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Brand column */}
              <div className="md:col-span-5">
                <div className="mb-3">
                  <span className="text-lg font-semibold tracking-tight text-gray-900">
                    Zebri
                  </span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm">
                  The command centre for professional wedding MCs. One place for
                  your couples, timelines, scripts, vendor coordination, and
                  live event mode.
                </p>
              </div>

              {/* Product column */}
              <div className="md:col-span-3">
                <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-4">
                  Product
                </h4>
                <ul className="space-y-2.5">
                  {[
                    { label: "Features", href: "#features" },
                    { label: "Pricing", href: "#pricing" },
                    { label: "Blog", href: "/blog" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect column */}
              <div className="md:col-span-4">
                <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-4">
                  Connect
                </h4>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="mailto:arjun@zebri.com.au"
                      className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors flex items-center gap-2.5"
                    >
                      <Mail size={16} aria-hidden />
                      arjun@zebri.com.au
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/zebri_au/"
                      className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors flex items-center gap-2.5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <circle cx="17.5" cy="6.5" r="1.5" />
                      </svg>
                      @zebri_au
                    </a>
                  </li>
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="https://app.zebri.com.au/signup"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 transition-colors"
                  >
                    Get Started
                    <ArrowRight size={12} aria-hidden />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]">
              <p>&copy; 2026 Zebri. Built for professional wedding MCs.</p>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-gray-700 transition-colors">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-gray-700 transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
