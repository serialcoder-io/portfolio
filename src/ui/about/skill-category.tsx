import { JSX } from "react";
import { Tool } from "@prisma/client";
import SkillCard from "./skill-card";

type SkillsCategoryProps = {
    category: string
    items: Tool[]
}

export default function SkillsCategory({category, items}: SkillsCategoryProps): JSX.Element {
  return (
    <div key={category} className="space-y-4">
      {/* Category title with line */}
      <div className="flex items-center gap-4">
        <h3 className="text-xl font-semibold">{category}</h3>
        <div className="flex-1 h-[1px] bg-base-300"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <SkillCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
