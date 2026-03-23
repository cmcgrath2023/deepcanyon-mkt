import Image from "next/image";

const productLinks = [
  { label: "Crypto", href: "/markets/crypto" },
  { label: "Forex", href: "/markets/forex" },
  { label: "Equities & Options", href: "/markets/equities-options" },
  { label: "Commodities & Metals", href: "/markets/commodities-metals" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Partner with Us", href: "/partners" },
  { label: "Press", href: "/press" },
  { label: "Support", href: "/support" },
];

const complianceLinks = [
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Disclosures", href: "/legal/disclosures" },
];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-canyon-deep uppercase tracking-wider mb-4">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-canyon-deep/70 hover:text-canyon-deep transition-colors duration-150"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-lime pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo + tagline */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <Image
                src="/deep-canyon-drk.svg"
                alt="Deep Canyon"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-canyon-deep font-semibold text-base tracking-tight leading-none">
                Deep Canyon
              </span>
            </div>
            <p className="mt-3 text-sm text-canyon-deep/60">
              Autonomous trading intelligence. Always working.
            </p>
          </div>

          {/* Link columns + social */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
            <LinkColumn title="Product" links={productLinks} />
            <LinkColumn title="Company" links={companyLinks} />
            <LinkColumn title="Compliance" links={complianceLinks} />

            {/* Social */}
            <div>
              <h4 className="text-sm font-semibold text-canyon-deep uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/deepcanyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canyon-deep/70 hover:text-canyon-deep transition-colors duration-150"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://x.com/deepcanyon_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-canyon-deep/70 hover:text-canyon-deep transition-colors duration-150"
                  aria-label="X"
                >
                  <XIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory fine print */}
        <div className="mt-12 pt-8" style={{ borderTop: "1px solid rgba(9,20,19,0.15)" }}>
          <p className="text-xs font-semibold text-canyon-deep/60 mb-2">
            All Investing Involves Risk
          </p>
          <p className="text-xs text-canyon-deep/40 leading-relaxed max-w-4xl">
            Trading and owning digital assets involves significant risk, including the risk of substantial loss.
          </p>
          <p className="text-xs text-canyon-deep/40 leading-relaxed max-w-4xl mt-2">
            Deep Canyon is a technology platform, not a broker-dealer or
            investment advisor. All trading of US equities and options is
            executed and cleared through Alpaca Securities LLC, member
            FINRA/SIPC. Cryptocurrency trading is provided through Alpaca
            Crypto LLC. Forex trading is executed through OANDA Corporation,
            a registered Retail Foreign Exchange Dealer with the CFTC and
            member of the NFA. Commodities and metals trading is facilitated
            through regulated futures commission merchants. Deep Canyon does
            not hold customer funds or securities. Past performance is not
            indicative of future results.
          </p>
          <p className="mt-4 text-xs text-canyon-deep/40">
            &copy; {new Date().getFullYear()} Deep Canyon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
