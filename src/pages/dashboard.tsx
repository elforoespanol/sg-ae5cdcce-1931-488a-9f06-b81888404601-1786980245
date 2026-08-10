import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageSquare,
  Layers,
  Flame,
  Trophy,
  Clock,
  ChevronRight,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { DashboardStats } from "@/components/DashboardStats";
import { LessonCard } from "@/components/LessonCard";
import { StreakCalendar } from "@/components/dashboard/StreakCalendar";
import { XPProgress } from "@/components/dashboard/XPProgress";

interface Stats {
  streak: number;
  lastActiveDate: string | null;
  totalStudyMinutes: number;
  level: string;
  lessonsCompleted: number;
  chatMessages: number;
  flashcardsReviewed: number;
  flashcardsMastered: number;
  dueFlashcards: number;
  totalXp: number;
  recentActivity: Array<{
    type: string;
    description: string;
    date: string;
  }>;
  unlockedAchievements: Array<{
    id: string;
    name: string;
    description: string;
    icon: string;
    unlockedAt: string;
  }>;
}

export default function DashboardPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<Stats | null>(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading" && !authUser) {
      router.push("/login");
    }
  }, [status, authUser, router]);

  useEffect(() => {
    if (authUser) {
      fetchDashboardData();
    }
  }, [authUser]);

  async function fetchDashboardData() {
    try {
      const [statsRes, lessonsRes] = await Promise.all([
        fetch("/api/user/stats"),
        fetch("/api/lessons"),
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      if (lessonsRes.ok) {
        const lessonsData = await lessonsRes.json();
        setLessons(Array.isArray(lessonsData) ? lessonsData.slice(0, 3) : []);
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setLoading(false);
    }
  }

  if (status === "loading" || (loading && authUser)) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          <LoadingSkeleton variant="dashboard" />
        </div>
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <Card className="max-w-md w-full text-center p-8">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Authentication Required</h1>
          <p className="text-muted-foreground mb-6">Please sign in to access your dashboard.</p>
          <Button onClick={() => router.push("/login")}>Go to Login</Button>
        </Card>
      </div>
    );
  }

  const quickActions = [
    {
      title: "Continue Learning",
      description: "Pick up where you left off",
      icon: BookOpen,
      href: "/lessons",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "Practice Flashcards",
      description: `${stats?.dueFlashcards || 0} cards due for review`,
      icon: Layers,
      href: "/flashcards",
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "AI Tutor",
      description: "Practice conversation",
      icon: MessageSquare,
      href: "/chat",
      color: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Dashboard — Speak Spanish Like I Did</title>
      </Head>

      <div className="container py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-3xl font-serif font-bold">
            ¡Hola, {authUser?.name || authUser?.email?.split("@")[0] || "Learner"}!
          </h1>
          <p className="text-muted-foreground">Ready to continue your Spanish journey?</p>
        </motion.div>

        <DashboardStats
          streak={stats?.streak || 0}
          totalStudyMinutes={stats?.totalStudyMinutes || 0}
          lessonsCompleted={stats?.lessonsCompleted || 0}
          dueFlashcards={stats?.dueFlashcards || 0}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                        <action.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recommended Lessons</h2>
              <Button variant="ghost" size="sm" onClick={() => router.push("/lessons")}>
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lessons.map((lesson: any) => (
                <LessonCard
                  key={lesson.id}
                  id={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level}
                  difficulty={lesson.difficulty}
                  durationMinutes={lesson.durationMinutes}
                  imageUrl={lesson.imageUrl}
                  progress={lesson.progress}
                  order={lesson.order}
                />
              ))}
            </div>

            {stats?.recentActivity && stats.recentActivity.length > 0 && (
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {stats.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.date ? new Date(activity.date).toLocaleDateString() : "Recently"}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <XPProgress totalXp={stats?.totalXp || 0} />

            <StreakCalendar streak={stats?.streak || 0} longestStreak={stats?.streak || 0} />

            {stats?.unlockedAchievements && stats.unlockedAchievements.length > 0 && (
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {stats.unlockedAchievements.slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center">
                    <Flame className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stats?.streak || 0}</p>
                    <p className="text-sm text-muted-foreground">Day Streak</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}