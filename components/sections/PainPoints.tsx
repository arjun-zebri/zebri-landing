import { Check } from "lucide-react";

export function PainPoints() {
  const fixes = [
    "One shared timeline couples can access any time. No more \"can you resend it?\"",
    "Couple portal collects every detail upfront. Names, songs, pronunciations, contracts.",
    "All vendor contacts in the event. DJ, photographer, planner, one tap away.",
    "Event Mode runs offline on the night. Every detail at your fingertips, no Wi-Fi needed.",
  ];

  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="py-20 px-4 md:py-32 bg-[#FAFAFA]"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="problem-heading"
          className="text-[2.5rem] md:text-[2.75rem] font-semibold text-gray-900 leading-tight tracking-tight mb-10"
        >
          Sound familiar?
        </h2>

        {/* Narrative */}
        <div className="space-y-5 mb-12">
          <p className="text-base text-gray-900 font-medium leading-relaxed">
            The week before every wedding, you&apos;re the unpaid admin.
            Chasing couples for names you&apos;ve already asked for. Rebuilding
            the run sheet because someone updated the first dance song.
            Hunting for the DJ&apos;s number in a WhatsApp thread from four
            months ago.
          </p>
          <p className="text-base text-[#6B7280] leading-relaxed">
            You didn&apos;t get into this for the inbox management. Zebri
            handles that part.
          </p>
        </div>

        {/* Zebri fixes */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-widest mb-6">
            Zebri ends this
          </p>
          <div className="space-y-4">
            {fixes.map((fix, i) => (
              <div key={i} className="flex gap-3">
                <Check
                  size={16}
                  className="text-emerald-600 flex-shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="text-sm text-[#6B7280] leading-relaxed">{fix}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
