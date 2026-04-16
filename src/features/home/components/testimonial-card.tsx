"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative flex flex-col space-y-4 rounded-[2.5rem] bg-white p-8 shadow-xl shadow-zinc-200/50 dark:bg-zinc-900 transition-all hover:scale-[1.02] border border-zinc-50 dark:border-zinc-800"
    >
      <div className="absolute top-8 right-8 text-primary/10">
        <Quote className="h-12 w-12 fill-current" />
      </div>

      <div className="flex space-x-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <p className="relative z-10 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium italic">
        "{content}"
      </p>

      <div className="flex items-center space-x-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-black text-sm uppercase">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-tight">
            {name}
          </h4>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
