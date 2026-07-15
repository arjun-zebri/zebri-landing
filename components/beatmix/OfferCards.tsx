import {
  DISCOUNT_PERCENT,
  FOUNDING_DISCOUNT_PERCENT,
  FOUNDING_SPOTS,
  formatDeadline,
} from "@/lib/beatmix";

const tiers = [
  {
    who: "Everyone who signs up",
    what: `${DISCOUNT_PERCENT}% off for 12 months`,
    detail: `Sign up before ${formatDeadline()} and your first year runs at the Beatmix rate.`,
  },
  {
    who: `The first ${FOUNDING_SPOTS}`,
    what: `${FOUNDING_DISCOUNT_PERCENT}% off for 12 months`,
    detail: `Decided by the time your email arrives. Five people. We'll tell you either way.`,
  },
  {
    who: "One person",
    what: "12 months free",
    detail: `Drawn at random from every Beatmix signup. Announced by email after ${formatDeadline()}.`,
  },
];

export function OfferCards() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight mb-3">
          What you get for scanning that code.
        </h2>
        <p className="text-base text-[#6B7280] max-w-[65ch] mb-12">
          Three things, and they stack in your favour. Everyone leaves with
          something.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.who}
              className="bg-white border border-gray-200 rounded-md p-5"
            >
              <p className="text-sm font-medium text-[#9CA3AF] mb-4">
                {tier.who}
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-2">
                {tier.what}
              </p>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {tier.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-white border border-gray-200 rounded-md p-5 border-l-2 border-l-[#A7F3D0]">
          <p className="text-base font-semibold text-gray-900 mb-1">
            And a personal setup session. All of you, not just the winners.
          </p>
          <p className="text-sm text-[#6B7280] max-w-[65ch] leading-relaxed">
            One-on-one, screen to screen. We move your couples across, build
            your first run sheet, and you finish with a system instead of a
            login.
          </p>
        </div>
      </div>
    </section>
  );
}
