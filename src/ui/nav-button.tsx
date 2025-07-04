import { NavBarButtonType } from "@/lib/definition";

export default function NavButton({text}: NavBarButtonType){
    return (
        <button className="btn border-none">
            {text}
        </button>
    );
}