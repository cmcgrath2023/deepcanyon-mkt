import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PressPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif">Press</h1>
          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">For media inquiries, please contact us at press@deepcanyon.ai.</p>
          <div className="mt-12 p-8 rounded-2xl bg-canyon-dark">
            <p className="text-white/40">Press kit and media resources coming soon.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
