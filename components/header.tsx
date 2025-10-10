"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/language-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <header className="z-[999] relative">
      <motion.div
        className={clsx(
          "header fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-[rgba(255,255,255,0.4)] shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full bg-[rgba(255,255,255,0.8)]",
          language === "en" ? "sm:w-[36rem]" : "sm:w-[39rem]"
        )}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                className={clsx(
                  "header-link flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition whitespace-nowrap",
                  {
                    "header-active-text text-gray-950":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {t(link.name)}

                {activeSection === link.name && (
                  <motion.span
                    className="header-active-background bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
