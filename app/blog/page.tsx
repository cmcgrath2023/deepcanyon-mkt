import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — Deep Canyon",
  description: "Insights on AI trading, market analysis, and platform updates from Deep Canyon.",
  openGraph: { title: "Blog — Deep Canyon", description: "Insights on AI trading and market analysis.", images: [{ url: "https://deepcanyon.ai/Meta-OG.png", width: 1200, height: 630 }] },
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif">Blog</h1>
          <p className="mt-6 text-lg text-white/50">Insights on AI trading, market analysis, and platform updates. Coming soon.</p>
          <div className="mt-12 p-8 rounded-2xl bg-canyon-dark">
            <p className="text-white/40">We're preparing our first articles. Check back soon for deep dives into autonomous trading intelligence.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
