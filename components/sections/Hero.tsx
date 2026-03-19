"use client";

import { SignupForm } from "@/components/ui/SignupForm";

export function Hero() {
  return (
    <section className="pt-24 pb-20 px-4 md:pt-36 md:pb-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div className="space-y-8">
            {/* Urgency badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-amber-50 border border-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold text-amber-800 tracking-wide">
                Only 7 spots left &middot; Closes March 30
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-[2.75rem] md:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-gray-900">
                Your entire wedding workflow is&nbsp;held together by&nbsp;tabs.
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Google Docs. WhatsApp. PDFs. Your brain. Zebri replaces all of
                it with one command centre built for professional
                wedding&nbsp;MCs.
              </p>
            </div>

            {/* Inline email CTA */}
            <div className="pt-2">
              <SignupForm variant="inline" />
              <p className="text-xs text-gray-400 mt-2.5">
                No credit card required. Free beta access for founding members.
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {[
                  "bg-gray-800",
                  "bg-emerald-600",
                  "bg-amber-600",
                  "bg-violet-600",
                ].map((color, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${color} border-2 border-white flex items-center justify-center`}
                  >
                    <span className="text-[10px] font-bold text-white">
                      {["JM", "KL", "SR", "AT"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">
                  13 MCs have already joined the beta
                </span>
              </p>
            </div>
          </div>

          {/* Right: Dashboard mock */}
          <div className="hidden lg:block">
            <DashboardMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden shadow-xl shadow-gray-200/60 bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50/80">
        <div className="flex items-center gap-2">
          <img src="/zebri-logo.svg" alt="zebri" className="h-3.5" />
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-400"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span className="text-xs text-gray-500">Ananya &amp; Vikram</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 border border-emerald-200">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            <span className="text-[10px] font-medium text-emerald-700">
              Synced
            </span>
          </div>
          <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
            <span className="text-[9px] font-bold text-white">AP</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 border-r border-gray-100 bg-gray-50/50 p-3 space-y-1 hidden xl:block">
          {[
            {
              label: "Overview",
              active: false,
              iconPath: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
            },
            {
              label: "Timeline",
              active: true,
              iconPath: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 6v6l4 2",
            },
            {
              label: "Scripts",
              active: false,
              iconPath:
                "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z",
            },
            {
              label: "Couple",
              active: false,
              iconPath: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded text-[11px] font-medium cursor-pointer transition-colors ${
                item.active
                  ? "bg-green-50 text-green-700"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={item.active ? "text-green-600" : "text-gray-400"}
              >
                <path d={item.iconPath} />
              </svg>
              {item.label}
            </div>
          ))}

          {/* Weddings list */}
          <div className="pt-3 mt-3 border-t border-gray-100">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2.5 mb-2">
              Upcoming
            </p>
            {[
              { couple: "Ananya & Vikram", date: "Mar 15", active: true },
              { couple: "Jess & Raf", date: "Mar 22", active: false },
              { couple: "Sarah & Tom", date: "Apr 5", active: false },
            ].map((w, i) => (
              <div
                key={i}
                className={`px-2.5 py-1.5 rounded text-[11px] cursor-pointer transition-colors ${
                  w.active
                    ? "bg-white text-gray-800 font-medium shadow-sm border border-gray-100"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <div className="truncate">{w.couple}</div>
                <div className="text-[10px] text-gray-400">{w.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 min-w-0">
          {/* Top info bar */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-gray-900">
                Ananya &amp; Vikram&apos;s Wedding
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">
                March 15, 2026 &middot; The Grounds of Alexandria
              </p>
            </div>
            <button className="px-2.5 py-1 text-[10px] font-semibold bg-green-600 text-white rounded transition-colors hover:bg-green-700">
              Go Live
            </button>
          </div>

          {/* Timeline */}
          <div className="mb-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Timeline
              </p>
              <button className="text-[10px] text-gray-900 font-medium hover:text-gray-700">
                + Add
              </button>
            </div>
            <div className="space-y-1">
              {[
                { time: "5:00 PM", event: "Guests arrive", status: "done" },
                { time: "5:30 PM", event: "Ceremony", status: "done" },
                { time: "6:15 PM", event: "Cocktail hour", status: "current" },
                { time: "7:00 PM", event: "Entrance", status: "upcoming" },
                { time: "7:15 PM", event: "First dance", status: "upcoming" },
                { time: "7:30 PM", event: "Speeches", status: "upcoming" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded text-[11px] border transition-colors ${
                    item.status === "current"
                      ? "bg-green-600 border-green-600 text-white"
                      : item.status === "done"
                      ? "bg-white border-gray-50 opacity-40"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      item.status === "current"
                        ? "bg-white"
                        : item.status === "done"
                        ? "bg-gray-300"
                        : "bg-gray-200"
                    }`}
                  />
                  <span
                    className={`font-mono text-[10px] w-11 flex-shrink-0 ${
                      item.status === "current"
                        ? "text-green-200"
                        : "text-gray-400"
                    }`}
                  >
                    {item.time}
                  </span>
                  <span
                    className={`flex-1 truncate ${
                      item.status === "current"
                        ? "font-semibold"
                        : item.status === "done"
                        ? "text-gray-400 line-through"
                        : "text-gray-700"
                    }`}
                  >
                    {item.event}
                  </span>
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`flex-shrink-0 ${
                      item.status === "current"
                        ? "text-green-300"
                        : "text-gray-200"
                    }`}
                  >
                    <circle cx="9" cy="5" r="1.5" />
                    <circle cx="15" cy="5" r="1.5" />
                    <circle cx="9" cy="12" r="1.5" />
                    <circle cx="15" cy="12" r="1.5" />
                    <circle cx="9" cy="19" r="1.5" />
                    <circle cx="15" cy="19" r="1.5" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row: couple + stats */}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="rounded border border-gray-100 p-2 bg-gray-50/50">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                Couple
              </p>
              <p className="text-[11px] font-semibold text-gray-800">
                Ananya Sharma &amp; Vikram Mehta
              </p>
              <div className="flex items-center gap-1 mt-1">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2"
                >
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                </svg>
                <span className="text-[10px] text-green-600 font-medium">
                  ah·NUN·ya SHAR·ma
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded border border-gray-100 p-2 bg-gray-50/50 text-center">
                <p className="text-sm font-bold text-gray-800">142</p>
                <p className="text-[9px] text-gray-400">Guests</p>
              </div>
              <div className="rounded border border-gray-100 p-2 bg-gray-50/50 text-center">
                <p className="text-sm font-bold text-gray-800">6h</p>
                <p className="text-[9px] text-gray-400">Duration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
