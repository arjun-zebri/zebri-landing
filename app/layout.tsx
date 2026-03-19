import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zebri – The Wedding MC Command Centre",
  description:
    "Stop using 6 tools to run one wedding. The all-in-one command centre built specifically for professional wedding MCs.",
  keywords: [
    "wedding MC software",
    "wedding MC CRM",
    "wedding MC timeline tool",
    "wedding planning tools",
  ],
  openGraph: {
    title: "Zebri – The Wedding MC Command Centre",
    description:
      "Stop using 6 tools to run one wedding. The all-in-one command centre built specifically for professional wedding MCs.",
    type: "website",
    url: "https://zebri.com",
    siteName: "Zebri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zebri – The Wedding MC Command Centre",
    description: "The all-in-one command centre for professional wedding MCs.",
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
        style={{ fontFamily: "var(--font-inter)", backgroundColor: "#FFFFFF", color: "#1F2937" }}
      >
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
