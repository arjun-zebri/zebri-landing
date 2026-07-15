"use client";

import { ArrowRight } from "lucide-react";
import { EarlyAccessButton } from "@/components/ui/EarlyAccessButton";
import { useEarlyAccess } from "@/components/ui/EarlyAccessProvider";

export function FinalCTA() {
  const { open: openEarlyAccess } = useEarlyAccess();

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
          className="text-[2.5rem] md:text-[3rem] font-semibold leading-[1.1] tracking-tight text-white mb-6"
        >
          The night before
          <br />
          should be quiet.
        </h2>

        <p className="text-base text-gray-400 leading-relaxed max-w-xs mx-auto mb-12">
          Zebri handles the admin so you can focus on the performance.
        </p>

        <EarlyAccessButton
          source="final-cta"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 text-sm font-semibold transition-colors cursor-pointer"
        >
          Get Early Access
          <ArrowRight size={16} />
        </EarlyAccessButton>

        <p className="mt-5 text-xs text-gray-600">
          We&apos;re onboarding founding members a few at a time
        </p>

        <div className="mt-8">
          <button
            onClick={() => openEarlyAccess("final-cta-secondary")}
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-4 decoration-gray-700 hover:decoration-gray-400 cursor-pointer"
          >
            or book a call
          </button>
        </div>
      </div>
    </section>
  );
}
