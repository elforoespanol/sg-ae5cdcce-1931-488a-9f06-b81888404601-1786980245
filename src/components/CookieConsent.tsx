"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border/40 shadow-2xl">
      <div className="container py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-serif text-lg font-semibold text-brand-blue mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to ensure a seamless educational experience. Essential cookies run automatically for security and session management. Non-essential analytical cookies help us optimize our curriculum.{" "}
              <Link
                href="/cookie-and-consent-policy"
                className="text-brand-terracotta hover:underline font-medium"
              >
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={acceptCookies}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta disabled:pointer-events-none disabled:opacity-50 bg-brand-terracotta text-white hover:bg-brand-terracotta/90 h-10 px-6"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}