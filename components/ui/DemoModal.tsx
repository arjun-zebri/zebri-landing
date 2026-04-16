"use client";

import { useState, useTransition, useEffect } from "react";
import { X } from "lucide-react";
import { submitDemoRequest } from "@/app/actions/submit";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [isPending, startTransition] = useTransition();

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Reset form when closed
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setResult(null);
      }, 300);
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      const res = await submitDemoRequest({ name, email });
      setResult(res);
    });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ${
        open ? "visible" : "invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Card */}
      <div
        className={`relative bg-white rounded-xl shadow-2xl w-full max-w-md p-8 transition-all duration-200 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {result?.success ? (
          /* Success state */
          <div className="py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-[#A7F3D0]/30 flex items-center justify-center mx-auto mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-base font-semibold text-gray-900 mb-1">You&apos;re booked in.</p>
            <p className="text-sm text-[#6B7280]">{result.message}</p>
          </div>
        ) : (
          /* Form */
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-1">Book a demo</h2>
              <p className="text-sm text-[#6B7280]">We&apos;ll walk you through Zebri in 15 minutes.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="demo-name" className="sr-only">Your name</label>
                <input
                  id="demo-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="demo-email" className="sr-only">Email address</label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isPending}
                className="w-full h-10 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold rounded-md transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending…" : "Request demo"}
              </button>
              {result && !result.success && (
                <p className="text-xs text-red-600" role="alert">{result.message}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
