"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";

type Language = "en" | "vi";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "vi" : "en";
    setLanguage(newLang);
    i18n.changeLanguage(newLang); // update i18n language
    window.localStorage.setItem("language", newLang);
  };

  useEffect(() => {
    const localLang = window.localStorage.getItem(
      "language"
    ) as Language | null;
    if (localLang) {
      setLanguage(localLang);
      i18n.changeLanguage(localLang); // sync on load
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }
  return context;
}
