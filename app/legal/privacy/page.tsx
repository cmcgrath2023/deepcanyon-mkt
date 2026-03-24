import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-serif">Privacy Policy</h1>
          <p className="mt-4 text-sm text-white/30">Last updated: March 2026</p>

          <div className="mt-12 space-y-8 text-white/50 leading-relaxed text-sm">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Information We Collect</h2>
              <p>We collect information you provide directly: name, email, phone number, and financial information required for account setup and identity verification. We also collect usage data, device information, and trading activity through the platform.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
              <p>We use your information to provide and improve the Service, process transactions, communicate with you, comply with legal obligations, and prevent fraud. We do not sell your personal information to third parties.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Data Sharing</h2>
              <p>We share information with our brokerage partners (Alpaca Securities LLC, OANDA Corporation) as required to execute trades and maintain accounts. We may share data with service providers who assist in operating the platform, and as required by law.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Data Security</h2>
              <p>We implement industry-standard security measures including encryption in transit and at rest, two-factor authentication, and regular security audits. However, no method of transmission over the internet is 100% secure.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal data by contacting privacy@deepcanyon.ai. California residents have additional rights under the CCPA.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
              <p>For privacy-related questions, contact privacy@deepcanyon.ai.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
