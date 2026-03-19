"use client";

import { useState } from "react";

function MockTimeline() {
  return (
    <div className="w-full bg-white border border-zinc-200 rounded-2xl p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-950">Sarah & Tom's Timeline</h3>
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
          May 15, 2024
        </span>
      </div>

      <div className="space-y-3">
        {[
          { time: "5:00 PM", event: "Guests arrive & cocktails", status: "complete" },
          { time: "5:45 PM", event: "Ceremony processional", status: "complete" },
          { time: "6:00 PM", event: "Ceremony begins", status: "current" },
          { time: "6:30 PM", event: "First kiss & recessional", status: "upcoming" },
          { time: "7:00 PM", event: "Photos on the lawn", status: "upcoming" },
        ].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-4 rounded-lg border text-sm transition-colors ${
              item.status === "current"
                ? "bg-emerald-50 border-emerald-200"
                : item.status === "complete"
                  ? "bg-zinc-50 border-zinc-200 opacity-60"
                  : "bg-white border-zinc-200"
            }`}
          >
            <div className="cursor-grab text-zinc-400 flex-shrink-0">
              <span className="text-xs">⋮⋮</span>
            </div>
            <span className="font-mono text-xs text-zinc-600 w-16 flex-shrink-0">
              {item.time}
            </span>
            <span className="text-zinc-900 flex-1">
              {item.event}
            </span>
            <div className="flex items-center gap-2 flex-shrink-0">
              {item.status === "complete" && (
                <span className="text-emerald-600 text-sm">✓</span>
              )}
              {item.status === "current" && (
                <span className="inline-block w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockCouplePortal() {
  return (
    <div className="w-full bg-white border border-zinc-200 rounded-2xl p-8 space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-zinc-950">Couple Details</h3>
        <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full">
          Complete
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Bride & Groom
          </label>
          <input
            type="text"
            value="Sarah Alexandra Chen & Tom Williams"
            readOnly
            className="w-full px-4 py-3 border border-zinc-200 rounded-lg bg-zinc-50 text-zinc-900 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Pronunciation Guide
          </label>
          <input
            type="text"
            value="SAH-rah lex-AN-drah CHEN & Tom WIL-yums"
            readOnly
            className="w-full px-4 py-3 border border-emerald-200 rounded-lg bg-emerald-50 text-zinc-900 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-zinc-700 mb-2">
            Bridal Party
          </label>
          <div className="space-y-2">
            {["Emma (Maid of Honor)", "Jessica (Sister)", "Priya (College friend)"].map(
              (name, i) => (
                <div key={i} className="px-4 py-2 bg-zinc-100 border border-zinc-200 rounded-lg text-sm text-zinc-900">
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockScriptOrganiser() {
  const [expanded, setExpanded] = useState<string | null>("opening");

  return (
    <div className="w-full bg-white border border-zinc-200 rounded-2xl p-8 space-y-2">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-zinc-950">Your Scripts</h3>
        <span className="text-xs text-zinc-500">3 sections</span>
      </div>

      {[
        {
          title: "Opening",
          id: "opening",
          content:
            "Good evening, everyone. I'm [Your Name], and I have the absolute honour of being MC for Sarah and Tom's wedding today.",
        },
        {
          title: "Transitions",
          id: "transitions",
          content:
            "While our photographer captures those perfect moments, let's celebrate this couple with a toast...",
        },
        {
          title: "Closing",
          id: "closing",
          content:
            "Sarah and Tom—here's to a lifetime of moments just as magical as this one. To the happy couple!",
        },
      ].map((section) => (
        <div key={section.id} className="border border-zinc-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === section.id ? null : section.id)}
            className="w-full flex items-center justify-between p-4 hover:bg-zinc-50 transition-colors text-left"
          >
            <span className="font-semibold text-zinc-900">{section.title}</span>
            <span className={`text-zinc-400 transition-transform text-lg ${expanded === section.id ? "rotate-180" : ""}`}>
              ⌄
            </span>
          </button>
          {expanded === section.id && (
            <div className="px-4 pb-4 bg-zinc-50 border-t border-zinc-200">
              <p className="text-sm text-zinc-700 leading-relaxed">"{section.content}"</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function MockOnTheNight() {
  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-8 space-y-8 min-h-96 flex flex-col justify-between">
      <div className="text-center space-y-3">
        <p className="text-zinc-500 text-xs uppercase tracking-widest">Now</p>
        <h3 className="text-6xl font-bold text-white leading-tight">First Dance</h3>
      </div>

      <div className="border-t border-zinc-800 pt-6">
        <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Next Up</p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
          <p className="text-xl font-semibold text-white">Toasts & Tributes</p>
          <p className="text-sm text-zinc-400 mt-3">9:00 PM</p>
        </div>
      </div>

      <div className="flex gap-3 justify-center pt-6">
        <button className="px-6 py-3 bg-zinc-800 text-white rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors">
          ← Back
        </button>
        <button className="px-6 py-3 bg-zinc-700 text-white rounded-lg text-sm font-medium hover:bg-zinc-600 transition-colors">
          Skip 30s
        </button>
      </div>
    </div>
  );
}

export function Mockups() {
  const [activeTab, setActiveTab] = useState("timeline");

  const tabs = [
    { id: "timeline", label: "Timeline Builder", Component: MockTimeline },
    { id: "portal", label: "Couple Portal", Component: MockCouplePortal },
    { id: "script", label: "Script Organiser", Component: MockScriptOrganiser },
    { id: "event", label: "Event Mode", Component: MockOnTheNight },
  ];

  const activeComponent = tabs.find((t) => t.id === activeTab);

  return (
    <section className="py-20 px-4 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#0D0D0D" }}
          >
            See It In Action.
          </h2>
          <p className="text-lg max-w-2xl" style={{ color: "#767676" }}>
            Real interfaces. Built specifically for how you work.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-2 font-medium text-sm transition-all rounded-lg"
              style={{
                backgroundColor: activeTab === tab.id ? "#0D0D0D" : "transparent",
                color: activeTab === tab.id ? "#F7F6F3" : "#767676",
                borderBottom: activeTab === tab.id ? "none" : "2px solid #E4E3DF",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Browser Frame Wrapper */}
        {activeComponent && (
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ backgroundColor: "#F0F0F0" }}>
            {/* Browser top bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b" style={{ backgroundColor: "#E8E8E8", borderColor: "#D0D0D0" }}>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F56" }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }}></div>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27C93F" }}></div>
              </div>
              <div className="flex-1 text-xs text-center font-medium" style={{ color: "#666" }}>
                {tabs.find((t) => t.id === activeTab)?.label}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12" style={{ backgroundColor: "#FFFFFF" }}>
              <activeComponent.Component />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
