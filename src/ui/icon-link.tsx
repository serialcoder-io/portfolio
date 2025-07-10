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
  console.log('PATHNAME:', pathname, '| HREF:', href);


  return (
    <Link href={href}
      className={clsx(
        'transition-colors duration-300 ease-in-out btn rounded-full border-none flex items-center gap-2 h-8',
        pathname === href && 'bg-primary text-primary-content',
        className
      )}
    >
      {icon && <span>{icon}</span>}
      {text && <span className="font-normal">{text}</span>}
    </Link>
  );
}
