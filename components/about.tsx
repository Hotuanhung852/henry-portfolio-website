"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function About() {
  const { ref } = useSectionInView("about");
  const { t } = useTranslation();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("aboutHeading")}</SectionHeading>
      <p className="mb-3">
        {t("paragraph1Start")}{" "}
        <span className="font-medium">{t("fptUniversity")}</span>, {t("graduateFoundation")}{" "}
        <span className="font-medium">{t("htmlCssJsReact")}</span>,{" "}
        {t("workedExtensively")}{" "}
        <span className="font-medium">{t("figma")}</span> {t("designInterfaces")}
        <span className="italic"> {t("whatExcites")}</span> {t("isCreativeProcess")}{" "}
        <span className="font-medium">{t("fullTimeFrontend")}</span>{" "}
        {t("whereGrow")}
      </p>
      <p>
        <span className="italic">{t("outsideCoding")}</span>, {t("paragraph2Start")}{" "}
        <span className="font-medium">{t("uxPrinciples")}</span> {t("occasionally")}{" "}
        <span className="font-medium">
          {t("productivity")}
        </span>{" "}
        {t("enhance")}{" "}
        <span className="font-medium">{t("laptopSetups")}</span> {t("workspaceBoostExtended")}
      </p>
    </motion.section>
  );
}