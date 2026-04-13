export function FinalCTA() {
  return (
    <section id="signup" className="py-20 px-4 md:py-32 bg-gray-50">
      <div className="max-w-lg mx-auto text-center">
        {/* Headline */}
        <h2 className="text-[2.5rem] md:text-[3rem] font-semibold leading-tight tracking-tight text-gray-900 mb-4">
          Start running every wedding from one place.
        </h2>
        <p className="text-base text-[#6B7280] leading-relaxed max-w-md mx-auto mb-10">
          Set up in minutes. Invite your couples. Run your first event in Zebri this week.
        </p>

        {/* CTA */}
        <a
          href="https://app.zebri.com.au/signup"
          className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-md text-sm transition-colors"
        >
          Start Free Trial →
        </a>

        <p className="text-center text-xs text-[#6B7280] mt-5">
          14-day free trial. No credit card. Cancel anytime.
        </p>

        {/* Trust signals */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { value: "14 days", label: "Free trial" },
            { value: "No card", label: "Required" },
            { value: "Cancel", label: "Anytime" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-3 px-2 rounded-md border border-gray-200 bg-white"
            >
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-0.5">
                {stat.value}
              </div>
              <div className="text-[10px] text-[#6B7280] font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
