"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (options: object, elementId: string): void;
          InlineLayout: { SIMPLE: number };
        };
      };
    };
  }
}

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

function getCookie(name: string): string | null {
  const match = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return match ? (match.pop() ?? null) : null;
}

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const hostname = window.location.hostname;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

  // Base cookie
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;

  if (!isLocalhost) {
    // Domain-scoped cookies for subdomains
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=${hostname}; SameSite=Lax`;
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=.${hostname}; SameSite=Lax`;
  }
}

function deleteCookie(name: string) {
  const past = "Thu, 01 Jan 1970 00:00:00 GMT";
  const hostname = window.location.hostname;
  const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

  document.cookie = `${name}=; expires=${past}; path=/;`;
  if (!isLocalhost) {
    document.cookie = `${name}=; expires=${past}; path=/; domain=${hostname};`;
    document.cookie = `${name}=; expires=${past}; path=/; domain=.${hostname};`;
  }
}

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState("en");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect current language from cookie on mount
  useEffect(() => {
    const googTrans = getCookie("googtrans");
    if (googTrans) {
      const parts = googTrans.split("/");
      const lang = parts[parts.length - 1];
      if (lang && languages.some((l) => l.code === lang)) {
        setCurrentLang(lang);
      }
    }
  }, []);

  // Initialize Google Translate widget (hidden)
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    // Create hidden container for the widget
    if (!document.getElementById("google_translate_element")) {
      const container = document.createElement("div");
      container.id = "google_translate_element";
      container.style.cssText = "position:absolute;top:-9999px;left:0;width:1px;height:1px;overflow:hidden;";
      document.body.appendChild(container);
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,pt,it",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

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
      deleteCookie("googtrans");
    } else {
      setCookie("googtrans", `/en/${code}`);
    }

    // Reload so Google Translate reads the cookie and applies translation
    window.location.reload();
  }, []);

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-brand-blue hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50"
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