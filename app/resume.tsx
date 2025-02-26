import { Card } from "@/components/Card";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    date: "Aug 2024 - Present",
    name: "Oyika ‑ Battery Swapping Services (Battery‑as‑a‑Service (BaaS)",
    description: [
      "Developing Backend using main technologies is NodeJS and Golang to support a seamless Battery as a Service platform for IoT devices and electric motorbike",
      "Implementing efficient APIs and Microservices to enhance user interaction with the project app and manage service requests.",
    ],
    skill: "Typescript, NextJS, NodeJS, Golang, Docker, CI/CD, AWS",
  },
  {
    date: "Mar 2024 - Dec 2024",
    name: "BEX - Benly Marketplace - Fullstack Developer",
    description: [
      "Collaborated with team members to develop a new e‑commerce platform for a Japanese client using the Medusa framework",
      "Contributed to the implementation of microservice architecture in the backend for scalability and maintainability e‑Commerce platform",
      "Actively involved in the Medusa community, contributing code or documentation improvements",
    ],
    skill: "Microservices, EC2, S3, Medusa, TypeScript, React, NextJS, TailwindCSS, Express, Docker, CI/CD, AWS",
  },
  {
    date: "Jul 2023 - Dec 2023",
    name: "VNA Booking - Frontend Developer",
    description: [
      "Flight Booking and Ticket Management Channel - Vietnam Airline",
      "Development of the system’s core feature, focusing on flight booking functionality",
      "Create a system that can handle Multiple Transactions at the same time",
    ],
    skill: "Java, NextJS, TailwindCSS, React-Query, React-Hook-Form, Docker, Jenkin",
  },
  {
    date: "Dec 2022 - May 2023",
    name: "FLPKX MP x Swap - Blockchain Platform - Frontend Developer",
    description: [
      "A platform is being created on the Solana Network that includes an NFT marketplace, a system for swapping tokens, a peer‑to‑peer token marketplace, and a tool for token vesting",
      "The platform will interact with the Solana network through the project‑serum/anchor framework",
    ],
    skill: "Solana, NextJS, TypeScript, TailwindCSS, Anchor, Serum, Solana Wallet, Phantom Wallet, Solana Explorer",
  },
  {
    date: "Aug 2022 - Nov 2022",
    name: "NLC/NFT Marketplace - Blockchain Platform - Frontend Developer",
    description: [
      "Develop NFT Marketplace, staking services, and sell NFT.",
      "Additionally, an Administrator System will be developed to manage NFTs and revenue",
      "Technologies using for client and server side is React/NestJs",
    ],
    skill: "React, NextJS, TypeScript, TailwindCSS, NestJS, TypeORM, PostgreSQL, Docker, CI/CD, AWS",
  },
  {
    date: "Feb 2022 - Sep 2022",
    name: "C2C Marketplace - Frontend Developer",
    description: [
      "Develop C2C Marketplace to create, group NFT by collections, stores of their own and start selling, make offers independently.",
    ],
    skill: "React, NextJS, TypeScript, TailwindCSS.",
  },
  {
    date: "Aug 2023 - Present",
    name: "Age of 23 - Side portfolio project",
    description: [
      "Creating a captivating website that serves as a concise summary, encompassing my work, education, personal journey.",
      "Use notion api to manage blog features, deploying to Vercel.",
    ],
    skill: "React, NextJS, TypeScript, TailwindCSS, Notion API, Vercel",
  },
];

interface ResumeItemProps {
  title: string;
  date: string;
  description: string[];
  skill: string;
}

function ResumeItem({ title, description, date, skill }: ResumeItemProps) {
  return (
    <Card as="article">
      <Card.Title>{title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={date} decorate>
        {date}
      </Card.Eyebrow>
      {description.map((description, index) => (
        <Card.Description key={index}>{description}</Card.Description>
      ))}
      <Card.Skill>
        <span className="font-bold">Skill: {skill}</span>
      </Card.Skill>
    </Card>
  );
}

export default function Resume() {
  return projects.map((project, index) => (
    <ResumeItem
      title={project.name}
      description={project.description}
      date={project.date}
      skill={project.skill}
      key={index}
    />
  ));
}
