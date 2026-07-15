import Image from "next/image";
import { ArrowRight, MapPin, Users, ShieldCheck } from "lucide-react";
import { EarlyAccessButton } from "@/components/ui/EarlyAccessButton";

const validation = [
  { icon: MapPin, text: "Built in Australia." },
  { icon: Users, text: "Designed by MCs and celebrants." },
  { icon: ShieldCheck, text: "Your data stays yours. Always." },
];

const founders = [
  { name: "Nathan Cassar", img: "/mcs/nathan.svg" },
  { name: "John Edney", img: "/mcs/john.svg" },
  { name: "Ceremonies by Sarah", img: "/mcs/sarah.svg" },
  { name: "Married by Marianna", img: "/mcs/marianna.svg" },
  { name: "TJ Your MC", img: "/mcs/tj.svg" },
];

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="pt-20 pb-20 px-4 md:pt-32 md:pb-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-14 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div>
            <h1
              id="hero-heading"
              className="text-[2.5rem] md:text-[3rem] font-semibold leading-[1.14] tracking-tight text-gray-900 mb-5"
            >
              Stop juggling 6 tabs the night before a wedding.
            </h1>
            <p className="text-base text-[#6B7280] leading-relaxed mb-8 max-w-md">
              Zebri is built for wedding MCs and celebrants. Your couples,
              timelines, scripts, and vendor communications in one place. Walk
              in ready.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <EarlyAccessButton
                source="hero"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 transition-colors cursor-pointer"
              >
                Get Early Access
                <ArrowRight size={16} />
              </EarlyAccessButton>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 hover:border-gray-500 bg-white text-gray-700 hover:text-gray-900 transition-colors"
              >
                See how it works
              </a>
            </div>

            <div className="flex items-center gap-3 mb-10">
              <div className="flex -space-x-2">
                {founders.map((f) => (
                  <span
                    key={f.name}
                    className="h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-white bg-gray-100"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={f.img}
                      alt={f.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                ))}
              </div>
              <p className="text-sm text-[#6B7280]">
                <span className="font-medium text-gray-900">30 others</span> have
                registered for early access.
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              {validation.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <Icon size={14} className="text-emerald-600 shrink-0" />
                  <span className="text-sm text-[#6B7280]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard screenshot */}
          <div className="w-full rounded-md bg-gray-100 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <Image
              src="/dashboard-ui.png"
              alt="Zebri dashboard"
              width={3596}
              height={2068}
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
