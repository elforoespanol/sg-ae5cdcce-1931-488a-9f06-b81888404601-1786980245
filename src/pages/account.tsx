export const dynamic = "force-dynamic";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { toast } = useToast();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch("/api/user/delete", {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete account");

      toast({
        title: "Account deleted",
        description: "Your account has been permanently deleted.",
      });

      await signOut({ redirect: true, callbackUrl: "/login" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete account. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account and security preferences</p>
        </div>

        {/* Account Info Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>Your account details and email address</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Email</label>
              <p className="text-lg font-medium">{session?.user?.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Account Type</label>
              <p className="text-lg font-medium">Premium</p>
            </div>
          </CardContent>
        </Card>

        {/* Settings Navigation */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/profile">
              <Button variant="outline" className="w-full justify-start">
                Edit Profile
              </Button>
            </Link>
            <Link href="/password">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
            </Link>
            <Link href="/settings">
              <Button variant="outline" className="w-full justify-start">
                Preferences
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>Irreversible actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Delete Account</p>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all associated data</p>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Delete</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Account</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. All your data will be permanently deleted.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="bg-muted p-3 rounded text-sm my-4">
                    <p className="font-medium mb-2">This will delete:</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Your profile and settings</li>
                      <li>All lessons and progress</li>
                      <li>All flashcards and study data</li>
                      <li>Chat history and tutoring sessions</li>
                    </ul>
                  </div>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteAccount} className="bg-destructive hover:bg-destructive/90">
                    Delete Permanently
                  </AlertDialogAction>
                </AlertDialogContent>
              </AlertDialog>
            </div>

            <div className="pt-4 border-t">
              <Button onClick={() => signOut({ redirect: true, callbackUrl: "/" })} variant="outline" className="w-full">
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}