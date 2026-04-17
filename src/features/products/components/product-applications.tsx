"use client";

import { motion } from "framer-motion";
import { CheckCircle2, LayoutGrid } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface ProductApplicationsProps {
  applications: string[];
}

export function ProductApplications({ applications }: ProductApplicationsProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20">
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-primary/4 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Layout: Header left, Grid right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">

          {/* Left: Text */}
          <div className="space-y-6">
            {/* Label + icon */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <LayoutGrid className="h-5 w-5" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Use Cases</p>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl leading-[1.1]">
              Versatile <br />
              <span className="text-primary italic">Applications</span>
            </h2>

            <p className="max-w-sm text-base leading-relaxed text-zinc-500">
              Our infrastructure solutions adapt to a wide range of sports and recreational environments,
              delivering consistent performance wherever they're installed.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 pt-2">
              <div className="space-y-1">
                <p className="text-2xl font-black text-primary">{applications.length}+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Use Cases</p>
              </div>
              <div className="w-px bg-white/5" />
              <div className="space-y-1">
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Certified</p>
              </div>
            </div>
          </div>

          {/* Right: Applications Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {applications.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={cn(
                  "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4",
                  "transition-all duration-300 hover:border-primary/25 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary/5"
                )}
              >
                {/* Green left accent bar */}
                <div className="absolute left-0 top-3 h-8 w-[3px] rounded-r-full bg-primary/0 transition-all duration-300 group-hover:bg-primary" />

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <CheckCircle2 className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <span className="text-sm font-bold tracking-wide text-zinc-200 transition-colors group-hover:text-white">
                    {app}
                  </span>
                </div>

                {/* Index number */}
                <span className="text-xs font-black tabular-nums text-zinc-700 transition-colors group-hover:text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
