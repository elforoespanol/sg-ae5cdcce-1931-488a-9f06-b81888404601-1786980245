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
  X,
  ChevronRight,
  Flame,
  Star,
  GraduationCap,
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

  const isAdmin = session?.user?.role === "ADMIN";

  useEffect(() => {
    if (status === "authenticated" && isAdmin) {
      fetchData();
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, isAdmin, router]);

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

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          <LoadingSkeleton variant="dashboard" />
        </div>
      </div>
    );
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
        <title>Admin Dashboard</title>
      </Head>

      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
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
              <Card className="hover:shadow-md transition-shadow border-0">
                <CardContent className="p-5">
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle className="flex items-center gap-2 font-serif text-xl">
                  <Users className="h-5 w-5 text-primary" />
                  Students
                  <Badge variant="outline" className="ml-2">{filteredStudents.length}</Badge>
                </CardTitle>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9 w-full sm:w-64"
                    />
                  </div>
                  <div className="flex gap-2">
                    {subscriptionOptions.map((opt) => (
                      <Button
                        key={opt}
                        variant={filterSub === opt ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterSub(opt)}
                      >
                        {opt === "ALL" ? "All" : opt}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {filteredStudents.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <Search className="h-10 w-10 mx-auto mb-3 text-muted-foreground/50" />
                  <p>No students found matching your criteria.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Student</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Level</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Streak</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Study Time</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Subscription</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Last Active</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Joined</th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr
                          key={student.id}
                          className="border-b border-border/30 hover:bg-muted/30 transition-colors cursor-pointer"
                          onClick={() => fetchStudentDetail(student.id)}
                        >
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                                {(student.name?.[0] || student.email[0]).toUpperCase()}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{student.name || "Unnamed"}</p>
                                <p className="text-xs text-muted-foreground">{student.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className="font-mono text-xs">{student.level}</Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1">
                              <Flame className="h-4 w-4 text-orange-500" />
                              <span className="text-sm">{student.streak}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{student.totalStudyMinutes}m</td>
                          <td className="py-3 px-4">
                            <Badge variant="outline" className={`text-xs ${getSubBadgeColor(student.subscription_type)}`}>
                              {student.subscription_type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{formatDate(student.lastActiveDate)}</td>
                          <td className="py-3 px-4 text-sm text-muted-foreground">{formatDate(student.createdAt)}</td>
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setSelectedStudent(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-full max-w-lg bg-background shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                  <h2 className="text-xl font-serif font-bold">Student Detail</h2>
                  <Button variant="ghost" size="icon" onClick={() => setSelectedStudent(null)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {detailLoading ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                ) : (
                  <ScrollArea className="flex-1">
                    <div className="p-6 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-medium text-primary">
                          {(selectedStudent.student.name?.[0] || selectedStudent.student.email[0]).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{selectedStudent.student.name || "Unnamed"}</h3>
                          <p className="text-sm text-muted-foreground">{selectedStudent.student.email}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className={getSubBadgeColor(selectedStudent.student.subscription_type)}>
                              {selectedStudent.student.subscription_type}
                            </Badge>
                            <Badge variant="outline" className="font-mono text-xs">{selectedStudent.student.level}</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <Card className="border-0 bg-muted/30">
                          <CardContent className="p-4 text-center">
                            <Flame className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                            <p className="text-xl font-bold">{selectedStudent.student.streak}</p>
                            <p className="text-xs text-muted-foreground">Day Streak</p>
                          </CardContent>
                        </Card>
                        <Card className="border-0 bg-muted/30">
                          <CardContent className="p-4 text-center">
                            <Clock className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                            <p className="text-xl font-bold">{selectedStudent.student.totalStudyMinutes}m</p>
                            <p className="text-xs text-muted-foreground">Study Time</p>
                          </CardContent>
                        </Card>
                        <Card className="border-0 bg-muted/30">
                          <CardContent className="p-4 text-center">
                            <GraduationCap className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
                            <p className="text-xl font-bold">{selectedStudent.completedLessons}</p>
                            <p className="text-xs text-muted-foreground">Lessons Done</p>
                          </CardContent>
                        </Card>
                      </div>

                      {selectedStudent.lessonProgress.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-primary" />
                            Lesson Progress
                          </h4>
                          <div className="space-y-2">
                            {selectedStudent.lessonProgress.slice(0, 5).map((lp) => (
                              <div key={lp.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                                <div>
                                  <p className="text-sm font-medium">{lp.lessons?.title || "Unknown Lesson"}</p>
                                  <p className="text-xs text-muted-foreground">{lp.lessons?.difficulty || "N/A"}</p>
                                </div>
                                {lp.isCompleted ? (
                                  <Badge variant="default" className="bg-emerald-100 text-emerald-800">Completed</Badge>
                                ) : (
                                  <Badge variant="outline">In Progress</Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedStudent.flashcards.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Layers className="h-4 w-4 text-amber-500" />
                            Flashcards
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            <Card className="border-0 bg-muted/20">
                              <CardContent className="p-3 text-center">
                                <p className="text-lg font-bold">{selectedStudent.masteredFlashcards}</p>
                                <p className="text-xs text-muted-foreground">Mastered</p>
                              </CardContent>
                            </Card>
                            <Card className="border-0 bg-muted/20">
                              <CardContent className="p-3 text-center">
                                <p className="text-lg font-bold">{selectedStudent.totalFlashcardReviews}</p>
                                <p className="text-xs text-muted-foreground">Total Reviews</p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      )}

                      {selectedStudent.chatSessions.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-violet-500" />
                            Chat Sessions
                          </h4>
                          <div className="space-y-2">
                            {selectedStudent.chatSessions.slice(0, 5).map((cs) => (
                              <div key={cs.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/20">
                                <p className="text-sm">{cs.topic || "General Practice"}</p>
                                <p className="text-xs text-muted-foreground">{formatDate(cs.created_at)}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedStudent.achievements.length > 0 && (
                        <div>
                          <h4 className="font-medium mb-3 flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-rose-500" />
                            Achievements
                          </h4>
                          <div className="space-y-2">
                            {selectedStudent.achievements.slice(0, 5).map((ach) => (
                              <div key={ach.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/20">
                                <Star className="h-4 w-4 text-amber-500" />
                                <div>
                                  <p className="text-sm font-medium">{ach.achievements?.name || "Achievement"}</p>
                                  <p className="text-xs text-muted-foreground">{ach.achievements?.description}</p>
                                </div>
                                <p className="text-xs text-muted-foreground ml-auto">{formatDate(ach.unlocked_at)}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <Separator />
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Account Created</span>
                          <span>{formatDate(selectedStudent.student.createdAt)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Active</span>
                          <span>{formatDate(selectedStudent.student.lastActiveDate)}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}