import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Monitor,
  CheckCircle2,
  Quote,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
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
                <p className="text-sm font-semibold tracking-widest uppercase text-brand-terracotta mb-6">
                  Español Mastery
                </p>
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
        <footer className="bg-white border-t border-border/40">
          <div className="h-1.5 bg-brand-terracotta w-full" />
          <div className="container section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Logo & Description */}
              <div className="lg:col-span-1">
                <div className="mb-4">
                  <img
                    src="/logo.jpg"
                    alt="Español Mastery"
                    className="h-16 w-16 rounded-lg object-contain"
                  />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Empowering global communication through quality Spanish education.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-medium text-brand-blue text-sm mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/lessons"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/chat"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="font-medium text-brand-blue text-sm mb-4">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/settings"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/settings"
                      className="text-sm text-muted-foreground hover:text-brand-terracotta transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Stay Updated */}
              <div>
                <h3 className="font-medium text-brand-blue text-sm mb-4">
                  Stay Updated
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Subscribe to our newsletter for learning tips and updates.
                </p>
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Thank you for subscribing!");
                  }}
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-10 pl-9 pr-3 text-sm rounded-lg border border-border/40 bg-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta/30 focus:border-brand-terracotta/50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-10 px-4 text-sm font-medium bg-brand-terracotta text-white rounded-lg hover:bg-brand-terracotta/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-border/40">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Social Icons */}
                <div>
                  <h3 className="font-medium text-brand-blue text-sm mb-3 text-center md:text-left">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-blue hover:bg-brand-terracotta hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-blue hover:bg-brand-terracotta hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-blue hover:bg-brand-terracotta hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-blue hover:bg-brand-terracotta hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                  <p className="text-xs text-muted-foreground mb-1">
                    © 2026 Español Mastery. All rights reserved.
                  </p>
                  <p className="text-xs text-muted-foreground mb-1">
                    Designed with care for language learners worldwide.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    A proud member of the{" "}
                    <a
                      href="https://academiadelespanol.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-terracotta hover:underline"
                    >
                      Academia del Español
                    </a>{" "}
                    educational network.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}