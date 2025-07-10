'use client'

import Link from 'next/link';
import { IconLinkType } from '@/lib/definition';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function IconLink({
   text, 
   href, 
   icon, 
   className = '' 
  }: IconLinkType
) {

  const pathname = usePathname();


  return (
    <Link href={href}
      className={clsx(
        'transition-colors duration-300 ease-in-out btn rounded-full text-base-content' +
        'border-0 border-transparent flex items-center gap-2 h-8 hover:text-base-content hover:bg-base-300',
        pathname === href ? 'bg-base-300' : 'bg-base-100',
        className
      )}
    >
      {icon && <span>{icon}</span>}
      {text && <span className="font-normal">{text}</span>}
    </Link>
  );
}
