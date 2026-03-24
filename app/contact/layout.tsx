import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Deep Canyon",
  description: "Get in touch about the Deep Canyon Business tier for family offices and firms.",
  openGraph: { title: "Contact — Deep Canyon", description: "Get in touch about the Business tier.", images: [{ url: "https://deepcanyon.ai/Meta-OG.png", width: 1200, height: 630 }] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
