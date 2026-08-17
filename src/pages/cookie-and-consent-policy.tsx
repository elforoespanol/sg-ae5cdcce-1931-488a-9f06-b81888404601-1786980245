import Head from "next/head";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Cookie & Consent Policy — Español Mastery</title>
        <meta name="description" content="Cookie & Consent Policy for Español Mastery - Academia del Español Digital Language Learning Network." />
      </Head>

      <main className="min-h-screen bg-white flex flex-col">
        {/* Static Header */}
        <div className="bg-brand-cream border-b border-border/40">
          <div className="container py-16 md:py-24">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-terracotta mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">
              Cookie & Consent Policy
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container py-16 md:py-24 flex-1">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-12">
              Last Updated: August 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  1. Cookies in Our Educational Division
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Because espanolmastery.com delivers a digital learning curriculum, cookies are structurally vital to ensure a seamless, secure, and reliable educational environment for independent students.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  2. The Student Data Matrix
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We deploy distinct cookies across this platform to manage your progression:
                </p>

                <div className="space-y-6">
                  <div className="bg-brand-cream rounded-xl p-6">
                    <h3 className="font-semibold text-brand-blue mb-3">
                      Authentication & Session Cookies (Strictly Necessary)
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      These track your secure system status. They allow you to log into curriculum panels, track lesson progression, and keep your workspace active. These run automatically as they are essential to serve the product.
                    </p>
                  </div>

                  <div className="bg-brand-cream rounded-xl p-6">
                    <h3 className="font-semibold text-brand-blue mb-3">
                      Operational Performance Cookies (Optional)
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Used to analyze software load speeds, track curriculum milestone bugs, and optimize user experience layouts across various mobile or desktop displays.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  3. Executing Consent Choices
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To ensure compliance with UK GDPR and PECR frameworks, all non-essential analytical cookies remain locked until you click "Accept All" on our student area banner. If you choose to disable cookies entirely via browser overrides, note that certain password memories and lesson tracking states within the course interface may cease to function correctly.
                </p>
              </section>
            </div>

            {/* Back to Home */}
            <div className="mt-16 pt-8 border-t border-border/40">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-brand-terracotta hover:text-brand-terracotta/80 transition-colors"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>

        {/* Static Footer */}
        <footer className="bg-brand-blue text-white">
          <div className="container py-16">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {/* Logo */}
              <div className="space-y-4">
                <a className="flex items-center space-x-3" href="/">
                  <img
                    src="/logo.jpg"
                    alt="Español Mastery - Spanish language course logo"
                    className="rounded-lg h-[50px] w-[50px] object-contain"
                  />
                  <span className="font-serif text-lg font-bold leading-tight">
                    Español<br />
                    <span className="text-brand-terracotta">Mastery</span>
                  </span>
                </a>
                <p className="text-sm text-white/80">
                  Transform your Spanish skills with our proven online course. Join thousands of successful students worldwide.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a className="hover:text-brand-terracotta transition-colors" href="/dashboard">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-terracotta transition-colors" href="/register">
                      Enroll Now
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-terracotta transition-colors" href="mailto:hola@españolmastery.com">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a className="hover:text-brand-terracotta transition-colors" href="/privacy-and-gdpr-policy">
                      Privacy and GDPR Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-terracotta transition-colors" href="/cookie-and-consent-policy">
                      Cookie & Consent Policy
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-brand-terracotta transition-colors" href="/terms-of-business">
                      Terms of Business
                    </a>
                  </li>
                </ul>
              </div>

              {/* Stay Updated */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-4">Stay Updated</h3>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-white/80 mb-1">
                    Send us an email to join our newsletter.
                  </p>
                  <a href="mailto:hola@españolmastery.com?subject=Newsletter Subscription">
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-brand-blue shadow h-9 px-4 py-2 bg-white hover:bg-white/90 w-full">
                      Subscribe
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
                <p>
                  © 2026 españolmastery.com is a proud member of the Academia del Español Digital Language Learning Network. All rights reserved.
                </p>
                <div className="flex gap-2">
                  <span>Contact:</span>
                  <a href="mailto:hola@españolmastery.com" className="hover:text-brand-terracotta transition-colors">
                    hola@españolmastery.com
                  </a>
                </div>
              </div>
            </div>

            {/* Official Curriculum Banner */}
            <div className="w-full bg-[#fcf9f2] py-4 mt-12 border-t border-[#eef2f6]">
              <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                  <span className="inline-block font-sans text-[11px] font-extrabold uppercase tracking-[1.5px] text-brand-terracotta mb-1">
                    Official Curriculum
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-blue leading-tight mb-1">
                    Español Mastery
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-[#4a5568]">
                    This milestone-driven framework is an authorized educational division of the <strong className="text-brand-blue">Academia del Español Digital Language Learning Network</strong>, anchoring your language acquisition journey.
                  </p>
                </div>
                <a
                  href="https://academiadelespanol.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-sans text-xs font-bold text-brand-blue no-underline border-b-2 border-brand-terracotta pb-0.5 hover:text-brand-terracotta transition-colors whitespace-nowrap"
                >
                  Ecosystem Directory ↗
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}