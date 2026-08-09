import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Loader2 } from "lucide-react";

export default function NewChatPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (status === "authenticated") {
      // Create a new session via the chat API
      fetch("/api/tutor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "¡Hola! Me llamo..." }),
      })
        .then((res) => res.json())
        .then((data) => {
          // The chat API returns streaming, so we need to create the session differently
          // Redirect to a generic new chat that will create on first message
          router.push("/chat");
        })
        .catch(() => {
          router.push("/chat");
        });
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}