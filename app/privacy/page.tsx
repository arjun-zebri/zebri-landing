import Link from "next/link";
import { Nav } from "@/components/ui/Nav";

export const metadata = {
  title: "Privacy Policy | Zebri",
  description: "How Zebri collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-[#6B7280]">Last updated: 10 March 2026</p>
          </div>

          <div className="prose prose-gray max-w-none text-sm leading-relaxed space-y-8">

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">1. Who we are</h2>
              <p className="text-[#6B7280]">
                Zebri is operated by Arjun Punekar ABN [pending registration], based in Victoria, Australia
                (&ldquo;Zebri&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). We provide a
                software-as-a-service platform for professional wedding MCs and celebrants
                at <strong>zebri.com.au</strong> and <strong>app.zebri.com.au</strong>.
              </p>
              <p className="text-[#6B7280] mt-3">
                This Privacy Policy explains how we collect, use, disclose, and protect your personal
                information when you use our services, and your rights in relation to that information.
                By using Zebri, you agree to the collection and use of information in accordance with
                this policy.
              </p>
              <p className="text-[#6B7280] mt-3">
                We are bound by the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
                Principles (APPs).
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">2. Information we collect</h2>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">2.1 Account information</h3>
              <p className="text-[#6B7280]">
                When you register for Zebri, we collect your name and email address. If you upgrade
                to a paid plan, we collect billing information (processed by Stripe — see Section 5).
                We do not store full payment card details on our systems.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">2.2 Content you create</h3>
              <p className="text-[#6B7280]">
                When you use Zebri, you create and store content including: couple records and contact
                details, run sheets and timelines, vendor information, notes, scripts, invoices, and
                files uploaded through the platform. This content belongs to you (see Section 9).
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">2.3 Usage data</h3>
              <p className="text-[#6B7280]">
                We collect information about how you interact with Zebri, including pages visited,
                features used, session duration, browser type, operating system, and IP address.
                This data is collected through PostHog (see Section 5) and used to understand how
                the product is being used and where it can be improved.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">2.4 Communications</h3>
              <p className="text-[#6B7280]">
                If you contact us by email or submit an enquiry through our website, we retain those
                communications and your contact details for the purpose of responding to you and
                maintaining records of our interactions.
              </p>

              <h3 className="text-sm font-semibold text-gray-800 mb-2 mt-4">2.5 Cookies</h3>
              <p className="text-[#6B7280]">
                We use cookies and similar tracking technologies for two purposes: (a) session management
                — to keep you logged in during a session; and (b) analytics — to understand how visitors
                use the site (via PostHog). We do not use advertising or tracking cookies. You can
                disable cookies in your browser settings; however, doing so may prevent you from using
                certain features of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">3. How we use your information</h2>
              <p className="text-[#6B7280]">We use the information we collect to:</p>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li>Provide, operate, and maintain the Zebri platform</li>
                <li>Process transactions and send related information, including purchase confirmations and invoices</li>
                <li>Send transactional emails (account creation, password reset, billing notifications)</li>
                <li>Respond to comments, questions, and support requests</li>
                <li>Analyse usage patterns to improve the product and fix bugs</li>
                <li>Send product updates and announcements (you may opt out at any time)</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-[#6B7280] mt-3">
                We do not sell, rent, or trade your personal information to third parties for marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">4. Legal basis for processing</h2>
              <p className="text-[#6B7280]">
                We process your personal information on the following grounds:
              </p>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li><strong>Contract:</strong> processing necessary to provide the service you have subscribed to</li>
                <li><strong>Legitimate interests:</strong> analytics and product improvement, where these do not override your rights</li>
                <li><strong>Legal obligation:</strong> where we are required to retain or disclose information by law</li>
                <li><strong>Consent:</strong> for optional marketing communications, which you may withdraw at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">5. Third-party processors</h2>
              <p className="text-[#6B7280]">
                We engage the following third-party service providers who may process your personal
                information on our behalf. Each is bound by a data processing agreement with us and
                their own privacy policy.
              </p>

              <div className="mt-4 space-y-4">
                <div className="border border-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Vercel</p>
                  <p className="text-[#6B7280]">
                    Hosting and infrastructure provider. Your data is stored and processed on Vercel&apos;s
                    infrastructure. Vercel is SOC 2 Type 2 certified.
                  </p>
                </div>
                <div className="border border-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Supabase</p>
                  <p className="text-[#6B7280]">
                    Database and authentication provider. User account data and content you create in
                    Zebri is stored in a Supabase-hosted PostgreSQL database.
                  </p>
                </div>
                <div className="border border-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Stripe</p>
                  <p className="text-[#6B7280]">
                    Payment processing. When you subscribe to a paid plan, your payment details are
                    collected and processed by Stripe. Zebri does not store card numbers or full payment
                    credentials. Stripe is PCI DSS Level 1 certified.
                  </p>
                </div>
                <div className="border border-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">Resend</p>
                  <p className="text-[#6B7280]">
                    Transactional email delivery. We use Resend to send account-related emails such as
                    signup confirmations and billing notifications. Your email address is transmitted
                    to Resend for this purpose.
                  </p>
                </div>
                <div className="border border-gray-100 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-1">PostHog</p>
                  <p className="text-[#6B7280]">
                    Product analytics. We use PostHog to understand how users interact with Zebri.
                    PostHog collects anonymised usage events and session data. We do not use PostHog
                    to build advertising profiles or share data with advertisers.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">6. Data retention</h2>
              <p className="text-[#6B7280]">
                We retain your personal information for as long as your account is active or as needed
                to provide you with our services. Specifically:
              </p>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li>Active account data is retained for the duration of your subscription</li>
                <li>Following cancellation or account closure, your data is retained for 30 days and then deleted, subject to any legal obligations to retain it longer</li>
                <li>Backup copies are purged within 90 days of the deletion of the primary data</li>
                <li>You may request deletion of your data at any time by contacting us (see Section 10)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">7. Data security</h2>
              <p className="text-[#6B7280]">
                We take reasonable technical and organisational measures to protect your personal
                information from loss, misuse, unauthorised access, disclosure, alteration, and
                destruction. These measures include TLS encryption in transit, encrypted storage
                at rest, and access controls limiting which personnel can access production data.
              </p>
              <p className="text-[#6B7280] mt-3">
                No method of transmission over the internet or method of electronic storage is 100%
                secure. While we strive to use commercially acceptable means to protect your personal
                information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">8. International transfers</h2>
              <p className="text-[#6B7280]">
                Our infrastructure providers may store or process data in data centres located outside
                Australia, including in the United States. Where this occurs, we take steps to ensure
                that appropriate safeguards are in place, including by using providers who participate
                in recognised certification schemes or who are subject to equivalent data protection
                laws.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">9. Your data remains yours</h2>
              <p className="text-[#6B7280]">
                All content you create in Zebri — couple records, timelines, scripts, invoices, and any
                other data — remains your property. We claim no ownership over it. We process it solely
                to provide the service to you. You may export your data at any time from within your
                account. If you close your account, you will have 30 days to export your data before
                it is deleted.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">10. Your rights</h2>
              <p className="text-[#6B7280]">
                Under the Australian Privacy Principles, you have the right to:
              </p>
              <ul className="list-disc pl-5 text-[#6B7280] space-y-1.5 mt-3">
                <li><strong>Access:</strong> request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> request correction of inaccurate or incomplete personal information</li>
                <li><strong>Deletion:</strong> request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-out:</strong> unsubscribe from marketing communications at any time by clicking &ldquo;unsubscribe&rdquo; in any email or contacting us directly</li>
                <li><strong>Complaints:</strong> lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at <strong>oaic.gov.au</strong> if you believe your privacy rights have been breached</li>
              </ul>
              <p className="text-[#6B7280] mt-3">
                To exercise any of these rights, contact us at <strong>arjun@zebri.com.au</strong>.
                We will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">11. Children</h2>
              <p className="text-[#6B7280]">
                The Zebri platform is not directed at, and is not intended for use by, persons under
                the age of 16. We do not knowingly collect personal information from anyone under 16.
                If you become aware that a child has provided us with personal information, please
                contact us and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">12. Changes to this policy</h2>
              <p className="text-[#6B7280]">
                We may update this Privacy Policy from time to time. Where changes are material, we
                will notify you by email at least 14 days before the changes take effect. Your
                continued use of Zebri after the effective date of the updated policy constitutes
                your acceptance of the changes. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">13. Governing law</h2>
              <p className="text-[#6B7280]">
                This Privacy Policy is governed by the laws of Victoria, Australia. Any disputes
                relating to privacy will be subject to the jurisdiction of the courts of Victoria.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-gray-900 mb-3">14. Contact us</h2>
              <p className="text-[#6B7280]">
                If you have any questions, concerns, or requests relating to this Privacy Policy or
                how we handle your personal information, please contact:
              </p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg text-[#6B7280]">
                <p><strong className="text-gray-900">Arjun Punekar</strong></p>
                <p>Zebri</p>
                <p>Victoria, Australia</p>
                <p>
                  Email:{" "}
                  <a href="mailto:arjun@zebri.com.au" className="text-gray-900 underline underline-offset-2">
                    arjun@zebri.com.au
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
