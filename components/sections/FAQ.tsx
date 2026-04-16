"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const faqs = [
    {
      id: "pro-only",
      q: "Is Zebri only for professional MCs and celebrants?",
      a: "Zebri is built for professional wedding MCs and celebrants at any stage. Whether you're running a handful of weddings or have a full calendar, Zebri gives you the tools to run your business properly from day one.",
    },
    {
      id: "crm",
      q: "Is this a CRM?",
      a: "Zebri includes end-to-end client management: couple contacts, vendor details, workflow stages, payment tracking, and AI enquiry scoring. But it's not a generic CRM. It's purpose-built for MCs with shared timelines, couple portals, and offline event mode all in one place. Think of it as the operational hub no generic CRM was designed to be.",
    },
    {
      id: "cancel",
      q: "Can I cancel anytime?",
      a: "Yes. No lock-in, no cancellation fees. Cancel from your account settings in under 30 seconds. If you cancel, you keep access until the end of your billing period.",
    },
    {
      id: "feedback",
      q: "Can I give feedback?",
      a: "Absolutely, and we genuinely want it. You can reach us directly at arjun@zebri.com.au. Your feedback shapes what we build next.",
    },
    {
      id: "shared-timelines",
      q: "Can I share timelines with my DJ, photographer, and other vendors?",
      a: "Yes. Shared timelines are built into Zebri. Create the run sheet once, share a link with the DJ, photographer, planner, or couple. Everyone sees real-time updates as you make changes. No more WhatsApp chains or conflicting spreadsheet versions.",
    },
    {
      id: "ai-tool",
      q: "What does the AI sales coach actually do?",
      a: "Zebri scores every enquiry based on budget fit, availability, sentiment, engagement, and intent, giving each couple a readiness score so you know who to follow up with first. It also surfaces next best actions (send quote, book a call, follow up) and provides conversation summaries so you're always prepared. It's your sales assistant, not a gimmick.",
    },
    {
      id: "offline",
      q: "Does event mode work without internet?",
      a: "Yes. Event mode works completely offline. All your event data, timeline, couple details and notes are cached and available without wifi on the day. Perfect for venues with spotty connectivity.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-semibold text-gray-900 leading-tight tracking-tight mb-12 md:mb-16">
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
                  <ChevronDown
                    size={12}
                    className={`text-gray-500 transition-transform duration-200 ${
                      expanded === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
                  expanded === faq.id ? "max-h-48 pb-5 md:pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-[#6B7280] leading-relaxed pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-sm text-[#6B7280]">
            Still have questions?{" "}
            <a
              href="mailto:arjun@zebri.com.au"
              className="text-gray-900 font-semibold hover:text-gray-700 transition-colors underline underline-offset-2"
            >
              arjun@zebri.com.au
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
