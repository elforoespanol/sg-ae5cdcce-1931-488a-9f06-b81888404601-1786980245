import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Shield, Users, BookOpen, MessageSquare, Layers, Trophy, TrendingUp, UserCheck, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

interface AdminStats {
  totalUsers: number;
  totalLessons: number;
  totalFlashcards: number;
  totalChats: number;
  totalAchievements: number;
  activeToday: number;
  newThisWeek: number;
  avgStudyTime: number;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    if (status === "authenticated" && session?.user?.role !== "ADMIN") {
      router.push("/dashboard");
      return;
    }
    if (status === "authenticated" && session?.user?.role === "ADMIN") {
      fetchStats();
    }
  }, [status, session, router]);

  async function fetchStats() {
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Failed to fetch admin stats:", error);
    } finally {
      setLoading(false);
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          <LoadingSkeleton variant="dashboard" />
        </div>
      </div>
    );
  }

  if (!session?.user || session.user.role !== "ADMIN") {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <Card className="max-w-md w-full text-center p-8">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You don't have permission to access the admin dashboard.</p>
          <Button onClick={() => router.push("/dashboard")}>
            Go to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  const statCards = [
    { label: "Total Users", value: stats?.totalUsers ?? 0, icon: Users, color: "text-blue-600" },
    { label: "Lessons", value: stats?.totalLessons ?? 0, icon: BookOpen, color: "text-emerald-600" },
    { label: "Flashcards", value: stats?.totalFlashcards ?? 0, icon: Layers, color: "text-amber-600" },
    { label: "Chat Sessions", value: stats?.totalChats ?? 0, icon: MessageSquare, color: "text-violet-600" },
    { label: "Achievements", value: stats?.totalAchievements ?? 0, icon: Trophy, color: "text-rose-600" },
    { label: "Active Today", value: stats?.activeToday ?? 0, icon: UserCheck, color: "text-teal-600" },
    { label: "New This Week", value: stats?.newThisWeek ?? 0, icon: TrendingUp, color: "text-orange-600" },
    { label: "Avg Study Time", value: `${stats?.avgStudyTime ?? 0}m`, icon: Clock, color: "text-indigo-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Admin Dashboard — Speak Spanish Like I Did</title>
        <meta name="description" content="Admin dashboard for managing the Spanish learning platform." />
      </Head>

      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground">
            Platform overview and management
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Recent Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                User management features coming soon.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Platform Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Analytics and growth metrics coming soon.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}