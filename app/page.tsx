import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Markets from "@/components/Markets";
import DashboardPreview from "@/components/DashboardPreview";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Markets />
        <DashboardPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
