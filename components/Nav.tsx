"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";

const offerItems = [
  { label: "Crypto", href: "/markets/crypto" },
  { label: "Forex", href: "/markets/forex" },
  { label: "Equities & Options", href: "/markets/equities-options" },
  { label: "Commodities & Metals", href: "/markets/commodities-metals" },
];

const featureItems = [
  { label: "7-Vote Signal Engine", href: "/features/signal-engine" },
  { label: "Bayesian Intelligence", href: "/features/bayesian-intelligence" },
  { label: "Playbooks", href: "/features/playbooks" },
  { label: "24/7 Global Coverage", href: "/features/global-coverage" },
  { label: "Risk Management", href: "/features/risk-management" },
];

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <span className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-lime transition-colors duration-150 cursor-pointer">
        {label}
        {isOpen ? (
          <ChevronUp size={14} className="text-lime" />
        ) : (
          <ChevronDown size={14} className="opacity-50" />
        )}
      </span>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2">
          <div className="w-64 bg-canyon-deep rounded-xl py-3 shadow-2xl shadow-black/60">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-5 py-3 text-sm text-white/80 hover:text-lime hover:bg-canyon-mid/50 transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-canyon-deep">
      <div className="mx-auto max-w-[1880px] h-full px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/deep-canyon-wht.svg"
            alt="Deep Canyon"
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="text-white font-semibold text-lg tracking-tight leading-none">
            Deep Canyon
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <NavDropdown label="What We Offer" items={offerItems} />
          <NavDropdown label="Features" items={featureItems} />
          <a
            href="/pricing"
            className="text-sm text-white/60 hover:text-lime transition-colors duration-150"
          >
            Pricing
          </a>
          <a
            href="/support"
            className="text-sm text-white/60 hover:text-lime transition-colors duration-150"
          >
            Support
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://app.deepcanyon.ai/login"
            className="text-sm text-white/60 hover:text-white transition-colors duration-150"
          >
            Log In
          </a>
          <a
            href="https://app.deepcanyon.ai/signup"
            className="inline-flex items-center px-5 h-9 bg-lime text-canyon-deep font-semibold text-sm rounded-full hover:bg-lime-hover transition-colors duration-150"
          >
            Get Started
          </a>
        </div>

        {/* Mobile: Sign Up + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="https://app.deepcanyon.ai/signup"
            className="inline-flex items-center px-4 h-8 bg-lime text-canyon-deep font-semibold text-xs rounded-full hover:bg-lime-hover transition-colors duration-150"
          >
            Sign Up
          </a>
          <Hamburger toggled={open} toggle={setOpen} size={22} color="rgba(255,255,255,0.6)" />
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-canyon-deep z-40 flex flex-col px-6 pt-8 gap-1 overflow-y-auto">
          <p className="text-xs text-canyon-light uppercase tracking-wider mb-2">
            What We Offer
          </p>
          {offerItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-white/80 hover:text-lime transition-colors"
            >
              {item.label}
            </a>
          ))}

          <p className="text-xs text-canyon-light uppercase tracking-wider mt-8 mb-2">
            Features
          </p>
          {featureItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-white/80 hover:text-lime transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="mt-8 pt-6 flex flex-col gap-1" style={{ borderTop: "1px solid rgba(40,90,72,0.3)" }}>
            <a
              href="/pricing"
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-white/80 hover:text-lime transition-colors"
            >
              Pricing
            </a>
            <a
              href="/support"
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-white/80 hover:text-lime transition-colors"
            >
              Support
            </a>
            <a
              href="https://app.deepcanyon.ai/login"
              className="py-3 text-lg text-white/50 hover:text-white transition-colors"
            >
              Log In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
