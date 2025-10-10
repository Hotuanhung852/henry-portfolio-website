import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { ImVideoCamera } from "react-icons/im";
import pawtime from "@/public/pawtime.jpg";
import sjcp from "@/public/sjcp.jpg";
import quanghuyphotocopy from "@/public/quanghuyphotocopy.jpg";
import "@/i18n/i18n";

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    experienceTitle: "experienceTitle01",
    experienceLocation: "experienceLocation01",
    experienceDesc:
      "experienceDesc01",
    icon: React.createElement(CgWorkAlt),
    experienceDate: "2024",
  },
  {
    experienceTitle: "experienceTitle02",
    experienceLocation: "experienceLocation02",
    experienceDesc:
      "experienceDesc02",
    icon: React.createElement(ImVideoCamera),
    experienceDate: "2024 - 2025",
  },
  {
    experienceTitle: "experienceTitle03",
    experienceLocation: "experienceLocation03",
    experienceDesc:
      "experienceDesc03",
    icon: React.createElement(LuGraduationCap),
    experienceDate: "2021 - 2025",
  },
] as const;

export const projectsData = [
  {
    projectTitle: "Pawtime",
    projectDesc: "pawtimeDesc",
    tags: ["HTML", "CSS", "JavaScript", "NodeJS", "MongoDB", "Render"],
    imageUrl: pawtime,
  },
  {
    projectTitle: "sjcpTitle",
    projectDesc: "sjcpDesc",
    tags: ["React", "NodeJS", "PostgreSQL", "Azure", "Vercel"],
    imageUrl: sjcp,
  },
  {
    projectTitle: "Quang Huy PhotoCopy",
    projectDesc: "quanghuyDesc",
    tags: ["HTML", "CSS", "JavaScript", "Vercel"],
    imageUrl: quanghuyphotocopy,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Figma",
  "Node.js",
  "Git",
  "Tailwind",
  "Java",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;