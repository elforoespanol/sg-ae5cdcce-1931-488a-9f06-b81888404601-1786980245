import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { User, Target, Bell, Shield, Palette, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ProfileForm } from "@/components/settings/ProfileForm";
import { PasswordChange } from "@/components/settings/PasswordChange";
import { DailyGoalSelector } from "@/components/settings/DailyGoalSelector";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) fetchUserData();
  }, [session]);

  const fetchUserData = async () => {
    try {
      const res = await fetch("/api/user/profile");
      const data = await res.json();
      setUserData(data.user);
    } catch (error) {
      toast.error("Failed to load settings");
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSave = async (data: { name: string; level: string }) => {
    const res = await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Failed to save");
    await fetchUserData();
    toast.success("Profile updated!");
  };

  const handlePasswordChange = async (data: { currentPassword: string; newPassword: string }) => {
    const res = await fetch("/api/user/password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to change password");
    }
    toast.success("Password changed successfully!");
  };

  const handleGoalSave = async (goal: number) => {
    const res = await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dailyGoal: goal }),
    });
    if (!res.ok) throw new Error("Failed to save goal");
    await fetchUserData();
    toast.success("Daily goal updated!");
  };

  const handleToggle = async (field: string, value: boolean) => {
    const res = await fetch("/api/user/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [field]: value }),
    });
    if (!res.ok) throw new Error("Failed to update");
    await fetchUserData();
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!userData) return null;

  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-serif font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your profile, learning preferences, and account</p>
      </motion.div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Profile</h2>
              <p className="text-sm text-muted-foreground">Update your name and Spanish level</p>
            </div>
          </div>
          <ProfileForm user={userData} onSave={handleProfileSave} />
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Learning Goals</h2>
              <p className="text-sm text-muted-foreground">Set your daily flashcard target</p>
            </div>
          </div>
          <DailyGoalSelector currentGoal={userData.dailyGoal || 20} onSave={handleGoalSave} />
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
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
              <Switch
                checked={userData.emailReminders}
                onCheckedChange={(v) => handleToggle("emailReminders", v)}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Streak Warnings</Label>
                <p className="text-xs text-muted-foreground">Get warned before you lose your study streak</p>
              </div>
              <Switch
                checked={userData.streakWarnings}
                onCheckedChange={(v) => handleToggle("streakWarnings", v)}
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Security</h2>
              <p className="text-sm text-muted-foreground">Update your password</p>
            </div>
          </div>
          <PasswordChange onChange={handlePasswordChange} />
        </Card>
      </div>
    </div>
  );
}