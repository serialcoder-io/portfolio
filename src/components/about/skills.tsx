import prisma from "@/lib/prisma";
import { Tool } from "@prisma/client";
import SkillsCategory from "@/ui/about/skill-category";

export default async function SkillsSection() {
  const competencies: Tool[] = await prisma.tool.findMany();

  const grouped = {
    Languages: competencies.filter((c) => c.toolType === "language"),
    "Frameworks & Libraries": competencies.filter((c) =>
      ["framework", "library", "testing"].includes(c.toolType)
    ),
    Databases: competencies.filter((c) => c.toolType === "database"),
    Style: competencies.filter((c) => ["style"].includes(c.toolType)),
    Tools: competencies.filter((c) => ["tool"].includes(c.toolType)),
  };

  return (
    <section className="space-y-8 py-6 w-full">
      <h2 className="text-4xl font-bold">Skills</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <SkillsCategory key={category} category={category} items={items} />
      ))}
    </section>
  );
}
