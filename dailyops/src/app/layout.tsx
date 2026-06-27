import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dailyops.tech"),
  title: {
    default: "DailyOps.Tech — Real-world Ops & Troubleshooting",
    template: "%s | DailyOps.Tech",
  },
  description:
    "Notes terrain, bonnes pratiques et cas réels en Ops, Networking, Cybersecurity, Infrastructure et Troubleshooting — orienté production.",
  openGraph: {
    title: "DailyOps.Tech — Real-world Ops & Troubleshooting",
    description:
      "Notes terrain, bonnes pratiques et cas réels en Ops, Networking, Cybersecurity, Infrastructure et Troubleshooting — orienté production.",
    url: "https://dailyops.tech",
    siteName: "DailyOps.Tech",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyOps.Tech — Real-world Ops & Troubleshooting",
    description:
      "Notes terrain, bonnes pratiques et cas réels en Ops, Networking, Cybersecurity, Infrastructure et Troubleshooting — orienté production.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}