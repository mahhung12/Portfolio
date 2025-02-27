'use client'

import { FaAws, FaCss3Alt, FaDocker, FaGit, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { PiStackFill } from "react-icons/pi";
import {
  SiAdobexd,
  SiBabel,
  SiBitbucket,
  SiDiscord,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiJest,
  SiJira,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  // SiPlaywright,
  SiPostgresql,
  SiPrettier,
  //   SiReactnative,
  SiRedis,
  SiSass,
  SiSqlite,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiVercel,
  SiVitest,
  SiWebpack,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    // { name: "Angular", icon: <FaAngular /> },
    // { name: "Vue.js", icon: <FaVuejs /> },
    { name: "SASS/SCSS", icon: <SiSass /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  Database: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQLite", icon: <SiSqlite /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "Firebase", icon: <SiFirebase /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "NestJS", icon: <SiNestjs /> },
    // { name: "TypeORM", icon: <SiTypeorm /> },
    { name: "NextJs", icon: <SiNextdotjs /> },

    // { name: "Django", icon: <SiDjango /> },
    // { name: "Flask", icon: <SiFlask /> },
    // { name: "Ruby on Rails", icon: <SiRubyonrails /> },
    // { name: "ASP.NET", icon: <SiDotnet /> },
    // { name: "Spring Boot", icon: <SiSpring /> },
  ],
  "DevOps & Cloud": [
    { name: "Docker", icon: <FaDocker /> },
    // { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "AWS", icon: <FaAws /> },
    // { name: "Azure", icon: <SiAzuredevops /> },
    // { name: "Google Cloud Platform (GCP)", icon: <SiGooglecloud /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "Vercel", icon: <SiVercel /> },
    // { name: "Terraform", icon: <SiTerraform /> },
  ],
  "Version Control": [
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <SiGithub /> },
    { name: "GitLab", icon: <SiGitlab /> },
    { name: "Bitbucket", icon: <SiBitbucket /> },
  ],
  Testing: [
    { name: "Jest", icon: <SiJest /> },
    { name: "Vitest", icon: <SiVitest /> },
    // { name: "Playwright", icon: <SiPlaywright /> },
    // { name: "Mocha", icon: <SiMocha /> },
    // { name: "Chai", icon: <SiChai /> },
    // { name: "Cypress", icon: <SiCypress /> },
    // { name: "Selenium", icon: <SiSelenium /> },
  ],
  "Productivity & Tools": [
    { name: "Webpack", icon: <SiWebpack /> },
    { name: "Babel", icon: <SiBabel /> },
    { name: "ESLint", icon: <SiEslint /> },
    { name: "Prettier", icon: <SiPrettier /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Adobe XD", icon: <SiAdobexd /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Trello", icon: <SiTrello /> },
    { name: "Discord", icon: <SiDiscord /> },
  ],
};

const skillsCombine = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SASS/SCSS", icon: <SiSass /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "NestJS", icon: <SiNestjs /> },
  { name: "NextJs", icon: <SiNextdotjs /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Git", icon: <FaGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "GitLab", icon: <SiGitlab /> },
  { name: "Bitbucket", icon: <SiBitbucket /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Vitest", icon: <SiVitest /> },
  // { name: "Playwright", icon: <SiPlaywright /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "Babel", icon: <SiBabel /> },
  { name: "ESLint", icon: <SiEslint /> },
  { name: "Prettier", icon: <SiPrettier /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Adobe XD", icon: <SiAdobexd /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Trello", icon: <SiTrello /> },
  { name: "Discord", icon: <SiDiscord /> },
];

export default function Skills() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <PiStackFill className="h-6 w-6 flex-none" />
        <span className="ml-3">Technologies</span>
      </h2>

      <div className="mt-4 md:grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* {Object.entries(skills).map(([category, skillsList]) => ( */}
        {Object.entries(skills).map(([category, skillsList], index, array) => (
          <div
            key={category}
            // className="p-4 py-2 rounded shadow-lg bg-white dark:bg-inherit border border-zinc-100 dark:border-zinc-700/40"
            className={`p-3 py-2 rounded-xl shadow-lg bg-white dark:bg-inherit border border-zinc-100 dark:border-zinc-700/40 ${
              index === array.length - 1 ? "col-span-2" : ""
            }`}
          >
            <div className="md:text-lg text-xl text-gray-500 dark:text-gray-400 font-bold text-center md:text-left">
              {category}
            </div>
            <div
              className={`grid grid-cols-2 gap-2 mt-2 ${
                index === array.length - 1 ? "sm:grid-cols-5" : "sm:grid-cols-3"
              }`}
            >
              {skillsList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center relative group p-2 border border-zinc-100 dark:border-zinc-700/40 rounded"
                >
                  <span className="md:text-lg text-2xl">{skill.icon}</span>
                  <span className="z-10 p-1 mx-auto absolute w-fit left-0 right-0 top-full mt-1 text-xs text-nowrap text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const SkillsAnimation = () => {
  return (
    <div className="relative flex-col overflow-hidden border-y border-bg-700 dark:border-zinc-700/40 py-sm py-8">
      <div className="overflow-hidden">
        <motion.div 
          className="flex w-max gap-4 flex-row"
          animate={{
            x: [0, -1000], // Adjust this value based on your content width
          }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First set of skills */}
          {skillsCombine.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-row gap-2 flex-wrap items-center relative group p-1 px-3 border border-zinc-100 dark:border-zinc-700/40 rounded-3xl
              bg-gray-50 dark:bg-inherit"
              whileHover={{ scale: 1.05 }}
            >
              <span className="md:text-lg text-2xl">{skill.icon}</span>
              <span className="p-1 mx-auto w-fit text-xs text-nowrap rounded transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
          
          {/* Duplicate set of skills for seamless loop */}
          {skillsCombine.map((skill) => (
            <motion.div
              key={`${skill.name}-duplicate`}
              className="flex flex-row gap-2 flex-wrap items-center relative group p-1 px-3 border border-zinc-100 dark:border-zinc-700/40 rounded-3xl
              bg-gray-50 dark:bg-inherit"
              whileHover={{ scale: 1.05 }}
            >
              <span className="md:text-lg text-2xl">{skill.icon}</span>
              <span className="p-1 mx-auto w-fit text-xs text-nowrap rounded transition-opacity">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};