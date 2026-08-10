import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { Loader2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewChatPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated" && authUser?.id) {
      // Create a new session via the chat API
      fetch("/api/tutor/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: "New Chat", topic: "general" }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.session?.id) {
            router.push(`/chat/${data.session.id}`);
          } else {
            // Fallback: redirect to chat list
            router.push("/chat");
          }
        })
        .catch((err) => {
          console.error("Failed to create chat session:", err);
          setError("Failed to start new chat. Please try again.");
        });
    }
  }, [status, authUser?.id, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-destructive mx-auto" />
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={() => router.push("/chat")}>Back to Chats</Button>
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