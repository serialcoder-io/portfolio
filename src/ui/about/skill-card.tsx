import { JSX } from "react";
import { Tool } from "@prisma/client";
import Image from "next/image";

type SkillCardProp = {
  item: Tool
}

export default function SkillCard({ item }: SkillCardProp): JSX.Element {
  return (
    <a
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
  );
}
