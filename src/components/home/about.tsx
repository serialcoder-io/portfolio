import Image from "next/image";
import PrimaryButton from "@/ui/primary-button";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6 text-base-content">
      <h2 className="text-4xl font-bold mb-16 text-primary text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Image */}
        <div className="w-48 h-48 relative mx-auto md:mx-0">
          <Image
            src="/profile.png"
            alt="Profile photo"
            fill
            className="rounded-full object-cover shadow-md"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-lg leading-relaxed">
          <p className="mb-5">
            I build scalable software with clean architecture and smooth user experience.
            My focus is on <span className="font-medium text-primary">internal tools</span> — custom apps that solve real business problems and help teams streamline their daily work.
          </p>
          <p className="mb-5">
            Whether it&apos;s automation, dashboarding, or backend services, I aim for performance, maintainability, and clarity.
          </p>
          <p>
            My goal? Turn ideas into efficient, reliable, and sustainable solutions.
          </p>
          <PrimaryButton
            text="More about me"
            href="/about"
          />
        </div>
      </div>
    </section>
  );
}
