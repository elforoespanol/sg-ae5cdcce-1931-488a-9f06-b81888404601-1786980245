"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

function getCurrentLang(): string {
  if (typeof window === "undefined") return "en";
  // Check URL param first
  const params = new URLSearchParams(window.location.search);
  const googtrans = params.get("googtrans");
  if (googtrans) {
    const parts = googtrans.split("/");
    const lang = parts[parts.length - 1];
    if (lang && languages.some((l) => l.code === lang)) return lang;
  }
  return "en";
}

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState(getCurrentLang);
  const [loaded, setLoaded] = useState(true);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectLanguage = useCallback((code: string) => {
    setOpen(false);

    if (code === "en") {
      // Remove googtrans param to return to English
      const url = new URL(window.location.href);
      url.searchParams.delete("googtrans");
      window.location.href = url.toString();
      return;
    }

    // Set googtrans param and reload — Google Translate reads this on page load
    const url = new URL(window.location.href);
    url.searchParams.set("googtrans", `/en/${code}`);
    window.location.href = url.toString();
  }, []);

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-brand-blue hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50 disabled:opacity-50"
        aria-label="Select language"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.name}</span>
        <ChevronDown className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border/40 bg-white shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-brand-cream ${
                currentLang === lang.code
                  ? "text-brand-terracotta font-medium"
                  : "text-muted-foreground"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}