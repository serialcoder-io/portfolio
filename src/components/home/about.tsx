import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-5 px-6 text-base-content">
      <h2 className="text-4xl font-bold mb-12 text-primary text-center">About Me</h2>

      {/* Intro image + texte */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-12 mb-20">
        <div className="flex-shrink-0 mb-8 md:mb-0">
          <Image
            src="/profile.png"
            alt="Profile photo"
            width={192}
            height={192}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="md:flex-1">
          <p className="text-lg leading-relaxed mb-6">
            I design scalable software with clean architecture and smooth user experience.  
            I focus on internal tools—custom apps that help teams streamline workflows, manage operations, and solve real business problems.  
            Always built for performance, clarity, and long-term reliability.
          </p>
          <Link
          href="/about"
          className="btn mt-8 h-14 px-5 border-1 border-primary font-semibold rounded-full 
          text-primary text-lg bg-base-100 hover:bg-primary hover:text-primary-content 
          transition-colors duration-300 ease-in-out"
        >
          More about me
        </Link>
        </div>
      </div>
    </section>
  );
}

