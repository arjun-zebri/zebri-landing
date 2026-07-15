import posthog from "posthog-js";

/**
 * PostHog is initialised in app/providers.tsx, but only when the env vars are
 * present. Calling capture() before init logs noisy warnings in dev and does
 * nothing useful, so guard on __loaded.
 */
export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!posthog.__loaded) return;
  posthog.capture(event, properties);
}
