"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout?: number;
              autoDisplay?: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: { SIMPLE: number; HORIZONTAL: number };
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
  return match ? match.pop() ?? null : null;
}

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loaded, setLoaded] = useState(false);
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

  // Initialize Google Translate widget (must be in DOM but we hide it with CSS)
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;

    if (w["__googleTranslateInit"]) {
      setLoaded(true);
      return;
    }
    w["__googleTranslateInit"] = true;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,pt,it",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element_real"
        );

        setLoaded(true);
      }
    };

    const existing = document.getElementById("google-translate-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit?.();
    }
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
    const domain = window.location.hostname;

    if (code === "en") {
      // Remove translation cookies to reset to English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    } else {
      // Set translation cookie — this is how Google Translate knows which language to use
      const value = `/en/${code}`;
      document.cookie = `googtrans=${value}; path=/; domain=${domain};`;
      document.cookie = `googtrans=${value}; path=/; domain=.${domain};`;
      document.cookie = `googtrans=${value}; path=/;`;
    }

    // Reload to apply translation
    window.location.reload();
  }, []);

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Google Translate widget container — autoDisplay:false keeps it hidden */}
      <div
        style={{
          position: "fixed",
          top: -10000,
          left: 0,
          width: 1,
          height: 1,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      >
        <div id="google_translate_element_real" />
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          disabled={!loaded}
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
    </>
  );
}