import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  Clock,
  TrendingUp,
  BookOpen,
  MessageSquare,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  const stats = [
    {
      title: "Daily Streak",
      value: "0",
      subtitle: "days",
      icon: Flame,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
    {
      title: "Study Time",
      value: "0",
      subtitle: "minutes",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      title: "Level",
      value: session.user.level || "A1",
      subtitle: "CEFR",
      icon: TrendingUp,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Lessons",
      value: "0",
      subtitle: "completed",
      icon: BookOpen,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

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
      description: "Strengthen your vocabulary",
      icon: Layers,
      href: "/flashcards",
      color: "bg-accent/20 text-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <div className="container py-8">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
            Hola, {session.user.name || "Learner"}! 👋
          </h1>
          <p className="text-muted-foreground">
            Ready to continue your Spanish journey?
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat) => (
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

        {/* Recent Activity Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-center py-12 text-muted-foreground">
                <BookOpen className="h-10 w-10 mx-auto mb-3 text-muted-foreground/50" />
                <p>No activity yet. Start a lesson to see your progress!</p>
                <Link href="/lessons" className="inline-block mt-4">
                  <Button variant="outline" className="gap-2">
                    Browse Lessons
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}