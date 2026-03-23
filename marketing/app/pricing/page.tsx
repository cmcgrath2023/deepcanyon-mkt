import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
