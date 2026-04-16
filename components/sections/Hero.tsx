"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Users, ShieldCheck } from "lucide-react";
import { DemoModal } from "@/components/ui/DemoModal";

const validation = [
  { icon: MapPin, text: "Built in Australia." },
  { icon: Users, text: "Designed by MCs and celebrants." },
  { icon: ShieldCheck, text: "Your data stays yours. Always." },
];

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="pt-24 pb-20 px-4 md:pt-36 md:pb-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div>
            <h1
              id="hero-heading"
              className="text-[2.75rem] md:text-[3.25rem] font-semibold leading-[1.12] tracking-tight text-gray-900 mb-5"
            >
              Stop juggling 6 tabs the night before a wedding.
            </h1>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8 max-w-lg">
              Zebri is built for wedding MCs and celebrants. Your couples,
              timelines, scripts, and vendor communications in one place. Walk
              in ready.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10">
              <a
                href="https://app.zebri.com.au/signup"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 transition-colors shadow-[0_0_24px_rgba(167,243,208,0.25)]"
              >
                Get Started Free
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-md border border-gray-300 hover:border-gray-500 bg-white text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
              >
                Get a Demo
              </button>
            </div>

            <div className="flex flex-col gap-2.5">
              {validation.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="text-emerald-600 shrink-0" />
                  <span className="text-sm text-[#6B7280]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard screenshot */}
          <div className="w-full rounded-xl bg-gray-100 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <img
              src="/dashboard-ui.png"
              alt="Zebri dashboard"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
