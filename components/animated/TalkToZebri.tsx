"use client";

import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  GripVertical,
  Link2,
  Mail,
  MapPin,
  Mic,
  Paperclip,
  Smile,
} from "lucide-react";

// ─── Script ───────────────────────────────────────────────────────────────────
// The spoken command, transcribed word-by-word (speech lands in words, not
// chars). "Paid" matches the app's real default pipeline: New → Contacted →
// Confirmed → Paid → Complete. Sarah & Tom mirror this feature's own copy
// ("add Sarah and Tom, ceremony March 14 at The Grounds") — one continuous
// story: the couple the description adds is the couple this demo moves to paid.

const TOKENS = [
  "Move", "Sarah", "and", "Tom", "to", "paid,",
  "their", "deposit", "just", "came", "through.",
];

// Per-word reveal delay (ms). Longer beat after the comma, like real speech.
const DELAYS = TOKENS.map((t) => (t.endsWith(",") ? 420 : 150));

type Phase =
  | "idle"      // empty input, mic neutral
  | "listening" // mic highlighted, words populating
  | "hold"      // full transcript on screen
  | "board"     // cut to kanban, card sitting in New
  | "moving"    // card lifts and slides to Paid
  | "dropped"   // card lands — brief emerald highlight
  | "settled";  // highlight fades, board at rest

const T = {
  idle: 1100,
  micWarmup: 600,
  hold: 1400,
  board: 800,
  moving: 750, // matches the duration-700 transform transition
  dropped: 700,
  settled: 2400,
};

// Stage pills mirror the app's real STATUS_CLASSES (types/couple.ts).
const STAGES = [
  { name: "New", pill: "bg-amber-50 text-amber-600" },
  { name: "Contacted", pill: "bg-blue-50 text-blue-600" },
  { name: "Confirmed", pill: "bg-purple-50 text-purple-600" },
  { name: "Paid", pill: "bg-emerald-50 text-emerald-600" },
];

// Static cards for board density — same couples as the Ask Zebri mockup.
const BOARD_CARDS = [
  {
    col: 1,
    name: "Priya & Daniel",
    email: "priya.sharma@gmail.com",
    date: "12 Sep 2026",
    venue: "Gunners Barracks, Mosman",
  },
  {
    col: 2,
    name: "Chloe & Marcus",
    email: "chloe.bell@outlook.com",
    date: "7 Nov 2026",
    venue: "Ottimo House, Denham Court",
  },
];

// The moving card — Sarah & Tom, matching this feature's description copy
// ("add Sarah and Tom, ceremony March 14 at The Grounds").
const HERO_CARD = {
  name: "Sarah & Tom",
  email: "sarah.mitchell@gmail.com",
  date: "14 Mar 2026",
  venue: "The Grounds, Alexandria",
};

// Mirrors the real KanbanCard body at mockup scale: grip, name, and the
// email / date / venue detail rows with 12px muted icons.
function MiniCard({
  name,
  email,
  date,
  venue,
  className = "",
}: {
  name: string;
  email: string;
  date: string;
  venue: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start gap-1 bg-white border rounded-xl px-1.5 py-1.5 sm:px-2 sm:py-2 transition-colors duration-200 ${className}`}
    >
      <GripVertical
        size={12}
        strokeWidth={1.5}
        className="hidden sm:block mt-0.5 shrink-0 text-gray-300"
        aria-hidden
      />
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-gray-900 truncate">{name}</p>
        <div className="mt-1 space-y-0.5 text-[11px] text-gray-400">
          <p className="hidden sm:flex items-center gap-1 truncate">
            <Mail size={10} strokeWidth={1.5} className="shrink-0" aria-hidden />
            <span className="truncate">{email}</span>
          </p>
          <p className="flex items-center gap-1">
            <Calendar size={10} strokeWidth={1.5} className="shrink-0" aria-hidden />
            <span className="truncate">{date}</span>
          </p>
          <p className="hidden sm:flex items-center gap-1 truncate">
            <MapPin size={10} strokeWidth={1.5} className="shrink-0" aria-hidden />
            <span className="truncate">{venue}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function TalkToZebri() {
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

  // Sequence runner: a looping state machine over the phases above.
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

        setPhase("listening");
        await wait(T.micWarmup);
        if (cancelled) return;

        for (let i = 0; i < TOKENS.length; i++) {
          setWordCount(i + 1);
          await wait(DELAYS[i]);
          if (cancelled) return;
        }

        setPhase("hold");
        await wait(T.hold);
        if (cancelled) return;

        setPhase("board");
        await wait(T.board);
        if (cancelled) return;

        setPhase("moving");
        await wait(T.moving);
        if (cancelled) return;

        setPhase("dropped");
        await wait(T.dropped);
        if (cancelled) return;

        setPhase("settled");
        await wait(T.settled);
        if (cancelled) return;
      }
    })();

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [inView, reduced]);

  const effPhase: Phase = reduced ? "hold" : phase;
  const effCount = reduced ? TOKENS.length : wordCount;
  const recording = effPhase === "listening" || effPhase === "hold";
  const onBoard =
    effPhase === "board" || effPhase === "moving" || effPhase === "dropped" || effPhase === "settled";
  const inFlightOrLanded =
    effPhase === "moving" || effPhase === "dropped" || effPhase === "settled";
  const landed = effPhase === "dropped" || effPhase === "settled";

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Product demo: an MC says “Move Sarah and Tom to paid, their deposit just came through” and Zebri moves their card from the New column to the Paid column on the pipeline board."
      className="relative h-full"
      style={{
        // Soft mint→blue wash behind the card (this mockup only). Kept light
        // through the middle where the white card sits, so it reads as a calm
        // backdrop rather than a coloured fill.
        background:
          "linear-gradient(180deg, #e6f6ee 0%, #f3fbf7 38%, #ffffff 100%)",
      }}
    >
      {/* ── Scene 1: chat input, centered ── */}
      <div
        className={`absolute inset-0 p-4 sm:p-6 flex items-center justify-center transition-opacity duration-200 ${
          onBoard ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg px-4 pt-4 pb-3">
          {/* Transcript populates here */}
          <div
            className={`min-h-[3.75rem] transition-opacity duration-200 ${
              effPhase === "idle" ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-[13px] text-gray-900 leading-relaxed">
              {TOKENS.map((token, i) => (
                <span
                  key={i}
                  className={`transition-opacity duration-200 ${
                    i < effCount ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {token}{" "}
                </span>
              ))}
            </p>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-3 mt-2 pt-2.5 border-t border-gray-100">
            <Paperclip size={14} className="text-gray-300" aria-hidden />
            <Link2 size={14} className="text-gray-300" aria-hidden />
            <Smile size={14} className="text-gray-300" aria-hidden />

            {/* Live waveform while recording */}
            {recording && !reduced && (
              <span className="flex items-center gap-[3px] h-4 ml-auto" aria-hidden>
                {[0, 0.15, 0.3, 0.45, 0.6].map((delay) => (
                  <span
                    key={delay}
                    className="w-0.5 h-3 rounded-full bg-emerald-500 origin-center animate-[zebri-wave_0.9s_ease-in-out_infinite]"
                    style={{ animationDelay: `${delay}s` }}
                  />
                ))}
              </span>
            )}

            {/* Record button — highlighted while transcribing */}
            <span
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                recording ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-400"
              } ${recording && !reduced ? "" : "ml-auto"}`}
            >
              <Mic size={14} aria-hidden />
            </span>
          </div>
        </div>
      </div>

      {/* ── Scene 2: pipeline board — Sarah & Tom slide New → Paid ── */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          onBoard ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* White board surface — rises up from the bottom edge. Its bottom runs
            past the frame (clipped by the mockup's overflow-hidden) so it reads
            as emerging from below, with the green→white wash showing above. */}
        <div
          className={`absolute inset-x-2 sm:inset-x-4 top-[20%] -bottom-8 bg-white border border-gray-200 rounded-t-xl px-1.5 sm:px-3 pt-3 transition-transform duration-300 ease-out ${
            onBoard ? "translate-y-0" : "translate-y-8"
          }`}
        >
          <div className="relative h-full">
            {/* Columns */}
            <div className="grid grid-cols-4 h-full">
              {STAGES.map((stage, col) => {
                const staticCard = BOARD_CARDS.find((c) => c.col === col);
                // Counts flip when the card lands in Paid.
                const count =
                  col === 0 ? (landed ? 0 : 1) : col === 3 ? (landed ? 1 : 0) : 1;
                return (
                  <div
                    key={stage.name}
                    className={`px-1 sm:px-1.5 min-w-0 ${
                      col > 0 ? "border-l border-gray-100" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1 sm:gap-1.5 mb-2 h-5">
                      <span
                        className={`text-[10px] sm:text-[11px] font-medium px-1 sm:px-1.5 py-0.5 rounded-md truncate ${stage.pill}`}
                      >
                        {stage.name}
                      </span>
                      <span className="text-[11px] text-gray-300">{count}</span>
                    </div>
                    {staticCard && (
                      <MiniCard
                        name={staticCard.name}
                        email={staticCard.email}
                        date={staticCard.date}
                        venue={staticCard.venue}
                        className="border-gray-200"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Sarah & Tom — the card Zebri moves. w-1/4 wrapper means
                translateX(300%) lands it exactly on the Paid column. */}
            <div
              className={`absolute top-7 left-0 w-1/4 px-1 sm:px-1.5 transition-transform duration-700 ease-in-out ${
                inFlightOrLanded ? "translate-x-[300%]" : "translate-x-0"
              }`}
            >
              <MiniCard
                name={HERO_CARD.name}
                email={HERO_CARD.email}
                date={HERO_CARD.date}
                venue={HERO_CARD.venue}
                className={
                  effPhase === "moving"
                    ? "shadow-lg opacity-95 border-gray-200"
                    : effPhase === "dropped"
                    ? "border-emerald-300"
                    : "border-gray-200"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
