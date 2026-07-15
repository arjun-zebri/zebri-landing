"use client";

import { useState, useTransition } from "react";
import { Check } from "lucide-react";
import {
  submitBeatmixDetails,
  submitBeatmixEmail,
} from "@/app/actions/submit";
import {
  CALENDLY_URL,
  CURRENT_SYSTEMS,
  DISCOUNT_PERCENT,
  ROLES,
} from "@/lib/beatmix";
import { track } from "@/lib/analytics";

type Stage = "email" | "details" | "done";

interface BeatmixFormProps {
  /** Keeps input ids unique; the form renders twice on the page. */
  idPrefix: string;
  /** Where the submit happened, for analytics. */
  location: "hero" | "final";
}

const INPUT_CLASS =
  "w-full h-11 border border-gray-200 rounded-md px-3 text-base sm:text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors duration-150";

export function BeatmixForm({ idPrefix, location }: BeatmixFormProps) {
  const [stage, setStage] = useState<Stage>("email");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState<string>("");
  const [currentSystem, setCurrentSystem] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await submitBeatmixEmail({ email });
      if (!res.success) {
        setError(res.message);
        return;
      }
      track("beatmix_email_submitted", { location });
      setStage("details");
    });
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await submitBeatmixDetails({
        email,
        name: name || undefined,
        role: role || undefined,
        currentSystem: currentSystem || undefined,
      });
      if (!res.success) {
        setError(res.message);
        return;
      }
      track("beatmix_details_submitted", { location, role, currentSystem });
      setStage("done");
    });
  };

  const handleSkip = () => {
    track("beatmix_details_skipped", { location });
    setStage("done");
  };

  /* ---------------- Stage 3: done ---------------- */

  if (stage === "done") {
    return (
      <div className="border border-gray-200 rounded-md bg-white p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#A7F3D0]/30 flex items-center justify-center">
            <Check size={16} strokeWidth={2.5} className="text-emerald-700" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900">
              You&apos;re in.
            </p>
            <p className="text-sm text-[#6B7280] mt-1">
              Your {DISCOUNT_PERCENT}% code lands in{" "}
              <span className="text-gray-900">{email}</span> within 24 hours.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-5 pt-5">
          <p className="text-sm font-medium text-gray-900">
            Now book your setup session.
          </p>
          <p className="text-sm text-[#6B7280] mt-1">
            One-on-one, screen to screen. We move your couples across and build
            your first run sheet together.
          </p>

          {CALENDLY_URL ? (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("beatmix_calendly_clicked", { location })}
              className="mt-4 inline-flex items-center justify-center w-full sm:w-auto h-11 sm:h-9 px-5 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors duration-150"
            >
              Book my setup session
            </a>
          ) : (
            <p className="mt-4 text-sm text-[#9CA3AF]">
              We&apos;ll email you a link to book it.
            </p>
          )}
        </div>
      </div>
    );
  }

  /* ---------------- Stage 2: details ---------------- */

  if (stage === "details") {
    return (
      <div className="border border-gray-200 rounded-md bg-white p-5">
        <div className="flex items-start gap-3 mb-5">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#A7F3D0]/30 flex items-center justify-center">
            <Check size={16} strokeWidth={2.5} className="text-emerald-700" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900">
              Locked in. Your code is on its way.
            </p>
            <p className="text-sm text-[#6B7280] mt-1">
              Two quick things, so your setup session is worth your time.
            </p>
          </div>
        </div>

        <form onSubmit={handleDetailsSubmit} className="space-y-6">
          <ChipGroup
            legend="What do you do?"
            name={`${idPrefix}-role`}
            options={ROLES}
            value={role}
            onChange={setRole}
          />

          <ChipGroup
            legend="What are you using now?"
            name={`${idPrefix}-system`}
            options={CURRENT_SYSTEMS}
            value={currentSystem}
            onChange={setCurrentSystem}
          />

          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Your name
            </label>
            <input
              id={`${idPrefix}-name`}
              type="text"
              autoComplete="name"
              placeholder="Sarah Kowalski"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={INPUT_CLASS}
            />
          </div>

          {error && (
            <p className="text-xs text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={isPending}
              className="h-11 sm:h-9 px-5 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isPending ? "Saving…" : "Done"}
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors duration-150"
            >
              Skip
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* ---------------- Stage 1: email ---------------- */

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-2.5">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <label htmlFor={`${idPrefix}-email`} className="sr-only">
            Email address
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            required
            inputMode="email"
            autoComplete="email"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={error ? `${idPrefix}-error` : undefined}
            className={INPUT_CLASS}
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="h-11 px-5 bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Claiming…" : `Claim my ${DISCOUNT_PERCENT}%`}
        </button>
      </div>
      {error && (
        <p id={`${idPrefix}-error`} className="text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}

/* ------------------------------------------------------------------ */

interface ChipGroupProps {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}

/**
 * Tappable chips rather than a <select>. Native dropdowns on mobile open a
 * full-screen picker, which is too much friction for someone standing in a talk.
 */
function ChipGroup({ legend, name, options, value, onChange }: ChipGroupProps) {
  return (
    <fieldset>
      <legend id={`${name}-legend`} className="text-sm font-medium text-gray-700 mb-2">
        {legend}
      </legend>
      <div
        role="radiogroup"
        aria-labelledby={`${name}-legend`}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(selected ? "" : option)}
              className={`min-h-11 sm:min-h-9 px-3.5 rounded-md border text-sm transition-colors duration-150 ${
                selected
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
