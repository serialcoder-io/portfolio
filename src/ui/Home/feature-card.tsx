import { FeatureCardProps } from "@/lib/definition";

export default function FeatureCard({title, desc, icon}: FeatureCardProps){
    return (
        <div
            className="bg-base-100 border border-base-content/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
            <p className="text-base-content text-sm leading-relaxed">{desc}</p>
          </div>
    );
}