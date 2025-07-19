import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

type ExperienceWithTools = Prisma.ExperienceGetPayload<{
  include: {
    tools: {
      include: {
        tool: true;
      };
    };
  };
}>;

export default async function ExperienceSection() {
  const experiences: ExperienceWithTools[] = await prisma.experience.findMany({
    include: {
      tools: {
        include: {
          tool: true,
        },
      },
    },
      orderBy: {
      endDate: 'desc', // ou 'asc' pour croissant
    },
  });

  return (
    <section className="space-y-6 py-12">
      <h2 className="text-4xl text-base-content font-bold">Experiences</h2>
      <div className="grid gap-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-base-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-primary">
              {exp.title}{" "}
              <span className="text-base text-base-content/70">
                ({exp.type})
              </span>
            </h3>
            <p className="text-base-content/80 mb-2">{exp.company}</p>
            <p className="text-sm text-base-content/60 mb-4">
              {new Date(exp.startDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {new Date(exp.endDate).toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-primary text-primary-content text-xs px-2 py-1 rounded-full"
                >
                  {tool.tool.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
