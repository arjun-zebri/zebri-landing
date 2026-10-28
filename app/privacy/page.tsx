import type { Metadata } from 'next';

import { LegalPage } from '@/components/site/legal-page';

/**
 * Privacy Policy, rewritten 2026-10-19 for the site as it is: the
 * waitlist on zebri.com.au today, the app once someone is let in.
 * Written to the audit of that date: the waitlist (an email and a plan,
 * sent to the founder's inbox), analytics on every visitor, the people
 * who are not our customers (couples, guests, suppliers), marriage
 * paperwork, AI and automated decisions (the Privacy Act's new APP 1
 * duty from 10 December 2026), call transcripts, every provider named
 * with its country, marketing consent, breach notification, a complaints
 * process, and the stronger promises the site makes (never trains AI,
 * ID images never stored) stated here where a regulator will look. The
 * GDPR "legal basis" section is gone: Zebri serves Australia.
 *
 * Video calls are Zebri's own (founder, 2026-10-19), so no video provider
 * is listed. The SMS provider is not yet chosen: the sentence in section
 * 9 says it will be named before SMS is switched on. Replace it with the
 * provider's name and country when it is.
 *
 * The Google Calendar paragraph in section 9 (2026-10-28) is what Google's
 * OAuth verification reviewers look for: the scopes in plain words, the
 * narrow use, no humans reading it, and the Limited Use sentence, which
 * they match close to word for word. If Zebri starts using calendar data
 * for anything else (AI included), change this paragraph first.
 *
 * @module app/privacy/page
 */

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Zebri collects, uses, stores and protects personal information.',
  alternates: { canonical: '/privacy' },
};

const CONTACT = 'arjun@zebri.com.au';

/** A company that handles data for Zebri. */
interface Processor {
  name: string;
  does: string;
  where: string;
}

const PROCESSORS: Processor[] = [
  { name: 'Supabase', does: 'Database, file storage and login for the platform. Your couples’ records and files live here.', where: 'Sydney, Australia' },
  { name: 'Vercel', does: 'Hosts the website and runs the platform’s application code.', where: 'United States' },
  { name: 'Anthropic', does: 'The AI model behind Zebri AI. Receives the text it drafts from or checks (bookings, notes, messages, call transcripts), never ID documents or images. Does not use it to train models.', where: 'United States' },
  { name: 'Stripe', does: 'Card payments: your subscription, and payments from your couples through your connected Stripe account. Holds card details; we do not.', where: 'United States, with Australian operations' },
  { name: 'Resend', does: 'Sends email for us: the waitlist sign-up to our inbox, your invite, and account and billing emails.', where: 'United States' },
  { name: 'PostHog', does: 'Analytics: which pages are visited and which features are used, with your IP address and browser details.', where: 'United States' },
  { name: 'Meta', does: 'Instagram. If you connect your Instagram account, Zebri reads and replies to your DMs through Meta’s platform.', where: 'United States' },
  { name: 'Google and Microsoft', does: 'Calendar sync. If you connect Google Calendar or Outlook, events pass between Zebri and that calendar.', where: 'United States' },
  { name: 'NSW Registry of Births, Deaths and Marriages', does: 'Receives the marriage documents you lodge through Zebri, using your own registry login.', where: 'Australia' },
];

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="28 October 2026">
      <section>
        <h2 id="who-we-are-and-what-this-covers">1. Who we are and what this covers</h2>
        <p>
          Zebri is run by Knotify Pty Ltd (ABN 64 674 946 804), based in Sydney, New South Wales
          (“Zebri”, “we”, “us”, “our”). We make software for professional wedding MCs and
          Celebrants: the website at zebri.com.au, the waitlist on it, and the platform at
          app.zebri.com.au.
        </p>
        <p>
          This policy explains what personal information we collect, why, who we share it with,
          where it goes, and how you can see, correct or complain about it. We handle personal
          information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian
          Privacy Principles.
        </p>
        <p>
          It covers three groups of people: visitors to the website and the waitlist; MCs and
          Celebrants who hold an account; and the couples, guests and suppliers whose details an
          MC or Celebrant keeps in Zebri. Section 4 is for that last group.
        </p>
      </section>

      <section>
        <h2 id="the-website-and-the-waitlist">2. The website and the waitlist</h2>
        <p>
          When you join the waitlist we collect your email address and, if you picked one on the
          pricing page, the plan you are interested in. Each sign-up is emailed to the founder’s
          Zebri mailbox through Resend, and that mailbox is the waitlist. We use it to send your
          invite and, if you have agreed, news about Zebri before you are let in. We keep waitlist
          sign-ups until you are let in, you ask us to remove you, or the waitlist closes.
        </p>
        <p>
          Every visitor to the website is measured with PostHog: pages visited, the buttons used,
          browser and device type, and IP address. This is tied to a random visitor ID, not to
          your name, unless you later create an account. We do not use advertising cookies and we
          do not share visitor data with advertisers. See section 10.
        </p>
      </section>

      <section>
        <h2 id="if-you-hold-an-account">3. If you hold an account</h2>
        <ul>
          <li><strong>Account details:</strong> your name, email, business name, phone number, your Celebrant registration details if you lodge marriages, and your password (stored hashed).</li>
          <li><strong>Billing:</strong> your plan and payment history. Card details are held by Stripe, not by us.</li>
          <li><strong>Content you create:</strong> couple records, run sheets, scripts, proposals, contracts, invoices, questionnaires, notes, files and messages.</li>
          <li><strong>Connected services:</strong> if you connect Instagram, a calendar, or a Stripe account, the tokens that let Zebri act on your behalf, and the messages or events that pass through.</li>
          <li><strong>Usage:</strong> which features you use and when, through PostHog, linked to your account so we can support you and improve the product.</li>
          <li><strong>Support and email:</strong> what you send us, so we can reply and keep a record.</li>
        </ul>
      </section>

      <section>
        <h2 id="couples-guests-and-suppliers">4. Couples, guests and suppliers</h2>
        <p>
          Most of the personal information in Zebri is about people who are not our customers:
          the couples an MC or Celebrant works with, their guests, witnesses, family and
          suppliers. That information is collected by the MC or Celebrant, who decides what is
          kept and why. We hold it for them and process it only on their instructions.
        </p>
        <p>
          It can include names, contact details, the event date and venue, a run sheet, questionnaire
          answers, pronunciation notes, payment status, and for marriages the details in section 5.
          Some of it comes from the MC or Celebrant directly, and some from the couple or a supplier
          filling in a Zebri link on their phone. When you fill in a link, the page tells you whose
          form it is and that Zebri holds the answers for them.
        </p>
        <p>
          If you are a couple, guest or supplier and want to see, correct or delete what is held
          about you, ask the MC or Celebrant first, since they control it. You can also contact us
          at {CONTACT} and we will help, with their involvement where we need it.
        </p>
      </section>

      <section>
        <h2 id="marriage-paperwork">5. Marriage paperwork</h2>
        <p>
          For Celebrants, Zebri collects the details BDM requires for a Notice of Intended
          Marriage and related documents: full names, dates and places of birth, addresses,
          parents’ names, previous marriages, and identity document details. The couple enters
          these on their phone and Zebri checks them against BDM’s published rules.
        </p>
        <ul>
          <li>Identity document images are shown to the Celebrant to sight and are never stored by Zebri.</li>
          <li>Identity documents and images are never sent to an AI model.</li>
          <li>Lodgement uses the Celebrant’s own registry login. It is passed to BDM for that lodgement and never stored by us.</li>
          <li>Once lodged, the documents are held by BDM under its own privacy rules.</li>
        </ul>
      </section>

      <section>
        <h2 id="zebri-ai-and-automated-decisions">6. Zebri AI and automated decisions</h2>
        <p>
          Zebri AI drafts replies, writes follow-ups, checks paperwork and updates records. To do
          that, the relevant text (an enquiry, a booking’s details, your notes, a call transcript)
          is sent to Anthropic’s AI service, which returns the draft or check. Anthropic does not
          use it to train its models. We never use your content, or your couples’ content, to
          train any AI model.
        </p>
        <p>
          Zebri does not make decisions about you or your couples without a person involved. The
          AI suggests; the MC or Celebrant decides what to send, lodge or change. The one automated
          process is a paperwork check that flags an answer as not matching BDM’s rules; it can be
          overridden by the Celebrant. We will update this section if that changes.
        </p>
      </section>

      <section>
        <h2 id="video-calls-recordings-and-messages">7. Video calls, recordings and messages</h2>
        <p>
          Video calls are built into Zebri and run in your browser; no outside video service
          carries them. A call may be transcribed so that notes, to-dos and record updates can be
          written for the MC or Celebrant. The transcript is stored on the couple’s record and is
          sent to Anthropic to write those notes. The MC or Celebrant must
          tell everyone on the call and get their consent before it is recorded or transcribed.
        </p>
        <p>
          Emails, SMS and newsletters sent through Zebri are sent by the MC or Celebrant, under
          their own name, and are stored on the couple’s record so there is one history of the
          conversation.
        </p>
      </section>

      <section>
        <h2 id="how-we-use-personal-information">8. How we use personal information</h2>
        <ul>
          <li>To run the waitlist and send invites.</li>
          <li>To provide the platform: store your content, send your documents and messages, take payments, lodge paperwork.</li>
          <li>To send account emails: sign-in, receipts, renewals, security notices.</li>
          <li>To answer support requests.</li>
          <li>To see how the product is used and improve it.</li>
          <li>To tell you about Zebri, where you have agreed (section 11).</li>
          <li>To meet our legal obligations and protect against misuse.</li>
        </ul>
        <p>We do not sell personal information, and we do not share it with advertisers.</p>
      </section>

      <section>
        <h2 id="who-we-share-it-with">9. Who we share it with</h2>
        <p>
          We share personal information only with the companies that help us run Zebri, each under
          a contract that limits what they can do with it, and with authorities where the law
          requires. They are:
        </p>
        <ul>
          {PROCESSORS.map((p) => (
            <li key={p.name}>
              <strong>{p.name}</strong> ({p.where}): {p.does}
            </li>
          ))}
        </ul>
        <p>
          Video calls run in Zebri itself, in your browser. No outside video service is involved;
          only the transcript goes to Anthropic, as section 7 explains. SMS will run through a
          third-party provider, and we will name it here before SMS is switched on for any account.
        </p>
        <p id="google-calendar">
          If you connect Google Calendar, Zebri asks Google for permission to see and edit the
          events on your calendars and to see when you are free or busy. Zebri uses that access
          only to put your bookings in your calendar, keep them in sync and check your
          availability. We do not sell this data, use it for advertising or use it to train any AI
          model, and no one at Zebri reads it unless you ask us to for support, it is needed for
          security, or the law requires it. You can disconnect Google Calendar at any time in
          Zebri’s settings or in your Google Account; we then delete the access Google gave us and
          stop syncing. Zebri’s use of information received from Google APIs adheres to the{' '}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
        <p>
          Your couples’ records and files are stored in Australia (Supabase, Sydney). The other
          providers are overseas, mostly in the United States, so some personal information is
          disclosed there when it is processed: email addresses to Resend, analytics to PostHog,
          AI text to Anthropic, payments to Stripe, and application traffic through Vercel. Each
          is bound by contract to protect it. If Zebri is sold, personal information would pass to
          the buyer under this policy, and we would tell you.
        </p>
      </section>

      <section>
        <h2 id="cookies-and-analytics">10. Cookies and analytics</h2>
        <p>
          We use cookies for two things: to keep you signed in to the platform, and for PostHog
          analytics on the website and platform. We do not use advertising or cross-site tracking
          cookies. You can block cookies in your browser; the website still works, though you
          cannot stay signed in to the platform without them. You can also ask us to exclude you
          from analytics by emailing {CONTACT}.
        </p>
      </section>

      <section>
        <h2 id="emails-from-us">11. Emails from us</h2>
        <p>
          We send emails you need: your invite, receipts, renewals and security notices. We send
          news about Zebri only to people who have agreed to receive it, which you do when you join
          the waitlist or create an account. Every such email has an unsubscribe link, and we act on
          it within 5 business days. Unsubscribing does not stop the emails your account needs.
        </p>
      </section>

      <section>
        <h2 id="security-and-data-breaches">12. Security and data breaches</h2>
        <p>
          Data is encrypted in transit and at rest. Every account is walled off in the database
          itself, so no Zebri user can read another’s couples. Access to production systems is
          limited to the people who need it. No system is perfectly secure, and we cannot promise
          there will never be a breach.
        </p>
        <p>
          If a breach happens that is likely to cause serious harm, we will notify the people
          affected and the Office of the Australian Information Commissioner as the Notifiable
          Data Breaches scheme requires. We will also tell any MC or Celebrant whose couples’ data
          is affected without undue delay, so they can meet their own obligations.
        </p>
      </section>

      <section>
        <h2 id="how-long-we-keep-it">13. How long we keep it</h2>
        <ul>
          <li><strong>Waitlist:</strong> until you are let in, ask to be removed, or the waitlist closes.</li>
          <li><strong>Accounts:</strong> while your account is open, then deleted within 30 days of it closing and gone from backups within 90 days.</li>
          <li><strong>Couples’ data:</strong> as above, with the account it belongs to, or sooner when the MC or Celebrant deletes a record.</li>
          <li><strong>Billing records:</strong> 7 years, as tax law requires.</li>
          <li><strong>Analytics:</strong> up to 12 months.</li>
          <li><strong>Support email:</strong> up to 2 years after the last message.</li>
        </ul>
      </section>

      <section>
        <h2 id="access-correction-and-complaints">14. Access, correction and complaints</h2>
        <p>
          You can ask us for a copy of the personal information we hold about you, ask us to
          correct it, or ask us to delete it, by emailing {CONTACT}. We will reply within 30 days.
          We may need to confirm who you are first. If we cannot do what you ask (for example, a
          billing record we must keep), we will say why. Our{' '}
          <a href="/data-deletion">Data Deletion</a> page sets out the deletion process step by
          step, including for information we receive through Instagram.
        </p>
        <p>
          If you think we have mishandled your information, email {CONTACT} with “Privacy
          complaint” in the subject. We will acknowledge it within 5 business days, look into it,
          and give you a written answer within 30 days. If you are not satisfied, you can complain
          to the Office of the Australian Information Commissioner at{' '}
          <a href="https://www.oaic.gov.au" rel="noopener noreferrer" target="_blank">oaic.gov.au</a>.
        </p>
      </section>

      <section>
        <h2 id="children">15. Children</h2>
        <p>
          Zebri accounts are for people 18 and over, and the waitlist is for working MCs and
          Celebrants. Details of people under 18 can appear in a couple’s record, for example a
          child in the bridal party or a guest, entered by the MC or Celebrant for the event. We do
          not knowingly collect information from a child directly. If you think we have, email{' '}
          {CONTACT} and we will delete it.
        </p>
      </section>

      <section>
        <h2 id="changes-to-this-policy">16. Changes to this policy</h2>
        <p>
          We will update this policy as Zebri changes, and show the date at the top. For a change
          that affects how we use your information, we will email account holders and the waitlist
          at least 14 days before it takes effect.
        </p>
      </section>

      <section>
        <h2 id="contact-us">17. Contact us</h2>
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
