/** Tiny inline icon set (no external dependency). */
export type IconName =
  | "truck"
  | "shield"
  | "wallet"
  | "headset"
  | "check"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "arrow"
  | "instagram"
  | "whatsapp";

const paths: Record<IconName, JSX.Element> = {
  truck: (
    <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v8H3V7Zm12 3h3l3 3v2a1 1 0 0 1-1 1h-1m-4 0H7m-2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  ),
  shield: <path d="M12 3 5 6v5c0 4.2 2.9 8 7 9 4.1-1 7-4.8 7-9V6l-7-3Zm-1.2 12-3-3 1.4-1.4 1.6 1.6 3.6-3.6L16 9l-5.2 6Z" />,
  wallet: (
    <path d="M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1h-2V7H5v10h14v-1h2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm14 4h4v4h-4a2 2 0 0 1 0-4Zm0 1.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1Z" />
  ),
  headset: (
    <path d="M12 3a8 8 0 0 0-8 8v5a3 3 0 0 0 3 3h1v-7H6v-1a6 6 0 0 1 12 0v1h-2v7h1a3 3 0 0 0 3-3v-5a8 8 0 0 0-8-8Z" />
  ),
  check: <path d="m9.5 16.2-3.7-3.7 1.4-1.4 2.3 2.3 6-6L17 8.4l-7.5 7.8Z" />,
  phone: (
    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z" />
  ),
  mail: <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 7 8-5H4l8 5Zm0 2L4 9v9h16V9l-8 5Z" />,
  pin: <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />,
  clock: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 10h4v2h-6V7h2v5Z" />,
  arrow: <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 6.4L12 17l5-5H5v0Z" />,
  instagram: (
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm4.8-3.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
  ),
  whatsapp: (
    <path d="M12.05 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3 1.2 4.6 1.2 5.5 0 10-4.5 10-10S17.6 2 12.05 2Zm0 18c-1.5 0-2.9-.4-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 20 12a8 8 0 0 1-7.95 8Z" />
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
