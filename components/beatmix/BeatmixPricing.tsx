import {
  DISCOUNT_PERCENT,
  FOUNDING_DISCOUNT_PERCENT,
  discountedPrice,
} from "@/lib/beatmix";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    description: "Up to 5 couples. Free, and staying free.",
  },
  {
    name: "Pro",
    monthly: 49,
    description: "Unlimited couples, couple portal, Timeline Builder.",
    popular: true,
  },
  {
    name: "Max",
    monthly: 89,
    description: "Everything in Pro, plus Event Mode and priority support.",
  },
];

export function BeatmixPricing() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight mb-3">
          What it costs, with the Beatmix rate applied.
        </h2>
        <p className="text-base text-[#6B7280] max-w-[65ch] mb-12">
          Your discount runs for 12 months on Pro or Max. The free plan is free
          either way. There&apos;s no catch to find.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-md p-5 ${
                plan.popular
                  ? "border-2 border-gray-900"
                  : "border border-gray-200"
              }`}
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {plan.name}
              </h3>

              {plan.monthly === 0 ? (
                <>
                  <p className="text-3xl font-semibold text-gray-900">Free</p>
                  <p className="text-xs text-[#9CA3AF] mt-2">
                    No discount needed
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-gray-900">
                      ${discountedPrice(plan.monthly)}
                    </span>
                    <span className="text-sm text-[#6B7280]">/mo</span>
                    <span className="text-sm text-[#9CA3AF] line-through">
                      ${plan.monthly}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-2">
                    ${discountedPrice(plan.monthly, FOUNDING_DISCOUNT_PERCENT)}
                    /mo if you&apos;re in the first five
                  </p>
                </>
              )}

              <p className="text-sm text-[#6B7280] mt-5 leading-relaxed">
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-[#6B7280]">
          Prices in AUD. {DISCOUNT_PERCENT}% off applies for 12 months, then
          reverts to the standard rate. Cancel any time.
        </p>
      </div>
    </section>
  );
}
