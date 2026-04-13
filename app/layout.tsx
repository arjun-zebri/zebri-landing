import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Zebri | The Wedding MC Command Centre",
  description:
    "CRM, shared timelines, couple portal, AI sales coach, and live event mode. Everything a professional wedding MC needs, in one place.",
  keywords: [
    "wedding MC software",
    "wedding MC CRM",
    "wedding MC app",
    "wedding MC timeline tool",
    "wedding planning tools for MCs",
  ],
  openGraph: {
    title: "Zebri | The Wedding MC Command Centre",
    description:
      "CRM, shared timelines, couple portal, AI sales coach, and live event mode. Everything a professional wedding MC needs, in one place.",
    type: "website",
    url: "https://zebri.com",
    siteName: "Zebri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zebri | The Wedding MC Command Centre",
    description:
      "CRM, shared timelines, couple portal, AI sales coach, and live event mode. Everything a professional wedding MC needs, in one place.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)", backgroundColor: "#FFFFFF", color: "#111827" }}
      >
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
