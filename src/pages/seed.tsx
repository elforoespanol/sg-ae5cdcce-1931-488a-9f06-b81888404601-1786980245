import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, CheckCircle, AlertTriangle, Database, User, BookOpen, Trophy } from "lucide-react";

export const dynamic = "force-dynamic";

export default function SeedPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
    raw?: string;
    data?: {
      admin: string;
      lessonsCreated: number;
      totalLessons: number;
      totalAchievements: number;
    };
  } | null>(null);

  const runSeed = async () => {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/init-db?_=" + Date.now(), { method: "POST" });
      const contentType = res.headers.get("content-type") || "";
      const text = await res.text();

      // If response is HTML (error page), show raw text
      if (!contentType.includes("application/json")) {
        setResult({
          success: false,
          message: "Server returned HTML instead of JSON. The API route may not exist or the server needs restarting.",
          raw: text.substring(0, 500),
        });
        setLoading(false);
        return;
      }

      const data = JSON.parse(text);

      if (res.ok) {
        setResult({
          success: true,
          message: data.message,
          data: {
            admin: data.admin,
            lessonsCreated: data.lessonsCreated,
            totalLessons: data.totalLessons,
            totalAchievements: data.totalAchievements,
          },
        });
      } else {
        setResult({
          success: false,
          message: data.message || data.error || "Unknown error occurred",
          raw: data.details ? JSON.stringify(data.details, null, 2) : undefined,
        });
      }
    } catch (error) {
      setResult({
        success: false,
        message: error instanceof Error ? error.message : "Failed to connect to server",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Head>
        <title>Seed Database — Speak Spanish Like I Did</title>
        <meta name="description" content="Initialize database with seed data" />
      </Head>

      <Card className="w-full max-w-lg shadow-xl border-2">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
            <Database className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-serif">Database Setup</CardTitle>
          <CardDescription>
            Initialize your database with the admin account and all 20 Spanish lessons
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <User className="h-4 w-4 text-primary shrink-0" />
              <span>Admin account: <strong className="text-foreground">admin@sslid.com</strong> / <strong className="text-foreground">Admin123!</strong></span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <BookOpen className="h-4 w-4 text-primary shrink-0" />
              <span>20 Spanish lessons (A1 through C2)</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Trophy className="h-4 w-4 text-primary shrink-0" />
              <span>8 Achievement badges</span>
            </div>
          </div>

          <Button
            onClick={runSeed}
            disabled={loading}
            className="w-full h-12 text-base font-semibold"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Seeding Database...
              </>
            ) : (
              <>
                <Database className="mr-2 h-5 w-5" />
                Seed Database
              </>
            )}
          </Button>

          {result && (
            <Alert
              variant={result.success ? "default" : "destructive"}
              className={result.success ? "border-green-500/50 bg-green-50" : ""}
            >
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <AlertTriangle className="h-4 w-4" />
              )}
              <AlertDescription className="space-y-2">
                <p className="font-medium">{result.message}</p>
                {result.data && (
                  <div className="text-sm space-y-1 pt-2 border-t border-border/50">
                    <p>Admin: {result.data.admin}</p>
                    <p>Lessons created: {result.data.lessonsCreated}</p>
                    <p>Total lessons: {result.data.totalLessons}</p>
                    <p>Total achievements: {result.data.totalAchievements}</p>
                  </div>
                )}
                {result.raw && (
                  <pre className="text-xs bg-black/5 p-2 rounded overflow-auto max-h-40">
                    {result.raw}
                  </pre>
                )}
              </AlertDescription>
            </Alert>
          )}

          <div className="text-center text-xs text-muted-foreground pt-2">
            After seeding, go to{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              /login
            </Link>{" "}
            to sign in
          </div>
        </CardContent>
      </Card>
    </div>
  );
}