"use client";

import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav aria-label="Main navigation" className="sticky top-0 z-50 h-14 border-b border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/"><img src="/zebri-logo.svg" alt="Zebri" className="h-6" /></a>

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
            <a href="/news" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              News
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
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 transition-colors"
            >
              Start Free Trial
              <ChevronRight size={14} />
            </a>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer, always in DOM for smooth open/close animation */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl flex flex-col transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100">
            <a href="/"><img src="/zebri-logo.svg" alt="Zebri" className="h-5" /></a>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 px-5 py-6 space-y-1">
            {[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Blog", href: "/blog" },
              { label: "News", href: "/news" },
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
              className="flex items-center justify-center h-11 w-full rounded-md border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Log in
            </a>
            <a
              href="https://app.zebri.com.au/signup"
              className="flex items-center justify-center h-11 w-full rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-sm font-semibold text-gray-900 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
