import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
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
  refresh: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  status: "loading",
  refresh: () => {},
});

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function readAuthFromStorage(): CustomUser | null {
  // Check cookie first (most reliable across navigations)
  const cookieAuth = getCookie("sslid_auth");
  if (cookieAuth) {
    try {
      const parsed = JSON.parse(cookieAuth);
      return {
        id: parsed.id,
        name: parsed.name,
        email: parsed.email,
        image: null,
        role: parsed.role,
        level: parsed.level,
      };
    } catch {
      document.cookie = "sslid_auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }

  // Check localStorage
  if (typeof window !== "undefined") {
    try {
      const raw = localStorage.getItem("sslid_auth_fallback");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Date.now() - parsed.timestamp < 30 * 24 * 60 * 60 * 1000) {
          return {
            id: parsed.email,
            name: parsed.name || parsed.email,
            email: parsed.email,
            image: null,
            role: parsed.role,
          };
        }
        localStorage.removeItem("sslid_auth_fallback");
      }
    } catch {
      // localStorage not available
    }

    // Check sessionStorage as additional fallback
    try {
      const raw = sessionStorage.getItem("sslid_auth_fallback");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Date.now() - parsed.timestamp < 30 * 24 * 60 * 60 * 1000) {
          return {
            id: parsed.email,
            name: parsed.name || parsed.email,
            email: parsed.email,
            image: null,
            role: parsed.role,
          };
        }
        sessionStorage.removeItem("sslid_auth_fallback");
      }
    } catch {
      // sessionStorage not available
    }
  }

  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status: sessionStatus } = useSession();
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");
  const [user, setUser] = useState<CustomUser | null>(null);

  const refresh = useCallback(() => {
    if (session?.user) {
      // NextAuth session available — use it, but merge with storage for any missing fields
      const storedUser = readAuthFromStorage();
      const mergedUser = {
        ...(session.user as CustomUser),
        // Ensure role is preserved from storage if missing in session
        role: (session.user as CustomUser).role || storedUser?.role,
        level: (session.user as CustomUser).level || storedUser?.level,
      };
      setUser(mergedUser);
      setStatus("authenticated");

      // If role is still missing, try to fetch from API
      if (!mergedUser.role && mergedUser.email) {
        fetch("/api/user/profile")
          .then((res) => res.json())
          .then((data) => {
            if (data?.role) {
              setUser((prev) => (prev ? { ...prev, role: data.role } : prev));
            }
          })
          .catch(() => {});
      }
      return;
    }

    const storedUser = readAuthFromStorage();
    if (storedUser) {
      setUser(storedUser);
      setStatus("authenticated");
    } else {
      setUser(null);
      setStatus("unauthenticated");
    }
  }, [session]);

  // Initial auth check + re-check when session changes
  useEffect(() => {
    refresh();
  }, [refresh, sessionStatus]);

  // Listen for auth refresh events from login/logout
  useEffect(() => {
    const handleRefresh = () => refresh();
    window.addEventListener("sslid-auth-refresh", handleRefresh);
    window.addEventListener("storage", handleRefresh);
    return () => {
      window.removeEventListener("sslid-auth-refresh", handleRefresh);
      window.removeEventListener("storage", handleRefresh);
    };
  }, [refresh]);

  return (
    <AuthContext.Provider value={{ user, status, refresh }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}