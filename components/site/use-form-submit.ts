'use client';

import { useState, type FormEvent } from 'react';

/**
 * Form handling for the site's sign-up: validates with the given rules,
 * shows each error on its field and puts focus on the first, and
 * otherwise runs `onValid` with the form's values, the button busy until
 * it settles. `onValid` returns an error message to show under the form,
 * or nothing when it worked.
 *
 * @module components/site/use-form-submit
 */

/** Field name to error message, or nothing when the field is fine. */
export type FieldErrors = Record<string, string | undefined>;

/** A validator: reads the form's values and returns any errors. */
export type Validate = (values: Record<string, string>) => FieldErrors;

/** Form state. `errors.form` holds a failure from `onValid`. */
export function useFormSubmit(validate: Validate, onValid: (values: Record<string, string>) => Promise<string | void> | void) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries([...new FormData(form)].map(([k, v]) => [k, String(v).trim()]));
    const next = validate(values);
    setErrors(next);
    const firstBad = Object.keys(next).find((k) => next[k]);
    if (firstBad) {
      focusField(form, firstBad);
      return;
    }
    setLoading(true);
    try {
      const failed = await onValid(values);
      if (failed) setErrors({ form: failed });
    } catch {
      setErrors({ form: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return { errors, loading, onSubmit };
}

/**
 * Puts focus on the first field with an error, so a keyboard or screen
 * reader user lands on the problem. A field held in a hidden input (a
 * chip group's answer) is reached through its wrapper's `data-field`.
 */
function focusField(form: HTMLFormElement, name: string) {
  form.querySelector<HTMLElement>(`[name="${name}"]:not([type="hidden"]), [data-field="${name}"] button`)?.focus();
}

/** Loose email check, matching what the browser's own `type="email"` accepts. */
export function isEmail(value: string | undefined): boolean {
  return /^\S+@\S+\.\S+$/.test(value ?? '');
}
