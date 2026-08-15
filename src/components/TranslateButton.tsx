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

  // Load Google Translate script once
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    // Ensure container exists before script loads
    if (!document.getElementById("google_translate_element")) {
      const wrapper = document.createElement("div");
      wrapper.style.cssText =
        "position:fixed;top:-9999px;left:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;z-index:-1;";
      const container = document.createElement("div");
      container.id = "google_translate_element";
      wrapper.appendChild(container);
      document.body.appendChild(wrapper);
    }

    // Define callback
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

    // Load script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const selectLanguage = useCallback((code: string) => {
    setOpen(false);

    const hostname = window.location.hostname;

    if (code === "en") {
      // Reset to English: remove all googtrans cookies
      const past = "Thu, 01 Jan 1970 00:00:00 GMT";
      document.cookie = `googtrans=; expires=${past}; path=/;`;
      document.cookie = `googtrans=; expires=${past}; path=/; domain=${hostname};`;
      document.cookie = `googtrans=; expires=${past}; path=/; domain=.${hostname};`;
      window.location.reload();
      return;
    }

    // Set translation cookie on multiple domain scopes
    const value = `/en/${code}`;
    document.cookie = `googtrans=${value}; path=/;`;
    document.cookie = `googtrans=${value}; path=/; domain=${hostname};`;
    document.cookie = `googtrans=${value}; path=/; domain=.${hostname};`;

    // Also try to trigger the widget combo box if it's already loaded
    const combo = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement | null;
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change", { bubbles: true }));
      setCurrentLang(code);
    } else {
      // Widget not ready yet — reload so Google Translate reads the cookie
      window.location.reload();
    }
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
        <ChevronDown
          className="h-3 w-3 text-muted-foreground"
          aria-hidden="true"
        />
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