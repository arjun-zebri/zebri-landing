"use client";

import { useEarlyAccess } from "./EarlyAccessProvider";

interface EarlyAccessButtonProps {
  className?: string;
  children: React.ReactNode;
  /** Tags the lead with which CTA opened the modal, e.g. "nav", "hero", "pricing-pro". */
  source?: string;
}

/**
 * A thin trigger for the global early-access modal. Client component, so it can
 * be dropped into server components (footer, founding offer) as well as client ones.
 * Styling is passed through via className so each CTA keeps its own look.
 */
export function EarlyAccessButton({
  className,
  children,
  source,
}: EarlyAccessButtonProps) {
  const { open } = useEarlyAccess();
  return (
    <button type="button" onClick={() => open(source)} className={className}>
      {children}
    </button>
  );
}
