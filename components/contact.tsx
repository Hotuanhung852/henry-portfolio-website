/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { ref } = useSectionInView("contact", 1);
  const { t } = useTranslation();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,44rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t("contactMe")}</SectionHeading>

      <p className="contact-description text-gray-700 -mt-6">
        {t("reachOut")}{" "}   
        <a className="underline" href="mailto:hotuan850@gmail.com">
          hotuan850@gmail.com 
        </a>{" "}
        {t("throughForm")}
      </p>

      <form
        className="contact-form mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          placeholder="Your email"
          className="contact-input h-14 rounded-lg borderBlack px-4 bg-white"
          type="email"
          required
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          placeholder="Your message"
          className="contact-input h-52 my-3 rounded-lg borderBlack p-4 bg-white"
          required
          maxLength={5000}
          name="message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
