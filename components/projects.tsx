"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { ref } = useSectionInView("projects", 0.5);
  const { t } = useTranslation();

  return (
    <section ref={ref} id="projects" className="scroll-mt-30 mb-30">
      <SectionHeading>{t("myProjects")}</SectionHeading>

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <div></div>

      <div></div>
    </section>
  );
}
