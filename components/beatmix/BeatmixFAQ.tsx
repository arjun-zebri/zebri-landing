import { Plus } from "lucide-react";
import {
  DISCOUNT_PERCENT,
  FOUNDING_DISCOUNT_PERCENT,
  FOUNDING_SPOTS,
  formatDeadline,
} from "@/lib/beatmix";

const faqs = [
  {
    q: "How do I actually claim the discount?",
    a: `Give us your email above. We send you a code within 24 hours, and you enter it when you pick a plan. That's it. We're doing this by hand rather than through a coupon system, which is also how we know who was first.`,
  },
  {
    q: `How do I know if I'm one of the first ${FOUNDING_SPOTS}?`,
    a: `Your email arrives with a timestamp, and the first ${FOUNDING_SPOTS} get ${FOUNDING_DISCOUNT_PERCENT}% off instead of ${DISCOUNT_PERCENT}%. We'll tell you which one you got when we send your code. No counter on this page, because we're not going to fake one.`,
  },
  {
    q: "I'm a DJ, not an MC. Is this for me?",
    a: "Not yet, honestly. Today Zebri is built for the person running the room: the MC or the celebrant. You'll see the run sheet when they share it with you, which already beats a group chat. A view built for DJs is what we're working on next, so sign up and you'll be first to see it.",
  },
  {
    q: "Do I need a credit card to sign up?",
    a: "No. The free plan needs nothing, and the paid plans start with a 14-day trial. You'll only enter card details when you decide to keep going.",
  },
  {
    q: "I'm already on Dubsado. Is switching painful?",
    a: "That's what the setup session is for. We sit down together, move your couples across, and build your first run sheet while you watch. You don't do the data entry.",
  },
  {
    q: "What happens to my couples' data?",
    a: "It stays yours. We're built and hosted in Australia, we don't sell data, and you can export everything or delete your account whenever you want.",
  },
  {
    q: "When does this offer end?",
    a: `${formatDeadline()}. After that the Beatmix rate is gone, and Zebri costs what it costs on the website.`,
  },
];

export function BeatmixFAQ() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight mb-12">
          Questions.
        </h2>

        <div className="space-y-0">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-gray-200 py-5"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base font-medium text-gray-900">
                  {faq.q}
                </span>
                <Plus
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="flex-shrink-0 mt-0.5 text-[#9CA3AF] transition-transform duration-150 group-open:rotate-45"
                />
              </summary>
              <p className="mt-3 text-sm text-[#6B7280] leading-relaxed max-w-[65ch]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-12 text-sm text-[#6B7280]">
          Something else on your mind?{" "}
          <a
            href="mailto:arjun@zebri.com.au"
            className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors duration-150"
          >
            arjun@zebri.com.au
          </a>
        </p>
      </div>
    </section>
  );
}
