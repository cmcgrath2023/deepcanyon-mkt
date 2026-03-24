import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep Canyon — Autonomous Trading Intelligence",
  description:
    "A multi-layered AI system that researches markets, generates 7-vote consensus signals, executes trades, and learns from every outcome. Equities, crypto, forex, commodities — managed around the clock.",
  openGraph: {
    title: "Deep Canyon — Autonomous Trading Intelligence",
    description:
      "Multi-layered AI trading across equities, crypto, forex, and commodities. Start your free trial today.",
    url: "https://deepcanyon.ai",
    siteName: "Deep Canyon",
    images: [{ url: "https://deepcanyon.ai/dcan-meta.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Canyon — Autonomous Trading Intelligence",
    description:
      "Multi-layered AI trading across equities, crypto, forex, and commodities. Start your free trial today.",
  },
  metadataBase: new URL("https://deepcanyon.ai"),
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
      className={`${notoSans.variable} ${notoSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canyon-deep text-white">
        {children}
      </body>
    </html>
  );
}
