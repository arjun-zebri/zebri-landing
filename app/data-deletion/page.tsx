import type { Metadata } from 'next';

import { LegalPage } from '@/components/site/legal-page';

/**
 * Data Deletion, written 2026-10-25 (V2-7). Two jobs. First, the Privacy
 * Act: APP 11.2 (destroy or de-identify what is no longer needed), APP
 * 12 and 13 (access and correction) and the Privacy Policy's own promise
 * in section 14 that anyone can ask us to delete what we hold. Second,
 * Meta: a developer app that reads Instagram messages must publish a
 * "User Data Deletion" URL that tells people how to have the data the
 * app obtained from Meta deleted. Meta's reviewers read this page, so
 * the Instagram section says plainly what we receive from Meta, how to
 * disconnect, and that removing Zebri in Instagram's settings does not
 * by itself delete our copy.
 *
 * It speaks to every group the Privacy Policy covers: account holders,
 * the couples, guests and suppliers whose details they keep, people who
 * message a Zebri user on Instagram, and the waitlist. Timelines and
 * what we keep (billing records for 7 years) match the Privacy Policy's
 * section 13 and the Terms' section 6 exactly; if one changes, change
 * all three. The only route today is email: there is no self-serve
 * delete-my-account button yet, and this page does not pretend there is.
 * Add it here when it ships.
 *
 * @module app/data-deletion/page
 */

export const metadata: Metadata = {
  title: 'Data Deletion',
  description:
    'How to have your personal information deleted from Zebri, including data obtained through Instagram, and what happens when you ask.',
  alternates: { canonical: '/data-deletion' },
};

const CONTACT = 'arjun@zebri.com.au';

const SUBJECT = 'Data deletion request';

const MAILTO = `mailto:${CONTACT}?subject=${encodeURIComponent(SUBJECT)}`;

export default function DataDeletionPage() {
  return (
    <LegalPage title="Data Deletion" updated="25 October 2026">
      <section>
        <h2 id="what-this-page-is-for">1. What this page is for</h2>
        <p>
          You have the right to ask us to delete the personal information we hold about you. This
          page explains how to ask, what we delete, how long it takes, and the few things the law
          makes us keep. It applies to everyone whose information touches Zebri: MCs and
          Celebrants who hold an account, the couples, guests and suppliers whose details they
          keep, people who message a Zebri user on Instagram, and people on the waitlist.
        </p>
        <p>
          Zebri is run by Knotify Pty Ltd (ABN 64 674 946 804) in Sydney, New South Wales. We
          handle personal information under the <em>Privacy Act 1988</em> (Cth) and the Australian
          Privacy Principles. Our <a href="/privacy">Privacy Policy</a> says what we collect and
          why; this page is about getting rid of it.
        </p>
      </section>

      <section>
        <h2 id="how-to-ask">2. How to ask</h2>
        <p>
          Email <a href={MAILTO}>{CONTACT}</a> with “{SUBJECT}” in the subject line. Tell us:
        </p>
        <ul>
          <li>Who you are: your name, and the email address or Instagram username Zebri would know you by.</li>
          <li>Which of the groups below you are in, so we look in the right place.</li>
          <li>Whether you want everything deleted, or only some of it (for example, your Instagram messages but not your account).</li>
        </ul>
        <p>
          We will confirm who you are before we delete anything, usually by replying to the
          address on file and asking you to confirm from it. Deleting the wrong person’s data is
          worse than a day’s delay, so we will not act on a request we cannot tie to you.
        </p>
        <p>
          You do not need to give a reason, and asking costs nothing.
        </p>
      </section>

      <section>
        <h2 id="if-you-hold-an-account">3. If you hold a Zebri account</h2>
        <p>
          Cancelling your subscription from your settings ends the paid plan but does not by itself
          delete your account. To have your account and everything in it deleted, email us as
          section 2 describes from the email address on the account.
        </p>
        <p>
          We delete your account details, your couples’ records and files, run sheets, scripts,
          proposals, contracts, questionnaires, notes and messages, and any connected-service
          tokens (Instagram, calendar, Stripe). Deletion from our live systems happens within 30
          days of your request, and the data is gone from backups within 90 days, as the{' '}
          <a href="/terms">Terms</a> and the Privacy Policy say. Export what you need before you
          ask: once it is deleted we cannot get it back.
        </p>
        <p>
          If you run a team, only the account owner can ask us to delete the whole business.
          A team member can ask us to delete their own user details.
        </p>
      </section>

      <section>
        <h2 id="if-you-are-a-couple-guest-or-supplier">4. If you are a couple, guest or supplier</h2>
        <p>
          The MC or Celebrant who entered your details controls them; we hold them on their
          behalf. Ask them first: they can delete your record from Zebri at any time, and when
          they do it is gone from our live systems straight away and from backups within 90 days.
        </p>
        <p>
          If you cannot reach them, or you are not satisfied with their answer, email us as
          section 2 describes. We will contact the MC or Celebrant, because the law requires us to
          act on their instructions, and we will tell you the outcome. Where they no longer have
          an account, we deal with your request directly.
        </p>
        <p>
          Marriage documents that have already been lodged with a Registry of Births, Deaths and
          Marriages are held by that registry under its own rules. We can delete our copy; we
          cannot delete theirs.
        </p>
      </section>

      <section>
        <h2 id="if-you-messaged-a-zebri-user-on-instagram">5. If you messaged a Zebri user on Instagram</h2>
        <p>
          When an MC or Celebrant connects their Instagram account to Zebri, Zebri reads and
          replies to the direct messages that account receives, through Meta’s platform. For
          each conversation we receive from Meta your Instagram user ID, your username and
          profile name, and the content of the messages you and the MC or Celebrant exchange. We
          use it only to show the conversation to the MC or Celebrant, to draft a reply for them to
          send, and to create an enquiry record. We do not use it for advertising and we do not
          share it with anyone else.
        </p>
        <p>To have that data deleted:</p>
        <ul>
          <li>
            <strong>If you messaged a Zebri user:</strong> email us as section 2 describes, with
            your Instagram username and the business you messaged. We will delete the messages,
            your profile details and any enquiry record built from them within 30 days, and from
            backups within 90 days. You can also ask the MC or Celebrant to delete the enquiry.
          </li>
          <li>
            <strong>If you connected your own Instagram account:</strong> disconnect it from your
            Zebri settings. That revokes our access and deletes the tokens straight away. Your
            message history stays on your couples’ records until you delete those records or
            ask us to delete your account.
          </li>
          <li>
            <strong>Removing Zebri in Instagram or Facebook settings</strong> (under “Apps and
            websites” or “Business integrations”) stops Meta sending us anything new, but does
            not delete what we already hold. Email us for that.
          </li>
        </ul>
        <p>
          When we receive a deletion request through Meta’s platform we treat it the same way,
          and we confirm when it is done.
        </p>
      </section>

      <section>
        <h2 id="if-you-are-on-the-waitlist">6. If you are on the waitlist</h2>
        <p>
          The waitlist is your email address, the plan you picked if you picked one, and the
          sign-up email in our mailbox. Reply to any email from us, or write to {CONTACT}, and we
          will remove you within 5 business days. You will not hear from us again unless you
          sign up afresh.
        </p>
      </section>

      <section>
        <h2 id="what-happens-next">7. What happens next</h2>
        <ul>
          <li><strong>Within 5 business days:</strong> we acknowledge your request and, if needed, ask you to confirm your identity.</li>
          <li><strong>Within 30 days:</strong> the data is deleted from our live systems, and we email you to confirm it is done and to list anything we have kept under section 8.</li>
          <li><strong>Within 90 days:</strong> it is gone from backups. Backups are encrypted and are only ever used to restore the service after a failure; they are never read to look up a person.</li>
        </ul>
        <p>
          We also tell our providers that hold a copy (listed in section 9 of the Privacy Policy)
          to delete it, and we delete you from analytics. If something stops us meeting a date, we
          will tell you why and when it will be done.
        </p>
      </section>

      <section>
        <h2 id="what-we-keep-and-why">8. What we keep, and why</h2>
        <p>Deleting everything is the default. We keep only what the law or a live dispute requires:</p>
        <ul>
          <li><strong>Billing records</strong> (invoices, receipts and the name and address on them) for 7 years, as Australian tax law requires. Card details are held by Stripe, not us, under Stripe’s own retention rules.</li>
          <li><strong>The deletion request itself</strong> and our confirmation, for 2 years, so we can show we acted on it.</li>
          <li><strong>Records needed for a legal claim, a complaint under way, or a lawful request from an authority</strong>, until that matter is closed.</li>
          <li><strong>Information in another person’s record</strong> that is not about you. Deleting a couple’s record does not delete the Celebrant’s own notes about the ceremony, for example; we remove your details from them instead.</li>
          <li><strong>De-identified data</strong> that cannot be tied back to you, such as a count of enquiries received in a month.</li>
        </ul>
        <p>
          Anything we keep is locked down to the purpose it is kept for and deleted when that
          purpose ends. We will list exactly what we kept in our confirmation email.
        </p>
      </section>

      <section>
        <h2 id="if-you-are-not-happy">9. If you are not happy</h2>
        <p>
          If you think we have not handled your request properly, email {CONTACT} with “Privacy
          complaint” in the subject. We will acknowledge it within 5 business days and give you a
          written answer within 30 days. If you are still not satisfied, you can complain to the
          Office of the Australian Information Commissioner at{' '}
          <a href="https://www.oaic.gov.au" rel="noopener noreferrer" target="_blank">oaic.gov.au</a>.
        </p>
      </section>

      <section>
        <h2 id="contact-us">10. Contact us</h2>
        <div>
          <p><strong>Knotify Pty Ltd</strong>, trading as Zebri</p>
          <p>ABN 64 674 946 804</p>
          <p>Sydney, New South Wales, Australia</p>
          <p>
            Email: <a href={MAILTO}>{CONTACT}</a>
          </p>
        </div>
      </section>
    </LegalPage>
  );
}
