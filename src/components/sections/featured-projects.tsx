import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="space-y-12">
          {featured.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg" />

              <div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-lg">
                  {project.longDescription || project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button>Live Demo</Button>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">GitHub</Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
