"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Send } from "lucide-react";

// ─── Pulse · AI sales coach ────────────────────────────────────────────────────
// Scores a live lead (Priya & Daniel, mid-pipeline in the other mockups, not yet
// booked). The opportunity score gauge fills top-right and counts up, then the
// report reveals its sections: conversation summary, key insights, and the next
// best action with a one-tap send. Content fits the frame, so no scroll needed.

const TARGET = 90; // opportunity score the gauge counts up to

const GAUGE_R = 20;
const GAUGE_C = 2 * Math.PI * GAUGE_R;

const SUMMARY =
  "Priya and Daniel are planning a 120-guest wedding at Curzon Hall for March 2027. Budget confirmed, and they reply within hours.";

const INSIGHTS = [
  "Budget sits above your average package",
  "Venue and date already locked for March 2027",
  "You are their frontrunner celebrant",
];

type Phase = "idle" | "score" | "reveal";

const T = {
  idle: 900,
  score: 350,       // brief lead-in; the gauge keeps filling (~1300ms) while the
                    // sections below reveal in parallel — no waiting for 90.
  revealStep: 260,  // stagger between sections
  hold: 2600,
};

export function Pulse() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [displayScore, setDisplayScore] = useState(0);
  const [revealCount, setRevealCount] = useState(0);

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

  const effPhase: Phase = reduced ? "reveal" : phase;
  const scoreOn = effPhase !== "idle";
  const effReveal = reduced ? 4 : revealCount;
  const shown = reduced || inView;

  // Count the opportunity score up to TARGET when the gauge activates.
  useEffect(() => {
    if (reduced) {
      setDisplayScore(TARGET);
      return;
    }
    if (!scoreOn) {
      setDisplayScore(0);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1300);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayScore(Math.round(eased * TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scoreOn, reduced]);

  // Sequence runner: gauge, then reveal the report sections.
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
        setRevealCount(0);
        await wait(T.idle);
        if (cancelled) return;

        setPhase("score");
        await wait(T.score);
        if (cancelled) return;

        setPhase("reveal");
        for (let i = 1; i <= 4; i++) {
          setRevealCount(i);
          await wait(T.revealStep);
          if (cancelled) return;
        }
        await wait(T.hold);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [inView, reduced]);

  const reveal = (n: number) =>
    `transition duration-300 ${
      effReveal >= n ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
    }`;

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Product demo: Pulse, an AI sales coach, gives lead Priya & Daniel an opportunity score of 90, summarises the conversation, lists key insights, and recommends sending pricing packages as the next best action."
      className="relative h-full overflow-hidden"
      style={{
        // Green→white wash, matching the other feature demos (this mockup only).
        background:
          "linear-gradient(180deg, #e6f6ee 0%, #f3fbf7 38%, #ffffff 100%)",
      }}
    >
      {/* White report card — contained, floating on the wash. Fades in and rises. */}
      <div
        className={`absolute inset-x-3 sm:inset-x-4 top-[4%] sm:top-[8%] rounded-xl border border-gray-200 bg-white px-3 pt-3 pb-3 sm:px-3.5 sm:pt-3.5 sm:pb-4 ${
          reduced ? "" : "transition duration-300 ease-out"
        } ${shown ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
      >
        {/* Header — lead + opportunity score gauge, top-right */}
        <div className="flex items-start gap-2 pb-2 sm:pb-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-gray-900">
              Priya &amp; Daniel
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400">
              Pulse · analysed 4 messages
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-center">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
              <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden>
                <circle
                  cx="24"
                  cy="24"
                  r={GAUGE_R}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="3.5"
                />
                <circle
                  cx="24"
                  cy="24"
                  r={GAUGE_R}
                  fill="none"
                  stroke="#059669"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray={GAUGE_C}
                  strokeDashoffset={scoreOn ? GAUGE_C * (1 - TARGET / 100) : GAUGE_C}
                  style={{
                    // Only animate while filling; on loop reset, snap back to empty
                    // instantly so the ring never drains from 90 back to 0.
                    transition:
                      scoreOn && !reduced
                        ? "stroke-dashoffset 1300ms ease-out"
                        : "none",
                  }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs sm:text-sm font-semibold text-gray-900">
                  {displayScore}
                </span>
              </div>
            </div>
            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-gray-400">
              Opportunity
            </span>
          </div>
        </div>

        {/* Conversation summary */}
        <div className={reveal(1)}>
          <p className="mb-1 text-xs font-semibold text-gray-900">
            Conversation summary
          </p>
          <p className="text-[11px] leading-snug sm:leading-relaxed text-gray-600">{SUMMARY}</p>
        </div>

        {/* Key insights */}
        <div className={`mt-2 sm:mt-3 ${reveal(2)}`}>
          <p className="mb-1.5 text-xs font-semibold text-gray-900">Key insights</p>
          <ul className="space-y-1">
            {INSIGHTS.map((item, i) => (
              <li
                key={item}
                className={`${
                  i === 2 ? "hidden sm:flex" : "flex"
                } items-start gap-1.5 text-[11px] text-gray-600`}
              >
                <Check
                  size={11}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-emerald-600"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next best action — heading, text, then the send button */}
        <div className={`mt-2 sm:mt-3 ${reveal(3)}`}>
          <p className="mb-1 text-xs font-semibold text-gray-900">
            Next best action
          </p>
          <p className="text-[11px] leading-snug sm:leading-relaxed text-gray-600">
            They&apos;ve asked about cost twice, and they&apos;re still comparing
            celebrants.
          </p>
          <button
            type="button"
            className={`mt-2 inline-flex items-center gap-1.5 rounded-md bg-gray-900 px-3 py-1 sm:py-1.5 text-[11px] font-medium text-white ${reveal(
              4
            )}`}
          >
            <Send size={11} strokeWidth={2} aria-hidden />
            Send packages
          </button>
        </div>
      </div>
    </div>
  );
}
