"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  Building2,
  Leaf,
  ShieldCheck,
  HardHat,
  LifeBuoy
} from "lucide-react";
import { cn } from "@/shared/lib/utils";

const reasons = [
  {
    title: "Competitive Pricing",
    description: "Best value without compromising on quality or materials.",
    icon: Banknote,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    title: "Indoor & Outdoor",
    description: "Complete solutions for all environments and climates.",
    icon: Building2,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Eco-Friendly",
    description: "Sustainable materials and environmentally conscious practices.",
    icon: Leaf,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Safety Certified",
    description: "All products meet international safety standards.",
    icon: ShieldCheck,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Expert Installation",
    description: "Trained professionals with years of experience.",
    icon: HardHat,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    title: "After-Sales Support",
    description: "Maintenance guidance and long-term partnership.",
    icon: LifeBuoy,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export function WhyChooseUs() {
  return (
    // Top padding kam kar di hai (pt-12) taaki section header upar se chipka rahe
    <section className="relative overflow-hidden bg-white pt-8 pb-12 dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-800">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section - Margin bottom kam kiya hai (mb-12) */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50"
          >
            A Culture of <span className="text-green-500 italic">Excellence</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            className="h-1 rounded-full bg-zinc-200 dark:bg-zinc-800 mt-1"
          />
          <p className="max-w-2xl text-base text-zinc-500 mt-3 dark:text-zinc-400">
            Committed to delivering superior quality and performance in every project.
          </p>
        </div>

        {/* Dotted Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={cn(
                "group relative flex flex-col items-center text-center p-10 transition-all duration-300",
                "hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30",
                "border-zinc-200 dark:border-zinc-800",
                index < 3 ? "lg:border-b" : "",
                index % 3 !== 2 ? "lg:border-r border-dotted" : "",
                "border-b md:border-b lg:border-b-0",
                index % 2 !== 1 ? "md:border-r border-dotted lg:border-r" : "md:border-r-0 lg:border-r"
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                className={cn(
                  "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-current/5",
                  reason.bg
                )}
              >
                <reason.icon
                  className={cn("h-8 w-8 stroke-[1.5] transition-transform duration-500 group-hover:rotate-6", reason.color)}
                />
              </motion.div>

              <div className="space-y-3 transition-transform duration-300 group-hover:translate-y-[-2px]">
                <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}