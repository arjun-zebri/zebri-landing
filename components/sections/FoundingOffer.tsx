import { ArrowRight, Check, Gift } from "lucide-react";
import { EarlyAccessButton } from "@/components/ui/EarlyAccessButton";
import {
  FOUNDING_PERKS as perks,
  FOUNDING_DRAW_HEADLINE,
  FOUNDING_DRAW_DETAIL,
} from "@/lib/earlyAccess";

export function FoundingOffer() {
  return (
    <section
      id="founding-offer"
      aria-labelledby="founding-heading"
      className="py-20 md:py-32 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-16">
            {/* Left: pitch */}
            <div>
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">
                Founding member offer
              </p>
              <h2
                id="founding-heading"
                className="text-[1.75rem] md:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight mb-4"
              >
                Sign up early.
                <br />
                Shape the product.
              </h2>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-8 max-w-sm">
                Zebri is early, and the first MCs and celebrants on board get
                treated like it. Every signup right now is a founding member.
              </p>
              <EarlyAccessButton
                source="founding-offer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 transition-colors cursor-pointer"
              >
                Claim your founding spot
                <ArrowRight size={16} aria-hidden />
              </EarlyAccessButton>
            </div>

            {/* Right: perks */}
            <div>
              <ul className="space-y-5">
                {perks.map((perk) => (
                  <li key={perk.title} className="flex gap-3">
                    <Check
                      size={16}
                      className="text-emerald-600 flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {perk.title}
                      </p>
                      <p className="text-sm text-[#6B7280] leading-relaxed">
                        {perk.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* The draw */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex gap-3">
                <Gift
                  size={16}
                  className="text-emerald-600 flex-shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {FOUNDING_DRAW_HEADLINE}
                  </span>{" "}
                  {FOUNDING_DRAW_DETAIL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
