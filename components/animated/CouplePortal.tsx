"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Mic, Play } from "lucide-react";

// ─── Couple Portal · name pronunciation ───────────────────────────────────────
// Siobhan & Liam's portal — Siobhan fills in her own details and records how her
// name is said. Mirrors the real AudioRecorder: a 56px circular mic button with a
// red SVG progress ring that fills while recording (10s cap in the app, sped up
// here), resolving to a green "Play" chip once saved. The couple-facing portal has
// no phonetic-spelling field (that's MC-only), so we don't show one. "Siobhan
// Murphy" is the app's own placeholder, and genuinely a name worth recording.

const RING_R = 26;
const RING_C = 2 * Math.PI * RING_R; // circumference for the dash animation

type Phase = "idle" | "recording" | "saved";

const T = {
  idle: 1400,
  recording: 2200, // ring fill (stands in for the real 10s cap)
  saved: 2600,     // green Play chip shows, then hold
};

export function CouplePortal() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  // Respect prefers-reduced-motion: render the final state, no loop.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Only run while scrolled into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Sequence runner: idle → record (ring fills) → saved (Play chip).
  useEffect(() => {
    if (!inView || reduced) return;
    let cancelled = false;
    let timer: number | undefined;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms);
      });

    (async () => {
      while (!cancelled) {
        setPhase("idle");
        await wait(T.idle);
        if (cancelled) return;

        setPhase("recording");
        await wait(T.recording);
        if (cancelled) return;

        setPhase("saved");
        await wait(T.saved);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [inView, reduced]);

  const effPhase: Phase = reduced ? "saved" : phase;
  const recording = effPhase === "recording";
  const saved = effPhase === "saved";
  const shown = reduced || inView; // drives the slide-in-from-left entrance

  const recorderLabel = recording
    ? "Recording… release to finish"
    : saved
    ? "Hold to re-record (up to 10 seconds)"
    : "Press and hold to record (up to 10 seconds)";

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Product demo: in Siobhan & Liam's couple portal, Siobhan records how her name is pronounced. A red ring fills around the mic button, then saves as a playable clip."
      className="relative flex h-full items-center overflow-hidden"
      style={{
        // Green→white wash, matching the other feature demos (this mockup only).
        background:
          "linear-gradient(180deg, #e6f6ee 0%, #f3fbf7 38%, #ffffff 100%)",
      }}
    >
      {/* White app card — contained, vertically centred on the wash. Slides in from the left. */}
      <div
        className={`relative mx-3 sm:mx-4 flex-1 rounded-xl border border-gray-200 bg-white px-3 pt-3 pb-3 sm:pb-3.5 ${
          reduced ? "" : "transition duration-300 ease-out"
        } ${shown ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
      >
        {/* Header */}
        <div className="mb-2 sm:mb-3">
          <p className="text-xs font-semibold text-gray-900">Your details</p>
          <p className="mt-0.5 text-[11px] text-gray-400">
            Siobhan &amp; Liam&apos;s portal
          </p>
        </div>

        {/* Full name + Role */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <div>
            <p className="mb-1 text-[11px] text-gray-500">Full name</p>
            <div className="flex h-8 items-center rounded-md border border-gray-200 px-2.5 text-xs text-gray-900">
              Siobhan Murphy
            </div>
          </div>
          <div>
            <p className="mb-1 text-[11px] text-gray-500">Role</p>
            <div className="flex h-8 items-center justify-between rounded-md border border-gray-200 px-2.5 text-xs text-gray-900">
              Bride
              <ChevronDown size={13} className="text-gray-400" aria-hidden />
            </div>
          </div>
        </div>

        {/* Email + Phone */}
        <div className="mt-2 sm:mt-2.5 grid grid-cols-2 gap-2 sm:gap-3">
          <div>
            <p className="mb-1 text-[11px] text-gray-500">Email</p>
            <div className="flex h-8 items-center rounded-md border border-gray-200 px-2.5 text-xs text-gray-900">
              <span className="truncate">siobhan.murphy@email.com</span>
            </div>
          </div>
          <div>
            <p className="mb-1 text-[11px] text-gray-500">Phone</p>
            <div className="flex h-8 items-center rounded-md border border-gray-200 px-2.5 text-xs text-gray-900">
              +61 412 118 342
            </div>
          </div>
        </div>

        {/* Name pronunciation recorder */}
        <div className="mt-3">
          <p className="mb-2 text-[11px] text-gray-500">Name pronunciation</p>
          <div className="flex items-center gap-3">
            {/* Circular mic button with red progress ring */}
            <div className="relative h-14 w-14 shrink-0">
              <div
                className={`flex h-full w-full items-center justify-center rounded-full transition-colors duration-200 ${
                  recording ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-500"
                }`}
              >
                <Mic size={18} strokeWidth={1.5} aria-hidden />
              </div>
              <svg
                viewBox="0 0 56 56"
                className="pointer-events-none absolute inset-0 -rotate-90"
                aria-hidden
              >
                <circle
                  cx="28"
                  cy="28"
                  r={RING_R}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={recording ? 0 : RING_C}
                  style={{
                    transition: recording
                      ? `stroke-dashoffset ${T.recording}ms linear`
                      : "none",
                  }}
                />
              </svg>
            </div>

            {/* Label + saved Play chip */}
            <div className="min-w-0">
              <p className="text-[11px] text-gray-500">{recorderLabel}</p>
              {saved && (
                <span className="mt-1.5 inline-flex items-center gap-1 rounded-md border border-emerald-600/30 bg-emerald-50 px-2 py-1 text-[11px] font-medium text-emerald-600">
                  <Play size={11} strokeWidth={2} aria-hidden />
                  Play
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
