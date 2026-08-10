import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Clock,
  BookOpen,
  MessageSquare,
  Layers,
  ArrowRight,
  Trophy,
  Sparkles,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { XPProgress } from "@/components/dashboard/XPProgress";
import { StreakCalendar } from "@/components/dashboard/StreakCalendar";
import { ACHIEVEMENTS, getLevelInfo } from "@/lib/achievements";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

interface DashboardStats {
  totalXp: number;
  streak: number;
  longestStreak: number;
  totalStudyMinutes: number;
  lessonsCompleted: number;
  flashcardsReviewed: number;
  flashcardsMastered: number;
  dueFlashcards: number;
  chatMessages: number;
  recentActivity: Array<{
    type: string;
    description: string;
    date: string;
  }>;
}

export default function DashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [fallbackUser, setFallbackUser] = useState<{email: string; timestamp: number} | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setMounted(true);
      return;
    }
    const raw = localStorage.getItem("sslid_auth_fallback");
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Date.now() - parsed.timestamp < 5 * 60 * 1000) {
          setFallbackUser(parsed);
        } else {
          localStorage.removeItem("sslid_auth_fallback");
        }
      } catch {
        localStorage.removeItem("sslid_auth_fallback");
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/user/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        } else {
          setStats(null);
        }
      } catch (e) {
        console.error("Failed to fetch stats", e);
        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  if (!mounted || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const userStats = stats || {
    totalXp: 0,
    streak: 0,
    longestStreak: 0,
    totalStudyMinutes: 0,
    lessonsCompleted: 0,
    flashcardsReviewed: 0,
    flashcardsMastered: 0,
    dueFlashcards: 0,
    chatMessages: 0,
    recentActivity: [],
  };

  const levelInfo = getLevelInfo(userStats.totalXp);

  const quickActions = [
    {
      title: "Continue Lessons",
      description: "Pick up where you left off",
      icon: BookOpen,
      href: "/lessons",
      color: "bg-primary/10 text-primary",
    },
    {
      title: "AI Conversation",
      description: "Practice with our AI tutor",
      icon: MessageSquare,
      href: "/chat",
      color: "bg-secondary/10 text-secondary",
    },
    {
      title: "Review Flashcards",
      description: userStats.dueFlashcards > 0 ? `${userStats.dueFlashcards} cards due now` : "Strengthen your vocabulary",
      icon: Layers,
      href: "/flashcards",
      color: "bg-accent/20 text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Dashboard — Speak Spanish Like I Did</title>
        <meta name="description" content="Track your Spanish learning progress, streaks, and achievements." />
      </Head>
      <div className="container py-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
            Hola, {session?.user?.name || fallbackUser?.email?.split("@")[0] || "Learner"}! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to continue your Spanish journey?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* XP Progress */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <XPProgress totalXp={userStats.totalXp} />
          </motion.div>

          {/* Streak Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <StreakCalendar
              streak={userStats.streak}
              longestStreak={userStats.longestStreak}
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            {
              title: "Daily Streak",
              value: userStats.streak,
              subtitle: "days",
              icon: Flame,
              color: "text-orange-500",
              bg: "bg-orange-50",
            },
            {
              title: "Study Time",
              value: Math.round(userStats.totalStudyMinutes),
              subtitle: "minutes",
              icon: Clock,
              color: "text-blue-500",
              bg: "bg-blue-50",
            },
            {
              title: "Lessons",
              value: userStats.lessonsCompleted,
              subtitle: "completed",
              icon: BookOpen,
              color: "text-emerald-500",
              bg: "bg-emerald-50",
            },
            {
              title: "Due Flashcards",
              value: userStats.dueFlashcards,
              subtitle: userStats.dueFlashcards > 0 ? "to review" : "all caught up",
              icon: Layers,
              color: userStats.dueFlashcards > 0 ? "text-amber-500" : "text-muted-foreground",
              bg: userStats.dueFlashcards > 0 ? "bg-amber-50" : "bg-muted",
            },
          ].map((stat) => (
            <motion.div key={stat.title} variants={itemVariants}>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                      <stat.icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl font-serif text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.subtitle}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="font-serif text-xl text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <Link key={action.title} href={action.href}>
                <Card className="border-0 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
                  <CardContent className="p-5">
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center mb-4`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {action.description}
                    </p>
                    <div className="flex items-center text-sm text-primary font-medium">
                      Start
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Achievements & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="font-serif text-lg">Achievements</CardTitle>
                <Link href="/achievements" className="text-sm text-primary hover:underline">
                  View all
                </Link>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-3">
                  {ACHIEVEMENTS.slice(0, 4).map((ach) => (
                    <div key={ach.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{ach.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{ach.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                {userStats.recentActivity.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Sparkles className="h-10 w-10 mx-auto mb-3 text-muted-foreground/50" />
                    <p>No activity yet. Start a lesson to see your progress!</p>
                    <Link href="/lessons" className="inline-block mt-4">
                      <Button variant="outline" className="gap-2">
                        Browse Lessons
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {userStats.recentActivity.slice(0, 5).map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(activity.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}