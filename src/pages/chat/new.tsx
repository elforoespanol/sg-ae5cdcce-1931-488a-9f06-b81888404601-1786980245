import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";

function generateSessionId() {
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export default function NewChatPage() {
  const { status } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated") {
      // Create session client-side in localStorage (works regardless of Supabase)
      const sessionId = generateSessionId();
      const stored = localStorage.getItem("sslid_chat_sessions");
      const sessions = stored ? JSON.parse(stored) : [];

      sessions.unshift({
        id: sessionId,
        title: "New Chat",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lesson: null,
        messages: [],
      });

      localStorage.setItem("sslid_chat_sessions", JSON.stringify(sessions.slice(0, 50)));
      router.push(`/chat/${sessionId}`);
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}