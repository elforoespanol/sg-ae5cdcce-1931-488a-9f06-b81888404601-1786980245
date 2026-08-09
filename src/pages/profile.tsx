import Head from "next/head";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { User, BookOpen, Flame, Clock, Award, Library, Trophy, TrendingUp, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLevelInfo, getLevelColor } from "@/lib/achievements";
import { formatDate } from "@/lib/utils";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchStats();
      fetchAchievements();
    }
  }, [session]);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/user/stats");
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAchievements = async () => {
    try {
      const res = await fetch("/api/achievements/check", { method: "POST" });
      const data = await res.json();
      setAchievements(data.achievements || []);
    } catch (error) {
      console.error(error);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session?.user) return null;

  const user = session.user;
  const levelInfo = getLevelInfo(stats?.user?.xp || 0);

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <Head>
        <title>Profile — Speak Spanish Like I Did</title>
        <meta name="description" content="View your Spanish learning profile and public stats." />
      </Head>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <div className="h-24 w-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-4xl">
          {user.image ? (
            <img src={user.image} alt={user.name || ""} className="h-full w-full rounded-full object-cover" />
          ) : (
            <span className="text-3xl">👤</span>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-serif font-bold">{user.name || "Student"}</h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Badge className={`${getLevelColor(user.level as any)} text-white`}>
              {user.level}
            </Badge>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Level {levelInfo.level} {levelInfo.title}</span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Lessons", value: stats?.lessonsCompleted || 0, icon: BookOpen },
          { label: "Streak", value: `${stats?.user?.streak || 0} days`, icon: Flame },
          { label: "Study Time", value: `${Math.round((stats?.user?.totalStudyMinutes || 0) / 60)}h`, icon: Clock },
          { label: "Flashcards", value: stats?.dueFlashcards || 0, icon: Library },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-4 text-center space-y-2">
              <stat.icon className="h-5 w-5 mx-auto text-primary" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:col-span-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Study Activity
            </h2>
            <div className="h-48 flex items-end justify-between gap-2">
              {stats?.activity?.map((day: any, i: number) => {
                const maxMinutes = Math.max(...stats.activity.map((d: any) => d.minutes), 1);
                const height = day.minutes > 0 ? Math.max((day.minutes / maxMinutes) * 100, 8) : 4;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="w-full max-w-[40px] rounded-t bg-primary/20 hover:bg-primary/40 transition-colors"
                    />
                    <span className="text-[10px] text-muted-foreground">{day.day}</span>
                  </div>
                );
              }) || <p className="text-sm text-muted-foreground">No activity data yet</p>}
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Achievements
            </h2>
            <div className="space-y-3">
              {achievements.filter((a: any) => a.unlocked).slice(0, 5).map((ach: any) => (
                <div key={ach.id} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{ach.name}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(ach.unlockedAt)}</p>
                  </div>
                </div>
              ))}
              {achievements.filter((a: any) => a.unlocked).length === 0 && (
                <p className="text-sm text-muted-foreground">No achievements yet. Keep studying!</p>
              )}
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Vocabulary Lists
          </h2>
          <p className="text-sm text-muted-foreground">Create vocabulary lists from the flashcards page to see them here.</p>
        </Card>
      </motion.div>
    </div>
  );
}