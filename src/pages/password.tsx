import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PasswordChange } from "@/components/settings/PasswordChange";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";

export async function getServerSideProps() {
  return { props: {} };
}

export default function PasswordPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container py-8">
          <LoadingSkeleton variant="dashboard" />
        </div>
      </div>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>Change Password — Speak Spanish Like I Did</title>
        <meta name="description" content="Update your account password securely." />
      </Head>

      <div className="container max-w-lg py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <Link
            href="/settings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Settings
          </Link>
          <h1 className="text-3xl font-serif font-bold mb-2 flex items-center gap-3">
            <Lock className="h-7 w-7 text-primary" />
            Change Password
          </h1>
          <p className="text-muted-foreground">Update your password to keep your account secure</p>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle>Password Update</CardTitle>
          </CardHeader>
          <CardContent>
            <PasswordChange
              onChange={async (data) => {
                const res = await fetch("/api/user/password", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });
                if (!res.ok) {
                  const err = await res.json();
                  throw new Error(err.message || "Failed to change password");
                }
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}