"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: {
          new (options: { pageLanguage: string; includedLanguages: string; layout?: number }, elementId: string): void;
          InlineLayout: { SIMPLE: number };
        };
      };
    };
  }
}

export function TranslateButton() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const existing = document.getElementById("google-translate-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "google_translate_element"
          );
          setLoaded(true);
        }
      };
    } else {
      setLoaded(true);
    }
  }, []);

  const toggleLanguage = () => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      const newLang = currentLang === "en" ? "es" : "en";
      select.value = newLang;
      select.dispatchEvent(new Event("change"));
      setCurrentLang(newLang);
    }
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />
      <button
        onClick={toggleLanguage}
        disabled={!loaded}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-brand-blue hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta/50 disabled:opacity-50"
        aria-label={`Switch to ${currentLang === "en" ? "Spanish" : "English"}`}
        title={`Translate to ${currentLang === "en" ? "Spanish" : "English"}`}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="uppercase">{currentLang === "en" ? "ES" : "EN"}</span>
      </button>
    </>
  );
}