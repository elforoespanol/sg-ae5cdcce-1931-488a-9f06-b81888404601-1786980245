import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { User, Mail, Award, Calendar, GraduationCap, Flame, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLevelInfo, getLevelColor } from "@/lib/achievements";
import { formatDate } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import Link from "next/link";

export async function getServerSideProps() {
  return { props: {} };
}

export default function ProfilePage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<any>(null);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (authUser) {
      fetchData();
    }
  }, [authUser]);

  const fetchData = async () => {
    try {
      const [statsRes, achRes] = await Promise.all([
        fetch("/api/user/stats"),
        fetch("/api/achievements/check", { method: "POST" }),
      ]);
      if (statsRes.ok) {
        const s = await statsRes.json();
        setStats(s);
      }
      if (achRes.ok) {
        const a = await achRes.json();
        setAchievements(a.achievements || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading" || (loading && authUser)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Redirecting to login...</p>
      </div>
    );
  }

  const levelInfo = getLevelInfo(stats?.totalXp || 0);

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Profile — Speak Spanish Like I Did</title>
      </Head>
      <div className="container max-w-3xl py-8 space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="h-28 w-28 mx-auto rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-lg">
            {authUser.image ? (
              <img src={authUser.image} alt={authUser.name || ""} className="h-full w-full rounded-full object-cover" />
            ) : (
              <User className="h-14 w-14 text-primary/60" />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold">{authUser.name || "Spanish Learner"}</h1>
            <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
              <Badge className={`${getLevelColor(authUser.level as any)} text-white`}>
                {authUser.level || "A1"}
              </Badge>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{levelInfo.title}</span>
            </div>
          </div>
        </motion.div>

        {/* User Details Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Account Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{authUser.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Spanish Level</p>
                    <p className="font-medium">{authUser.level || "A1"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Member Since</p>
                    <p className="font-medium">{formatDate(new Date().toISOString())}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                    <p className="font-medium">{stats?.streak || 0} days</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-lg font-semibold mb-4">Learning Progress</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Lessons Done", value: stats?.lessonsCompleted || 0, icon: BookOpen },
              { label: "Study Hours", value: `${Math.round((stats?.totalStudyMinutes || 0) / 60)}`, icon: Calendar },
              { label: "Flashcards", value: stats?.flashcardsReviewed || 0, icon: Award },
              { label: "Total XP", value: stats?.totalXp || 0, icon: Trophy },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <Card className="p-4 text-center space-y-2 hover:shadow-md transition-shadow">
                  <stat.icon className="h-5 w-5 mx-auto text-primary" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.filter((a: any) => a.unlocked).length > 0 ? (
                  achievements.filter((a: any) => a.unlocked).map((ach: any) => (
                    <div key={ach.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{ach.name}</p>
                        <p className="text-sm text-muted-foreground">{ach.description}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{formatDate(ach.unlockedAt)}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No achievements yet. Complete lessons and practice flashcards to earn them!
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}