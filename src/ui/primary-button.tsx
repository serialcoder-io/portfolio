import { PrimaryButtonType } from "@/lib/definition";
import Link from "next/link";

export default function PrimaryButton({
    href,
    text, 
    className
} : PrimaryButtonType
){
    return (
        <Link
          href={href}
          className={`btn mt-12 h-14 px-6 border-1 border-primary font-semibold rounded-full 
          text-primary text-lg bg-base-100 hover:bg-primary hover:text-primary-content 
          transition-colors duration-300 ${className}`}
        >
          {text}
        </Link>
    );
}