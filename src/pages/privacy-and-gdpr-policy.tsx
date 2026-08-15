import Head from "next/head";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy & GDPR Policy — Español Mastery</title>
        <meta name="description" content="Privacy and GDPR Policy for Español Mastery - Academia del Español Digital Language Learning Network." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-brand-cream border-b border-border/40">
          <div className="container py-16 md:py-24">
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-terracotta mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-blue tracking-tight">
              Privacy & GDPR Policy
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Platform: <span className="font-semibold text-foreground">espanolmastery.com</span>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm text-muted-foreground mb-12">
              Last Updated: August 2026
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  1. Introduction and Data Controller
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Welcome to the privacy notice for espanolmastery.com. This website operates strictly as an educational division and digital product of the Academia del Español Digital Language Learning Network.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, the Data Controller is the central administrative team of Academia del Español Digital Language Learning Network [DTA18, UKGDPR]. We are committed to protecting your personal data and ensuring transparency regarding your digital footprint.
                </p>
                <div className="bg-brand-cream rounded-xl p-6 my-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong className="text-brand-blue">Network Parent Portal:</strong>{' '}
                    <a href="https://academiadelespanol.com" target="_blank" rel="noopener noreferrer" className="text-brand-terracotta hover:underline">
                      academiadelespanol.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-brand-blue">Dedicated Support Desk Email:</strong>{' '}
                    <a href="mailto:support@academiadelespanol.com" className="text-brand-terracotta hover:underline">
                      support@academiadelespanol.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  2. The Personal Data We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect minimal personal data to provide you with access to our curriculum resources. This includes:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>
                      <strong className="text-foreground">Identity and Student Support Data:</strong> Your name and email address when you submit support tickets, ask curriculum questions, or sign up for learning access.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>
                      <strong className="text-foreground">Technical and Usage Data:</strong> IP addresses, browser specifications, operating system parameters, and navigation tracking metrics collected automatically via analytical cookies to monitor course engagement layout efficiency.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  3. Purpose of Processing and Lawful Basis
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We process your personal information under the following legitimate UK GDPR parameters [UKGDPR]:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>
                      <strong className="text-foreground">Consent:</strong> You explicitly authorize us to email you course materials, guides, and roadmap check-ins by submitting your details [UKGDPR]. You may opt out at any time [UKGDPR].
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>
                      <strong className="text-foreground">Legitimate Interests:</strong> It is necessary for our network's operational interests to diagnose technical faults, optimize classroom user flows, and respond to incoming user feedback via our dedicated support channel.
                    </span>
                  </li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  4. Data Sharing, Transfers, and Storage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, lease, or distribute your email or data to commercial third parties. Data is processed strictly via GDPR-compliant tools (such as web hosting nodes, security plugins, and standard email analytics engines) [UKGDPR]. Any data stored on cloud servers outside the UK is governed by approved standard contractual clauses (SCCs) to maintain complete legal protection.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="font-serif text-2xl font-bold text-brand-blue mb-6">
                  5. Your Legal Rights Under UK GDPR
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Under UK data protection frameworks, you have comprehensive rights [UKGDPR]. You may request:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>Access to see what data we hold on you [UKGDPR].</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>Correction of inaccurate information [UKGDPR].</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>Permanent deletion of your data from our systems [UKGDPR].</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-terracotta shrink-0" />
                    <span>Restriction of data processing profiles [UKGDPR].</span>
                  </li>
                </ul>
                <div className="bg-brand-cream rounded-xl p-6 my-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    To enforce these rights, contact our student support desk at:{' '}
                    <a href="mailto:support@academiadelespanol.com" className="text-brand-terracotta hover:underline font-medium">
                      support@academiadelespanol.com
                    </a>{' '}
                    [UKGDPR].
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If we fail to resolve your data concerns, you hold the statutory right to contact the{' '}
                    <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-brand-terracotta hover:underline font-medium">
                      Information Commissioner's Office (ICO)
                    </a>{' '}
                    (www.ico.org.uk).
                  </p>
                </div>
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
      </main>
    </>
  );
}