"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/**
 * Mounted once by app/beatmix/page.tsx. The form renders twice, so page-view
 * tracking can't live inside it without double-counting every scan.
 */
export function BeatmixPageView() {
  useEffect(() => {
    track("beatmix_page_view");
  }, []);

  return null;
}
