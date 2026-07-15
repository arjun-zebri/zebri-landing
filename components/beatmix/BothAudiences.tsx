import { Check } from "lucide-react";

const columns = [
  {
    heading: "No system yet?",
    body: "Good. You've got nothing to unlearn. Most MCs spend three years building a spreadsheet that almost works, then start again. You can skip that part.",
    points: [
      "Set up in an afternoon, not a season",
      "Your next wedding runs on it",
      "Nothing to migrate, nothing to undo",
    ],
  },
  {
    heading: "Already have a system?",
    body: "Then you already know where it breaks. Dubsado and HoneyBook were built for a sales process, not a ceremony. There's no field for pronunciation. The run sheet lives in a doc. None of it works when the venue has no signal.",
    points: [
      "We move your couples across in your setup session",
      "Pronunciation is a field, not a note in the margin",
      "Event Mode runs offline, on the night",
    ],
  },
];

export function BothAudiences() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[1.75rem] md:text-[2rem] font-semibold text-gray-900 leading-tight tracking-tight mb-12">
          Whether you run a system or run on memory.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {column.heading}
              </h3>
              <p className="text-base text-[#6B7280] leading-relaxed max-w-[65ch]">
                {column.body}
              </p>
              <ul className="mt-6 space-y-3">
                {column.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      strokeWidth={1.5}
                      className="text-emerald-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
