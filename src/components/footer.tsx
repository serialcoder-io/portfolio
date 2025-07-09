import ExternalIconLink from "@/ui/external-icon-link";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="max-w-6xl mx-auto py-8 px-6 flex flex-col items-center justify-center gap-y-8">
            <div className="w-full flex items-center justify-center gap-x-10">
                <Link
                    href="/about"
                    className="btn h-8 px-5 rounded-full textarea-md
                    text-base-content/70 text-lg bg-base-100 hover:bg-base-100 hover:text-base-content
                    transition-colors duration-300 ease-in-out"
                    >
                    <span>Legal Notice & Terms of Use</span>
                </Link>
                <div className="flex items-center justify-center gap-x-3">
                    <ExternalIconLink
                       
                        href="https://www.linkedin.com/in/omar-anli-25215b2b2/"
                        icon={<Linkedin size={18} />}
                        className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
                    />
                    <ExternalIconLink
                        
                        href="https://github.com/serialcoder-io"
                        icon={<Github size={18} />}
                        className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
                    />
                    <ExternalIconLink
                       
                        href="https://github.com/serialcoder-io"
                        icon={<Facebook size={18} />}
                        className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
                    />
                </div>
            </div>
            <p>&copy; Omar Anli 2025. All rights reserved.</p>
        </footer>
    );
}