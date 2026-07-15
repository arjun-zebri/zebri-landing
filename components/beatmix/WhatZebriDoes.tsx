import Image from "next/image";

const features = [
  {
    name: "Couple Management",
    body: "Every booking at a glance. From first enquiry to final payment, you know where each couple stands and what's outstanding.",
  },
  {
    name: "Timeline Builder",
    body: "Build the run sheet once. Share a live link with the couple, the DJ, and the photographer. Changes go through you before they go live.",
  },
  {
    name: "Couple Portal",
    body: "One link. They fill in names, pronunciations, song requests, and signed contracts. You stop asking twice.",
  },
  {
    name: "Event Mode",
    body: "A full-screen run sheet that auto-advances on the night. Cached, so it works when the reception venue has no signal.",
  },
];

export function WhatZebriDoes() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight mb-3">
          What you saw on stage.
        </h2>
        <p className="text-base text-[#6B7280] max-w-[65ch] mb-12">
          Four things, replacing the six tabs, the group chat, and the printed
          run sheet in your back pocket.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-white border border-gray-200 rounded-md p-5"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
          <Image
            src="/dashboard-ui.png"
            alt="The Zebri dashboard, showing every booked couple with their stage, wedding date, and outstanding tasks"
            width={2400}
            height={1500}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1152px"
            className="w-full h-auto"
          />
        </div>

        <p className="mt-8 text-sm text-[#6B7280]">
          <span className="text-gray-900 font-medium">Next up:</span> Pulse
          scores every enquiry on fit and readiness. And if you&apos;re a DJ,
          your own view of the night is coming.
        </p>
      </div>
    </section>
  );
}
