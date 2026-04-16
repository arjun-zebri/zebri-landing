const rewards = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-700"
        aria-hidden
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    heading: "40% off. Forever.",
    body: "Lock in $29/month for life — normally $49. Only available to the first 20 founding members. After that, standard pricing applies.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-700"
        aria-hidden
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    heading: "Shape the product.",
    body: "Your feedback ships in weeks, not quarters. Founding members have direct input into what gets built next — this is your tool, not a generic CRM.",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-emerald-700"
        aria-hidden
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heading: "Direct access to the team.",
    body: "A private channel with the founders. Real conversations, not a support ticket queue. Ask questions, flag issues, get answers.",
  },
];

export function Rewards() {
  return (
    <section
      id="founding"
      aria-labelledby="founding-heading"
      className="py-20 px-4 md:py-32 bg-[#FAFAFA]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-[#A7F3D0]"
              aria-hidden
            />
            <span className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest">
              Founding members
            </span>
          </div>
          <h2
            id="founding-heading"
            className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-xl"
          >
            More than software. A founding spot.
          </h2>
          <p className="text-base text-[#6B7280] mt-3 max-w-lg leading-relaxed">
            The first 20 MCs who join get benefits that standard subscribers
            never will.
          </p>
        </div>

        {/* Reward cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {rewards.map((reward, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="w-10 h-10 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center mb-4">
                {reward.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {reward.heading}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {reward.body}
              </p>
            </div>
          ))}
        </div>

        {/* Scarcity + CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#signup"
            className="inline-flex items-center gap-1.5 px-5 h-9 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors"
          >
            Claim Your Founding Spot
          </a>
          <p className="text-sm text-[#6B7280]">
            <span className="font-semibold text-gray-900">Only 20 spots</span>{" "}
            at founding price. Standard pricing after that.
          </p>
        </div>
      </div>
    </section>
  );
}
