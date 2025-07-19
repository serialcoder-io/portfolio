import Image from "next/image";
import { Mail, MapPin, BookOpenText, Linkedin, Github } from "lucide-react";
import ExternalIconLink from "@/ui/external-icon-link";
import IconLink from "@/ui/icon-link";
import IntroSection from "@/components/about/intro";
import ExperienceSection from "@/components/about/work-xp";
import SkillsSection from "@/components/about/skills";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-10 text-base-content">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT - Profile Card */}
        <aside className="bg-base-200 rounded-2xl shadow-md p-6 flex flex-col items-center gap-y-6 md:sticky md:top-28 h-fit">
          {/* Image */}
          <Image
            src="/profile.png"
            alt="Profile photo"
            width={160}
            height={160}
            className="rounded-full object-cover shadow"
          />

          {/* Contact Info */}
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2">
              <Mail size={18} />
              <span className="text-sm">anliomar@outlook.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={18} />
              <span className="text-sm">Port Louis (Mauritius)</span>
            </div>
          </div>

          {/* Languages */}
          <div className="flex gap-3">
            <span className="badge bg-base-300 badge-outline px-4 py-2 border-0">English</span>
            <span className="badge bg-base-300 badge-outline px-4 py-2 border-0">French</span>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <ExternalIconLink
              href="https://www.linkedin.com/in/omar-anli-25215b2b2/"
              icon={<Linkedin size={18} />}
              className="bg-base-200 hover:bg-primary hover:text-primary-content"
            />
            <ExternalIconLink
              href="https://github.com/serialcoder-io"
              icon={<Github size={18} />}
              className="bg-base-200 hover:bg-primary hover:text-primary-content"
            />
            <ExternalIconLink
              href="https://github.com/serialcoder-io"
              icon={<BookOpenText size={18} />}
              className="bg-base-200 hover:bg-primary hover:text-primary-content"
            />
          </div>

          {/* Call to Action */}
          <div className="flex flex-col gap-2 w-full">
            <IconLink
              text="Contact me"
              href="/contact"
              icon={<Mail size={20} />}
              className="w-full justify-center h-12 bg-base-300 hover:bg-primary hover:text-primary-content"
            />
            <IconLink
              text="See Projects"
              href="/projects"
              icon={<BookOpenText size={20} />}
              className="w-full justify-center h-12 bg-base-300 hover:bg-primary hover:text-primary-content"
            />
          </div>
        </aside>

        {/* RIGHT - About Content */}
        <div className="md:col-span-2 space-y-6">
          <IntroSection />
          <ExperienceSection />
          <SkillsSection />
        </div>
      </div>
    </section>
  );
}

