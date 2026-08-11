import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Plus, Clock, ChevronRight, Loader2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export default function ChatSessionsPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    const stored = localStorage.getItem("sslid_chat_sessions");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSessions(parsed);
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.error("Failed to parse chat sessions from localStorage", e);
      }
    }

    const token = localStorage.getItem("sslid_auth_token") || sessionStorage.getItem("sslid_auth_token");
    fetch("/api/tutor/sessions", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then((res) => res.json())
      .then((data) => {
        setSessions(data.sessions || []);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch sessions:", err);
        setIsLoading(false);
      });
  }, [status]);

  const handleStartNewChat = () => {
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
    
    const sessionsList = JSON.parse(localStorage.getItem("sslid_chat_sessions") || "[]");
    sessionsList.unshift({
      id: sessionId,
      title: "New Chat",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    localStorage.setItem("sslid_chat_sessions", JSON.stringify(sessionsList.slice(0, 50)));
    
    router.push(`/chat/${sessionId}`);
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero pb-16">
      <Head>
        <title>AI Tutor — Speak Spanish Like I Did</title>
      </Head>

      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold">AI Tutor</h1>
              <p className="text-muted-foreground mt-1">
                Practice Spanish conversation with Sofía, your AI tutor
              </p>
            </div>
            <Button onClick={handleStartNewChat} className="gap-2">
              <Plus className="h-4 w-4" />
              Start New Chat
            </Button>
          </div>
        </motion.div>

        {sessions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-amber-100 mb-4">
              <MessageSquare className="h-8 w-8 text-amber-700" />
            </div>
            <h2 className="font-serif text-xl font-semibold mb-2">No conversations yet</h2>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Start a new chat to practice Spanish with your AI tutor Sofía
            </p>
            <Button onClick={handleStartNewChat} className="gap-2">
              <Plus className="h-4 w-4" />
              Start New Chat
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <AnimatePresence>
              {sessions.map((session) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Card
                    className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => router.push(`/chat/${session.id}`)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center">
                            <MessageSquare className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{session.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {session.updatedAt
                                ? formatDistanceToNow(new Date(session.updatedAt), { addSuffix: true })
                                : "Recently"}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}