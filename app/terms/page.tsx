import type { Metadata } from 'next';

import { LegalPage } from '@/components/site/legal-page';

/**
 * Terms of Service, rewritten 2026-10-19 for the site as it is: a
 * waitlist today and the app once someone is let in. Written to the
 * audit of that date: no free plan, a 7-day trial, the founding offer
 * and waitlist in the contract, the unfair-contract-terms fixes (a
 * fault-based indemnity, a way out when we change something material,
 * no "without notice" changes), the consumer-guarantee limitation,
 * Stripe's connected-account terms, the Celebrant's own duties under the
 * Marriage Act, AI output, call recording consent and the Spam Act for
 * messages sent through Zebri, and teams. Plain English throughout;
 * "Celebrant" with a capital C.
 *
 * One contact address everywhere, the one the rest of the site uses.
 *
 * @module app/terms/page
 */

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply to the Zebri website, the waitlist and the Zebri platform.',
  alternates: { canonical: '/terms' },
};

const CONTACT = 'arjun@zebri.com.au';

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="19 October 2026">
      <section>
        <h2 id="about-these-terms">1. About these Terms</h2>
        <p>
          These Terms are an agreement between you and Knotify Pty Ltd (ABN 64 674 946 804),
          trading as Zebri (“Zebri”, “we”, “us”, “our”). They cover the Zebri website at
          zebri.com.au, the waitlist on it, and the Zebri platform at app.zebri.com.au
          (together, the “Service”).
        </p>
        <p>
          You agree to these Terms when you join the waitlist, create an account, or use the
          Service. If you use the Service for a business, you confirm you can agree to these
          Terms for that business. If you do not agree, please do not use the Service.
        </p>
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains how we handle personal information.
          It forms part of these Terms.
        </p>
      </section>

      <section>
        <h2 id="definitions">2. Definitions</h2>
        <ul>
          <li><strong>“Account”</strong> means the account you create to use the platform, including any team members you add to it.</li>
          <li><strong>“Plan”</strong> means the subscription you are on: Pro, Max or Enterprise.</li>
          <li><strong>“Founding member”</strong> means anyone we let in from the waitlist before the public launch.</li>
          <li><strong>“Content”</strong> means anything you or your team create, upload or store in the platform, including Couple Data.</li>
          <li><strong>“Couple Data”</strong> means personal information about your clients and the people connected to their event (couples, guests, suppliers, witnesses and family) that is entered into the platform, by you or by them.</li>
          <li><strong>“BDM”</strong> means the NSW Registry of Births, Deaths and Marriages or the equivalent registry in another state or territory.</li>
        </ul>
      </section>

      <section>
        <h2 id="the-waitlist-and-founding-members">3. The waitlist and founding members</h2>
        <p>
          Joining the waitlist gives us your email address and, if you picked one, the Plan
          you are interested in. Joining does not create an account and does not guarantee
          access by any date. We let MCs and Celebrants in a few at a time, in the order we
          think best, and we email you when your invite is ready.
        </p>
        <p>
          Everyone we let in before the public launch is a founding member. Founding members
          get:
        </p>
        <ul>
          <li>The Max Plan at the founding price shown on our pricing page when you joined, for the first 12 months of your paid subscription. After that, the standard Max price applies, or you can change Plan.</li>
          <li>A free onboarding call with us.</li>
          <li>A named contact at Zebri while you are a founding member and subscribed.</li>
          <li>A vote on what we build next. We run the votes and decide what to build; a vote is a say, not a promise.</li>
        </ul>
        <p>
          The onboarding call and named contact depend on our team being available, and we will
          offer them at sensible times. We may close the waitlist, change how we let people in,
          or end the founding offer for new sign-ups at any time. Nothing we change takes away a
          founding price you have already started paying.
        </p>
      </section>

      <section>
        <h2 id="your-account">4. Your account</h2>
        <p>To hold an account you must:</p>
        <ul>
          <li>Be at least 18 years old.</li>
          <li>Give us accurate details and keep them up to date.</li>
          <li>Keep your password private and tell us at {CONTACT} as soon as you think someone else has used your account.</li>
        </ul>
        <p>
          You are responsible for what is done through your account, except where it happens
          because of a security failure on our side. If you add team members, you are
          responsible for them: for the Content they enter, for making sure they follow these
          Terms, and for removing them when they leave your business. Team members get access
          to your Couple Data, so add only people who need it.
        </p>
      </section>

      <section>
        <h2 id="plans-trials-and-billing">5. Plans, trials and billing</h2>

        <h3>5.1 Plans and the free trial</h3>
        <p>
          There is no free Plan. Every Plan starts with a 7-day free trial once you are let in.
          We may ask for a payment method to start the trial; you will not be charged until the
          trial ends. If you cancel before it ends, you pay nothing. If you do not, your
          subscription starts and we charge your payment method.
        </p>
        <p>
          What each Plan includes is set out on our pricing page. We can add to and improve
          Plans at any time. If we remove something material from your Plan, we will give you
          at least 30 days’ notice, and you can cancel before the change takes effect and get a
          pro-rata refund of anything prepaid.
        </p>

        <h3>5.2 Prices</h3>
        <p>
          Prices are in Australian dollars and include GST. We can change prices with at least
          30 days’ notice by email. A price change does not apply to a founding price during
          the 12 months it is locked. If you do not accept a price change, you can cancel
          before it takes effect.
        </p>

        <h3>5.3 Renewal and payment</h3>
        <p>
          Subscriptions renew automatically each month, or each year on an annual Plan, until
          you cancel. By subscribing you authorise us to charge your payment method at each
          renewal. We will email you before an annual renewal. Payments are processed by Stripe;
          we do not store your card details.
        </p>

        <h3>5.4 Failed payments</h3>
        <p>
          If a payment fails, we will email you and try again. If it still has not gone through
          after 7 days, we may pause your account until it does. Your Content stays where it is
          while the account is paused.
        </p>

        <h3>5.5 Enterprise</h3>
        <p>
          Enterprise Plans are priced by team size and may be invoiced monthly or yearly. The
          invoice or order form sets the price and payment terms; these Terms cover everything
          else.
        </p>
      </section>

      <section>
        <h2 id="cancelling-and-refunds">6. Cancelling and refunds</h2>
        <p>
          You can cancel at any time from your settings. Cancellation takes effect at the end of
          the period you have paid for, and you keep access until then. We do not refund the
          current month. On an annual Plan, you can get a full refund within 14 days of your
          first annual payment if you ask for one; after that we refund only where these Terms
          or the Australian Consumer Law say we must.
        </p>
        <p>
          You can export your Content at any time while your account is open, and for 30 days
          after it closes. After 30 days we delete your Content, and it is gone from backups
          within 90 days, unless the law requires us to keep something longer.
        </p>
      </section>

      <section>
        <h2 id="payments-from-your-couples">7. Payments from your couples</h2>
        <p>
          When you take card payments through Zebri, the money goes to a Stripe account in your
          name connected to Zebri, and from there to your bank. Stripe’s fees apply at Stripe’s
          standard rates; Zebri takes no cut. By switching on payments you agree to the{' '}
          <a href="https://stripe.com/au/connect-account/legal" rel="noopener noreferrer" target="_blank">Stripe Connected Account Agreement</a>,
          which includes the Stripe Terms of Service.
        </p>
        <p>
          The booking is between you and your couple. We are not a party to it. Refunds,
          disputes and chargebacks between you and a couple are yours to resolve, and Stripe may
          take a disputed amount from your connected account under its own terms.
        </p>
      </section>

      <section>
        <h2 id="your-couples-data">8. Your couples’ data</h2>
        <p>
          You decide what Couple Data goes into Zebri and what it is used for. We hold and
          process it only to provide the Service to you, on your instructions. In privacy
          terms, you collect it and we process it for you.
        </p>
        <p>You agree that:</p>
        <ul>
          <li>You will collect Couple Data lawfully, tell couples how you use it, and get any consent the law requires. Couples and suppliers who fill in a Zebri link are told that Zebri holds their details for you.</li>
          <li>You will enter only what you need to run the event. Identity documents and other details needed for marriage paperwork are fine for that purpose. Do not store financial account numbers, health records or anything else sensitive that the event does not need.</li>
          <li>You will keep your login secure and give access only to your team.</li>
        </ul>
        <p>We agree that:</p>
        <ul>
          <li>We will not use Couple Data for anything other than providing the Service, and never to train AI models, ours or anyone else’s.</li>
          <li>We use the service providers named in our Privacy Policy to run Zebri, each under a contract that limits what they can do with the data.</li>
          <li>If we become aware of a data breach that affects your Couple Data, we will tell you without undue delay so you can meet your own obligations.</li>
          <li>When your account closes, we delete your Content as set out in section 6.</li>
        </ul>
      </section>

      <section>
        <h2 id="marriage-paperwork-and-bdm-lodgement">9. Marriage paperwork and BDM lodgement</h2>
        <p>
          Zebri collects your couple’s details, checks them against BDM’s published rules and,
          where your state is supported, lodges with BDM through your own registry login. Zebri
          is a tool for this. It does not take over your duties.
        </p>
        <ul>
          <li>You remain the authorised Celebrant. Everything the <em>Marriage Act 1961</em> (Cth) and the Marriage Regulations require of you stays with you: receiving the Notice of Intended Marriage in time, sighting identity documents, confirming the couple’s details, and lodging the right documents by the right date.</li>
          <li>Our checks are an aid. They do not guarantee BDM will accept a lodgement or that every field is correct. Review everything before you lodge.</li>
          <li>Your registry login is passed to BDM to lodge and is never stored by us. You are responsible for keeping that login within the registry’s own terms of use.</li>
          <li>We are not liable for a lodgement that is rejected, late or incorrect because of details you or your couple entered, a change in BDM’s rules, or an outage at BDM.</li>
        </ul>
      </section>

      <section>
        <h2 id="zebri-ai">10. Zebri AI</h2>
        <p>
          Zebri drafts replies, writes follow-ups, checks paperwork and updates records using AI.
          AI output can be wrong, out of date or miss something. You review everything before you
          send it or rely on it, and what you send is yours. We are not liable for loss caused by
          acting on AI output you did not check.
        </p>
        <p>
          ID documents and ID images are never sent to an AI model. Your Content is never used to
          train an AI model. Our AI provider is named in our Privacy Policy.
        </p>
      </section>

      <section>
        <h2 id="video-calls-recordings-and-messages">11. Video calls, recordings and messages</h2>
        <p>
          Where you use video calls in Zebri, the call may be transcribed so that notes, to-dos
          and record updates can be written for you. Before a call is recorded or transcribed,
          you must tell everyone on it and get their consent, as surveillance and listening device
          laws in your state require. Do not record a call where anyone objects.
        </p>
        <p>
          Where you send email, SMS or newsletters through Zebri, you are the sender. You must
          comply with the <em>Spam Act 2003</em> (Cth): send commercial messages only to people
          who have agreed to receive them, identify yourself, and honour unsubscribes. We may pause
          sending from your account if we receive complaints or see a pattern of unwanted messages.
        </p>
      </section>

      <section>
        <h2 id="acceptable-use">12. Acceptable use</h2>
        <p>You must not:</p>
        <ul>
          <li>Use the Service for anything unlawful.</li>
          <li>Try to access another user’s account or Content, or any part of our systems you are not meant to reach.</li>
          <li>Reverse engineer or copy the Service, or scrape it with automated tools.</li>
          <li>Upload anything illegal, defamatory, harassing, obscene or that infringes someone else’s rights.</li>
          <li>Resell or share access to the Service outside your own business without our written consent.</li>
          <li>Do anything that could damage, overload or interfere with the Service.</li>
        </ul>
      </section>

      <section>
        <h2 id="your-content-and-our-software">13. Your Content and our software</h2>
        <p>
          Your Content is yours. We claim no rights over it. You give us permission to store,
          process and display it only as needed to provide the Service to you and your team.
        </p>
        <p>
          The Service, including its software, design, text, images and logos, belongs to us or
          our licensors. While you are subscribed and keeping to these Terms, you may use it for
          your business. You may not copy, change, sell or lease any part of it. If you send us
          feedback or ideas, we can use them without owing you anything.
        </p>
        <p>
          Templates in Zebri for proposals, contracts and invoices are starting points, not legal
          advice. Check that a template suits your business before you use it.
        </p>
      </section>

      <section>
        <h2 id="availability-and-changes">14. Availability and changes</h2>
        <p>
          We aim for the Service to be available at all times but cannot promise it will never be
          interrupted. We will give notice of planned maintenance where we can. Some features
          depend on other companies (BDM, Stripe, Meta, Google, Microsoft, our hosting and AI
          providers), and we are not responsible for their outages.
        </p>
        <p>
          Features offered early, including everything before the public launch, may change as we
          build. If we withdraw a feature that is material to your Plan, section 5.1 applies. If we
          close the Service entirely, we will give at least 60 days’ notice, time to export your
          Content, and a pro-rata refund of anything prepaid.
        </p>
      </section>

      <section>
        <h2 id="consumer-guarantees-and-our-liability">15. Consumer guarantees and our liability</h2>
        <p>
          The Australian Consumer Law gives you guarantees that cannot be excluded, including that
          our services are provided with due care and skill and are fit for their purpose. Nothing
          in these Terms limits those guarantees. Where the law allows us to limit our liability
          for breaching a guarantee, we limit it to supplying the service again or paying the cost
          of having it supplied again.
        </p>
        <p>
          Apart from those guarantees, and to the extent the law allows:
        </p>
        <ul>
          <li>Our total liability to you for anything arising out of the Service or these Terms is limited to the fees you paid us in the 12 months before the claim, or AUD $100, whichever is greater.</li>
          <li>Neither of us is liable to the other for indirect or consequential loss, including lost profits or lost business, except for a breach of section 8 or 12, or for fraud or wilful misconduct.</li>
        </ul>
        <p>
          We are not liable for loss caused by things outside our reasonable control, including a
          failure at BDM, Stripe or another provider, or by inaccurate details entered by you or
          your couples.
        </p>
      </section>

      <section>
        <h2 id="your-responsibility-to-us">16. Your responsibility to us</h2>
        <p>
          You will cover any loss, damage or reasonable costs we incur because of a claim by
          someone else, to the extent it is caused by your breach of these Terms, your breach of
          the law, or Content you or your team entered that infringes their rights. We will tell you
          about any such claim promptly and let you take part in defending it.
        </p>
      </section>

      <section>
        <h2 id="ending-the-agreement">17. Ending the agreement</h2>
        <p>
          <strong>By you:</strong> cancel from your settings or email {CONTACT}. Section 6 says what
          happens next.
        </p>
        <p>
          <strong>By us:</strong> if you breach these Terms, we will tell you in writing and give you
          7 days to put it right before we suspend or close your account. We may suspend immediately,
          and tell you why as soon as we can, where there is illegal activity, a serious security
          risk, or harm to other users or third parties. If we close your account for a breach, we do
          not refund the current period; if we close it for any other reason, we refund anything
          prepaid pro rata.
        </p>
        <p>
          Sections 8, 13, 15, 16, 19 and 20, and anything else that by its nature should continue,
          survive the end of this agreement.
        </p>
      </section>

      <section>
        <h2 id="changes-to-these-terms">18. Changes to these Terms</h2>
        <p>
          We may update these Terms. For any change that affects your rights or what you pay, we
          will give at least 30 days’ notice by email and show the date it takes effect. If you do
          not accept the change, you can cancel before that date and we will refund anything
          prepaid pro rata. Changes that only fix wording, or that the law requires, take effect
          when we post them, and we will still tell you by email.
        </p>
      </section>

      <section>
        <h2 id="disputes-and-governing-law">19. Disputes and governing law</h2>
        <p>
          If something goes wrong, email {CONTACT} first and we will try to sort it out with you
          within 30 days. These Terms are governed by the laws of New South Wales, Australia, and
          the courts there have jurisdiction, without taking away any right you have to bring a
          claim in your own state or in a tribunal.
        </p>
      </section>

      <section>
        <h2 id="general">20. General</h2>
        <ul>
          <li><strong>Whole agreement:</strong> these Terms, our Privacy Policy and any Enterprise order form are the whole agreement between us.</li>
          <li><strong>Severability:</strong> if part of these Terms cannot be enforced, the rest still applies.</li>
          <li><strong>Waiver:</strong> if we do not enforce something straight away, we can still enforce it later.</li>
          <li><strong>Assignment:</strong> you may not transfer this agreement without our consent. We may transfer it to a buyer of our business, and will tell you if we do.</li>
          <li><strong>Notices:</strong> we send notices to the email on your account; you send them to {CONTACT}.</li>
          <li><strong>Relationship:</strong> nothing here makes us partners, agents or employer and employee.</li>
        </ul>
      </section>

      <section>
        <h2 id="contact-us">21. Contact us</h2>
        <div>
          <p><strong>Knotify Pty Ltd</strong>, trading as Zebri</p>
          <p>ABN 64 674 946 804</p>
          <p>Sydney, New South Wales, Australia</p>
          <p>
            Email: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
