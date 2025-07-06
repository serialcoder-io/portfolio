import NavBar from "./navbar";
import Image from "next/image";


export default function Header(){
    return (
        <header className="flex justify-between items-center px-8 py-5">
            <div>
                <Image src="logo-light.svg" alt="logo" width={120} height={14} />
            </div>
            <NavBar />
            <div>
                <p>90:30:30</p>
            </div>
        </header>
    );
}