import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Mic } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
  disabled?: boolean;
}

export function ChatInput({ onSend, isLoading, disabled }: ChatInputProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const charCount = text.length;
  const maxChars = 500;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [text]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || isLoading || disabled) return;
    onSend(text.trim());
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-border bg-background p-4">
      <div className="flex items-end gap-3">
        <button
          type="button"
          disabled
          className="shrink-0 p-2.5 rounded-xl border border-border text-muted-foreground hover:bg-muted transition-colors disabled:opacity-40"
          title="Voice input coming soon"
        >
          <Mic className="h-5 w-5" />
        </button>

        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, maxChars))}
            onKeyDown={handleKeyDown}
            placeholder="Escribe en español... (Write in Spanish)"
            disabled={isLoading || disabled}
            rows={1}
            className="w-full resize-none rounded-xl border border-border bg-card px-4 py-3 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 disabled:opacity-60 transition-all"
          />
          <span
            className={`absolute bottom-3 right-3 text-[10px] font-medium ${
              charCount > maxChars * 0.9 ? "text-destructive" : "text-muted-foreground"
            }`}
          >
            {charCount}/{maxChars}
          </span>
        </div>

        <motion.button
          type="submit"
          disabled={!text.trim() || isLoading || disabled}
          whileTap={{ scale: 0.94 }}
          className="shrink-0 p-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:hover:bg-primary transition-colors"
        >
          <Send className="h-5 w-5" />
        </motion.button>
      </div>
    </form>
  );
}