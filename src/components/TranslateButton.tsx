"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    __googleTranslateState?: { initialized: boolean; engineReady: boolean };
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (options: object, elementId: string): void;
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
  return match ? (match.pop() ?? null) : null;
}

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const initPollRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  // Initialize Google Translate
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent double init in React StrictMode
    window.__googleTranslateState = window.__googleTranslateState || { initialized: false, engineReady: false };
    if (window.__googleTranslateState.initialized) {
      setLoaded(window.__googleTranslateState.engineReady);
      return;
    }
    window.__googleTranslateState.initialized = true;

    // Create the hidden widget container
    let container = document.getElementById("google_translate_element_real");
    if (!container) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;z-index:-1;";
      container = document.createElement("div");
      container.id = "google_translate_element_real";
      wrapper.appendChild(container);
      document.body.appendChild(wrapper);
    }

    // Define callback BEFORE loading script
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,fr,de,pt,it",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: true,
        },
        "google_translate_element_real"
      );

      // Poll until the combo box appears — that's when the engine is truly ready
      let attempts = 0;
      const poll = setInterval(() => {
        const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
        if (combo) {
          clearInterval(poll);
          window.__googleTranslateState = { initialized: true, engineReady: true };
          setLoaded(true);
        } else if (attempts > 50) {
          clearInterval(poll);
          window.__googleTranslateState = { initialized: true, engineReady: true };
          setLoaded(true); // enable anyway, user can try
        }
        attempts++;
      }, 200);
    };

    // Load the script
    const existing = document.getElementById("google-translate-script");
    if (existing) {
      // Script exists but callback may have already fired; re-trigger if engine not ready
      if (!window.__googleTranslateState.engineReady) {
        window.googleTranslateElementInit();
      }
    } else {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      if (initPollRef.current) clearInterval(initPollRef.current);
    };
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
      // Reset to English: remove cookies and reload
      const expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = `googtrans=; ${expires}; path=/;`;
      document.cookie = `googtrans=; ${expires}; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=; ${expires}; path=/; domain=.${window.location.hostname};`;
      window.location.reload();
      return;
    }

    // Try direct combo box manipulation first (no reload needed)
    const tryCombo = (attempts = 0) => {
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        setCurrentLang(code);

        // Persist choice in cookie so it survives reloads
        const value = `/en/${code}`;
        document.cookie = `googtrans=${value}; path=/;`;
      } else if (attempts < 15) {
        setTimeout(() => tryCombo(attempts + 1), 300);
      } else {
        // Fallback: cookie + reload
        const value = `/en/${code}`;
        document.cookie = `googtrans=${value}; path=/;`;
        window.location.reload();
      }
    };

    tryCombo();
  }, []);

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
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
  );
}