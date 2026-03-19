"use client";

import { useState } from "react";

export function FAQ() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqs = [
    {
      id: "pro-only",
      q: "Is Zebri only for professional MCs and celebrants?",
      a: "Yes, Zebri is built for professional wedding MCs and celebrants managing 25+ events per year. We focus exclusively on vendors who need operational tools built for wedding coordination, not generic business software.",
    },
    {
      id: "crm",
      q: "Is this a CRM?",
      a: "Zebri includes full client management features like couple contacts, vendor details, and payment tracking, but it goes further. It\u2019s purpose built for MCs and celebrants with shared timelines, scripts, couple portals, and offline event mode all in one place. Think of it as the operational hub no generic CRM was designed to be.",
    },
    {
      id: "launch",
      q: "When is this launching?",
      a: "Public launch is May 1, 2026. Early adopters who join now get 20% off forever. After May 1st, new customers won\u2019t get that pricing.",
    },
    {
      id: "pricing",
      q: "How much will Zebri cost?",
      a: "Zebri will be $50 per month. Early adopters who join before May 1st get 20% off that price, forever.",
    },
    {
      id: "feedback",
      q: "Can I give feedback?",
      a: "Absolutely, and we genuinely want to hear it. As an early adopter you\u2019ll have direct access to our team via Slack. Your feedback directly shapes what we build next.",
    },
    {
      id: "shared-timelines",
      q: "Can I share timelines with my DJ, photographer, and other vendors?",
      a: "Yes. Shared timelines are built into Zebri. Your vendors can access the timeline you share with them, see updates in real-time, and coordinate better. Perfect for keeping the whole team synced.",
    },
    {
      id: "offline",
      q: "Does event mode work without internet?",
      a: "Yes. Event mode works completely offline. All your event data, timeline, scripts, couple details and notes are available without wifi on the day. Perfect for venue venues with spotty connectivity.",
    },
    {
      id: "after-signup",
      q: "What happens after I sign up?",
      a: "You\u2019ll receive one email confirming your early access. We\u2019ll contact you closer to May 1st with setup details and to answer questions. No spam, no drip campaigns.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight mb-12 md:mb-16">
          Questions.
        </h2>

        <div>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-100 last:border-b-0"
            >
              <button
                onClick={() => setExpanded(expanded === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between gap-4 text-left py-5 md:py-6 group"
              >
                <span className="text-[15px] font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={`text-gray-500 transition-transform duration-200 ${
                      expanded === faq.id ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ${
                  expanded === faq.id ? "max-h-40 pb-5 md:pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-500 leading-relaxed pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-500">
            Still have questions?{" "}
            <a
              href="mailto:arjun@zebri.com.au"
              className="text-gray-900 font-medium hover:text-gray-700 transition-colors underline underline-offset-2"
            >
              arjun@zebri.com.au
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
