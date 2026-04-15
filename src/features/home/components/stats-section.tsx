
"use client";
import { motion } from "framer-motion";
import { Building2, Trophy, Map, Users } from "lucide-react";
import { cn } from "@/shared/lib/utils";

// Refined premium color palette for stats
const statColors = {
  delivered: { text: "text-cyan-700", bg: "bg-cyan-50", icon: "text-cyan-600" },
  excellence: { text: "text-amber-600", bg: "bg-amber-50", icon: "text-amber-500" },
  states: { text: "text-emerald-700", bg: "bg-emerald-50", icon: "text-emerald-600" },
  clients: { text: "text-indigo-700", bg: "bg-indigo-50", icon: "text-indigo-600" },
};

const stats = [
  {
    label: "Projects Delivered",
    value: "150+",
    icon: Building2,
    color: statColors.delivered.text,
    bg: statColors.delivered.bg,
    iconColor: statColors.delivered.icon,
  },
  {
    label: "Years Excellence",
    value: "15+",
    icon: Trophy,
    color: statColors.excellence.text,
    bg: statColors.excellence.bg,
    iconColor: statColors.excellence.icon,
  },
  {
    label: "States Covered",
    value: "25",
    icon: Map,
    color: statColors.states.text,
    bg: statColors.states.bg,
    iconColor: statColors.states.icon,
  },
  {
    label: "Happy Clients",
    value: "100%",
    icon: Users,
    color: statColors.clients.text,
    bg: statColors.clients.bg,
    iconColor: statColors.clients.icon,
  },
];

export function StatsSection() {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8"> {/* Adjusted negative margin for better vertical balance */}
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-stretch overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-primary/10 dark:bg-zinc-900 lg:flex-row lg:items-center border border-zinc-100" // Refined corner size and shadow box style, added subtle border
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "group relative flex flex-1 flex-col items-center border-zinc-100 p-10 text-center transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-800/50 lg:p-12", // Refined padding and vertical space
                index !== stats.length - 1 && "border-b lg:border-b-0 lg:border-r border-zinc-100" // Subtler divider color
              )}
            >
              {/* Refined Background Glow */}
              <div className={cn("absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10", stat.bg)} />
              
              <div className="relative flex flex-col items-center space-y-6"> {/* Increased vertical gap between elements */}
                <div className={cn("flex h-18 w-18 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 border border-zinc-100", stat.bg)}> {/* Refined icon container size, animation, and border */}
                  <stat.icon className={cn("h-9 w-9", stat.iconColor)} /> {/* Larger icon for visual impact */}
                </div>
                <div className="space-y-1">
                  <h3 className={cn("text-4xl font-black tracking-tighter sm:text-5xl transition-colors group-hover:text-opacity-80", stat.color)}> {/* Refined number typography and scaling, added hover opacity effect */}
                    {stat.value}
                  </h3>
                  <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300"> {/* Refined label typography, larger size, better color, less extreme tracking */}
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}