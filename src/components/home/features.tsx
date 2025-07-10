import { Code, Server, Wrench, Globe, BarChart, Repeat } from "lucide-react"; // Ou tes propres SVG/icônes
import Link from "next/link";

const features = [
  {
    title: "Ongoing Maintenance",
    desc: "Keeping your software updated and reliable to reduce downtime and ensure long-term stability.",
    icon: <Wrench size={36} className="text-primary" />,
  },
  {
    title: "Optimization",
    desc: "Improving application speed and responsiveness with efficient code and smart architecture.",
    icon: <BarChart size={36} className="text-primary" />,
  },
  {
    title: "Backend & API Development",
    desc: "Designing secure, scalable server-side applications with clean RESTful APIs and seamless integration.",
    icon: <Server size={36} className="text-primary" />,
  },
  {
    title: "Web Development",
    desc: "Creating fast, responsive, and reliable websites tailored to your business goals.",
    icon: <Globe size={36} className="text-primary" />,
  },
  {
    title: "Internal Tools",
    desc: "Developing custom internal tools to streamline workflows and boost productivity.",
    icon: <Code size={36} className="text-primary" />,
  },
  {
    title: "Automation",
    desc: "Boosting productivity by automating repetitive tasks and simplifying operations.",
    icon: <Repeat size={36} className="text-primary" />,
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 text-base-content">
      <h2 className="text-4xl font-bold mb-16 text-primary text-center">
        Core Competencies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(({ title, desc, icon }) => (
          <div
            key={title}
            className="bg-base-100 border border-base-content/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
            <p className="text-base-content text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/projects"
          className="btn mt-12 h-14 px-6 border-1 border-primary font-semibold rounded-full 
          text-primary text-lg bg-base-100 hover:bg-primary hover:text-primary-content 
          transition-colors duration-300"
        >
          Explore My Work
        </Link>
      </div>
    </section>
  );
}
