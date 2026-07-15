/*
 * DRAFT TESTIMONIALS: placeholder quotes and names from design-partner MCs.
 * Replace with real quotes (with permission) before relying on them.
 */

const testimonials = [
  {
    quote:
      "Every MC I know runs their weekends off screenshots, group chats and a notes app. Someone finally building the tool we actually need is why I said yes on day one.",
    name: "Mitch R.",
    role: "Wedding MC, Sydney · 30+ weddings a year",
  },
  {
    quote:
      "I've been in the planning calls telling them where it breaks in the real world — the last-minute name changes, the pronunciation notes, the DJ handoff. This is being built around how the job actually works.",
    name: "Danielle K.",
    role: "Celebrant & MC, Melbourne",
  },
  {
    quote:
      "I've tried bending three different CRMs into shape for MC work. None of them fit. Helping shape one from scratch, for us, is the first time it's felt right.",
    name: "Sam T.",
    role: "Wedding MC, Gold Coast",
  },
  {
    quote:
      "The part I pushed hardest for is the shared timeline — one place my couple, DJ and photographer all see. Get that right and it saves me an hour of texts before every wedding.",
    name: "Priya N.",
    role: "Wedding MC & Host, Brisbane",
  },
  {
    quote:
      "I signed on because they listen. I flagged how I build my run sheets and it was in the next version. That's not how software usually treats MCs.",
    name: "Cameron B.",
    role: "Wedding MC, Perth · 8 years",
  },
];

export function SocialProof() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 px-4 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="testimonials-heading"
          className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight"
        >
          We&rsquo;re building Zebri with working wedding MCs.
        </h2>
        <p className="text-lg text-[#6B7280] mt-4 mb-12 md:mb-16 max-w-3xl">
          A handful of full-time MCs are shaping the product with us. Here&rsquo;s why they&rsquo;re in.
        </p>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="mb-4 md:mb-6 break-inside-avoid bg-white border border-gray-200 rounded-lg p-6"
            >
              <blockquote className="text-sm text-gray-700 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-[#6B7280] mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
