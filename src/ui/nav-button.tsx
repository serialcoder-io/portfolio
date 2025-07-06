import { Moon } from "lucide-react"

export default function NavButton() {
    return (
        <button
            className="btn rounded-full border-none bg-transparent 
            hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
        >
            <Moon size={18} />
        </button>
    );
}