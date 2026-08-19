import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { User, Target, Bell, Shield, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { PasswordChange } from "@/components/settings/PasswordChange";
import { DailyGoalSelector } from "@/components/settings/DailyGoalSelector";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export async function getServerSideProps() {
  return { props: {} };
}

export default function SettingsPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Local form state
  const [name, setName] = useState("");
  const [level, setLevel] = useState("A1");
  const [dailyGoal, setDailyGoal] = useState(20);
  const [emailReminders, setEmailReminders] = useState(false);
  const [streakWarnings, setStreakWarnings] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (authUser) {
      fetchUserData();
    }
  }, [authUser]);

  const fetchUserData = async () => {
    try {
      const res = await fetch("/api/user/profile");
      if (res.ok) {
        const data = await res.json();
        setUserData(data.user);
        // Initialize form state
        setName(data.user?.name || authUser?.name || "");
        setLevel(data.user?.level || authUser?.level || "A1");
        setDailyGoal(data.user?.dailyGoal || 20);
        setEmailReminders(data.user?.emailReminders || false);
        setStreakWarnings(data.user?.streakWarnings || false);
      } else {
        // Use auth context data as fallback
        setName(authUser?.name || "");
        setLevel(authUser?.level || "A1");
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, level }),
      });
      if (!res.ok) throw new Error("Failed to save");
      toast.success("Profile updated!");
    } catch (error) {
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const currentPassword = (form.elements.namedItem("currentPassword") as HTMLInputElement)?.value;
    const newPassword = (form.elements.namedItem("newPassword") as HTMLInputElement)?.value;
    const confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement)?.value;

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("/api/user/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to change password");
      }
      toast.success("Password changed successfully!");
      form.reset();
    } catch (error: any) {
      toast.error(error.message || "Failed to change password");
    }
  };

  const handleGoalSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dailyGoal }),
      });
      if (!res.ok) throw new Error("Failed to save goal");
      toast.success("Daily goal updated!");
    } catch (error) {
      toast.error("Failed to update goal");
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading" || (loading && authUser)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
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

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Settings — Speak Spanish Like I Did</title>
      </Head>
      <div className="container max-w-3xl py-8 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-serif font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your profile, learning preferences, and account</p>
        </motion.div>

        <div className="space-y-6">
          {/* Profile */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Profile</h2>
                  <p className="text-sm text-muted-foreground">Update your name and Spanish level</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="level">Spanish Level</Label>
                  <Select value={level} onValueChange={setLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      {["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => (
                        <SelectItem key={l} value={l}>{l} — {getLevelLabel(l)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleProfileSave} disabled={saving}>
                  {saving ? "Saving..." : "Save Profile"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Learning Goals */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Learning Goals</h2>
                  <p className="text-sm text-muted-foreground">Set your daily flashcard target</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="dailyGoal">Daily Flashcard Goal</Label>
                  <Input
                    id="dailyGoal"
                    type="number"
                    min={5}
                    max={100}
                    value={dailyGoal}
                    onChange={(e) => setDailyGoal(Number(e.target.value))}
                  />
                </div>
                <Button onClick={handleGoalSave} disabled={saving}>
                  {saving ? "Saving..." : "Save Goal"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Notifications</h2>
                  <p className="text-sm text-muted-foreground">Choose what you want to be notified about</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Reminders</Label>
                    <p className="text-xs text-muted-foreground">Receive daily study reminders via email</p>
                  </div>
                  <Switch checked={emailReminders} onCheckedChange={setEmailReminders} />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Streak Warnings</Label>
                    <p className="text-xs text-muted-foreground">Get warned before you lose your study streak</p>
                  </div>
                  <Switch checked={streakWarnings} onCheckedChange={setStreakWarnings} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Security</h2>
                  <p className="text-sm text-muted-foreground">Update your password</p>
                </div>
              </div>
              <form onSubmit={handlePasswordChange} className="space-y-3">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" name="currentPassword" type="password" required />
                </div>
                <div>
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" name="newPassword" type="password" required minLength={8} />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" name="confirmPassword" type="password" required />
                </div>
                <Button type="submit">Change Password</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function getLevelLabel(level: string): string {
  const labels: Record<string, string> = {
    A1: "Beginner",
    A2: "Elementary",
    B1: "Intermediate",
    B2: "Upper Intermediate",
    C1: "Advanced",
    C2: "Mastery",
  };
  return labels[level] || level;
}