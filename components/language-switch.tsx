"use client";

import React from "react";
import { Tooltip } from "react-tooltip";
import { useLanguage } from "@/context/language-context";
import { useTranslation } from "react-i18next";
import useIsMobileOrTablet from "@/lib/tooltip";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const isMobileOrTablet = useIsMobileOrTablet();

  return (
    <>
      <button
        className="theme-button fixed bottom-21 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-300 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        data-tooltip-id="lang-tooltip"
        data-tooltip-content={t("switchLanguage")}
        onClick={toggleLanguage}
      >
        {language === "en" ? "🇻🇳" : "🇺🇸"}
      </button>
      {!isMobileOrTablet && (
        <Tooltip id="lang-tooltip" place="top" />
      )}
    </>
  );
}
