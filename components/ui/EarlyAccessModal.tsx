"use client";

import { useState, useTransition, useEffect } from "react";
import { X, Calendar, Check, Gift } from "lucide-react";
import { submitEarlyAccess } from "@/app/actions/submit";
import {
  EARLY_ACCESS_CALENDLY_URL,
  FOUNDING_PERKS,
  FOUNDING_DRAW_HEADLINE,
  FOUNDING_DRAW_DETAIL,
} from "@/lib/earlyAccess";

interface EarlyAccessModalProps {
  open: boolean;
  onClose: () => void;
  /** Which CTA opened the modal — captured with the lead so you know where it came from. */
  source?: string;
}

export function EarlyAccessModal({
  open,
  onClose,
  source,
}: EarlyAccessModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentCrm, setCurrentCrm] = useState("");
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Reset form when closed
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setCurrentCrm("");
        setResult(null);
      }, 300);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await submitEarlyAccess({
        name,
        email,
        currentCrm: currentCrm || undefined,
        source,
      });
      setResult(res);
    });
  };

  // The "book a call" button only unlocks once we have a contactable lead.
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canBookCall = name.trim().length > 0 && emailValid;

  // They're heading to Calendly instead of submitting — capture the lead anyway
  // so we keep the address. Fire-and-forget; the native link handles navigation.
  const handleBookCall = () => {
    void submitEarlyAccess({
      name,
      email,
      currentCrm: currentCrm || undefined,
      source: source ? `${source}:book-call` : "book-call",
    }).catch(() => {});
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ${
        open ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Card */}
      <div
        className={`relative bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain p-8 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {result?.success ? (
          /* Success state */
          <div className="py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#A7F3D0]/30 flex items-center justify-center mx-auto mb-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-700"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-base font-semibold text-gray-900 mb-1">
              You&apos;re on the founding list.
            </p>
            <p className="text-sm text-[#6B7280]">{result.message}</p>
            {EARLY_ACCESS_CALENDLY_URL && (
              <a
                href={EARLY_ACCESS_CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 h-10 px-4 rounded-md border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Calendar size={15} aria-hidden />
                Book your onboarding call now
              </a>
            )}
          </div>
        ) : (
          /* Form */
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                Get early access
              </h2>
              <p className="text-sm text-[#6B7280]">
                We&apos;re onboarding founding members a few at a time. Leave
                your details and we&apos;ll get you set up.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="ea-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="ea-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="ea-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="ea-email"
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="ea-crm" className="sr-only">
                  What do you use to manage weddings now?
                </label>
                <input
                  id="ea-crm"
                  type="text"
                  placeholder="What do you use to manage weddings now? (optional)"
                  value={currentCrm}
                  onChange={(e) => setCurrentCrm(e.target.value)}
                  className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full h-10 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending…" : "Request early access"}
              </button>
              {result && !result.success && (
                <p className="text-xs text-red-600" role="alert">
                  {result.message}
                </p>
              )}
            </form>

            {EARLY_ACCESS_CALENDLY_URL && (
              <>
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-xs text-[#9CA3AF]">or</span>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>
                {canBookCall ? (
                  <a
                    href={EARLY_ACCESS_CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleBookCall}
                    className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Calendar size={15} aria-hidden />
                    Book a call with the founder
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 text-sm font-medium text-gray-400 bg-gray-50 cursor-not-allowed"
                  >
                    <Calendar size={15} aria-hidden />
                    Book a call with the founder
                  </button>
                )}
                <p
                  aria-hidden={canBookCall}
                  className={`mt-2 text-xs text-[#9CA3AF] text-center transition-opacity duration-150 ${
                    canBookCall ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Add your name and email to book a call.
                </p>
              </>
            )}

            <div className="mt-6 pt-5 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-500 mb-3">
                Founding members get
              </p>
              <ul className="space-y-2">
                {FOUNDING_PERKS.map((perk) => (
                  <li key={perk.title} className="flex items-center gap-2.5">
                    <Check
                      size={13}
                      className="text-emerald-600 shrink-0"
                      aria-hidden
                    />
                    <span className="text-xs text-[#6B7280]">{perk.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex gap-2.5">
                <Gift
                  size={13}
                  className="text-emerald-600 shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {FOUNDING_DRAW_HEADLINE}
                  </span>{" "}
                  {FOUNDING_DRAW_DETAIL}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
