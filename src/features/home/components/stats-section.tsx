"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Building2, Trophy, Map, Users } from "lucide-react";
import { cn } from "@/shared/lib/utils";

// Smooth Counter Component
function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, spring, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  {
    label: "Projects Delivered",
    value: "150+",
    icon: Building2,
  },
  {
    label: "Years Excellence",
    value: "15+",
    icon: Trophy,
  },
  {
    label: "States Covered",
    value: "25",
    icon: Map,
  },
  {
    label: "Happy Clients",
    value: "100%",
    icon: Users,
  },
];

export function StatsSection() {
  return (
    <section className="relative z-20 w-full bg-white border-y border-zinc-100 py-8 dark:bg-zinc-950 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-1 flex-col items-center text-center p-8 lg:py-4",
                // Screenshot jaisa dotted divider
                index !== stats.length - 1 && "w-full lg:w-auto border-b lg:border-b-0 lg:border-r border-dotted border-zinc-300 dark:border-zinc-700"
              )}
            >
              {/* Icon - Minimalist black/zinc look */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center">
                <stat.icon className="h-10 w-10 stroke-[1.5] text-zinc-800 dark:text-zinc-200" />
              </div>

              {/* Stats Text */}
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                  <Counter value={stat.value} />
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}