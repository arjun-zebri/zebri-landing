import type { ReactNode } from "react";

// ─── Custom feature icon set ────────────────────────────────────────────────
// Bespoke line icons drawn for Zebri's five features. One shared language:
// 24×24 grid, round caps/joins, thin stroke — a cohesive family, not stock
// picks. Each carries a specific, non-redundant meaning (see DESIGN_SYSTEM).

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function Frame({
  size = 24,
  className,
  strokeWidth = 1.75,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Talk to Zebri — a voice waveform. Symmetric bars, tallest at centre.
export function VoiceWaveIcon(props: IconProps) {
  return (
    <Frame {...props} strokeWidth={props.strokeWidth ?? 2.25}>
      <line x1="4" y1="10.5" x2="4" y2="13.5" />
      <line x1="8" y1="6.5" x2="8" y2="17.5" />
      <line x1="12" y1="3.5" x2="12" y2="20.5" />
      <line x1="16" y1="6.5" x2="16" y2="17.5" />
      <line x1="20" y1="10.5" x2="20" y2="13.5" />
    </Frame>
  );
}

// Timeline Builder — a run sheet: a spine, three nodes, rows of varying length.
export function TimelineIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <line x1="6.5" y1="4" x2="6.5" y2="20" />
      <circle cx="6.5" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="6.5" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <line x1="10.5" y1="7" x2="19" y2="7" />
      <line x1="10.5" y1="12" x2="16.5" y2="12" />
      <line x1="10.5" y1="17" x2="14.5" y2="17" />
    </Frame>
  );
}

// Couple Portal — interlocking rings. Two joined, wedding-native.
export function RingsIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </Frame>
  );
}

// Pulse — a heartbeat line. Lead vitals, not a lightning bolt.
export function PulseIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M2 13 H7 L9 6 L12 18 L14.5 10 L16 13 H22" />
    </Frame>
  );
}

// Ask Zebri — a chat bubble with an AI spark. Conversational answers.
export function AskIcon(props: IconProps) {
  return (
    <Frame {...props}>
      <path d="M6 4 H18 A3 3 0 0 1 21 7 V12 A3 3 0 0 1 18 15 H11 L7 18.5 V15 H6 A3 3 0 0 1 3 12 V7 A3 3 0 0 1 6 4 Z" />
      <path
        d="M12 6.6 C12.2 8.3 12.7 8.8 14.4 9 C12.7 9.2 12.2 9.7 12 11.4 C11.8 9.7 11.3 9.2 9.6 9 C11.3 8.8 11.8 8.3 12 6.6 Z"
        fill="currentColor"
        stroke="none"
      />
    </Frame>
  );
}
