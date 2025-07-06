import { Moon } from "lucide-react"

export default function NavButton() {
    return (
        <button
            className="btn rounded-full border-none bg-transparent h-8 
            hover:bg-primary hover:text-primary-content transition-colors duration-300 ease-in-out"
        >
            <Moon size={18} />
        </button>
    );
}