import { IconLinkType } from '@/lib/definition';


export default function ExternalIconLink({ text, href, icon, className = '' }: IconLinkType) {
  return (
    <a href={href}
      target="_blank"
      className={
        `transition-colors duration-300 ease-in-out btn 
      rounded-full border-none flex items-center gap-2 ${className} h-8`
      }
    >
      {icon && <span>{icon}</span>}
      {text && <span className="font-normal">{text}</span>}
    </a>
  );
}
