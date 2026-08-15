"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (options: { pageLanguage: string; includedLanguages: string; layout?: number }, elementId: string): void;
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

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Google Translate
  useEffect(() => {
    // Prevent double initialization
    if ((window as Record<string, unknown>)["__googleTranslateInit"]) return;
    (window as Record<string, unknown>)["__googleTranslateInit"] = true;

    // Define the callback BEFORE loading the script
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement && containerRef.current) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,pt,it",
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          },
          "google_translate_element_real"
        );

        // Poll for the combo box to appear
        let attempts = 0;
        const poll = () => {
          const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
          if (combo) {
            setLoaded(true);
          } else if (attempts < 30) {
            attempts += 1;
            setTimeout(poll, 300);
          }
        };
        setTimeout(poll, 500);
      }
    };

    // Load script if not already present
    const existing = document.getElementById("google-translate-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Script exists, trigger init manually
      window.googleTranslateElementInit?.();
    }

    return () => {
      // Cleanup not needed for Google Translate
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
    if (code === "en") {
      // Reset to English: reload the page with ?googtrans=en
      const url = new URL(window.location.href);
      url.searchParams.delete("googtrans");
      window.location.href = url.toString();
      return;
    }

    const trySelect = (attempts = 0) => {
      const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event("change", { bubbles: true }));
        setCurrentLang(code);
        setOpen(false);

        // Also update the cookie so Google remembers the choice
        const domain = window.location.hostname;
        document.cookie = `googtrans=/en/${code}; path=/; domain=${domain}`;
        document.cookie = `googtrans=/en/${code}; path=/; domain=.${domain}`;
      } else if (attempts < 20) {
        setTimeout(() => trySelect(attempts + 1), 200);
      } else {
        setOpen(false);
      }
    };
    trySelect();
  }, []);

  const current = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <>
      {/* Hidden Google Translate widget container — must be in DOM for initialization */}
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
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