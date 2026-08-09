import { motion } from "framer-motion";
import { User, Bot } from "lucide-react";
import { CorrectionDisplay } from "./CorrectionDisplay";

interface ChatBubbleProps {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  correction?: {
    original: string;
    corrected: string;
    explanation: string;
  } | null;
  isStreaming?: boolean;
}

export function ChatBubble({
  role,
  content,
  timestamp,
  correction,
  isStreaming,
}: ChatBubbleProps) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Avatar */}
      <div
        className={`shrink-0 h-9 w-9 rounded-full flex items-center justify-center ${
          isUser
            ? "bg-primary/10 text-primary"
            : "bg-amber-100 text-amber-700"
        }`}
      >
        {isUser ? (
          <User className="h-4.5 w-4.5" />
        ) : (
          <Bot className="h-4.5 w-4.5" />
        )}
      </div>

      {/* Message */}
      <div className={`flex-1 ${isUser ? "items-end" : "items-start"} flex flex-col max-w-[80%]`}>
        <div
          className={`relative rounded-2xl px-4 py-3 ${
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-card border border-border rounded-tl-sm"
          }`}
        >
          <p className={`text-sm leading-relaxed whitespace-pre-wrap ${isStreaming ? "animate-pulse" : ""}`}>
            {content}
          </p>

          {isStreaming && (
            <span className="inline-flex ml-1">
              <span className="animate-bounce mx-0.5 h-1.5 w-1.5 rounded-full bg-current opacity-60" style={{ animationDelay: "0ms" }} />
              <span className="animate-bounce mx-0.5 h-1.5 w-1.5 rounded-full bg-current opacity-60" style={{ animationDelay: "150ms" }} />
              <span className="animate-bounce mx-0.5 h-1.5 w-1.5 rounded-full bg-current opacity-60" style={{ animationDelay: "300ms" }} />
            </span>
          )}
        </div>

        {/* Correction */}
        {!isUser && correction && (
          <CorrectionDisplay
            original={correction.original}
            corrected={correction.corrected}
            explanation={correction.explanation}
          />
        )}

        <span className="text-[10px] text-muted-foreground mt-1.5 px-1">
          {timestamp}
        </span>
      </div>
    </motion.div>
  );
}