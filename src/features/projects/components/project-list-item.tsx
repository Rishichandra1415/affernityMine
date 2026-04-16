"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Project } from "../constants/projects";
import { cn } from "@/shared/lib/utils";

interface ProjectListItemProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectListItem({ project, reverse }: ProjectListItemProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex flex-col items-center gap-12 lg:gap-20",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        )}>
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{project.category}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{project.type}</span>
              </div>
              <h2 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
                {project.title}
              </h2>
              <div className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg font-medium">{project.location}</span>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
              {project.description}
            </p>

            {project.stats && (
              <div className="grid grid-cols-3 gap-6 pt-4">
                {project.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">{stat.label}</p>
                    <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
               <button className="group inline-flex items-center space-x-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-primary">
                  <span>Explore Details</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative flex-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-zinc-100 dark:bg-zinc-900">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            
            {/* Design Element */}
            <div className={cn(
              "absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl",
              reverse ? "-left-6 -bottom-6 right-auto" : "-bottom-6 -right-6"
            )} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
