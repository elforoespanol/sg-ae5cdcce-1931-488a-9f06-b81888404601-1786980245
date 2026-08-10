import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";

interface AuthUser {
  id: string;
  email: string;
  name?: string | null;
  role?: string;
  level?: string;
  image?: string | null;
}

interface AuthContextType {
  user: AuthUser | null;
  status: "loading" | "authenticated" | "unauthenticated";
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "loading",
  isAdmin: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status: sessionStatus } = useSession();
  const [fallbackUser, setFallbackUser] = useState<AuthUser | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("sslid_auth_fallback");
      if (raw) {
        try {
          const parsed = JSON.parse(raw);
          if (Date.now() - parsed.timestamp < 30 * 24 * 60 * 60 * 1000) {
            setFallbackUser({
              id: "fallback",
              email: parsed.email,
              name: parsed.email.split("@")[0],
              role: parsed.role,
            });
          } else {
            localStorage.removeItem("sslid_auth_fallback");
          }
        } catch {
          localStorage.removeItem("sslid_auth_fallback");
        }
      }
    }
  }, []);

  const user = session?.user || fallbackUser;
  const status =
    sessionStatus === "loading" && !fallbackUser
      ? "loading"
      : user
      ? "authenticated"
      : "unauthenticated";
  const isAdmin = user?.role === "ADMIN";

  return (
    <AuthContext.Provider value={{ user: user as AuthUser | null, status, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}