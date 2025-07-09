import Image from "next/image";
import Link from "next/link";

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

export default function Features() {
    return (
        <section className="max-w-6xl mx-auto py-16 px-6 text-base-content">
            <h2 className="text-4xl font-bold mb-16 text-primary text-center">
                Core Competencies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map(({ title, desc, img }) => (
                    <div
                        key={title}
                        className="relative group pb-24 transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="w-full h-52 relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition duration-300">
                            <Image
                                src={img}
                                alt={title}
                                fill
                                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>

                        {/* Card text */}
                        <div
                            className="absolute left-1/2 bottom-4 transform -translate-x-1/2
                w-[90%] h-40 bg-base-100 text-base-content border border-base-content/10 rounded-xl p-5
                shadow-xl flex flex-col justify-between transition duration-300 backdrop-blur-sm"
                        >
                            <h3 className="text-lg font-semibold text-primary tracking-wide">
                                {title}
                            </h3>
                            <p className="text-sm text-base-content/80 leading-relaxed line-clamp-3">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

           <div className="flex justify-center">
             <Link
                href="/projects"
                className="btn mt-8 h-14 px-5 border-1 border-primary font-semibold rounded-full 
                text-primary text-lg bg-base-100 hover:bg-primary hover:text-primary-content 
                transition-colors duration-300 ease-in-out"
            >
                Explore My Work
            </Link>
           </div>
        </section>
    );
}
