export function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 md:pt-36 md:pb-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div className="space-y-8">
            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-[2.75rem] md:text-[3.25rem] font-semibold leading-[1.12] tracking-tight text-gray-900">
                One command centre for&nbsp;your whole&nbsp;business.
              </h1>
              <p className="text-lg text-[#6B7280] leading-relaxed max-w-lg">
                Zebri brings your bookings, couple communications, timelines,
                and payments into one place. Focus on the performance, not the
                paperwork.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://app.zebri.com.au/signup"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md text-sm transition-colors"
              >
                Start Free Trial →
              </a>
              <p className="text-xs text-[#6B7280] mt-2.5">
                14-day free trial. No credit card required. Cancel anytime.
              </p>
            </div>

            {/* Credibility markers */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
              <span className="text-sm text-[#6B7280]">
                🇦🇺 Built in Australia
              </span>
              <span className="text-gray-300 hidden sm:inline">·</span>
              <span className="text-sm text-[#6B7280]">
                ✓ Backed by real MC feedback
              </span>
              <span className="text-gray-300 hidden sm:inline">·</span>
              <span className="text-sm text-[#6B7280]">
                🔒 Your data, secure
              </span>
            </div>
          </div>

          {/* Right: Placeholder */}
          <div className="hidden lg:block">
            <div className="w-full aspect-video rounded-xl bg-gray-100 border border-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
