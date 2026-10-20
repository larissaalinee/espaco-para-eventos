type IconProps = {
  className?: string;
};

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function GrillIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="9" r="6" />
      <path d="M8 14.5 6.5 21M16 14.5 17.5 21M8.5 18h7" />
      <path d="M9 9h6M9.5 6.5h5" />
    </svg>
  );
}

export function SinkIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 13h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M12 13V7a3 3 0 0 0-6 0" />
      <path d="M12 9h5a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

export function PoolIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M2 16c2 0 2.5 1.5 5 1.5S9.5 16 12 16s2.5 1.5 5 1.5S19.5 16 22 16" />
      <path d="M2 20c2 0 2.5 1.5 5 1.5s2.5-1.5 5-1.5 2.5 1.5 5 1.5 2.5-1.5 5-1.5" />
      <path d="M7 14V5a2 2 0 0 1 4 0M13 14V5a2 2 0 0 1 4 0" />
      <path d="M7 8h6M7 11.5h6" />
    </svg>
  );
}

export function BathroomIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M5 12h14a2 2 0 0 1 2 2 6 6 0 0 1-6 6H9a6 6 0 0 1-6-6 2 2 0 0 1 2-2Z" />
      <path d="M4 12V5a2 2 0 0 1 2-2c1.7 0 2.5 1 2.5 2.5" />
      <path d="M8 18.5 7 20M16 18.5 17 20M12 19v1.5" />
    </svg>
  );
}

export function TablesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 9h18M5 9v10M19 9v10M3 19h18" />
      <path d="M8 9V5h8v4" />
      <circle cx="12" cy="3.5" r="1.5" />
    </svg>
  );
}

export function WifiIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M2.5 9a15 15 0 0 1 19 0M5.5 12.5a10.5 10.5 0 0 1 13 0M8.5 16a6 6 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ParkingIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

export function MusicIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 4.8a3.5 3.5 0 0 1 0 6.4M17.5 14.2a6.5 6.5 0 0 1 4 5.8" />
    </svg>
  );
}

export function TreeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M12 22v-5" />
      <path d="M12 17 6 17l2.5-4H6l3-4.5H7L12 2l5 6.5h-2l3 4.5h-2.5l2.5 4h-6" />
    </svg>
  );
}

export function WhatsappIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.73-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6.5" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M8 14h3M8 17.5h6" />
    </svg>
  );
}

export function RainIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2" />
      <path d="M8 15.5v4M12 17v4M16 15.5v4" />
    </svg>
  );
}

export function BroomIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M13.5 4 9 11" />
      <path d="M9 11c-2.3.8-4 2.8-4.5 5.3L4 19l2.7-.5c2.5-.5 4.5-2.2 5.3-4.5L9 11Z" />
      <path d="M6.5 15.5 8 17" />
    </svg>
  );
}

export function SparklesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="m10 4 1.4 3.9c.1.3.4.6.7.7L16 10l-3.9 1.4c-.3.1-.6.4-.7.7L10 16l-1.4-3.9c-.1-.3-.4-.6-.7-.7L4 10l3.9-1.4c.3-.1.6-.4.7-.7L10 4Z" />
      <path d="m18 14 .9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9L18 14Z" />
    </svg>
  );
}

export function MoneyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M5.5 12h.01M18.5 12h.01" />
    </svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="7.5" cy="15.5" r="4" />
      <path d="m10.5 12.5 8.5-8.5M15 5l3.5 3.5M12.5 7.5 16 11" />
    </svg>
  );
}

export function AccessibilityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="16" cy="4" r="1" fill="currentColor" stroke="none" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}
