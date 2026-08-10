import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { AchievementCard } from "@/components/achievements/AchievementCard";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { useAuth } from "@/contexts/AuthContext";

interface UnlockedAchievement {
  achievementId: string;
  unlockedAt: string;
}

export default function AchievementsPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [unlocked, setUnlocked] = useState<UnlockedAchievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (!authUser?.id) return;
    async function fetchUnlocked() {
      try {
        const res = await fetch("/api/user/stats");
        if (res.ok) {
          const data = await res.json();
          setUnlocked(data.achievements || []);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchUnlocked();
  }, [authUser?.id]);

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!authUser) return null;

  const unlockedIds = new Set(unlocked.map((u) => u.achievementId));
  const recentlyUnlocked = unlocked
    .sort((a, b) => new Date(b.unlockedAt).getTime() - new Date(a.unlockedAt).getTime())
    .slice(0, 3);

  const byCategory: Record<string, typeof ACHIEVEMENTS> = {};
  ACHIEVEMENTS.forEach((ach) => {
    if (!byCategory[ach.category]) byCategory[ach.category] = [];
    byCategory[ach.category].push(ach);
  });

  const categoryLabels: Record<string, string> = {
    lessons: "Lessons",
    chat: "Conversations",
    flashcards: "Flashcards",
    streak: "Streaks",
    special: "Special",
  };

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Achievements — Speak Spanish Like I Did</title>
        <meta name="description" content="Track your Spanish learning achievements and milestones." />
      </Head>
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="h-8 w-8 text-amber-500" />
            <h1 className="font-serif text-3xl md:text-4xl text-foreground">Achievements</h1>
          </div>
          <p className="text-muted-foreground">
            {unlocked.length} of {ACHIEVEMENTS.length} unlocked
          </p>
        </motion.div>

        {recentlyUnlocked.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <h2 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              Recently Unlocked
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentlyUnlocked.map((u) => {
                const ach = ACHIEVEMENTS.find((a) => a.id === u.achievementId);
                if (!ach) return null;
                return (
                  <AchievementCard
                    key={ach.id}
                    id={ach.id}
                    name={ach.name}
                    description={ach.description}
                    iconName={ach.iconName}
                    category={ach.category}
                    unlockedAt={new Date(u.unlockedAt)}
                  />
                );
              })}
            </div>
          </motion.div>
        )}

        {Object.entries(byCategory).map(([category, achievements], ci) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + ci * 0.1 }}
            className="mb-8"
          >
            <h2 className="font-serif text-lg text-foreground mb-4">
              {categoryLabels[category] || category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((ach) => (
                <AchievementCard
                  key={ach.id}
                  id={ach.id}
                  name={ach.name}
                  description={ach.description}
                  iconName={ach.iconName}
                  category={ach.category}
                  unlockedAt={unlockedIds.has(ach.id) ? new Date() : null}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}