import Image from "next/image";
import { MoveRight } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  image: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  items,
  image,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative h-[450px] w-full overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        priority
      />
      
      {/* Gradient Overlay - Cinematic Darkening */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
      
      {/* Content Area */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
        <div className="space-y-4">
          {/* Title */}
          <h3 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
          </h3>
          
          {/* Description */}
          <p className="line-clamp-2 text-base leading-relaxed text-zinc-300">
            {description}
          </p>
          
          {/* Pills/Badges Layout */}
          <div className="flex flex-wrap gap-2 pt-2">
            {items.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10"
              >
                {item}
              </span>
            ))}
          </div>
          
          {/* Learn More Link */}
          <div className="flex items-center pt-4 transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="flex items-center text-sm font-bold text-primary group-hover:underline">
              Learn More <MoveRight className="ml-2 h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
