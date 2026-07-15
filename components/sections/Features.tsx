import Image from "next/image";
import {
  VoiceWaveIcon,
  TimelineIcon,
  RingsIcon,
  PulseIcon,
  AskIcon,
} from "@/components/icons/FeatureIcons";
import { TalkToZebri } from "@/components/animated/TalkToZebri";
import { TimelineBuilder } from "@/components/animated/TimelineBuilder";
import { CouplePortal } from "@/components/animated/CouplePortal";
import { Pulse } from "@/components/animated/Pulse";
import { AskZebri } from "@/components/animated/AskZebri";

// ─── Feature data ─────────────────────────────────────────────────────────────

const features = [
  {
    icon: VoiceWaveIcon,
    name: "Talk to Zebri",
    subheading: "Run your couples by voice.",
    description:
      "Your entire CRM, hands-free. Say \"add Sarah and Tom, ceremony March 14 at The Grounds\" and it's done. Log calls, update details, move couples through your pipeline, and check what's outstanding. All by talking to Zebri, in the car between venues.",
    flip: false,
    src: null,
    alt: null,
    demo: "talk-to-zebri",
  },
  {
    icon: TimelineIcon,
    name: "Timeline Builder",
    subheading: "One timeline. Everyone sees it.",
    description:
      "Build the run sheet once and share a live link with your DJ, photographer, and couple. Couples can suggest changes, but every update goes through your approval before anything goes live. One version of the truth, always.",
    flip: true,
    src: null,
    alt: null,
    demo: "timeline-builder",
  },
  {
    icon: RingsIcon,
    name: "Couple Portal",
    subheading: "They fill it in. You never chase.",
    description:
      "Send couples one link. They submit names, pronunciations, song requests, bridal party details, and signed contracts directly into Zebri. No email chains. No lost attachments. No follow-up required.",
    flip: false,
    src: null,
    alt: null,
    demo: "couple-portal",
  },
  {
    icon: PulseIcon,
    name: "Pulse",
    subheading: "Your AI sales coach.",
    description:
      "Most enquiries go nowhere. Pulse is an AI sales coach that scores each lead on fit and readiness, surfaces your next best action, and summarises every conversation, so you spend your energy on the couples most likely to book.",
    flip: true,
    src: null,
    alt: null,
    demo: "pulse",
  },
  {
    icon: AskIcon,
    name: "Ask Zebri",
    subheading: "Every answer, instantly.",
    description:
      "Ask anything about your business in plain English. \"How many weddings in October?\" \"What did the Chens say about their first dance?\" Ask Zebri searches your couples, emails, and messages, answers your questions, and builds dashboards on the spot.",
    flip: false,
    src: null,
    alt: null,
    demo: "ask-zebri",
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
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-semibold text-emerald-700 uppercase tracking-widest mb-3">
            Zebri ends this
          </p>
          <h2
            id="features-heading"
            className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight"
          >
            Built for how you actually work.
          </h2>
          <p className="text-lg text-[#6B7280] mt-4 max-w-3xl">
            Five features built around AI that replace everything you&apos;re
            piecing together right now.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature) => {
            const Icon = feature.icon;

            const copy = (
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-emerald-700" />
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
              <div className="relative w-full aspect-square sm:aspect-[3/2] rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                {feature.src ? (
                  <Image
                    src={feature.src}
                    alt={feature.alt ?? ""}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                ) : feature.demo === "talk-to-zebri" ? (
                  <TalkToZebri />
                ) : feature.demo === "timeline-builder" ? (
                  <TimelineBuilder />
                ) : feature.demo === "couple-portal" ? (
                  <CouplePortal />
                ) : feature.demo === "pulse" ? (
                  <Pulse />
                ) : feature.demo === "ask-zebri" ? (
                  <AskZebri />
                ) : null}
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
