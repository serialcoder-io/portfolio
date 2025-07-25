import ExternalIconLink from "@/ui/external-icon-link";
import { BookOpenText, Github, Linkedin } from "lucide-react";
import PrimaryButton from "@/ui/primary-button";


export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 md:px-20 text-center md:text-left">
      <div className="max-w-3xl space-y-8">
        <h1 className="text-5xl font-extrabold leading-tight text-primary">
          Crafting solutions that scale<br />and stand the test of time.
        </h1>
        <h2 className="text-2xl font-medium text-base-content">
          Secure, maintainable, and efficient software tailored to your needs.
        </h2>
        <p className="text-lg leading-relaxed text-base-content opacity-50">
          Bridging the gap between innovative ideas and reliable technology — delivering results that make a difference.
        </p>

        <div className="flex justify-center items-center md:justify-start space-x-8">
          <ExternalIconLink
            text="linkedin"
            href="https://www.linkedin.com/in/omar-anli-25215b2b2/"
            icon={<Linkedin size={18} />}
            className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
          />
          <ExternalIconLink
            text="github"
            href="https://github.com/serialcoder-io"
            icon={<Github size={18} />}
            className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
          />
          <ExternalIconLink
            text="resume"
            href="https://github.com/serialcoder-io"
            icon={<BookOpenText size={18} />}
            className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
          />
        </div>
        <PrimaryButton
          text="Work With Me"
          href="/contact"
        />
      </div>
    </section>
  )
}
