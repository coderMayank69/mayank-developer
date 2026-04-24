import { skills } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((item) => (
                  <Badge key={item} variant="secondary" className="block text-center">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
