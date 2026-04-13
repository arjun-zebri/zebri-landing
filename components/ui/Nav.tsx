"use client";

import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 h-14 border-b border-gray-100 backdrop-blur-md bg-white/80">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <img src="/zebri-logo.svg" alt="zebri" className="h-6" />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Blog
            </a>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://app.zebri.com.au/login"
              className="hidden md:inline text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </a>
            <a
              href="https://app.zebri.com.au/signup"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-colors"
            >
              Start Free Trial
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col animate-in slide-in-from-right duration-200">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100">
              <img src="/zebri-logo.svg" alt="zebri" className="h-5" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 px-5 py-6 space-y-1">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Blog", href: "/blog" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center h-11 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md px-3 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="px-5 pb-8 space-y-3">
              <a
                href="https://app.zebri.com.au/login"
                className="flex items-center justify-center h-11 w-full rounded-md border border-gray-200 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Log in
              </a>
              <a
                href="https://app.zebri.com.au/signup"
                className="flex items-center justify-center h-11 w-full rounded-md bg-gray-900 text-sm font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
