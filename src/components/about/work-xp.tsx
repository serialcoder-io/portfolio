export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      type: "internship",
      title: "Backend Developer Intern",
      description:
        "Developed RESTful APIs for a leave management system using Django. Implemented dynamic search and optimized database queries for better performance.",
      startDate: "2023-06-01",
      endDate: "2023-08-31",
      company: "Tech Solutions Ltd",
      tools: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      type: "internship",
      title: "Fullstack Developer Intern",
      description:
        "Built a restaurant management platform with Django REST Framework and React. Added reservation and rating features and integrated TailwindCSS for a modern UI.",
      startDate: "2024-02-01",
      endDate: "2024-04-30",
      company: "WebNest Agency",
      tools: ["Django REST Framework", "React", "TailwindCSS", "SQLite"],
    },
    {
      id: 3,
      type: "freelance",
      title: "Mobile App Developer",
      description:
        "Developed a mobile application for partner stores to validate vouchers using QR code scanning. Integrated secure authentication and backend validation logic.",
      startDate: "2025-01-10",
      endDate: "2025-03-05",
      company: "Freelance Project",
      tools: ["React Native", "Java", "REST API"],
    },
  ];

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
              <span className="text-base text-base-content/70">({exp.type})</span>
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
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
