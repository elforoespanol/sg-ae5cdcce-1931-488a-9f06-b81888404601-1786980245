import { useState, useCallback, useRef } from "react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  hasCorrection: boolean;
  originalText?: string;
  correctedText?: string;
  explanation?: string;
  createdAt: string;
}

interface UseAITutorOptions {
  sessionId?: string;
  lessonId?: string;
}

function generateDemoResponse(message: string): { content: string; correction: { original: string; corrected: string; explanation: string } | null } {
  const lower = message.toLowerCase().trim();

  // Specific: "Hola como estas" without accents
  if (lower === "hola como estas" || lower === "hola, como estas") {
    return {
      content: `¡Hola! Estoy muy bien, gracias. ¿Y tú? ¿Cómo te va con tu español?`,
      correction: {
        original: message,
        corrected: "Hola, ¿cómo estás?",
        explanation: "Two things to remember: 1) Questions in Spanish need opening ¿ and closing ? 2) \"cómo\" (how) and \"estás\" (you are) need accent marks. Don't worry — accents take practice!",
      },
    };
  }

  // Greetings
  if (lower.includes("hola") || lower.includes("buenos") || lower.includes("buenas")) {
    return {
      content: `¡Hola! ¡Qué gusto saludarte! ¿Cómo estás hoy? ¿Listo para practicar español?`,
      correction: null,
    };
  }

  // "How are you" type responses
  if (lower.includes("estoy") || lower.includes("bien") || lower.includes("mal") || lower.includes("regular")) {
    return {
      content: `¡Me alegro de escucharte! Practiquemos un poco más. ¿Puedes decirme qué te gusta hacer en tu tiempo libre?`,
      correction: null,
    };
  }

  // Introductions
  if (lower.includes("me llamo") || lower.includes("mi nombre") || lower.includes("soy ")) {
    return {
      content: `¡Mucho gusto! Es un placer conocerte. ¿De dónde eres? ¿Qué te motiva a aprender español?`,
      correction: null,
    };
  }

  // Numbers
  if (/\d/.test(message) || lower.includes("uno") || lower.includes("dos") || lower.includes("tres")) {
    return {
      content: `¡Excelente! Los números son muy útiles. ¿Puedes contar hasta diez en español? Uno, dos, tres...`,
      correction: null,
    };
  }

  // Goodbye
  if (lower.includes("adiós") || lower.includes("adios") || lower.includes("hasta luego") || lower.includes("chao")) {
    return {
      content: `¡Hasta luego! Ha sido un placer charlar contigo. ¡Nos vemos pronto! ¡Sigue practicando!`,
      correction: null,
    };
  }

  // Thank you
  if (lower.includes("gracias") || lower.includes("thank")) {
    return {
      content: `¡De nada! Es un placer ayudarte. ¿Quieres practicar algo más?`,
      correction: null,
    };
  }

  // English messages — encourage Spanish
  if (/^[a-z\s.,!?']+$/i.test(message) && !/[áéíóúñ¿¡ü]/i.test(message) && lower.length > 3) {
    return {
      content: `¡Hola! ¡Inténtalo en español! Puedes decir "Hola, ¿cómo estás?" o "Me llamo..."`,
      correction: null,
    };
  }

  // Default
  return {
    content: `¡Muy bien! Me encanta tu entusiasmo. Sigue practicando — cada conversación te acerca más a la fluidez. ¿Quieres que practiquemos algún tema en particular?`,
    correction: null,
  };
}

async function streamDemoResponse(
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
  assistantMessageId: string,
  message: string
) {
  const { content, correction } = generateDemoResponse(message);
  const words = content.split(" ");
  let current = "";

  for (const word of words) {
    current += (current ? " " : "") + word;
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === assistantMessageId ? { ...msg, content: current } : msg
      )
    );
    await new Promise((r) => setTimeout(r, 30));
  }

  if (correction) {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === assistantMessageId
          ? {
              ...msg,
              hasCorrection: true,
              originalText: correction.original,
              correctedText: correction.corrected,
              explanation: correction.explanation,
            }
          : msg
      )
    );
  }
}

export function useAITutor(options: UseAITutorOptions = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim()) return;

      setError(null);
      setIsLoading(true);

      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: content.trim(),
        hasCorrection: false,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);

      const assistantMessageId = `assistant-${Date.now()}`;
      const assistantMessage: ChatMessage = {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        hasCorrection: false,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Client-side demo mode for local sessions
      const isLocalSession = typeof window !== "undefined" && window.location.pathname.includes("/chat/local-chat-");
      if (isLocalSession) {
        try {
          await streamDemoResponse(setMessages, assistantMessageId, content.trim());
        } catch (err) {
          setError("Failed to generate response");
          setMessages((prev) => prev.filter((msg) => msg.id !== assistantMessageId));
        } finally {
          setIsLoading(false);
        }
        return;
      }

      // Server API mode
      abortControllerRef.current = new AbortController();

      try {
        const token = localStorage.getItem("sslid_auth_token") || sessionStorage.getItem("sslid_auth_token");
        const response = await fetch("/api/tutor/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({
            message: content.trim(),
            sessionId: options.sessionId,
            lessonId: options.lessonId,
          }),
          signal: abortControllerRef.current.signal,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || "Failed to get response");
        }

        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let fullContent = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                if (parsed.content) {
                  fullContent += parsed.content;
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, content: fullContent }
                        : msg
                    )
                  );
                }
                if (parsed.correction) {
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === assistantMessageId
                        ? {
                            ...msg,
                            hasCorrection: true,
                            originalText: parsed.correction.original,
                            correctedText: parsed.correction.corrected,
                            explanation: parsed.correction.explanation,
                          }
                        : msg
                    )
                  );
                }
              } catch {
                // Ignore parse errors for non-JSON lines
              }
            }
          }
        }
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          setError("Message cancelled");
        } else {
          setError(err instanceof Error ? err.message : "Something went wrong");
        }

        setMessages((prev) =>
          prev.filter((msg) => msg.id !== assistantMessageId)
        );
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [options.sessionId, options.lessonId]
  );

  const abort = useCallback(() => {
    abortControllerRef.current?.abort();
  }, []);

  const setInitialMessages = useCallback((msgs: ChatMessage[]) => {
    setMessages(msgs);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    abort,
    setInitialMessages,
  };
}