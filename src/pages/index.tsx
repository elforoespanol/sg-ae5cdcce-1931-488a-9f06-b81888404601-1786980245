import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Layers,
  BookOpen,
  BarChart3,
  Check,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MessageSquare,
    title: "AI Tutor",
    description: "Practice real conversations with our AI Spanish tutor. Get instant feedback on pronunciation, grammar, and fluency.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Layers,
    title: "Smart Flashcards",
    description: "Adaptive spaced repetition system that learns what you know and targets exactly what you need to review.",
    color: "bg-accent/20 text-amber-600",
  },
  {
    icon: BookOpen,
    title: "Structured Lessons",
    description: "Follow a proven CEFR-aligned curriculum from A1 to C2 with interactive exercises and cultural insights.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Visualize your learning journey with detailed analytics, streak counters, and study time insights.",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "Start learning today",
    features: ["5 AI conversations per day", "100 flashcards", "Basic lessons", "Community support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "12",
    description: "For serious learners",
    features: [
      "Unlimited AI conversations",
      "Unlimited flashcards",
      "All lessons & exercises",
      "Progress analytics",
      "Priority support",
      "Offline mode",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Speak Spanish Like I Did — AI-Powered Spanish Learning</title>
        <meta name="description" content="Learn Spanish with AI tutoring, smart flashcards, and structured lessons from A1 to C2." />
      </Head>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 bg-gradient-hero">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
                <Sparkles className="h-4 w-4" />
                New: AI-powered conversation practice
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1] mb-6">
                Learn Spanish
                <span className="text-primary"> Naturally</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                AI-powered conversations, smart flashcards, and structured lessons — all designed to help you speak Spanish with confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register">
                  <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base gap-2">
                    Start Learning Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/lessons">
                  <Button size="lg" variant="outline" className="h-12 px-8 font-medium text-base gap-2 border-border hover:bg-muted">
                    View Lessons
                  </Button>
                </Link>
              </div>
              <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" />
                  Free forever plan
                </span>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </section>

        {/* Photo + About Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <img
                src="/spanish-learners.png"
                alt="Spanish learners"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg mb-12"
              />
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Speak Spanish Like I Did is your personal Spanish‑learning companion powered by the proven spaced‑repetition system (SRS). Whether you're starting from zero or levelling up your skills, Speak Spanish Like I Did guides you step by step—introducing new words, phrases, and grammar at the right intervals so they truly stick.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
                Designed for beginners, travellers, adult learners, and anyone determined to master Spanish finally, Speak Spanish Like I Did helps you learn the same way real learners do: consistently, confidently, and with content that adapts to your progress.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
                With fun micro‑lessons, smart reviews, and a learning path that grows with you, Speak Spanish Like I Did makes Spanish feel achievable—and enjoyable—for every level.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Everything you need to master Spanish
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A complete learning ecosystem designed around how languages are actually acquired.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 md:py-28 bg-gradient-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Start free, upgrade when you're ready to go deeper.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {pricingPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-card border-2 border-primary shadow-xl"
                      : "bg-card border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-serif text-xl text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  <div className="mb-6">
                    <span className="font-serif text-4xl text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.popular ? "/register" : "/register"}>
                    <Button
                      className={`w-full h-11 font-medium ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-muted hover:bg-muted/80 text-foreground"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Ready to start speaking Spanish?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of learners who have transformed their Spanish with our platform.
              </p>
              <Link href="/register">
                <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base gap-2">
                  Start Learning for Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <img src="/logo.jpg" alt="Speak Spanish Like I Did" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-sm text-muted-foreground">
                © 2026 Speak Spanish Like I Did. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}