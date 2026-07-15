"use client";

import { useState, useTransition } from "react";
import { submitSignup } from "@/app/actions/submit";

interface SignupFormProps {
  variant?: "hero" | "cta";
  ctaText?: string;
}

export function SignupForm({
  variant = "hero",
  ctaText = "Join the Waitlist",
}: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [weddingsPerYear, setWeddingsPerYear] = useState("");
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await submitSignup({
        name,
        email,
        weddingsPerYear: weddingsPerYear || undefined,
      });
      setResult(res);
    });
  };

  if (result?.success) {
    return (
      <div className="flex items-start gap-3 py-2">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#A7F3D0]/30 flex items-center justify-center mt-0.5">
          <svg
            width="16"
            height="16"
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
        <div>
          <p className="text-sm font-semibold text-gray-900">
            You&apos;re on the list.
          </p>
          <p className="text-sm text-[#6B7280] mt-0.5">{result.message}</p>
        </div>
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <form onSubmit={handleSubmit} className="w-full space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="cta-name" className="sr-only">
              Your name
            </label>
            <input
              id="cta-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-9 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-9 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
            />
          </div>
        </div>
        <div>
          <label htmlFor="cta-weddings" className="sr-only">
            Weddings per year
          </label>
          <select
            id="cta-weddings"
            value={weddingsPerYear}
            onChange={(e) => setWeddingsPerYear(e.target.value)}
            className="w-full h-9 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors"
          >
            <option value="">How many weddings per year? (optional)</option>
            <option value="<10">Fewer than 10</option>
            <option value="10-25">10 – 25</option>
            <option value="25+">25 or more</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full h-9 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Joining…" : ctaText}
        </button>
        {result && !result.success && (
          <p className="text-xs text-red-600" role="alert">
            {result.message}
          </p>
        )}
      </form>
    );
  }

  // hero variant: inline on desktop, stacked on mobile
  return (
    <form onSubmit={handleSubmit} className="space-y-2.5">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="hero-name" className="sr-only">
            Your name
          </label>
          <input
            id="hero-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 sm:h-9 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="hero-email" className="sr-only">
            Email address
          </label>
          <input
            id="hero-email"
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 sm:h-9 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="h-11 sm:h-9 px-5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Joining…" : ctaText}
        </button>
      </div>
      {result && !result.success && (
        <p className="text-xs text-red-600" role="alert">
          {result.message}
        </p>
      )}
    </form>
  );
}
