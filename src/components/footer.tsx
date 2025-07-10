import ExternalIconLink from "@/ui/external-icon-link";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return (
        <footer className="bg-base-300 mx-auto py-14 px-6 flex items-center flex-wrap justify-around gap-y-8">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                <Link
                    href="/about"
                    className="btn h-8 px-5 rounded-full textarea-md border-none
                    text-base-content/70 text-lg hover:bg-base-100 hover:text-base-content
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
                       
                        href="https://www.facebook.com/anliomar.sandia"
                        icon={<Facebook size={18} />}
                        className="bg-base-100 hover:text-primary-base-content hover:bg-base-300"
                    />
                </div>
            </div>
            <div className=""><p>&copy; Omar Anli 2025. All rights reserved.</p></div>
        </footer>
    );
}