export function Rewards() {
  const rewards = [
    {
      title: "40% Off Forever",
      description: "Founding members lock in lifetime discounted pricing. When Zebri launches at full price, you\u2019ve already won.",
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
      title: "Shape the Product",
      description: "Your feedback directly influences what we build. You\u2019re not a beta tester. You\u2019re a co-creator.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      ),
    },
    {
      title: "Direct Team Access",
      description: "No ticket system. No support queue. Direct Slack channel with the team. Real people answering real questions.",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32 bg-gray-50/70">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight mb-4">
          Founding members get real rewards.
        </h2>
        <p className="text-lg text-gray-500 mb-12 md:mb-16 max-w-xl">
          This isn&apos;t a free trial. It&apos;s an invitation to shape something from the ground up.
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

        {/* Urgency callout */}
        <div className="mt-10 rounded-lg border border-gray-200 border-l-4 border-l-amber-500 bg-amber-50 p-5 md:p-6 flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Only for founding members.
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Once the 20 spots fill, the next batch won&apos;t get these benefits. First come, first served.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
