export function Rewards() {
  const rewards = [
    {
      title: "20% Off Forever",
      description: "Early adopters lock in lifetime 20% discount. When Zebri launches at full price on May 1st, your price stays locked in.",
      bgColor: "bg-amber-100",
      textColor: "text-amber-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Direct Vendor Access",
      description: "Early adopters get direct team access. Slack channel with the team, not a ticket system. Your feedback shapes what we build.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Collaborate with Your Vendors",
      description: "Share timelines with DJs, planners, photographers, and other MCs. Everyone stays synced. Works offline on the day.",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32 bg-gray-50/70">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight mb-4">
          Early adopters get real rewards.
        </h2>
        <p className="text-lg text-gray-500 mb-12 md:mb-16 max-w-xl">
          Join before May 1st public launch and lock in 20% off forever. Direct access to the team. Your feedback shapes the product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rewards.map((reward, i) => (
            <div
              key={i}
              className="rounded-lg border border-gray-200 bg-white p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-lg ${reward.bgColor} ${reward.textColor} flex items-center justify-center mb-5`}>
                {reward.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reward.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {reward.description}
              </p>
            </div>
          ))}
        </div>

        {/* Launch date callout */}
        <div className="mt-10 rounded-lg border border-gray-200 border-l-4 border-l-blue-500 bg-blue-50 p-5 md:p-6 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Public launch: May 1, 2026
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Join now to lock in 20% off forever. Pricing will increase on launch day for new customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
