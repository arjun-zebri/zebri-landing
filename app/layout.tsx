import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "./providers";
import { EarlyAccessProvider } from "@/components/ui/EarlyAccessProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Zebri - Wedding MC & Celebrant Software | CRM, Timeline & Couple Portal",
  description:
    "The command centre for professional wedding MCs and celebrants. Manage couples, build shared timelines, run the couple portal, and walk into every wedding ready.",
  keywords: [
    "wedding MC software",
    "wedding MC CRM",
    "wedding celebrant software",
    "celebrant CRM",
    "wedding MC timeline tool",
    "wedding ceremony MC app",
    "MC management software",
    "wedding MC run sheet",
    "couple portal for MCs",
    "wedding MC Australia",
  ],
  metadataBase: new URL("https://zebri.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zebri - Built for Wedding MCs & Celebrants",
    description:
      "Stop juggling 6 tabs the night before a wedding. One place for every couple, timeline, and script.",
    type: "website",
    url: "https://zebri.com.au",
    siteName: "Zebri",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zebri - Wedding MC Command Centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zebri - Built for Wedding MCs & Celebrants",
    description:
      "Stop juggling 6 tabs the night before a wedding. One place for every couple, timeline, and script.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zebri",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "The command centre for professional wedding MCs and celebrants. Manage couples, build shared timelines, run the couple portal, and walk into every wedding ready.",
  url: "https://zebri.com.au",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
    description:
      "Free plan available. Pro from $49/month AUD. Max from $79/month AUD.",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Professional Wedding MCs and Celebrants",
  },
  creator: {
    "@type": "Organization",
    name: "Zebri",
    url: "https://zebri.com.au",
    email: "arjun@zebri.com.au",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{
          fontFamily: "var(--font-inter)",
          backgroundColor: "#FFFFFF",
          color: "#111827",
        }}
      >
        <PostHogProvider>
          <EarlyAccessProvider>{children}</EarlyAccessProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
