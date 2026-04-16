import {
  Phone,
  Users,
  Zap,
  LogIn,
  ReceiptText,
  Play,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    heading: "Make calls through Zebri",
    description:
      "Log enquiries, take notes, and track every conversation from inside Zebri. Nothing falls through the cracks.",
  },
  {
    number: "02",
    icon: Users,
    heading: "Leads added to pipeline",
    description:
      "New enquiries land straight in your CRM. See every lead, their stage, and what is outstanding at a glance.",
  },
  {
    number: "03",
    icon: Zap,
    heading: "AI scores help you prioritise",
    description:
      "Zebri scores each lead on budget fit, availability, and intent so you know exactly who to follow up with first.",
  },
  {
    number: "04",
    icon: LogIn,
    heading: "Couples log in and add details",
    description:
      "Send one link. Couples fill in names, pronunciations, song requests, and sign contracts. You stop answering the same questions twice.",
  },
  {
    number: "05",
    icon: ReceiptText,
    heading: "Generate invoices, collect payment",
    description:
      "Quote, invoice, and collect payment all from inside Zebri. Everything tracked in one place.",
  },
  {
    number: "06",
    icon: Play,
    heading: "Walk in ready, work offline",
    description:
      "Open Event Mode on the night for a full-screen run sheet that auto-advances in real time. Every detail cached and available without Wi-Fi.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-xl">
            From first call to final bow.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md text-xs font-semibold text-emerald-800 shrink-0"
                    style={{
                      backgroundColor: "rgba(167, 243, 208, 0.25)",
                      border: "1px solid #A7F3D0",
                    }}
                  >
                    {step.number}
                  </div>
                  <Icon size={18} className="text-emerald-700" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                  {step.heading}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
