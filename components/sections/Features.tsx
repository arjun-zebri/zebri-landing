import { Users, CalendarDays, Link2, Zap, Play } from "lucide-react";

// ─── Event Mode Mockup ────────────────────────────────────────────────────────

function EventModeMockup() {
  const items = [
    { time: "3:00", label: "Guests arrive and be seated", state: "past" },
    { time: "3:15", label: "Bridal party entrance", state: "past" },
    { time: "3:20", label: "Processional", state: "current" },
    { time: "3:25", label: "Ceremony begins", state: "next" },
    { time: "3:45", label: "Vows & ring exchange", state: "upcoming" },
    { time: "4:00", label: "First kiss · Recessional", state: "upcoming" },
  ];

  return (
    <div className="bg-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-gray-900 truncate">
            Sarah & Tom Chen
          </p>
          <p className="text-[9px] text-gray-400 mt-0.5">
            Sat 14 Feb · The Grounds
          </p>
        </div>
        <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-700 bg-[#A7F3D0]/30 border border-[#A7F3D0] px-2 py-0.5 rounded-full shrink-0 ml-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      {/* Current item */}
      <div className="bg-[#A7F3D0]/15 border border-[#A7F3D0]/40 rounded-lg p-3 mb-2.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[8px] font-bold text-emerald-700 uppercase tracking-widest">
            Now
          </span>
          <span className="text-[9px] text-emerald-600/70">3:20 PM</span>
        </div>
        <p className="text-sm font-semibold text-gray-900 leading-snug">
          Processional
        </p>
        <p className="text-[10px] text-gray-500 mt-0.5">Tom & parents enter</p>
      </div>

      {/* Next up */}
      <div className="flex items-center gap-2 px-1 mb-3">
        <span className="text-[9px] font-medium text-gray-400 uppercase tracking-wider shrink-0">
          Next
        </span>
        <span className="text-[10px] text-gray-400">3:25 PM</span>
        <span className="text-[10px] text-gray-700 font-medium">
          Ceremony begins
        </span>
      </div>

      {/* Timeline list */}
      <div className="border-t border-gray-100 pt-2.5 space-y-0.5">
        {items.map((item) => (
          <div
            key={item.time}
            className={`flex items-start gap-2.5 px-2 py-1.5 rounded-md border-l-2 ${
              item.state === "current"
                ? "border-emerald-400 bg-[#A7F3D0]/10"
                : "border-transparent"
            }`}
          >
            <span
              className={`text-[10px] w-8 shrink-0 font-medium ${
                item.state === "past"
                  ? "text-gray-300"
                  : item.state === "current"
                  ? "text-emerald-600"
                  : item.state === "next"
                  ? "text-gray-700"
                  : "text-gray-400"
              }`}
            >
              {item.time}
            </span>
            <span
              className={`text-[10px] leading-snug ${
                item.state === "past"
                  ? "text-gray-300 line-through"
                  : item.state === "current"
                  ? "text-gray-900 font-semibold"
                  : item.state === "next"
                  ? "text-gray-700"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature data ─────────────────────────────────────────────────────────────

const features = [
  {
    icon: Users,
    name: "Couple Management",
    subheading: "Every couple, one place.",
    description:
      "See every booking at a glance. From first enquiry to final payment, know exactly where each couple stands: stage, amount, and outstanding tasks. Add leads manually or let Zebri's AI workflows capture and log new enquiries automatically.",
    flip: false,
    src: "/crm-ui.png",
    alt: "Couple management CRM",
    comingSoon: false,
    objectPosition: "object-left-top",
  },
  {
    icon: CalendarDays,
    name: "Timeline Builder",
    subheading: "One timeline. Everyone sees it.",
    description:
      "Build the run sheet once and share a live link with your DJ, photographer, and couple. Couples can suggest changes, but every update goes through your approval before anything goes live. One version of the truth, always.",
    flip: true,
    src: "/timeline-ui.png",
    alt: "Timeline builder",
    comingSoon: false,
  },
  {
    icon: Link2,
    name: "Couple Portal",
    subheading: "They fill it in. You never chase.",
    description:
      "Send couples one link. They submit names, pronunciations, song requests, bridal party details, and signed contracts directly into Zebri. No email chains. No lost attachments. No follow-up required.",
    flip: false,
    src: "/couple-portal.png",
    alt: "Couple portal",
    comingSoon: false,
  },
  {
    icon: Zap,
    name: "Pulse",
    subheading: "Stop chasing cold leads.",
    description:
      "Most enquiries go nowhere. Pulse scores each lead on fit and readiness so you focus your energy on the couples most likely to book. Fewer wasted follow-ups, more confirmed weddings.",
    flip: true,
    src: "/sales-coach.png",
    alt: "Pulse lead scoring",
    comingSoon: true,
  },
  {
    icon: Play,
    name: "Event Mode",
    subheading: "Your command view for the night.",
    description:
      "Switch to Event Mode when the night starts. A distraction-free, full-screen run sheet that highlights what is current and auto-advances in real time. Works completely offline, perfect for venues with no signal.",
    flip: false,
    src: null,
    alt: null,
    comingSoon: true,
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 px-4 md:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2
            id="features-heading"
            className="text-[2.5rem] md:text-[2.75rem] font-semibold text-gray-900 leading-tight tracking-tight"
          >
            Built for how you actually work.
          </h2>
          <p className="text-lg text-[#6B7280] mt-4 max-w-xl">
            Five features that replace everything you&apos;re piecing together
            right now.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature) => {
            const Icon = feature.icon;

            const copy = (
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-emerald-700" aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-emerald-700">
                    {feature.subheading}
                  </p>
                </div>
                <h3 className="text-[1.75rem] font-semibold text-gray-900 mb-3 leading-tight">
                  {feature.name}
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );

            const mockup = (
              <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                {feature.comingSoon && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[11px] font-medium text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">
                      Coming soon
                    </span>
                  </div>
                )}
                {feature.src ? (
                  <img
                    src={feature.src}
                    alt={feature.alt ?? ""}
                    className={`w-full h-full object-cover block ${feature.objectPosition ?? "object-top"}`}
                  />
                ) : (
                  <EventModeMockup />
                )}
              </div>
            );

            return (
              <div
                key={feature.name}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {feature.flip ? (
                  <>
                    <div className="order-2 lg:order-1">{mockup}</div>
                    <div className="order-1 lg:order-2">{copy}</div>
                  </>
                ) : (
                  <>
                    {copy}
                    {mockup}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
