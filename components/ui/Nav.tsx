export function Nav() {
  return (
    <nav className="sticky top-0 z-50 h-14 border-b border-gray-100 backdrop-blur-md bg-white/80">
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <img src="/zebri-logo.svg" alt="zebri" className="h-6" />

        {/* CTA Button */}
        <a
          href="#join-beta"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-md bg-gray-900 hover:bg-gray-800 text-white transition-colors"
        >
          Join Beta
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
