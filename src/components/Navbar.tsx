import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, BookOpen, LayoutDashboard, Library, LogOut, User, ChevronDown, MessageSquare, Trophy, Settings, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { TranslateButton } from "./TranslateButton";

export function Navbar() {
  const { user: authUser } = useAuth();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false);

  // Synchronous cookie read for instant admin detection
  const getCookieRole = (): string | null => {
    if (typeof document === "undefined") return null;
    const match = document.cookie.match(/sslid_auth=([^;]+)/);
    if (match) {
      try {
        const parsed = JSON.parse(decodeURIComponent(match[1]));
        return parsed.role || null;
      } catch {
        return null;
      }
    }
    return null;
  };

  // Also check localStorage as fallback
  const getStorageRole = (): string | null => {
    if (typeof window === "undefined") return null;
    try {
      const raw = localStorage.getItem("sslid_auth_fallback");
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed.role || null;
      }
    } catch {
      return null;
    }
    return null;
  };

  const isAdmin =
    authUser?.role === "ADMIN" ||
    authUser?.email?.toLowerCase() === "admin@sslid.com" ||
    getCookieRole() === "ADMIN" ||
    getStorageRole() === "ADMIN";

  // Force re-check after mount to catch delayed auth initialization
  useEffect(() => {
    const timer = setTimeout(() => setAdminChecked(true), 300);
    return () => clearTimeout(timer);
  }, [authUser]);

  const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, shortcut: "D" },
    { href: "/lessons", label: "Lessons", icon: BookOpen, shortcut: "L" },
    { href: "/chat", label: "AI Tutor", icon: MessageSquare, shortcut: "T" },
    { href: "/flashcards", label: "Flashcards", icon: Library, shortcut: "F" },
    { href: "/achievements", label: "Achievements", icon: Trophy, shortcut: "A" },
    ...(isAdmin ? [{ href: "/admin", label: "Admin", icon: Shield, shortcut: "M" }] : []),
  ];

  const isActive = (href: string) => router.pathname === href || router.pathname.startsWith(href + "/");

  const handleSignOut = () => {
    localStorage.removeItem("sslid_auth_fallback");
    sessionStorage.removeItem("sslid_auth_fallback");
    document.cookie = "sslid_auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT";
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-white/90 backdrop-blur-md" role="navigation" aria-label="Main navigation">
      <div className="container flex h-32 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Español Mastery - Home">
          <img
            src="/logo.jpg"
            alt="Español Mastery"
            className="h-28 w-28 rounded-lg object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50",
                isActive(link.href)
                  ? "bg-brand-terracotta/10 text-brand-terracotta"
                  : "text-muted-foreground hover:text-brand-blue hover:bg-brand-cream"
              )}
              aria-label={link.label}
              title={`${link.label} (Ctrl+${link.shortcut})`}
            >
              <link.icon className="h-4 w-4" aria-hidden="true" />
              <span className="hidden xl:inline">{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <TranslateButton />
          {authUser ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
                aria-label="User menu"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <div className="h-8 w-8 rounded-full bg-brand-terracotta/10 flex items-center justify-center text-brand-terracotta font-semibold text-sm">
                  {authUser.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="text-sm font-medium text-brand-blue hidden lg:inline">
                  {authUser.name || "User"}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border/40 bg-white shadow-lg py-1" role="menu">
                  <div className="px-4 py-2 border-b border-border/40">
                    <p className="text-sm font-medium text-brand-blue">{authUser.name}</p>
                    <p className="text-xs text-muted-foreground">{authUser.email}</p>
                    <p className="text-xs text-brand-terracotta font-medium mt-0.5">Level: {authUser.level}</p>
                  </div>
                  <Link href="/profile" className="flex w-full items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:bg-brand-cream" role="menuitem">
                    <User className="h-4 w-4" aria-hidden="true" />
                    Profile
                  </Link>
                  <Link href="/settings" className="flex w-full items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:bg-brand-cream" role="menuitem">
                    <Settings className="h-4 w-4" aria-hidden="true" />
                    Settings
                  </Link>
                  <div className="border-t border-border/40 mt-1 pt-1">
                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm text-destructive hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:bg-brand-cream"
                      role="menuitem"
                    >
                      <LogOut className="h-4 w-4" aria-hidden="true" />
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/40 bg-white" role="menu">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50",
                  isActive(link.href)
                    ? "bg-brand-terracotta/10 text-brand-terracotta"
                    : "text-muted-foreground hover:text-brand-blue hover:bg-brand-cream"
                )}
                role="menuitem"
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-border/40 mt-2 space-y-1">
              {authUser ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="h-8 w-8 rounded-full bg-brand-terracotta/10 flex items-center justify-center text-brand-terracotta font-semibold text-sm">
                      {authUser.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{authUser.name}</p>
                      <p className="text-xs text-brand-terracotta">Level: {authUser.level}</p>
                    </div>
                  </div>
                  <Link
                    href="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-brand-blue hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
                    role="menuitem"
                  >
                    <User className="h-4 w-4" aria-hidden="true" />
                    Profile
                  </Link>
                  <Link
                    href="/settings"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-brand-blue hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
                    role="menuitem"
                  >
                    <Settings className="h-4 w-4" aria-hidden="true" />
                    Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-brand-cream rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
                    role="menuitem"
                  >
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Sign out
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 px-4 py-2">
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-border/40 hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
                  >
                    <User className="h-4 w-4" aria-hidden="true" />
                    Sign in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}