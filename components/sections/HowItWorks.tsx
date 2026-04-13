export function HowItWorks() {
  const steps = [
    {
      number: "01",
      heading: "Add your couples",
      description:
        "Import upcoming bookings and set up each event in minutes. No complicated onboarding, no training required.",
    },
    {
      number: "02",
      heading: "Couples handle the details",
      description:
        "They log in to their own portal, fill in song requests, upload files, and sign off on timelines. You stop answering the same questions twice.",
    },
    {
      number: "03",
      heading: "Walk in ready",
      description:
        "Every event has a live run sheet, full couple profile, and everything you need in one tap. No surprises.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-xl">
            From enquiry to encore in three steps.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-gray-100">
          {steps.map((step) => (
            <div key={step.number} className="md:px-10 first:pl-0 last:pr-0 py-8 md:py-0 border-b border-gray-100 md:border-b-0 last:border-b-0">
              <div
                className="inline-flex items-center justify-center w-9 h-9 rounded-md text-sm font-semibold text-emerald-800 mb-5"
                style={{ backgroundColor: "rgba(167, 243, 208, 0.25)", border: "1px solid #A7F3D0" }}
              >
                {step.number}
              </div>
              <h3 className="text-[1.05rem] font-semibold text-gray-900 mb-2.5 leading-snug">
                {step.heading}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
