import NavButton from "@/ui/nav-button";
import IconLink from "@/ui/icon-link";

import { CircleUserRound, Phone, House, FileCode } from "lucide-react";

export default function NavBar() {
    return (
        <nav className="
                bg-base-100 shadow-lg flex items-center gap-x-1 
                border rounded-4xl px-2 py-1 border-none
            "
        >
            <IconLink
                href="/"
                icon={<House size={18} />}
                className="hover:text-primary-content hover:bg-primary"
            />
            <div className="w-[1px] h-7 bg-neutral opacity-20"></div>
            <div className="flex items-center gap-x-2">
                <IconLink
                    text="About"
                    href="/about"
                    icon={<CircleUserRound size={18} />}
                    className="hover:text-primary-content hover:bg-primary"
                />
                <IconLink
                    text="Projects"
                    href="/projects"
                    icon={<FileCode size={18} />}
                    className="hover:text-primary-content hover:bg-primary"
                />
                <IconLink
                    text="Contact"
                    href="/contact"
                    icon={<Phone size={18} />}
                    className="hover:text-primary-content hover:bg-primary"
                />
            </div>
            <div className="w-[1px] h-7 bg-neutral opacity-20"></div>
            <NavButton />
        </nav>
    );
}