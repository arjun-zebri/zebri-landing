"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { EarlyAccessButton } from "@/components/ui/EarlyAccessButton";
import { FOUNDING_DISCOUNT_PERCENT } from "@/lib/earlyAccess";

const CHECK_ICON = (
  <Check size={14} className="text-emerald-600 flex-shrink-0" />
);

type PlanKey = "starter" | "pro" | "max";

interface PlanFeature {
  label: string;
  starter: boolean;
  pro: boolean;
  max: boolean;
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
  { label: "Pulse (AI sales coach)", starter: false, pro: false, max: true },
  { label: "Talk to Zebri", starter: false, pro: false, max: true },
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
    popular: boolean;
  }[] = [
    {
      name: "Starter",
      key: "starter",
      price: { monthly: 0, annual: 0 },
      description: "For MCs getting started.",
      couplesLabel: "Up to 5 couples",
      popular: false,
    },
    {
      name: "Pro",
      key: "pro",
      price: { monthly: 49, annual: 39 },
      description: "For working MCs building their business.",
      couplesLabel: "Unlimited couples",
      popular: true,
    },
    {
      name: "Max",
      key: "max",
      price: { monthly: 79, annual: 63 },
      description: "For full-time MCs running a business.",
      couplesLabel: "Unlimited couples",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pt-20 md:pt-32 pb-12 md:pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-10">
          <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
            Pricing
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight">
              Simple, honest pricing.
            </h2>

            {/* Billing toggle, pill stacked below to keep the row on the card edge */}
            <div className="flex flex-col items-start sm:items-end gap-2 self-start sm:self-auto">
              <div className="flex items-center gap-3">
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
              </div>
              {/* Always rendered; opacity toggles so the row height never shifts */}
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

        {/* Cards: horizontal snap carousel on mobile, 3-up grid on desktop.
            pt-4 keeps the -top-3 "Most popular" badge inside the scroll clip. */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-4 -mx-4 px-4 pt-4 md:grid md:grid-cols-3 md:overflow-visible md:mx-0 md:px-0 md:pt-0">
          {plans.map((plan, planIndex) => {
            const price = annual ? plan.price.annual : plan.price.monthly;
            const foundingPrice = Math.round(
              price * (1 - FOUNDING_DISCOUNT_PERCENT / 100)
            );
            const prevPlan = planIndex > 0 ? plans[planIndex - 1] : undefined;
            // Only show what this tier adds over the one below it.
            const newFeatures = features.filter(
              (f) => f[plan.key] && (!prevPlan || !f[prevPlan.key])
            );
            const showCouples =
              !prevPlan || prevPlan.couplesLabel !== plan.couplesLabel;
            return (
              <div
                key={plan.name}
                className={`relative w-[85%] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none bg-white rounded-lg p-6 flex flex-col ${
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
                  <div className="flex items-baseline gap-1.5 mb-2">
                    {plan.price.monthly === 0 ? (
                      <span className="text-3xl font-semibold text-gray-900">
                        Free
                      </span>
                    ) : (
                      <>
                        <span className="text-xl font-normal text-gray-400 line-through">
                          ${price}
                        </span>
                        <span className="text-3xl font-semibold text-gray-900">
                          ${foundingPrice}
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
                <EarlyAccessButton
                  source={`pricing-${plan.key}`}
                  className="w-full text-center px-4 py-2 rounded-md text-sm font-semibold transition-colors mb-6 bg-[#A7F3D0] hover:bg-[#6ee7b7] text-gray-900 cursor-pointer"
                >
                  Get Early Access
                </EarlyAccessButton>
                <p className={`text-center text-[11px] -mt-3 mb-5 ${plan.price.monthly !== 0 ? "text-[#6B7280]" : "invisible"}`}>
                  Founding rate for your first 12 months
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-5" />

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {prevPlan && (
                    <li className="text-sm font-medium text-gray-900 mb-5">
                      Everything in {prevPlan.name}, plus
                    </li>
                  )}
                  {showCouples && (
                    <li className="flex items-center gap-2.5">
                      {CHECK_ICON}
                      <span className="text-sm text-gray-700">
                        {plan.couplesLabel}
                      </span>
                    </li>
                  )}
                  {newFeatures.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-start gap-2.5"
                    >
                      <span className="mt-1">{CHECK_ICON}</span>
                      <span className="text-sm text-gray-700">
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
