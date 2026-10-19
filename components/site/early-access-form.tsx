'use client';

import { useState } from 'react';

import { Button } from '@/components/ui-v2/button';
import { CheckIcon, EmailIcon } from '@/components/ui-v2/icons';
import { Input } from '@/components/ui-v2/input';
import { TextLink } from '@/components/ui-v2/text-link';

import { joinWaitlist } from '@/app/actions/waitlist';
import { track } from '@/lib/analytics';

import { isEmail, useFormSubmit } from './use-form-submit';
import { WaitlistDone } from './waitlist-done';
import { useWaitlistPlan } from './waitlist-plan';

/**
 * The waitlist sign-up, as Stripe and Notion close a page (founder,
 * 2026-10-19): one email field and its button, at the app's own control
 * size (a `raised` `Input` beside a `Button`, one height, 13px text).
 * The email is the whole sign-up: the button sends it (`joinWaitlist`,
 * which emails the founder) and a success dialog opens (`WaitlistDone`).
 * Once the dialog is closed, the form's place holds one line saying they
 * are on the list, so the same visitor is never asked twice. A plan
 * picked on a pricing card shows above the field and rides along.
 *
 * @module components/site/early-access-form
 */

/** The email capture, then its confirmation. */
export function EarlyAccessForm() {
  const [sent, setSent] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const { plan } = useWaitlistPlan();
  const { errors, loading, onSubmit } = useFormSubmit(
    (v) => ({ email: isEmail(v.email) ? undefined : 'Enter a valid email address.' }),
    async (v) => {
      const email = v.email ?? '';
      const result = await joinWaitlist({ email, plan: plan ?? undefined });
      if (!result.ok) return result.message;
      track('waitlist_joined', { plan });
      setSent(email);
      setOpen(true);
    },
  );

  if (sent)
    return (
      <>
        <p role="status" className="flex max-w-md items-start gap-2 type-body text-zebra-700">
          <CheckIcon aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-grass-700" />
          <span>You&rsquo;re on the list. We&rsquo;ll email {sent} when your invite is ready.</span>
        </p>
        <WaitlistDone open={open} email={sent} onClose={() => setOpen(false)} />
      </>
    );

  return (
    <>
      {plan ? (
        <p className="mb-3 flex items-center gap-2 type-body text-zebra-700">
          <CheckIcon aria-hidden="true" className="size-3.5 text-grass-700" />
          Joining with {plan}
        </p>
      ) : null}
      <form noValidate onSubmit={onSubmit} className="max-w-md">
        {/* The app's toolbar pair, a raised field beside its button at one height: the
            48px box with the button inside, typed at 16px, was larger than every other control.
            Phones stack them, the button full width under the field: side by side the field
            was too narrow to type in (founder, 2026-10-19). */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
          <div className="min-w-0 sm:flex-1">
            <Input
              raised
              icon={EmailIcon}
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              error={errors.email}
            />
          </div>
          <Button type="submit" loading={loading}>
            Join the waitlist
          </Button>
        </div>
        {errors.form ? (
          <p role="alert" className="mt-2 type-body text-danger">
            {errors.form}
          </p>
        ) : null}
        {/* Consent for the emails the waitlist sends (Spam Act), and the policy that covers the sign-up (2026-10-19 legal audit). */}
        <p className="mt-3 type-body text-zebra-400">
          We&rsquo;ll email your invite and news about Zebri. Unsubscribe any time.{' '}
          <TextLink href="/privacy" inheritSize>Privacy policy</TextLink>.
        </p>
      </form>
    </>
  );
}
