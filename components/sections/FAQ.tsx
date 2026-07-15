"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Ordered by pre-signup anxiety: access & commitment first, then migration,
// product fit, trust, and billing. Static data; also feeds the FAQPage JSON-LD.
const faqs = [
  {
    id: "access",
    q: "When do I actually get access?",
    a: "Zebri is in active development, and we're onboarding founding members in small batches, earliest signups first. When your spot opens, we'll email you and book your free onboarding call to load your couples in together. Signing up now locks in your founding perks and your place in the queue.",
  },
  {
    id: "commitment",
    q: "What am I committing to by signing up?",
    a: "Your email address, nothing else. No credit card, no payment, no obligation. You're reserving your founding spot and the perks that come with it. If Zebri isn't for you when your invite arrives, you can simply ignore it.",
  },
  {
    id: "migration",
    q: "I have years of couples in spreadsheets and another CRM. How do I switch?",
    a: "That's exactly what the free onboarding call is for. We get on a call and load your couples, dates, and notes in together, whether they live in Google Sheets, Docs, or another CRM. You start with your whole business already in place, not an empty dashboard.",
  },
  {
    id: "crm",
    q: "Is this a CRM?",
    a: "Zebri includes end-to-end client management: couple contacts, vendor details, workflow stages, payment tracking, and AI enquiry scoring. But it's not a generic CRM. It's purpose-built for MCs and celebrants, with shared timelines and couple portals in one place. Think of it as the operational hub no generic CRM was designed to be.",
  },
  {
    id: "celebrants",
    q: "I'm a celebrant. Does Zebri handle the legal side?",
    a: "Yes. Zebri is built for celebrants as much as MCs. Ceremony paperwork lives alongside your run sheets and couple details, and NOIM submission is part of the Max integrations. Built in Australia, for how Australian celebrants actually work.",
  },
  {
    id: "starter",
    q: "I only do a handful of weddings a year. Is Zebri overkill?",
    a: "No. That's what the free Starter plan is for. It covers up to five couples with CRM basics, contracts, e-signatures, and invoicing, and costs nothing. When your calendar fills up, upgrade. You never pay for more business than you're running.",
  },
  {
    id: "accounts",
    q: "Do my couples and vendors need their own accounts?",
    a: "No. Couples and vendors work from a link. Your DJ opens the live timeline in their browser, your couple fills in their portal the same way. No logins, no app to download, nothing for them to pay.",
  },
  {
    id: "shared-timelines",
    q: "Can I share timelines with my DJ, photographer, and other vendors?",
    a: "Yes. Shared timelines are built into Zebri. Create the run sheet once, share a link with the DJ, photographer, planner, or couple. Everyone sees real-time updates as you make changes. No more WhatsApp chains or conflicting spreadsheet versions.",
  },
  {
    id: "ai-tool",
    q: "What does Pulse, the AI sales coach, actually do?",
    a: "Pulse scores every enquiry based on budget fit, availability, sentiment, engagement, and intent, giving each couple a readiness score so you know who to follow up with first. It also surfaces next best actions (send quote, book a call, follow up) and provides conversation summaries so you're always prepared. It's your sales assistant, not a gimmick.",
  },
  {
    id: "wedding-day",
    q: "Can I run the wedding day from my phone?",
    a: "Yes. Zebri works in any browser on your phone, tablet, or laptop, so your run sheet, notes, and name pronunciations are with you at the venue, not sitting on a laptop at home.",
  },
  {
    id: "privacy",
    q: "Is my data private? Is it used to train AI?",
    a: "Private, always. Your couples' details are never sold, shared, or used to train AI models. Pulse and Ask Zebri work on your business's data, for you alone.",
  },
  {
    id: "fees",
    q: "Are there fees on payments I collect?",
    a: "Zebri doesn't take a cut of your bookings, ever. Invoices are paid through standard payment providers at their standard processing rates. Zebri adds nothing on top.",
  },
  {
    id: "founding-terms",
    q: "What happens after my founding 12 months?",
    a: "Your plan continues at the standard rate. No surprise charges, and you'll see it on your invoices well before anything changes. Pro founding members using the free Max upgrade choose at that point: move to Max, or drop back to Pro. You can change plans or cancel anytime.",
  },
  {
    id: "cancel",
    q: "Can I cancel anytime?",
    a: "Yes. No lock-in, no cancellation fees. Cancel from your account settings in under 30 seconds. If you cancel, you keep access until the end of your billing period.",
  },
  {
    id: "data-export",
    q: "What happens to my data if I leave?",
    a: "It's yours, always. You can export your couples, timelines, and notes at any time, and if you cancel we'll help you take everything with you. No hostage data, ever.",
  },
];

// FAQ rich-result markup for search. Rendered into the SSR HTML below.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export function FAQ() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight mb-12 md:mb-16 text-center">
          Questions.
        </h2>

        <div className="max-w-3xl mx-auto">
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
                className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                  expanded === faq.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-[#6B7280] leading-relaxed pr-10 pb-5 md:pb-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-100 text-center">
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
