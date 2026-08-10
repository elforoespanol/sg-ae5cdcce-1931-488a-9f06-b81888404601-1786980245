import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function LoadingSkeleton({ variant = "dashboard" }: { variant?: "dashboard" | "lesson" | "flashcard" | "chat" | "card" }) {
  if (variant === "lesson") return <LessonSkeleton />;
  if (variant === "flashcard") return <FlashcardSkeleton />;
  if (variant === "chat") return <ChatSkeleton />;
  if (variant === "card") return <CardSkeleton />;
  return <DashboardSkeleton />;
}

export function CardSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
      <div className="h-4 w-full bg-muted rounded animate-pulse" />
      <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="container py-8 space-y-8">
      <div className="h-10 w-48 bg-muted rounded animate-pulse" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} className="p-4 space-y-3">
            <div className="h-5 w-5 bg-muted rounded animate-pulse" />
            <div className="h-8 w-16 bg-muted rounded animate-pulse" />
            <div className="h-4 w-20 bg-muted rounded animate-pulse" />
          </Card>
        ))}
      </div>
    </div>
  );
}

export function LessonSkeleton() {
  return (
    <div className="container py-8 space-y-6">
      <div className="h-8 w-3/4 bg-muted rounded animate-pulse" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 w-full bg-muted rounded animate-pulse" style={{ width: `${85 + Math.random() * 15}%` }} />
        ))}
      </div>
    </div>
  );
}

export function FlashcardSkeleton() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="w-full max-w-md aspect-[4/3] animate-pulse" />
    </div>
  );
}

export function ChatSkeleton() {
  return (
    <div className="flex flex-col h-full space-y-4 p-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
          <div className={`h-16 w-2/3 bg-muted rounded-2xl animate-pulse ${i % 2 === 0 ? "rounded-tl-sm" : "rounded-tr-sm"}`} />
        </div>
      ))}
    </div>
  );
}