"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

// ─── Run sheet ────────────────────────────────────────────────────────────────
// Sarah & Tom's wedding day (Sat 14 Mar 2026) — the same couple and date as the
// Talk to Zebri demo, so the mockups share one story. Rows are static; only the
// share-link toggle and the copy button animate. Row shape mirrors the real app:
// emerald time badge, bold title, duration, and a "Contact · Category" subline.

const ROWS = [
  { time: "3:00 PM", title: "Ceremony", duration: "30 min", contact: "Rev. Amelia Cook", category: "Celebrant" },
  { time: "3:30 PM", title: "Canapés & Photos", duration: "1 hr", contact: "Sarah Park", category: "Photographer" },
  { time: "5:00 PM", title: "Reception Entrance", duration: "15 min", contact: "DJ Marcus", category: "DJ" },
];

type Phase = "idle" | "linkOn" | "copied";

const T = {
  idle: 1400,   // public link off
  linkOn: 1000, // toggle flips on, URL appears
  copied: 2800, // copy → checkmark, then hold
};

export function TimelineBuilder() {
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

  // Sequence runner: toggle the live link on, then copy it.
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

        setPhase("linkOn");
        await wait(T.linkOn);
        if (cancelled) return;

        setPhase("copied");
        await wait(T.copied);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [inView, reduced]);

  const effPhase: Phase = reduced ? "copied" : phase;
  const linkOn = effPhase === "linkOn" || effPhase === "copied";
  const copied = effPhase === "copied";
  const shown = reduced || inView; // drives the slide-in-from-right entrance

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Product demo: Sarah & Tom's wedding run sheet, with a live share link switched on and copied to send to their DJ, photographer, and venue."
      className="relative flex h-full items-center overflow-hidden"
      style={{
        // Green→white wash, matching the Talk to Zebri demo (this mockup only).
        background:
          "linear-gradient(180deg, #e6f6ee 0%, #f3fbf7 38%, #ffffff 100%)",
      }}
    >
      {/* White app card — a contained panel with auto height (nothing clips),
          vertically centred on the wash. Slides in from the right on entry. */}
      <div
        className={`relative mx-3 sm:mx-4 flex-1 rounded-xl border border-gray-200 bg-white px-3 pt-3 pb-3 ${
          reduced ? "" : "transition duration-300 ease-out"
        } ${shown ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
      >
        {/* Header */}
        <div className="mb-2 sm:mb-3">
          <p className="text-xs font-semibold text-gray-900">
            Sarah &amp; Tom · Run sheet
          </p>
          <p className="mt-0.5 text-[11px] text-gray-400">
            Saturday 14 March 2026
          </p>
        </div>

        {/* Timeline rows — static */}
        <div className="space-y-1 sm:space-y-1.5">
          {ROWS.map((row) => (
            <div
              key={row.title}
              className="rounded-md border border-gray-200 bg-white px-2.5 py-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="shrink-0 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700">
                  {row.time}
                </span>
                <span className="truncate text-xs font-semibold text-gray-900">
                  {row.title}
                </span>
                <span className="ml-auto shrink-0 text-[10px] text-gray-400">
                  {row.duration}
                </span>
              </div>
              <p className="mt-0.5 truncate text-[11px] text-gray-400">
                {row.contact} · {row.category}
              </p>
            </div>
          ))}
        </div>

        {/* Share-link bar — toggle flips on, then the copy button confirms */}
        <div className="mt-2.5 border-t border-gray-100 pt-2.5">
          <div className="flex items-center gap-2">
            {/* Toggle — mint when the public link is live (brand toggle-on colour) */}
            <span
              className={`relative h-4 w-7 shrink-0 rounded-full transition-colors duration-200 ${
                linkOn ? "bg-[#A7F3D0]" : "bg-gray-200"
              }`}
              aria-hidden
            >
              <span
                className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  linkOn ? "translate-x-3.5" : "translate-x-0.5"
                }`}
              />
            </span>

            <span
              className={`min-w-0 flex-1 truncate text-[11px] ${
                linkOn ? "font-mono text-gray-500" : "text-gray-400"
              }`}
            >
              {linkOn ? "app.zebri.com.au/t/sarah-tom" : "Public link off"}
            </span>

            <span
              className={`flex shrink-0 items-center gap-1 rounded-md border px-2 py-1 text-[11px] transition-colors duration-200 ${
                copied
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-gray-200 text-gray-500"
              } ${linkOn ? "opacity-100" : "opacity-0"}`}
            >
              {copied ? (
                <Check size={11} strokeWidth={2} aria-hidden />
              ) : (
                <Copy size={11} strokeWidth={2} aria-hidden />
              )}
              {copied ? "Copied" : "Copy link"}
            </span>
          </div>
          <p className="mt-1.5 text-[10px] text-gray-400">
            Anyone with this link can view the timeline.
          </p>
        </div>
      </div>
    </div>
  );
}
