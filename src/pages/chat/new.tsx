import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";

export default function NewChatPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status !== "authenticated") return;

    // Create a local session client-side (no API needed)
    const sessionId = `local-chat-${Date.now()}`;
    const userId = authUser?.id || authUser?.email || "anonymous";
    const userName = authUser?.name || authUser?.email || "Student";
    const newSession = {
      id: sessionId,
      userId,
      userName,
      title: "New Chat",
      topic: "general",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: [],
    };
    localStorage.setItem(`sslid_chat_session_${sessionId}`, JSON.stringify(newSession));
    
    // Also update the sessions list
    const sessionsList = JSON.parse(localStorage.getItem("sslid_chat_sessions") || "[]");
    sessionsList.unshift({
      id: sessionId,
      title: "New Chat",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    localStorage.setItem("sslid_chat_sessions", JSON.stringify(sessionsList.slice(0, 50)));
    
    router.push(`/chat/${sessionId}`);
  }, [status, authUser, router]);

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-destructive">{error}</p>
          <button 
            onClick={() => router.push("/chat")}
            className="text-primary hover:underline"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}