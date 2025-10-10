"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import { useTranslation } from "react-i18next";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  
  return (
    <>
    <button
      className="theme-button fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-gray-300 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
      data-tooltip-id="theme-tooltip"
      data-tooltip-content={theme === 'light' ? t('switchToDark') : t('switchToLight')}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
    <Tooltip id="theme-tooltip" place="top" />
    </>
  );
}