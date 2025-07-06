import NavButton from "@/ui/nav-button";
import IconLink from "@/ui/icon-link";

import { CircleUserRound, Phone, House, FileCode} from "lucide-react";

export default function NavBar(){
    return (
        <nav className="bg-base-100 shadow-lg flex items-center gap-x-1 border rounded-4xl px-2 py-1">
            <IconLink
                href=""
                icon={<House size={18} />}
                className="bg-transparent hover:text-white"
            />
            <div className="w-[1px] h-7 bg-neutral opacity-20"></div>
            <div className="flex items-center gap-x-2">
                <IconLink
                    text="About"
                    href=""
                    icon={<CircleUserRound size={18} />}
                    className="bg-transparent hover:text-white"
                />
                <IconLink
                    text="Projects"
                    href=""
                    icon={<FileCode size={18} />}
                    className="bg-transparent hover:text-white"
                />
                <IconLink
                    text="Contact"
                    href=""
                    icon={<Phone size={18} />}
                    className="bg-transparent hover:text-white"
                />
            </div>
            <div className="w-[1px] h-7 bg-neutral opacity-20"></div>
            <NavButton />
        </nav>
    );
}