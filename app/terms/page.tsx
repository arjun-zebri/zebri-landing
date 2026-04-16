import Link from "next/link";
import { Nav } from "@/components/ui/Nav";

export const metadata = {
  title: "Terms of Service | Zebri",
  description: "The terms and conditions governing your use of the Zebri platform.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
          <div className="mb-12">
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-[2rem] md:text-[2.5rem] font-semibold text-gray-900 leading-tight tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-sm text-[#6B7280]">Last updated: 10 March 2026</p>
          </div>

          <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-8">

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">1. Introduction and acceptance</h2>
              <p className="text-[#6B7280]">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between
                you (&ldquo;User&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and Knotify Pty Ltd (ABN 64 674 946 804)
                trading as Zebri (&ldquo;Zebri&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;), governing your access to and use of the Zebri software platform
                at <strong>zebri.com.au</strong> and <strong>app.zebri.com.au</strong> (the
                &ldquo;Service&rdquo;).
              </p>
              <p className="text-[#6B7280] mt-3">
                By creating an account or using the Service, you confirm that you have read,
                understood, and agree to be bound by these Terms. If you do not agree, you must
                not use the Service. If you are using the Service on behalf of a business or
                organisation, you represent that you have authority to bind that entity to these
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">2. Definitions</h2>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-2 mt-3">
                <li><strong>&ldquo;Service&rdquo;</strong> means the Zebri software platform, including all features, functionality, and content provided through it</li>
                <li><strong>&ldquo;Account&rdquo;</strong> means the account you create to access the Service</li>
                <li><strong>&ldquo;Subscription&rdquo;</strong> means the plan (Free, Pro, or Max) under which you access the Service</li>
                <li><strong>&ldquo;Content&rdquo;</strong> means any data, text, files, images, or other materials you create, upload, or store in the Service</li>
                <li><strong>&ldquo;Couple Data&rdquo;</strong> means personal information about your clients (couples and related parties) that you enter into the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">3. Account registration and eligibility</h2>
              <p className="text-[#6B7280]">
                To access the Service, you must register for an account. You must:
              </p>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li>Be at least 18 years of age</li>
                <li>Provide accurate, complete, and current registration information</li>
                <li>Maintain the security of your password and accept all risks of unauthorised access to your account</li>
                <li>Promptly notify us of any unauthorised use of your account at hello@zebri.com.au</li>
                <li>Not create more than one account per person without our express written consent</li>
              </ul>
              <p className="text-[#6B7280] mt-3">
                You are responsible for all activity that occurs under your account, whether or not
                you authorised it.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">4. Subscriptions and billing</h2>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">4.1 Plans</h3>
              <p className="text-[#6B7280]">
                Zebri offers a Free plan and paid plans (Pro and Max). Features available under
                each plan are described on our pricing page at zebri.com.au/&#35;pricing. We reserve
                the right to modify plan features with 30 days&apos; notice.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">4.2 Free trial</h3>
              <p className="text-[#6B7280]">
                Paid plans include a 14-day free trial. No credit card is required to begin the
                trial. At the end of the trial period, you will be prompted to enter payment details
                to continue. If you do not provide payment details, your account will revert to the
                Free plan and features exclusive to paid plans will be disabled.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">4.3 Pricing and currency</h3>
              <p className="text-[#6B7280]">
                All prices are in Australian Dollars (AUD) and are inclusive of GST where applicable.
                Prices are subject to change. We will provide at least 30 days&apos; notice of any price
                increase to existing subscribers.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">4.4 Automatic renewal</h3>
              <p className="text-[#6B7280]">
                Subscriptions automatically renew at the end of each billing period (monthly or annual)
                unless cancelled before the renewal date. By subscribing, you authorise us to charge
                your nominated payment method at each renewal.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">4.5 Refunds</h3>
              <p className="text-[#6B7280]">
                Monthly subscriptions: no refunds are provided for the current billing period.
                Annual subscriptions: a full refund is available within 14 days of the start of
                an annual subscription if you have not materially used the Service during that
                period. After 14 days, no refunds are provided for annual subscriptions. We may,
                at our discretion, provide a pro-rata refund in exceptional circumstances.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">4.6 Failed payments</h3>
              <p className="text-[#6B7280]">
                If a payment fails, we will notify you by email. If payment is not received within
                7 days, we may suspend access to paid features. Access will be restored promptly
                upon successful payment.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">5. Cancellation</h2>
              <p className="text-[#6B7280]">
                You may cancel your subscription at any time from your account settings. Cancellation
                takes effect at the end of your current billing period; you will retain access to paid
                features until that date. No partial refunds are provided for unused time in the current
                period.
              </p>
              <p className="text-[#6B7280] mt-3">
                Following cancellation, your account will revert to the Free plan. Your Content will
                remain accessible for 30 days, during which you may export it. After 30 days, we may
                permanently delete your Content.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">6. Acceptable use</h2>
              <p className="text-[#6B7280]">You agree not to:</p>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li>Use the Service for any purpose that is unlawful or prohibited by these Terms</li>
                <li>Attempt to gain unauthorised access to any part of the Service or its related systems</li>
                <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Service</li>
                <li>Scrape, crawl, or systematically extract data from the Service by automated means</li>
                <li>Use the Free plan as a substitute for a paid plan in a way that exceeds the intended scope of the Free plan</li>
                <li>Upload or store content that is illegal, defamatory, harassing, obscene, or that infringes the intellectual property rights of any third party</li>
                <li>Use the Service to store or process sensitive personal information such as financial account numbers, government-issued identification numbers, or health records beyond what is reasonably necessary for managing wedding events</li>
                <li>Resell, sublicense, or otherwise commercialise access to the Service without our written consent</li>
                <li>Use the Service in any manner that could damage, disable, overburden, or impair it</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">7. Your content and data</h2>
              <p className="text-[#6B7280]">
                You retain full ownership of all Content you create or upload in the Service. We claim
                no intellectual property rights over your Content.
              </p>
              <p className="text-[#6B7280] mt-3">
                By using the Service, you grant Zebri a limited, non-exclusive, royalty-free licence
                to store, process, and display your Content solely for the purpose of providing the
                Service to you. We will not use your Content for any other purpose, including
                training machine learning models, without your explicit consent.
              </p>
              <p className="text-[#6B7280] mt-3">
                You are responsible for the legality and accuracy of any personal information about
                third parties (such as your clients and their guests) that you enter into the Service.
                You represent that you have obtained any necessary consents from those individuals to
                store their information in the platform.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">8. Intellectual property</h2>
              <p className="text-[#6B7280]">
                The Service, including all software, design, text, graphics, logos, and other content
                created by us, is owned by or licensed to Zebri and is protected by Australian and
                international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-[#6B7280] mt-3">
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
                non-transferable, revocable licence to access and use the Service for your personal
                professional use. This licence does not include the right to copy, modify, distribute,
                sell, or lease any part of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">9. Service availability</h2>
              <p className="text-[#6B7280]">
                We aim to maintain high availability of the Service and target 99.9% uptime, but we
                do not guarantee uninterrupted or error-free access. The Service may be temporarily
                unavailable due to maintenance, technical failures, or events outside our control.
                We will endeavour to provide advance notice of planned maintenance.
              </p>
              <p className="text-[#6B7280] mt-3">
                We reserve the right to modify, suspend, or discontinue any part of the Service at
                any time. Where we discontinue the Service entirely, we will provide at least 60 days&apos;
                notice and a pro-rata refund for any unused prepaid subscription period.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">10. Disclaimer of warranties</h2>
              <p className="text-[#6B7280]">
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranty of any kind,
                express or implied, including but not limited to warranties of merchantability, fitness
                for a particular purpose, non-infringement, or that the Service will be uninterrupted,
                secure, or error-free.
              </p>
              <p className="text-[#6B7280] mt-3">
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right,
                or remedy that you have under the <em>Competition and Consumer Act 2010</em> (Cth) or
                any other applicable law that cannot be excluded, restricted, or modified by contract.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">11. Limitation of liability</h2>
              <p className="text-[#6B7280]">
                To the maximum extent permitted by applicable law, Zebri&apos;s total liability to you
                for any claim arising out of or relating to these Terms or the Service — whether in
                contract, tort (including negligence), statute, or otherwise — is limited to the
                total fees paid by you to Zebri in the 12 months preceding the event giving rise to
                the claim, or AUD $100, whichever is greater.
              </p>
              <p className="text-[#6B7280] mt-3">
                In no event will Zebri be liable for any indirect, incidental, special, consequential,
                or punitive damages, including loss of profits, loss of data, loss of business, or
                loss of goodwill, even if advised of the possibility of such damages.
              </p>
              <p className="text-[#6B7280] mt-3">
                These limitations apply to the fullest extent permitted by law and reflect the
                allocation of risk between the parties.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">12. Indemnification</h2>
              <p className="text-[#6B7280]">
                You agree to indemnify, defend, and hold harmless Zebri and its officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses,
                costs, and expenses (including reasonable legal fees) arising out of or relating to:
                (a) your use of the Service in violation of these Terms; (b) Content you upload or
                store in the Service; (c) your violation of any applicable law; or (d) your
                infringement of any third-party rights.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">13. Termination</h2>
              <p className="text-[#6B7280]">
                <strong>By you:</strong> You may close your account at any time by contacting us at
                hello@zebri.com.au or using the account closure option in your settings.
              </p>
              <p className="text-[#6B7280] mt-3">
                <strong>By us:</strong> We may suspend or terminate your access to the Service with
                reasonable notice if you breach these Terms and fail to remedy the breach within 7
                days of written notice. We may terminate your access immediately, without notice,
                in cases of serious breach, including but not limited to: illegal activity, serious
                security threats, or conduct that harms other users or third parties.
              </p>
              <p className="text-[#6B7280] mt-3">
                Upon termination, your right to use the Service ceases immediately. Sections of
                these Terms that by their nature should survive termination (including Sections 7,
                8, 11, 12, and 14) will continue to apply.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">14. Governing law and disputes</h2>
              <p className="text-[#6B7280]">
                These Terms are governed by the laws of New South Wales, Australia, without regard to its
                conflict of law provisions. Any dispute arising out of or relating to these Terms
                or the Service will be subject to the exclusive jurisdiction of the courts of
                New South Wales, Australia.
              </p>
              <p className="text-[#6B7280] mt-3">
                Before initiating formal legal proceedings, you agree to attempt to resolve any
                dispute informally by contacting us at hello@zebri.com.au. We will use reasonable
                efforts to resolve the dispute within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">15. Changes to these Terms</h2>
              <p className="text-[#6B7280]">
                We may update these Terms from time to time. For material changes, we will provide at
                least 30 days&apos; notice by email or by posting a prominent notice on the Service.
                Non-material changes (such as clarifications) may be made without notice and will be
                effective upon posting. Your continued use of the Service after the effective date of
                updated Terms constitutes your acceptance of those Terms.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">16. General</h2>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li><strong>Entire agreement:</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and Zebri regarding the Service</li>
                <li><strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force</li>
                <li><strong>Waiver:</strong> Our failure to enforce any provision of these Terms will not constitute a waiver of our right to enforce it in the future</li>
                <li><strong>Assignment:</strong> You may not assign your rights under these Terms without our written consent. We may assign our rights to an acquirer of our business</li>
                <li><strong>No partnership:</strong> Nothing in these Terms creates any partnership, joint venture, agency, or employment relationship between you and Zebri</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">17. Contact us</h2>
              <p className="text-[#6B7280]">
                If you have any questions about these Terms, please contact:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg text-[#6B7280]">
                <p><strong className="text-gray-900">Knotify Pty Ltd</strong></p>
                <p>ABN 64 674 946 804</p>
                <p>New South Wales, Australia</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@zebri.com.au" className="text-gray-900 underline underline-offset-2">
                    hello@zebri.com.au
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-sm text-[#6B7280] hover:text-gray-900 transition-colors">
            &larr; Back to Zebri
          </Link>
          <p className="text-xs text-[#6B7280]">&copy; 2026 Zebri</p>
        </div>
      </footer>
    </>
  );
}
