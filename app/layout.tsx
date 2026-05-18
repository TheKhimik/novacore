import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaCore | Discord Server Setup & Automation Agency",
  description:
    "We build high-performance Discord communities with automation, moderation systems, verification flows, and growth strategies for creators and brands.",
  keywords: [
    "discord server setup",
    "discord automation",
    "discord bot agency",
    "community building",
    "discord growth",
  ],
  openGraph: {
    title: "NovaCore | Discord Automation Agency",
    description:
      "Professional Discord server setups and automation systems for growing communities.",
    url: "https://novacore-gamma.vercel.app/",
    siteName: "NovaCore",
    type: "website",
  },
  verification: {
    google: "NaMc3Z_9tkVwG9Z-HYWYkyeftVO88SsY-5-i5krVejw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
