import { SignupForm } from "@/components/ui/SignupForm";

export function FinalCTA() {
  return (
    <section id="join-beta" className="py-20 px-4 md:py-32 bg-gray-50">
      <div className="max-w-lg mx-auto">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-blue-50 border border-blue-200">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-blue-700 tracking-wide">
              Early access opens now &middot; Closes April 30
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold leading-tight tracking-tight text-gray-900 mb-4">
            Lock in 20% off forever.
          </h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-md mx-auto">
            Join before May 1st public launch and get 20% off forever. Direct team access. Your feedback shapes the product. Early adopter pricing locked in for life.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
          <SignupForm variant="default" />
        </div>

        {/* Trust */}
        <p className="text-center text-xs text-gray-400 mt-5">
          No credit card. No spam. One email with early access details.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { value: "20%", label: "Lifetime discount" },
            { value: "Direct", label: "Team access" },
            { value: "May 1", label: "Public launch" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-3 px-2 rounded-lg border border-gray-200 bg-white"
            >
              <div className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
