export function PainPoints() {
  const painPoints = [
    {
      pain: "Couples messaging you at 11pm asking questions you've already answered.",
      solution: "Zebri's couple portal handles it for you.",
    },
    {
      pain: "Timelines scattered across three different Google Docs.",
      solution: "One shared timeline, always current.",
    },
    {
      pain: "Chasing invoices the week of the wedding.",
      solution: "Quotes, invoices, and payment links built right in.",
    },
    {
      pain: "Scrambling to find couple details on the night.",
      solution: "Every event detail at your fingertips, even offline.",
    },
  ];

  return (
    <section className="py-20 px-4 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[2.5rem] md:text-[2.75rem] font-semibold text-gray-900 leading-tight tracking-tight mb-12 md:mb-16">
          Sound familiar?
        </h2>

        <div className="space-y-8">
          {painPoints.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-xl mt-0.5 flex-shrink-0">❌</span>
              <div>
                <p className="text-base font-semibold text-gray-900 leading-snug mb-1.5">
                  {item.pain}
                </p>
                <p className="text-sm text-[#6B7280]">
                  <span className="mr-1">→</span>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
