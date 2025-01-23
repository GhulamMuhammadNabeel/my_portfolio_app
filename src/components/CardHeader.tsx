import Stars from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';



export const CardHeader = ({title,description,className}:{title:string;description:string;className?:string}) =>{
    return(
        <div className={twMerge("flex flex-col p-4 md:py-4 md:px-8 ",className)}>
        <div className="inline-flex items-center gap-2">
          <Stars className="size-9 text-emerald-300"/>
          <h3 className="font-serif text-2xl">{title}</h3>
        </div>
        <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">{description}</p>
      </div>
    );
}