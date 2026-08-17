import Head from "next/head";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function TermsOfBusiness() {
  return (
    <>
      <Head>
        <title>Terms of Business — Español Mastery</title>
        <meta name="description" content="Terms of Business for Español Mastery - Academia del Español Digital Language Learning Network." />
      </Head>

      <main className="min-h-screen bg-white flex flex-col">
        {/* Static Header */}
        <div className="bg-brand-cream border-b border-border/40">
          <div className="container py-16 md:py-24">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-terracotta mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">
              Terms of Business
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Platform: <span className="font-semibold text-foreground">espanolmastery.com</span>
            </p>
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
                  1. Network Affiliation & Authority
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This website (espanolmastery.com) is a wholly-owned educational division and digital product of the Academia del Español Digital Language Learning Network. By accessing our curriculum framework, lessons, or digital tools, you explicitly accept these Terms of Business.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  2. Content Intended for Independent Learning
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All syllabi, linguistic maps, milestone roadmaps, and educational assets served on this site are intended strictly for personal, non-commercial, independent language study.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  3. Intellectual Property & Usage Boundaries
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The curriculum layout, milestone structuring, and pedagogical systems are protected under copyright law as proprietary assets of the Academia del Español Digital Language Learning Network. Users are prohibited from downloading, recording, copying, or distributing our educational frameworks for commercial gain or public re-teaching.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  4. No Fluency Guarantees or Warranties
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  While our curriculum is designed around real-world conversational frameworks, language learning speed and mastery are deeply dependent on individual user commitment. The course architecture provides no explicit or implied warranties regarding guaranteed fluency timeline outcomes or exam grading metrics.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  5. Contact & Disputes
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All curriculum, technical access feedback, or support metrics must be routed directly to:
                </p>
                <div className="bg-brand-cream rounded-xl p-6 my-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-brand-blue">Dedicated Support Desk Email:</strong>{' '}
                    <a href="mailto:support@academiadelespanol.com" className="text-brand-terracotta hover:underline font-medium">
                      support@academiadelespanol.com
                    </a>
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Any unresolved legal parameters fall under the exclusive jurisdiction of the courts of England and Wales.
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