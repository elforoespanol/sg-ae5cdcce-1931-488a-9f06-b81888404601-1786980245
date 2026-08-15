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

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Detect current language from URL on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const gtParam = url.searchParams.get("googtrans");
    if (gtParam) {
      const parts = gtParam.split("/");
      const lang = parts[parts.length - 1];
      if (lang && languages.some((l) => l.code === lang)) {
        setCurrentLang(lang);
      }
    }
  }, []);

  // Initialize Google Translate widget
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("google-translate-script")) {
      // Already loading or loaded — check if combo exists
      checkComboReady();
      return;
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement && widgetRef.current) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,pt,it",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_widget"
        );
        checkComboReady();
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Fallback: if script already cached and callback won't fire
    setTimeout(() => {
      if (!loaded) checkComboReady();
    }, 3000);

    function checkComboReady() {
      let attempts = 0;
      const poll = () => {
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
        if (combo) {
          setLoaded(true);
        } else if (attempts < 40) {
          attempts += 1;
          setTimeout(poll, 250);
        }
      };
      poll();
    }
  }, [loaded]);

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
      // Reset to English by reloading without the googtrans param
      const url = new URL(window.location.href);
      url.searchParams.delete("googtrans");
      window.location.href = url.toString();
      return;
    }

    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
      setCurrentLang(code);

      // Also update URL so translation persists on navigation
      const url = new URL(window.location.href);
      url.searchParams.set("googtrans", `/en/${code}`);
      window.history.replaceState({}, "", url.toString());
    } else {
      // Fallback: reload with googtrans param
      const url = new URL(window.location.href);
      url.searchParams.set("googtrans", `/en/${code}`);
      window.location.href = url.toString();
    }
  }, []);

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Google Translate widget — rendered in-flow so it initializes, then hidden by CSS */}
      <div
        ref={widgetRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0,
          pointerEvents: "none",
          zIndex: -1,
          width: "auto",
          height: "auto",
        }}
      >
        <div id="google_translate_widget" />
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          disabled={!loaded}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-brand-blue hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50 disabled:opacity-40"
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