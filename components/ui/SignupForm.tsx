"use client";

import { useState } from "react";
import posthog from "posthog-js";
import { submitSignup } from "@/app/actions/submit";

interface SignupFormProps {
  variant?: "default" | "inline";
}

export function SignupForm({ variant = "default" }: SignupFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingsPerYear: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const result = await submitSignup(formData);

    if (result.success) {
      // Track beta registration event in PostHog
      posthog.capture("beta_registration", {
        name: formData.name,
        email: formData.email,
        weddingsPerYear: formData.weddingsPerYear
          ? parseInt(formData.weddingsPerYear, 10)
          : null,
      });

      setMessage({ type: "success", text: result.message });
      setFormData({ name: "", email: "", weddingsPerYear: "" });
    } else {
      setMessage({ type: "error", text: result.message });
    }

    setIsLoading(false);
  };

  const inputClasses =
    "w-full px-4 py-3.5 border border-gray-200 rounded-lg text-sm text-gray-900 bg-white placeholder:text-gray-400 outline-none transition-all focus:border-gray-900 focus:ring-2 focus:ring-gray-900/5 disabled:opacity-50 disabled:cursor-not-allowed";

  if (variant === "inline") {
    return (
      <div className="space-y-3">
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            className={`flex-1 ${inputClasses}`}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg text-sm whitespace-nowrap transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Claim Your Spot"}
          </button>
        </form>
        {message && (
          <div
            className={`px-4 py-3 rounded-lg text-sm border ${
              message.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-red-50 border-red-200 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          How many weddings do you MC per year?
          <span className="text-gray-400 font-normal ml-1">(optional)</span>
        </label>
        <input
          type="text"
          name="weddingsPerYear"
          placeholder="e.g. 30"
          value={formData.weddingsPerYear}
          onChange={handleChange}
          disabled={isLoading}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Joining..." : "Claim Your Spot"}
      </button>

      {message && (
        <div
          className={`px-4 py-3 rounded-lg text-sm border ${
            message.type === "success"
              ? "bg-emerald-50 border-emerald-200 text-emerald-700"
              : "bg-red-50 border-red-200 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
