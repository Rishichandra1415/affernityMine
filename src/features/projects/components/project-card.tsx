"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  location: string;
  type: string;
  category: string;
  image: string;
}

export function ProjectCard({ title, location, type, category, image }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative h-[300px] w-full overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-800"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            <span>{category}</span>
          </div>
          <h3 className="text-xl font-black leading-tight tracking-tight uppercase">
            {title}
          </h3>
          <div className="flex items-center space-x-1.5 text-sm font-medium text-zinc-300">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{location}</span>
          </div>
          
          <div className="pt-3 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
             <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white underline decoration-primary underline-offset-4">
                <span>View Project</span>
                <ExternalLink className="h-3 w-3" />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
