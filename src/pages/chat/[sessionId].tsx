import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Send, ArrowLeft, BookOpen, MessageSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatBubble } from "@/components/chat/ChatBubble";
import { CorrectionDisplay } from "@/components/chat/CorrectionDisplay";
import { ChatInput } from "@/components/chat/ChatInput";
import Head from "next/head";

export const dynamic = "force-dynamic";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  correction?: {
    original: string;
    corrected: string;
    explanation: string;
  };
  timestamp: Date;
}

export default function ChatSessionPage() {
  const router = useRouter();
  const { sessionId } = router.query;
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!sessionId) return;
    fetchMessages();
  }, [sessionId]);

  const fetchMessages = async () => {
    try {
      const res = await fetch(`/api/tutor/messages?sessionId=${sessionId}`);
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data = await res.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      const res = await fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          userMessage: inputValue,
          conversationHistory: messages,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");
      const data = await res.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "",
        correction: data.correction,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!sessionId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Chat Session | EspañolMastery</title>
        <meta name="description" content="Practice conversation with AI tutor" />
      </Head>

      <div className="flex flex-col h-screen bg-background">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border-b p-4"
        >
          <div className="flex items-center gap-4 max-w-4xl mx-auto">
            <Link href="/chat" className="p-2 hover:bg-muted rounded-lg">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex-1">
              <h1 className="font-bold text-lg flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Spanish Conversation
              </h1>
              <p className="text-sm text-muted-foreground">
                Practice real-world dialogue
              </p>
            </div>
            <Link href="/lessons" className="p-2 hover:bg-muted rounded-lg">
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <MessageSquare className="w-12 h-12 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Start a conversation with your AI tutor
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="space-y-2">
                  <ChatBubble
                    role={msg.role}
                    content={msg.content}
                    timestamp={msg.timestamp.toISOString()}
                  />
                  {msg.correction && (
                    <CorrectionDisplay
                      original={msg.correction.original}
                      corrected={msg.correction.corrected}
                      explanation={msg.correction.explanation}
                    />
                  )}
                </div>
              ))
            )}
            {loading && (
              <div className="flex gap-2 items-center text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <p>Tutor is thinking...</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Input Area */}
        <div className="bg-card border-t p-4 max-w-4xl mx-auto w-full">
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSendMessage}
            disabled={loading}
            placeholder="Type your Spanish message..."
          />
        </div>
      </div>
    </>
  );
}