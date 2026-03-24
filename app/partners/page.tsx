import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Partner with Us — Deep Canyon",
  description: "Explore integration and partnership opportunities with Deep Canyon's autonomous trading platform.",
  openGraph: { title: "Partner with Us — Deep Canyon", description: "Explore partnership opportunities with Deep Canyon.", images: [{ url: "https://deepcanyon.ai/dcan-meta.png", width: 1200, height: 630 }] },
};

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif">Partner with Us</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">Interested in integrating with Deep Canyon or exploring partnership opportunities? We'd love to hear from you.</p>
          <a href="/contact" className="mt-8 inline-flex items-center justify-center px-7 h-11 bg-lime text-canyon-deep font-semibold rounded-full hover:bg-lime-hover transition-colors duration-150 text-sm">Get in Touch</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
