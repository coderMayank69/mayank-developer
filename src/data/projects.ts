export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory management",
    longDescription: "Built a scalable e-commerce platform with user authentication, product management, and payment integration.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "A productive task management tool with team collaboration features.",
    image: "/images/project-2.jpg",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com",
    featured: true,
  },
  {
    id: "project-3",
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    image: "/images/project-3.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
];
