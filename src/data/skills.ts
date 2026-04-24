export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Tools & Languages",
    items: ["JavaScript", "Git", "Docker", "REST APIs", "GraphQL"],
  },
  {
    category: "Design",
    items: ["UI/UX Design", "Figma", "Responsive Design", "Accessibility"],
  },
];
