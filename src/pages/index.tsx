import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Monitor,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description:
      "A comprehensive CEFR-aligned program from beginner to advanced, built on proven pedagogical foundations and real classroom experience.",
  },
  {
    icon: GraduationCap,
    title: "Certified Teachers",
    description:
      "Every lesson is designed and reviewed by accredited Spanish instructors with decades of combined teaching experience across Europe and the Americas.",
  },
  {
    icon: Monitor,
    title: "Modern Learning Platform",
    description:
      "Adaptive technology that tracks your progress, identifies areas for improvement, and personalizes your study path in real time.",
  },
];

const courses = [
  {
    level: "A1",
    title: "Beginner Spanish",
    description:
      "Build a solid foundation with essential vocabulary, basic grammar, and everyday conversational phrases.",
    lessons: 48,
    weeks: 8,
  },
  {
    level: "A2",
    title: "Elementary Spanish",
    description:
      "Expand your communication skills with past tenses, descriptive language, and practical dialogues.",
    lessons: 52,
    weeks: 10,
  },
  {
    level: "B1",
    title: "Intermediate Spanish",
    description:
      "Develop fluency in complex sentence structures, subjunctive mood, and professional conversation.",
    lessons: 60,
    weeks: 12,
  },
  {
    level: "B2",
    title: "Upper Intermediate",
    description:
      "Refine your expression with advanced grammar, idiomatic usage, and nuanced cultural context.",
    lessons: 56,
    weeks: 12,
  },
];

const testimonials = [
  {
    quote:
      "The structured approach finally gave me the clarity I needed. After six months, I can hold professional conversations with my colleagues in Madrid.",
    author: "Dr. Elena Voss",
    role: "Research Fellow, Berlin",
  },
  {
    quote:
      "I have tried many platforms, but this is the first one that truly respects the academic rigor required to learn Spanish properly.",
    author: "Prof. James Chen",
    role: "Linguistics Department, Toronto",
  },
  {
    quote:
      "The curriculum is exceptionally well organized. My students who supplement their university courses with this platform show measurable improvement.",
    author: "María Isabel García",
    role: "Spanish Instructor, Seville",
  },
];

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Español Mastery — Digital Language Network</title>
        <meta
          name="description"
          content="A structured academic system designed to help you speak Spanish clearly, naturally, and correctly."
        />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-xl">
                <h1 className="font-serif text-5xl md:text-6xl font-medium text-brand-blue leading-[1.1] mb-8">
                  Speak Spanish
                  <br />
                  With Confidence
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  A structured academic system designed to help you speak Spanish
                  clearly, naturally, and correctly.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="h-12 px-8 bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-medium text-base gap-2 rounded-lg"
                    >
                      Start Learning
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/lessons">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 px-8 font-medium text-base rounded-lg border-brand-blue/20 text-brand-blue hover:bg-brand-blue/5"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/generated/hero-academy.png"
                    alt="Spanish language learning academy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Pillar Value Section */}
        <section className="section-padding bg-brand-cream">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-blue mb-4">
                An Academic Foundation for Lasting Fluency
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our methodology combines rigorous curriculum design, expert
                instruction, and intelligent technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-xl p-8 shadow-sm border border-border/40 card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-terracotta/10 flex items-center justify-center mb-6">
                    <pillar.icon className="h-6 w-6 text-brand-terracotta" />
                  </div>
                  <h3 className="font-serif text-xl text-brand-blue mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-blue mb-4">
                  Our Curriculum
                </h2>
                <p className="text-muted-foreground max-w-xl">
                  Four progressive levels aligned to the Common European
                  Framework of Reference for Languages.
                </p>
              </div>
              <Link
                href="/lessons"
                className="text-brand-terracotta font-medium text-sm hover:underline flex items-center gap-1"
              >
                View all courses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course) => (
                <div
                  key={course.level}
                  className="bg-white rounded-xl p-8 shadow-sm border border-border/40 card-hover flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-brand-terracotta bg-brand-terracotta/10 px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-brand-blue mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-4">
                    <span>{course.lessons} lessons</span>
                    <span>{course.weeks} weeks</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="section-padding bg-brand-cream">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-md border border-border/40 bg-white">
                  <img
                    src="/spanish-learners.png"
                    alt="Learning platform dashboard preview"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 max-w-lg">
                <h2 className="font-serif text-3xl md:text-4xl text-brand-blue mb-6">
                  Track Your Progress With Precision
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our analytics dashboard gives you clear insight into your
                  strengths, areas for improvement, and study habits. Every
                  metric is designed to help you learn more efficiently, not to
                  gamify your education.
                </p>
                <ul className="space-y-4">
                  {[
                    "Detailed performance analytics by skill area",
                    "Spaced repetition scheduling for optimal retention",
                    "Personalized study recommendations",
                    "Exportable progress reports",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand-terracotta shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-blue mb-4">
                Trusted by Learners Worldwide
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Educators, researchers, and professionals rely on our platform
                for serious Spanish study.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="bg-white rounded-xl p-8 border border-border/40 shadow-sm"
                >
                  <Quote className="h-6 w-6 text-brand-terracotta/40 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-medium text-brand-blue text-sm">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding-sm bg-brand-blue">
          <div className="container text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Begin Your Academic Journey Today
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10">
              Join a community of serious learners committed to mastering
              Spanish through structured, evidence-based instruction.
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="h-12 px-8 bg-brand-terracotta hover:bg-brand-terracotta/90 text-white font-medium text-base gap-2 rounded-lg"
              >
                Start Learning Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
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