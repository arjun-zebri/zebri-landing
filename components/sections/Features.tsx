export function Features() {
  return (
    <section id="features" className="py-20 px-4 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-[2.5rem] md:text-[2.75rem] font-semibold text-gray-900 leading-tight tracking-tight">
            Built for how you actually work.
          </h2>
          <p className="text-lg text-[#6B7280] mt-4 max-w-xl">
            Five features that replace everything you&apos;re piecing
            together right now.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* 1. Client Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Every couple, one place.</h3>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed">
                See every couple&apos;s journey at a glance. From first enquiry to final payment,
                know exactly where each booking stands without opening a single spreadsheet.
              </p>
            </div>
            <div className="w-full aspect-video rounded-xl bg-gray-100 border border-gray-200" />
          </div>

          {/* 2. Shared Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full aspect-video rounded-xl bg-gray-100 border border-gray-200" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">One timeline. Everyone sees it.</h3>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Build the run sheet once and share a live link with your DJ, photographer, and the couple.
                One version of truth. No more WhatsApp chains or conflicting spreadsheets.
              </p>
            </div>
          </div>

          {/* 3. Couple Portal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">They fill it in. You never chase.</h3>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Send couples one link to submit everything you need: names, pronunciations, song requests,
                bridal party details, and signed contracts. No chasing. No lost emails.
              </p>
            </div>
            <div className="w-full aspect-video rounded-xl bg-gray-100 border border-gray-200" />
          </div>

          {/* 4. AI Sales Coach */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-full aspect-video rounded-xl bg-gray-100 border border-gray-200" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Know exactly who to follow up with.</h3>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Zebri analyses each enquiry for budget fit, availability, sentiment, and intent, then surfaces a next best action so you always know the right move. After every conversation, get a clear summary you can act on immediately.
              </p>
            </div>
          </div>

          {/* 5. Event Mode */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-md bg-[#A7F3D0]/30 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-700">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Your command view for the night.</h3>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed">
                When the night starts, switch to Event Mode. You get a distraction-free, full-screen run sheet that auto-advances in real time, so you&apos;re always on cue, even when things change. Works completely offline for venues with no signal.
              </p>
            </div>
            <div className="w-full aspect-video rounded-xl bg-gray-100 border border-gray-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
