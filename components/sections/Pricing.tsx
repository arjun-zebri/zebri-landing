"use client";

import { useState } from "react";

const CHECK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DASH_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-gray-300 flex-shrink-0">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

interface PlanFeature {
  label: string;
  free: boolean;
  starter: boolean;
  pro: boolean;
}

const features: PlanFeature[] = [
  { label: "Up to 5 couples",                              free: true,  starter: false, pro: false },
  { label: "Unlimited couples",                             free: false, starter: true,  pro: true  },
  { label: "CRM & pipeline",                               free: true,  starter: true,  pro: true  },
  { label: "Quotes, invoices & payment links",              free: true,  starter: true,  pro: true  },
  { label: "Task management",                              free: false, starter: true,  pro: true  },
  { label: "Couple portal",                                free: false, starter: true,  pro: true  },
  { label: "Song selection & file transfer",               free: false, starter: true,  pro: true  },
  { label: "Pulse",                                        free: false, starter: false, pro: true  },
  { label: "Event Mode",                                   free: false, starter: false, pro: true  },
  { label: "Up to 5 team members",                         free: false, starter: false, pro: true  },
  { label: "Dedicated account manager & priority support", free: false, starter: false, pro: true  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, annual: 0 },
      description: "For MCs getting started.",
      cta: "Get Started Free",
      ctaHref: "https://app.zebri.com.au/signup",
      popular: false,
    },
    {
      name: "Starter",
      price: { monthly: 49, annual: 39 },
      description: "For working MCs building their business.",
      cta: "Start Free Trial",
      ctaHref: "https://app.zebri.com.au/signup",
      popular: true,
    },
    {
      name: "Pro",
      price: { monthly: 89, annual: 71 },
      description: "For full-time MCs who want every advantage.",
      cta: "Start Free Trial",
      ctaHref: "https://app.zebri.com.au/signup",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
            Pricing
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight">
              Simple, honest pricing.
            </h2>

            {/* Billing toggle — fixed height to prevent layout shift */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className={`text-sm transition-colors ${!annual ? "text-gray-900 font-semibold" : "text-[#6B7280]"}`}>
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${annual ? "bg-gray-900" : "bg-gray-200"}`}
                aria-label="Toggle annual billing"
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${annual ? "translate-x-4.5" : "translate-x-0.5"}`}
                />
              </button>
              <span className={`text-sm transition-colors ${annual ? "text-gray-900 font-semibold" : "text-[#6B7280]"}`}>
                Annual
              </span>
              {/* Reserve space to prevent layout shift */}
              <span
                className={`text-[10px] font-semibold text-emerald-700 bg-[#A7F3D0]/30 border border-[#A7F3D0] px-2 py-0.5 rounded-full transition-opacity ${annual ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => {
            const price = annual ? plan.price.annual : plan.price.monthly;
            return (
              <div
                key={plan.name}
                className={`relative bg-white rounded-lg p-6 flex flex-col ${
                  plan.popular
                    ? "border-2 border-gray-900"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="text-[10px] font-semibold text-emerald-800 bg-[#A7F3D0] border border-[#A7F3D0] px-3 py-1 rounded-full uppercase tracking-wider">
                      Most popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {price === 0 ? (
                      <span className="text-3xl font-semibold text-gray-900">Free</span>
                    ) : (
                      <>
                        <span className="text-3xl font-semibold text-gray-900">${price}</span>
                        <span className="text-sm text-[#6B7280]">/mo</span>
                      </>
                    )}
                  </div>
                  {price > 0 && annual && (
                    <p className="text-xs text-[#6B7280]">Billed annually (${price * 12}/yr)</p>
                  )}
                  <p className="text-xs text-[#6B7280] mt-1.5">{plan.description}</p>
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={`w-full text-center px-4 py-2.5 rounded-md text-sm font-semibold transition-colors mb-6 ${
                    plan.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </a>
                {plan.name !== "Free" && (
                  <p className="text-center text-[11px] text-[#6B7280] -mt-3 mb-5">
                    14-day free trial · No credit card required
                  </p>
                )}

                {/* Divider */}
                <div className="border-t border-gray-100 mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {features.map((feature) => {
                    const included =
                      plan.name === "Free"
                        ? feature.free
                        : plan.name === "Starter"
                        ? feature.starter
                        : feature.pro;
                    return (
                      <li key={feature.label} className="flex items-center gap-2.5">
                        {included ? CHECK_ICON : DASH_ICON}
                        <span className={`text-sm ${included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
