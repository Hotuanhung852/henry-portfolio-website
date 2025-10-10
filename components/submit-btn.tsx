import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { useTranslation } from "react-i18next";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useTranslation();

  return (
    <button
      type="submit"
      className="contact-submit-btn group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transistion-all
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 cursor-pointer"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          {t("submitEmailbtn")}
          <FaPaperPlane
            className="text-white text-xs opacity-70 transition-all 
          group-hover:translate-x-1 
          group-hover:-translate-y-1"
          />{" "}
        </>
      )}
    </button>
  );
}
