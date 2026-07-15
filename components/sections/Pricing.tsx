"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";

const CHECK_ICON = (
  <Check size={14} className="text-emerald-600 flex-shrink-0" />
);

const DASH_ICON = <X size={14} className="text-gray-300 flex-shrink-0" />;

type PlanKey = "starter" | "pro" | "max";

interface PlanFeature {
  label: string;
  starter: boolean;
  pro: boolean;
  max: boolean;
  comingSoon?: boolean;
}

const features: PlanFeature[] = [
  { label: "CRM basics", starter: true, pro: true, max: true },
  { label: "Contracts & e-signatures", starter: true, pro: true, max: true },
  { label: "Payments & invoicing", starter: true, pro: true, max: true },
  { label: "Client portal", starter: false, pro: true, max: true },
  { label: "Questionnaires", starter: false, pro: true, max: true },
  {
    label: "Templates (emails, packages, invoices & timelines)",
    starter: false,
    pro: true,
    max: true,
  },
  { label: "Automations", starter: false, pro: false, max: true },
  { label: "SMS", starter: false, pro: false, max: true },
  {
    label: "Pulse (AI sales coach)",
    starter: false,
    pro: false,
    max: true,
    comingSoon: true,
  },
  {
    label: "Integrations (calendar scheduling, email, NOIM submission & more)",
    starter: false,
    pro: false,
    max: true,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans: {
    name: string;
    key: PlanKey;
    price: { monthly: number; annual: number };
    description: string;
    couplesLabel: string;
    cta: string;
    ctaHref: string;
    popular: boolean;
  }[] = [
    {
      name: "Starter",
      key: "starter",
      price: { monthly: 0, annual: 0 },
      description: "For MCs getting started.",
      couplesLabel: "Up to 5 couples",
      cta: "Get Started Free",
      ctaHref: "https://app.zebri.com.au/signup",
      popular: false,
    },
    {
      name: "Pro",
      key: "pro",
      price: { monthly: 49, annual: 39 },
      description: "For working MCs building their business.",
      couplesLabel: "Unlimited couples",
      cta: "Get Started",
      ctaHref: "https://app.zebri.com.au/signup",
      popular: true,
    },
    {
      name: "Max",
      key: "max",
      price: { monthly: 79, annual: 63 },
      description: "For full-time MCs running a business.",
      couplesLabel: "Unlimited couples",
      cta: "Get Started",
      ctaHref: "https://app.zebri.com.au/signup",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pt-20 md:pt-32 pb-12 md:pb-16 px-4">
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

            {/* Billing toggle, fixed height to prevent layout shift */}
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span
                className={`text-sm transition-colors ${
                  !annual ? "text-gray-900 font-semibold" : "text-[#6B7280]"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  annual ? "bg-gray-900" : "bg-gray-200"
                }`}
                aria-label="Toggle annual billing"
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    annual ? "translate-x-4.5" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span
                className={`text-sm transition-colors ${
                  annual ? "text-gray-900 font-semibold" : "text-[#6B7280]"
                }`}
              >
                Annual
              </span>
              {/* Reserve space to prevent layout shift */}
              <span
                className={`text-[10px] font-semibold text-emerald-700 bg-[#A7F3D0]/30 border border-[#A7F3D0] px-2 py-0.5 rounded-full transition-opacity ${
                  annual ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Cards: single column on mobile, 3-up on desktop */}
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
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.price.monthly === 0 ? (
                      <span className="text-3xl font-semibold text-gray-900">
                        Free
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl font-semibold text-gray-900">
                          ${price}
                        </span>
                        <span className="text-sm text-[#6B7280]">/mo</span>
                        {annual && (
                          <span className="text-xs text-[#6B7280] ml-1">
                            · billed annually
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-xs text-[#6B7280] mt-1.5">
                    {plan.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className="w-full text-center px-4 py-2 rounded-md text-sm font-semibold transition-colors mb-6 bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900"
                >
                  {plan.cta}
                </a>
                <p className={`text-center text-[11px] -mt-3 mb-5 ${plan.price.monthly !== 0 ? "text-[#6B7280]" : "invisible"}`}>
                  14-day free trial · No credit card required
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  <li className="flex items-center gap-2.5">
                    {CHECK_ICON}
                    <span className="text-sm text-gray-700">
                      {plan.couplesLabel}
                    </span>
                  </li>
                  {features.map((feature) => {
                    const included = feature[plan.key];
                    return (
                      <li
                        key={feature.label}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-1">
                          {included ? CHECK_ICON : DASH_ICON}
                        </span>
                        <span
                          className={`text-sm ${
                            included ? "text-gray-700" : "text-gray-400"
                          }`}
                        >
                          {feature.label}
                          {included && feature.comingSoon && (
                            <span className="ml-1.5 text-[10px] font-medium text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full align-middle">
                              Soon
                            </span>
                          )}
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
