'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (!apiKey || !apiHost) {
      console.warn('PostHog environment variables not configured');
      return;
    }

    posthog.init(apiKey, {
      api_host: apiHost,
      person_profiles: 'identified_only',
      loaded: (ph) => {
        if (process.env.NODE_ENV === 'development') {
          ph.debug();
        }
      },
    });
  }, []);

  return <>{children}</>;
}
