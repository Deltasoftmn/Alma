"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "mn" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("mn");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved === "mn" || saved === "en") {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const next = language === "mn" ? "en" : "mn";
    setLanguage(next);
    localStorage.setItem("language", next);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
