import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";

interface CustomUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  level?: string;
  role?: string;
}

interface AuthContextType {
  user: CustomUser | null;
  status: "loading" | "authenticated" | "unauthenticated";
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "loading",
});

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status: sessionStatus } = useSession();
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");
  const [user, setUser] = useState<CustomUser | null>(null);

  useEffect(() => {
    // NextAuth session takes priority
    if (session?.user) {
      setUser(session.user);
      setStatus("authenticated");
      return;
    }

    // Check cookie fallback (works across page navigations and in preview iframes)
    const cookieAuth = getCookie("sslid_auth");
    if (cookieAuth) {
      try {
        const parsed = JSON.parse(cookieAuth);
        setUser({
          id: parsed.id,
          name: parsed.name,
          email: parsed.email,
          image: null,
          role: parsed.role,
          level: parsed.level,
        });
        setStatus("authenticated");
        return;
      } catch {
        // Invalid cookie, clear it
        document.cookie = "sslid_auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    }

    // Check localStorage fallback
    if (typeof window !== "undefined") {
      try {
        const raw = localStorage.getItem("sslid_auth_fallback");
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Date.now() - parsed.timestamp < 30 * 24 * 60 * 60 * 1000) {
            setUser({
              id: parsed.email,
              name: parsed.name || parsed.email,
              email: parsed.email,
              image: null,
              role: parsed.role,
            });
            setStatus("authenticated");
            return;
          }
          localStorage.removeItem("sslid_auth_fallback");
        }
      } catch {
        // localStorage not available
      }
    }

    // Not authenticated
    setStatus("unauthenticated");
  }, [session]);

  return (
    <AuthContext.Provider value={{ user, status }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}