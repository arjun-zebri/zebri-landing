"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Link2, Paperclip, Smile, Sparkles } from "lucide-react";

// ─── Ask Zebri ─────────────────────────────────────────────────────────────────
// A chat question (like Talk to Zebri's first scene, minus the voice recording)
// that resolves into a dashboard Zebri "builds on the spot". A revenue-mix
// question types into the chat input, then the view renders a plain-English answer
// plus a grouped bar chart: revenue by service, last year vs this year, showing the
// combined MC + celebrant package driving the growth.

const QUESTION = [
  "How", "is", "my", "revenue", "split", "by", "service", "this", "year",
  "and", "how", "has", "it", "changed", "from", "last", "year?",
];

const ANSWER =
  "MC and celebrant services together accounted for $64k (67%) of total revenue this year, up from $32k (50%) last year.";

// Revenue ($k) by service, last year vs this year. The combined package doubled
// while MC-only stayed flat, so the mix shifts to 67% combined.
const SERVICES = [
  { name: "MC only", last: 32, current: 32 },
  { name: "MC + celebrant", last: 32, current: 64 },
];
const MAX = Math.max(...SERVICES.flatMap((s) => [s.last, s.current]));
const MAX_BAR_PX = 68; // pixel height of the tallest bar

const C_LAST = "#d1d5db"; // gray-300 — last year (de-emphasised)
const C_CURRENT = "#111827"; // near-black — this year

type Phase = "idle" | "typing" | "sending" | "dashboard";

const T = {
  idle: 900,
  perWord: 80,
  afterType: 400,
  sending: 700,    // send pressed, brief think
  dashboard: 4000, // dashboard renders + holds
};

export function AskZebri() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [wordCount, setWordCount] = useState(0);

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

  // Sequence runner: type the question, then render the dashboard.
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
        setWordCount(0);
        await wait(T.idle);
        if (cancelled) return;

        setPhase("typing");
        for (let i = 0; i < QUESTION.length; i++) {
          setWordCount(i + 1);
          await wait(T.perWord);
          if (cancelled) return;
        }
        await wait(T.afterType);
        if (cancelled) return;

        setPhase("sending");
        await wait(T.sending);
        if (cancelled) return;

        setPhase("dashboard");
        await wait(T.dashboard);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [inView, reduced]);

  const effPhase: Phase = reduced ? "dashboard" : phase;
  const effWords = reduced ? QUESTION.length : wordCount;
  const onDash = effPhase === "dashboard";
  const hasText = effWords > 0;

  // A growing bar: scales up from the baseline when the dashboard renders.
  const barStyle = (valueK: number, order: number, color: string) => ({
    height: `${(valueK / MAX) * MAX_BAR_PX}px`,
    background: color,
    transform: onDash ? "scaleY(1)" : "scaleY(0)",
    transition: onDash ? "transform 500ms ease-out" : "none",
    transitionDelay: onDash ? `${200 + order * 80}ms` : "0ms",
  });
  // The value label fades in alongside its bar.
  const labelStyle = (order: number) => ({
    opacity: onDash ? 1 : 0,
    transition: onDash ? "opacity 300ms ease-out" : "none",
    transitionDelay: onDash ? `${350 + order * 80}ms` : "0ms",
  });

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Product demo: a data question, “How is my revenue split by service this year and how has it changed from last year?”, is typed into Ask Zebri, which answers that MC and celebrant services accounted for $64k, 67% of total revenue this year, up from $32k, 50% last year, with a grouped bar chart of revenue by service, last year versus this year."
      className="relative h-full overflow-hidden"
      style={{
        // Green→white wash, matching the other feature demos (this mockup only).
        background:
          "linear-gradient(180deg, #e6f6ee 0%, #f3fbf7 38%, #ffffff 100%)",
      }}
    >
      {/* ── Scene 1: chat input, centered ── */}
      <div
        className={`absolute inset-0 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-200 ${
          onDash ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white px-4 pb-3 pt-4">
          {/* Question types here */}
          <div className="flex min-h-[3.25rem] items-start gap-2">
            <Sparkles
              size={14}
              className="mt-0.5 shrink-0 text-emerald-600"
              aria-hidden
            />
            <p className="text-[13px] leading-relaxed text-gray-900">
              {QUESTION.map((word, i) => (
                <span
                  key={i}
                  className={`transition-opacity duration-200 ${
                    i < effWords ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
          </div>

          {/* Toolbar + send */}
          <div className="mt-2 flex items-center gap-3 border-t border-gray-100 pt-2.5">
            <Paperclip size={14} className="text-gray-300" aria-hidden />
            <Link2 size={14} className="text-gray-300" aria-hidden />
            <Smile size={14} className="text-gray-300" aria-hidden />
            <span
              className={`ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                hasText ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-400"
              }`}
            >
              <ArrowUp size={14} strokeWidth={2} aria-hidden />
            </span>
          </div>
        </div>
      </div>

      {/* ── Scene 2: dashboard answer ── */}
      <div
        className={`absolute inset-0 flex items-center p-4 transition-opacity duration-200 ${
          onDash ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-3.5 sm:py-3.5">
          {/* Ask Zebri label + plain-English answer */}
          <p className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-widest text-emerald-700">
            <Sparkles size={11} aria-hidden />
            Ask Zebri
          </p>
          <p className="mt-1.5 text-xs font-normal leading-relaxed text-gray-700">
            {ANSWER}
          </p>

          {/* Grouped bar chart — revenue by service, last vs this year */}
          <div className="mt-3.5">
            <div className="flex items-end justify-center gap-8 sm:gap-12">
              {SERVICES.map((s, gi) => (
                <div key={s.name} className="flex flex-col items-center">
                  <div className="flex items-end gap-2">
                    {/* Last year */}
                    <div className="flex flex-col items-center">
                      <span
                        className="mb-1 text-[9px] font-medium text-gray-400"
                        style={labelStyle(gi * 2)}
                      >
                        ${s.last}k
                      </span>
                      <div
                        className="w-7 origin-bottom rounded-t-[2px]"
                        style={barStyle(s.last, gi * 2, C_LAST)}
                      />
                    </div>
                    {/* This year */}
                    <div className="flex flex-col items-center">
                      <span
                        className="mb-1 text-[9px] font-medium text-gray-900"
                        style={labelStyle(gi * 2 + 1)}
                      >
                        ${s.current}k
                      </span>
                      <div
                        className="w-7 origin-bottom rounded-t-[2px]"
                        style={barStyle(s.current, gi * 2 + 1, C_CURRENT)}
                      />
                    </div>
                  </div>
                  <span className="mt-1.5 whitespace-nowrap text-[10px] text-gray-500">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-3 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1.5 text-[10px] text-gray-600">
                <span
                  className="h-2 w-2 rounded-[2px]"
                  style={{ background: C_LAST }}
                />
                Last year
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-gray-600">
                <span
                  className="h-2 w-2 rounded-[2px]"
                  style={{ background: C_CURRENT }}
                />
                This year
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
