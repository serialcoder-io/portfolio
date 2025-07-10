import Link from 'next/link';
import { IconLinkType } from '@/lib/definition';


export default function IconLink({
   text, 
   href, 
   icon, 
   className = '' 
  }: IconLinkType
) {
  return (
    <Link href={href}
      className={
        `transition-colors duration-300 ease-in-out btn 
      rounded-full border-none flex items-center gap-2 ${className} h-8`
      }
    >
      {icon && <span>{icon}</span>}
      {text && <span className="font-normal">{text}</span>}
    </Link>
  );
}
