'use client';

import { Button } from '@/components/ui-v2/button';
import { Dialog } from '@/components/ui-v2/dialog';
import { DialogFooter, DialogHeader, DoneView } from '@/components/ui-v2/dialog-parts';
import { EmailIcon } from '@/components/ui-v2/icons';

/**
 * The end of the waitlist sign-up: a success dialog over the page
 * (founder, 2026-10-19: "show them a success modal once they sign up"),
 * built from the app's own dialog anatomy, with its `DoneView` as the
 * body. It says the one thing they need to know, that the invite comes
 * by email to the address they gave, and nothing else: no place in line
 * (in a market this small any count reads wrong) and no referral link
 * (dropped 2026-10-19). Done is the only action; Escape, Close and a
 * click outside leave too.
 *
 * @module components/site/waitlist-done
 */

const TITLE_ID = 'waitlist-done-title';

export interface WaitlistDoneProps {
  open: boolean;
  /** The address they joined with. */
  email: string;
  onClose: () => void;
}

/** The sign-up's success dialog. See {@link WaitlistDoneProps}. */
export function WaitlistDone({ open, email, onClose }: WaitlistDoneProps) {
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby={TITLE_ID}>
      <DialogHeader id={TITLE_ID} icon={EmailIcon} title="Waitlist" />
      <DoneView
        title="You're on the list"
        detail={`We let MCs and Celebrants in a few at a time. We'll email ${email} when your invite is ready.`}
      />
      <DialogFooter>
        <Button onClick={onClose}>Done</Button>
      </DialogFooter>
    </Dialog>
  );
}
