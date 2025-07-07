import NavBar from "./navbar";
import Image from "next/image";
import Clock from "@/ui/Home/clock";


export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-5">
            <div>
                <Image src="logo-light.svg" alt="logo" width={120} height={14} />
            </div>
            <NavBar />
            <div>
                <Clock />
            </div>
        </header>
    );
}