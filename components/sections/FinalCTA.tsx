"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { DemoModal } from "@/components/ui/DemoModal";

export function FinalCTA() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section
      id="signup"
      aria-labelledby="cta-heading"
      className="py-28 px-4 md:py-44 bg-gray-950"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* Mint accent */}
        <div className="flex justify-center mb-10">
          <div className="w-6 h-[2px] bg-[#A7F3D0]" />
        </div>

        <h2
          id="cta-heading"
          className="text-[2.75rem] md:text-[3.5rem] font-semibold leading-[1.1] tracking-tight text-white mb-6"
        >
          The night before
          <br />
          should be quiet.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed max-w-xs mx-auto mb-12">
          Zebri handles the admin so you can focus on the performance.
        </p>

        <a
          href="https://app.zebri.com.au/signup"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#A7F3D0] text-gray-900 text-sm font-semibold hover:bg-[#6ee7b7] transition-colors shadow-[0_0_24px_rgba(167,243,208,0.25)]"
        >
          Get Started Free
          <ArrowRight size={16} />
        </a>

        <p className="mt-5 text-xs text-gray-600">
          Free plan available &middot; No credit card required
        </p>

        <div className="mt-8">
          <button
            onClick={() => setDemoOpen(true)}
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400 cursor-pointer"
          >
            or Get a Demo
          </button>
        </div>
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
