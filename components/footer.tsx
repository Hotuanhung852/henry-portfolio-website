"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2025 Henmitsu. {t("rightsReserved")}
      </small>
      <p className="text-xs">
        <span className="font-semibold">{t("aboutWebsite")}</span>{" "}
        {t("footerDesc")}
      </p>
    </footer>
  );
}
