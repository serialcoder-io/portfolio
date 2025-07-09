import Image from "next/image";


export default function Features() {
    return (
        <section className="max-w-6xl mx-auto py-5 px-6 text-base-content">
            <h2 className="text-4xl font-bold mb-12 text-primary text-center">Core Competencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map(({ title, desc, img }) => (
                    <div key={title} className="relative pb-20"> {/* padding pour la carte absolue */}
                        {/* Image */}
                        <div className="w-full h-48 relative rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={img}
                                alt={title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 25vw"
                            />
                        </div>

                        {/* card text */}
                        <div
                            className="absolute left-1/2 bottom-4 transform -translate-x-1/2
                    w-[90%] h-40 bg-base-100 text-base-content border border-base-content/10 rounded-xl p-5
                    shadow-lg flex flex-col md:justify-between justify-around"
                        >
                            <h3 className="text-lg font-semibold text-secondary">{title}</h3>
                            <p className="text-sm text-base-content/80 leading-relaxed line-clamp-3">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


const features = [
    {
        title: "Ongoing Maintenance",
        desc: "Keeping your software updated and reliable to reduce downtime and ensure long-term stability.",
        img: "/software-maintenance.jpg",
    },
    {
        title: "Optimization",
        desc: "Improving application speed and responsiveness with efficient code and smart architecture.",
        img: "/optimization.png",
    },
    {
        title: "Backend & API Development",
        desc: "Designing secure, scalable server-side applications with clean RESTful APIs and seamless integration to third-party services — ensuring high performance and reliability.",
        img: "/backend-api.png",
    },
    {
        title: "Web Development",
        desc: "Creating fast, responsive, and reliable websites tailored to your business goals — from simple sites to complex web applications.",
        img: "/web-dev.webp",
    },

    {
        title: "Internal Tools",
        desc: "Developing custom internal tools to streamline workflows and boost productivity.",
        img: "/internal-tools.jpg",
    },
    {
        title: "Automation",
        desc: "Boosting productivity by automating repetitive tasks and simplifying day-to-day operations with smart solutions.",
        img: "/automation.webp",
    },
];
