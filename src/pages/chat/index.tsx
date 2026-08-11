import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Plus, Clock, ChevronRight, Loader2, BookOpen, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

interface ChatSession {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  lesson: { title: string } | null;
  messages: { content: string; createdAt: string }[];
}

export default function ChatSessionsPage() {
  const { status } = useAuth();
  const router = useRouter();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  // Load sessions from localStorage (client-side, works in preview)
  useEffect(() => {
    const stored = localStorage.getItem("sslid_chat_sessions");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSessions(Array.isArray(parsed) ? parsed : []);
      } catch {
        setSessions([]);
      }
    }
    setIsLoading(false);
  }, []);

  const handleDelete = (sessionId: string) => {
    const updated = sessions.filter((s) => s.id !== sessionId);
    setSessions(updated);
    localStorage.setItem("sslid_chat_sessions", JSON.stringify(updated));
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>AI Tutor — Speak Spanish Like I Did</title>
        <meta name="description" content="Practice Spanish conversations with your AI tutor." />
      </Head>
      <div className="container py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-serif text-3xl font-semibold text-foreground mb-2">
                AI Tutor Chats
              </h1>
              <p className="text-muted-foreground">
                Practice Spanish conversations with Sofía
              </p>
            </div>
            <Button
              onClick={() => router.push("/chat/new")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </div>

          {sessions.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Start your first conversation
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Chat with Sofía, your AI Spanish tutor. Practice speaking, get corrections, and learn naturally.
              </p>
              <Button
                onClick={() => router.push("/chat/new")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
              >
                <Plus className="h-4 w-4" />
                Start New Chat
              </Button>
            </motion.div>
          ) : (
            <div className="grid gap-4">
              <AnimatePresence>
                {sessions.map((chatSession, index) => {
                  const lastMessage = chatSession.messages?.[chatSession.messages.length - 1];
                  return (
                    <motion.div
                      key={chatSession.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card
                        className="cursor-pointer hover:shadow-md transition-shadow border-border/60 group"
                        onClick={() => router.push(`/chat/${chatSession.id}`)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1.5">
                                <h3 className="font-serif text-lg font-semibold text-foreground truncate">
                                  {chatSession.title || "Untitled Chat"}
                                </h3>
                                {chatSession.lesson && (
                                  <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                                    <BookOpen className="h-3 w-3" />
                                    {chatSession.lesson.title}
                                  </span>
                                )}
                              </div>
                              {lastMessage && (
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                                  {lastMessage.content.slice(0, 120)}
                                  {lastMessage.content.length > 120 ? "..." : ""}
                                </p>
                              )}
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {formatDistanceToNow(new Date(chatSession.updatedAt), { addSuffix: true })}
                                </span>
                                <span>{chatSession.messages?.length || 0} messages</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDelete(chatSession.id);
                                }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive"
                                title="Delete chat"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                              <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}