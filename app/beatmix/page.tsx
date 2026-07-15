import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BeatmixForm } from "@/components/beatmix/BeatmixForm";
import { BeatmixPageView } from "@/components/beatmix/BeatmixPageView";
import { OfferCards } from "@/components/beatmix/OfferCards";
import { BothAudiences } from "@/components/beatmix/BothAudiences";
import { WhatZebriDoes } from "@/components/beatmix/WhatZebriDoes";
import { BeatmixPricing } from "@/components/beatmix/BeatmixPricing";
import { BeatmixFAQ } from "@/components/beatmix/BeatmixFAQ";
import {
  CONFERENCE_NAME,
  DISCOUNT_PERCENT,
  FOUNDING_DISCOUNT_PERCENT,
  FOUNDING_SPOTS,
  formatDeadline,
} from "@/lib/beatmix";

/**
 * Deliberately noindex. This page carries a time-limited discount and exists
 * for people who scanned a QR code in the room. It should never rank, and it
 * should never outlive the offer.
 */
export const metadata: Metadata = {
  title: `Zebri for ${CONFERENCE_NAME}: ${DISCOUNT_PERCENT}% off for 12 months`,
  description: `You just saw Zebri on stage. Claim ${DISCOUNT_PERCENT}% off for 12 months, plus a personal setup session, before ${formatDeadline()}.`,
  robots: { index: false, follow: false },
};

export default function BeatmixPage() {
  const deadline = formatDeadline();

  return (
    <main>
      <BeatmixPageView />

      {/* Offer bar */}
      <div className="bg-[#A7F3D0]">
        <div className="max-w-6xl mx-auto px-4 py-2.5">
          <p className="text-xs sm:text-sm font-medium text-gray-900 text-center">
            {CONFERENCE_NAME} exclusive · Offer ends {deadline}
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-block mb-12 md:mb-16">
            <Image
              src="/zebri-logo.svg"
              alt="Zebri"
              width={88}
              height={24}
              priority
            />
          </Link>

          <div className="max-w-[42rem]">
            <p className="text-sm font-medium text-[#6B7280] mb-5">
              For the MCs, celebrants and DJs at {CONFERENCE_NAME}
            </p>

            <h1 className="text-[2rem] md:text-[3rem] font-semibold text-gray-900 leading-[1.15] tracking-tight">
              Everything you just saw. {DISCOUNT_PERCENT}% off for 12 months.
            </h1>

            <p className="mt-5 text-lg text-[#6B7280] leading-relaxed max-w-[60ch]">
              Zebri is the command centre for wedding MCs and celebrants. Every
              couple, every run sheet, every vendor, in one place. Claim your{" "}
              {CONFERENCE_NAME} rate before {deadline}.
            </p>

            <div className="mt-8 max-w-lg">
              <BeatmixForm idPrefix="hero" location="hero" />
            </div>

            <p className="mt-4 text-sm text-[#6B7280] max-w-[60ch]">
              The first {FOUNDING_SPOTS} get {FOUNDING_DISCOUNT_PERCENT}% off
              instead. One person, drawn at random, gets the year free. Everyone
              gets a personal setup session.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Built in Australia",
                "No credit card",
                "Cancel any time",
              ].map((item) => (
                <span key={item} className="text-sm text-[#9CA3AF]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OfferCards />
      <BothAudiences />
      <WhatZebriDoes />
      <BeatmixPricing />
      <BeatmixFAQ />

      {/* Final CTA */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-[42rem]">
            <h2 className="text-[1.75rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight">
              The night before should be quiet.
            </h2>
            <p className="mt-4 text-lg text-[#6B7280] leading-relaxed max-w-[60ch]">
              Zebri handles the admin so you can focus on the performance. Your{" "}
              {CONFERENCE_NAME} rate holds until {deadline}.
            </p>

            <div className="mt-8 max-w-lg">
              <BeatmixForm idPrefix="final" location="final" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-[#9CA3AF]">
            © 2026 Zebri. Built for professional wedding MCs.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="mailto:arjun@zebri.com.au"
              className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors duration-150"
            >
              arjun@zebri.com.au
            </a>
            <Link
              href="/privacy"
              className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors duration-150"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors duration-150"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
