import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SupportCenter from "@/components/SupportCenter";

export const metadata: Metadata = {
  title: "Support — Deep Canyon",
  description:
    "Get help with your Deep Canyon account, trading, playbooks, billing, and more.",
};

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <SupportCenter />
      </main>
      <Footer />
    </>
  );
}
