import prisma from "@/lib/prisma";
import { Tool } from "@prisma/client";
import Image from "next/image";

export default async function SkillsSection() {

  const competencies: Tool[] = await prisma.tool.findMany()

  const grouped = {
    Languages: competencies.filter(c => c.toolType === "language"),
    "Frameworks & Libraries": competencies.filter(c => ["framework", "library", "testing"].includes(c.toolType)),
    Databases: competencies.filter(c => c.toolType === "database"),
    Style: competencies.filter(c => ["style"].includes(c.toolType)),
    Tools: competencies.filter(c => ["tool"].includes(c.toolType)),
  };


  return (
    <section className="space-y-8 py-6 w-full">
      <h2 className="text-4xl font-bold">Skills</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="space-y-4">
          {/* Category title with line */}
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold">{category}</h3>
            <div className="flex-1 h-[1px] bg-base-300"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map(item => (
              <a
                key={item.id}
                href={item.website!}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-2 bg-base-200 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-2"
              >
                {/* Logo with circle background */}
                <div className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center mb-3">
                  {item.logo && (
                    <Image src={item.logo} alt={item.name} width={30} height={30} />
                  )}
                </div>
                <span className="text-sm font-medium">{item.name}</span>

              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
