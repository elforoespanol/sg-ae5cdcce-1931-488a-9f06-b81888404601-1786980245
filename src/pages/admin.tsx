import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  BookOpen,
  MessageSquare,
  Layers,
  Trophy,
  TrendingUp,
  UserCheck,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  X,
  ChevronRight,
  Flame,
  Star,
  CreditCard,
  GraduationCap,
  Calendar,
  Activity,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

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

interface Student {
  id: string;
  name: string | null;
  email: string;
  level: string;
  streak: number;
  lastActiveDate: string | null;
  totalStudyMinutes: number;
  createdAt: string;
  subscription_type: string;
}

interface StudentDetail {
  student: Student & { image: string | null; role: string };
  completedLessons: number;
  masteredFlashcards: number;
  totalFlashcardReviews: number;
  lessonProgress: Array<{
    id: string;
    isCompleted: boolean;
    completedAt: string | null;
    lessons: { title: string; slug: string; difficulty: string } | null;
  }>;
  flashcards: Array<{
    id: string;
    word: string;
    is_mastered: boolean;
    total_reviews: number;
  }>;
  chatSessions: Array<{
    id: string;
    created_at: string;
    topic: string | null;
  }>;
  achievements: Array<{
    id: string;
    unlocked_at: string;
    achievements: { name: string; description: string; icon_name: string } | null;
  }>;
}

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<StudentDetail | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSub, setFilterSub] = useState<string>("ALL");
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [fallbackUser, setFallbackUser] = useState<{email: string; role: string} | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("sslid_auth_fallback");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Date.now() - parsed.timestamp < 30 * 24 * 60 * 60 * 1000) {
            setFallbackUser(parsed);
          } else {
            localStorage.removeItem("sslid_auth_fallback");
          }
        } catch {
          localStorage.removeItem("sslid_auth_fallback");
        }
      }
    }
    setMounted(true);
  }, []);

  const isAdmin = session?.user?.role === "ADMIN" || fallbackUser?.role === "ADMIN";
  const isAuthenticated = !!session?.user || !!fallbackUser;

  useEffect(() => {
    if (!mounted || status === "loading") return;

    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    if (isAdmin) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [mounted, status, isAuthenticated, isAdmin, router]);

  async function fetchData() {
    try {
      const [statsRes, studentsRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/students"),
      ]);

      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
      }

      if (studentsRes.ok) {
        const studentsData = await studentsRes.json();
        setStudents(studentsData.students || []);
      }
    } catch (error) {
      console.error("Failed to fetch admin data:", error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchStudentDetail(id: string) {
    setDetailLoading(true);
    try {
      const res = await fetch(`/api/admin/students/${id}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedStudent(data);
      }
    } catch (error) {
      console.error("Failed to fetch student detail:", error);
    } finally {
      setDetailLoading(false);
    }
  }

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      const matchesSearch =
        !searchQuery ||
        (s.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        s.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSub = filterSub === "ALL" || s.subscription_type === filterSub;
      return matchesSearch && matchesSub;
    });
  }, [students, searchQuery, filterSub]);

  const subscriptionOptions = ["ALL", "FREE", "PRO", "ENTERPRISE"];

  const statCards = [
    { label: "Total Users", value: stats?.totalUsers ?? 0, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Lessons", value: stats?.totalLessons ?? 0, icon: BookOpen, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Flashcards", value: stats?.totalFlashcards ?? 0, icon: Layers, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Chat Sessions", value: stats?.totalChats ?? 0, icon: MessageSquare, color: "text-violet-600", bg: "bg-violet-50" },
    { label: "Achievements", value: stats?.totalAchievements ?? 0, icon: Trophy, color: "text-rose-600", bg: "bg-rose-50" },
    { label: "Active Today", value: stats?.activeToday ?? 0, icon: UserCheck, color: "text-teal-600", bg: "bg-teal-50" },
    { label: "New This Week", value: stats?.newThisWeek ?? 0, icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Avg Study Time", value: `${stats?.avgStudyTime ?? 0}m`, icon: Clock, color: "text-indigo-600", bg: "bg-indigo-50" },
  ];

  if (!mounted || status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          <LoadingSkeleton variant="dashboard" />
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <Card className="max-w-md w-full text-center p-8">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-4" />
          <h1 className="text-xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-6">You do not have permission to access the admin dashboard.</p>
          <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          <LoadingSkeleton variant="dashboard" />
        </div>
      </div>
    );
  }

  function getSubBadgeColor(sub: string) {
    switch (sub) {
      case "PRO":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "ENTERPRISE":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  }

  function formatDate(date: string | null) {
    if (!date) return "Never";
    const d = new Date(date);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return d.toLocaleDateString();
  }

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Admin Dashboard — Speak Spanish Like I Did</title>
      </Head>

      <div className="container py-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-serif font-bold">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground">Monitor students, progress, and platform activity</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center mb-3`}>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <CardTitle className="text-xl">Students</CardTitle>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <div className="flex gap-2">
                    {subscriptionOptions.map((sub) => (
                      <Button
                        key={sub}
                        variant={filterSub === sub ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterSub(sub)}
                      >
                        {sub === "ALL" ? "All" : sub}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {filteredStudents.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No students found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Level</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Streak</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Study Time</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Subscription</th>
                        <th className="text-left py-3 px-4 font-medium text-muted-foreground text-sm">Last Active</th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr
                          key={student.id}
                          className="border-b hover:bg-muted/50 cursor-pointer transition-colors"
                          onClick={() => fetchStudentDetail(student.id)}
                        >
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{student.name || "Anonymous"}</p>
                              <p className="text-sm text-muted-foreground">{student.email}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline">{student.level}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <Flame className="h-4 w-4 text-orange-500" />
                              <span>{student.streak}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">{student.totalStudyMinutes}m</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className={getSubBadgeColor(student.subscription_type)}>
                              {student.subscription_type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{formatDate(student.lastActiveDate)}</td>
                          <td className="py-3 px-4">
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex justify-end"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-background w-full max-w-lg h-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{selectedStudent.student?.name || "Student Details"}</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedStudent(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {detailLoading ? (
                  <LoadingSkeleton variant="card" />
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="h-5 w-5 text-primary" />
                            <p className="text-sm text-muted-foreground">Level</p>
                          </div>
                          <p className="text-2xl font-bold">{selectedStudent.student?.level || "N/A"}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Flame className="h-5 w-5 text-orange-500" />
                            <p className="text-sm text-muted-foreground">Streak</p>
                          </div>
                          <p className="text-2xl font-bold">{selectedStudent.student?.streak || 0}</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            <p className="text-sm text-muted-foreground">Study Time</p>
                          </div>
                          <p className="text-2xl font-bold">{selectedStudent.student?.totalStudyMinutes || 0}m</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="h-5 w-5 text-amber-500" />
                            <p className="text-sm text-muted-foreground">Lessons Done</p>
                          </div>
                          <p className="text-2xl font-bold">{selectedStudent.completedLessons || 0}</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Lesson Progress
                      </h3>
                      {selectedStudent.lessonProgress?.length > 0 ? (
                        <div className="space-y-2">
                          {selectedStudent.lessonProgress.map((lp) => (
                            <div key={lp.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <div>
                                <p className="font-medium">{lp.lessons?.title || "Unknown Lesson"}</p>
                                <p className="text-sm text-muted-foreground">{lp.lessons?.difficulty || ""}</p>
                              </div>
                              <Badge variant={lp.isCompleted ? "default" : "outline"}>
                                {lp.isCompleted ? "Completed" : "In Progress"}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">No lesson progress yet</p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Layers className="h-5 w-5 text-primary" />
                        Flashcards
                      </h3>
                      {selectedStudent.flashcards?.length > 0 ? (
                        <div className="space-y-2">
                          {selectedStudent.flashcards.map((fc) => (
                            <div key={fc.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <p className="font-medium">{fc.word}</p>
                              <div className="flex items-center gap-2">
                                <Badge variant={fc.is_mastered ? "default" : "outline"}>
                                  {fc.is_mastered ? "Mastered" : "Learning"}
                                </Badge>
                                <span className="text-sm text-muted-foreground">{fc.total_reviews} reviews</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">No flashcards yet</p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-primary" />
                        Chat Sessions
                      </h3>
                      {selectedStudent.chatSessions?.length > 0 ? (
                        <div className="space-y-2">
                          {selectedStudent.chatSessions.map((cs) => (
                            <div key={cs.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                              <p className="font-medium">{cs.topic || "General Chat"}</p>
                              <span className="text-sm text-muted-foreground">{formatDate(cs.created_at)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">No chat sessions yet</p>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        Achievements
                      </h3>
                      {selectedStudent.achievements?.length > 0 ? (
                        <div className="space-y-2">
                          {selectedStudent.achievements.map((a) => (
                            <div key={a.id} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                                <Star className="h-5 w-5 text-amber-500" />
                              </div>
                              <div>
                                <p className="font-medium">{a.achievements?.name || "Achievement"}</p>
                                <p className="text-sm text-muted-foreground">{a.achievements?.description || ""}</p>
                              </div>
                              <span className="text-sm text-muted-foreground ml-auto">{formatDate(a.unlocked_at)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-muted-foreground text-sm">No achievements yet</p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}