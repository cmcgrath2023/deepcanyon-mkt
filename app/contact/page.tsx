"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Nav />
      <main className="pt-32 pb-20 md:pt-40 md:pb-28 px-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-serif text-center">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-white/50 text-center max-w-lg mx-auto">
            Interested in the Business tier for your family office or firm? Tell us about your needs and we'll be in touch.
          </p>

          {submitted ? (
            <div className="mt-12 text-center p-8 rounded-2xl bg-canyon-dark">
              <div className="w-12 h-12 rounded-full bg-lime/20 flex items-center justify-center mx-auto mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="#BCFD49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white">Thank you</h2>
              <p className="mt-2 text-white/50">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-12 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="First Name" name="firstName" required />
                <Field label="Last Name" name="lastName" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Company / Firm" name="company" />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="block text-sm text-white/60 mb-1.5">
                  What are you looking for?
                </label>
                <select
                  name="interest"
                  className="w-full h-11 px-4 rounded-xl bg-canyon-dark text-white text-sm appearance-none"
                  style={{ borderWidth: 0 }}
                >
                  <option value="family-office">Family Office multi-account management</option>
                  <option value="ventures">Ventures investing</option>
                  <option value="custom-strategies">Custom strategy development</option>
                  <option value="enterprise">Enterprise / institutional</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1.5">
                  Estimated AUM
                </label>
                <select
                  name="aum"
                  className="w-full h-11 px-4 rounded-xl bg-canyon-dark text-white text-sm appearance-none"
                  style={{ borderWidth: 0 }}
                >
                  <option value="under-500k">Under $500K</option>
                  <option value="500k-1m">$500K – $1M</option>
                  <option value="1m-5m">$1M – $5M</option>
                  <option value="5m-25m">$5M – $25M</option>
                  <option value="25m-plus">$25M+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/60 mb-1.5">
                  Message <span className="text-white/30">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-canyon-dark text-white text-sm resize-none"
                  style={{ borderWidth: 0 }}
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-lime text-canyon-deep font-semibold rounded-full hover:bg-lime-hover transition-colors duration-150 text-sm"
              >
                Submit
              </button>
              <p className="text-xs text-white/25 text-center">
                We'll respond within one business day. Your information is kept confidential.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm text-white/60 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full h-11 px-4 rounded-xl bg-canyon-dark text-white text-sm placeholder-white/20"
        style={{ borderWidth: 0 }}
      />
    </div>
  );
}
