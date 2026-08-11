import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Loader2, MessageSquare, BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatBubble } from "@/components/chat/ChatBubble";
import { ChatInput } from "@/components/chat/ChatInput";
import { useAITutor } from "@/hooks/useAITutor";

interface ChatMessageData {
  id: string;
  role: "user" | "assistant";
  content: string;
  hasCorrection: boolean;
  originalText: string | null;
  correctedText: string | null;
  explanation: string | null;
  createdAt: string;
}

export default function ChatPage() {
  const { user: authUser, status } = useAuth();
  const router = useRouter();
  const { sessionId } = router.query;
  const [isLoading, setIsLoading] = useState(true);
  const [sessionTitle, setSessionTitle] = useState("");
  const [lessonTitle, setLessonTitle] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    messages,
    isLoading: aiLoading,
    error,
    sendMessage,
    setInitialMessages,
  } = useAITutor({ sessionId: sessionId as string });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (!sessionId || typeof sessionId !== "string") return;

    // Client-side session: load from localStorage
    if (sessionId.startsWith("local-chat-")) {
      const localSession = localStorage.getItem(`sslid_chat_session_${sessionId}`);
      if (localSession) {
        try {
          const parsed = JSON.parse(localSession);
          setSessionTitle(parsed.title || "Chat with Sofía");
          setInitialMessages(parsed.messages || []);
        } catch (e) {
          console.error("Failed to parse local session:", e);
        }
      }
      setIsLoading(false);
      return;
    }

    // Server-side session: fetch from API
    fetch(`/api/tutor/messages?sessionId=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.messages) {
          const formatted = data.messages.map((m: ChatMessageData) => ({
            id: m.id,
            role: m.role as "user" | "assistant",
            content: m.content,
            hasCorrection: m.hasCorrection,
            originalText: m.originalText || undefined,
            correctedText: m.correctedText || undefined,
            explanation: m.explanation || undefined,
            createdAt: m.createdAt,
          }));
          setInitialMessages(formatted);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));

    // Fetch session info
    fetch(`/api/tutor/sessions`)
      .then((res) => res.json())
      .then((data) => {
        if (data.sessions) {
          const s = data.sessions.find((sess: any) => sess.id === sessionId);
          if (s) {
            setSessionTitle(s.title || "Chat with Sofía");
            if (s.lesson) setLessonTitle(s.lesson.title);
          }
        }
      })
      .catch(console.error);
  }, [sessionId, setInitialMessages]);

  // Save messages to localStorage for client-side sessions
  useEffect(() => {
    if (typeof sessionId !== "string" || !sessionId.startsWith("local-chat-")) return;
    if (messages.length === 0) return;
    
    const localSession = localStorage.getItem(`sslid_chat_session_${sessionId}`);
    if (localSession) {
      try {
        const parsed = JSON.parse(localSession);
        parsed.messages = messages;
        parsed.updatedAt = new Date().toISOString();
        localStorage.setItem(`sslid_chat_session_${sessionId}`, JSON.stringify(parsed));
      } catch (e) {
        console.error("Failed to save local session:", e);
      }
    }
  }, [messages, sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text: string) => {
    sendMessage(text);
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/chat")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex-1">
              <h1 className="font-serif text-lg font-semibold text-foreground">
                {sessionTitle || "Chat with Sofía"}
              </h1>
              {lessonTitle && (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {lessonTitle}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-muted-foreground">Sofía is online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container py-6 space-y-6">
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-amber-100 mb-4">
                <MessageSquare className="h-7 w-7 text-amber-700" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Hola! I'm Sofía
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Your AI Spanish tutor from Madrid. Start a conversation in Spanish and I'll help you improve!
              </p>
            </motion.div>
          )}

          {messages.map((msg, index) => (
            <ChatBubble
              key={msg.id}
              role={msg.role}
              content={msg.content}
              timestamp={new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              correction={
                msg.hasCorrection && msg.originalText && msg.correctedText
                  ? {
                      original: msg.originalText,
                      corrected: msg.correctedText,
                      explanation: msg.explanation || "",
                    }
                  : null
              }
              isStreaming={aiLoading && index === messages.length - 1 && msg.role === "assistant"}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="container pb-2">
          <div className="rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-2 text-sm text-destructive">
            {error}
          </div>
        </div>
      )}

      {/* Input */}
      <ChatInput onSend={handleSend} isLoading={aiLoading} />
    </div>
  );
}