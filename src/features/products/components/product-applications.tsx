"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProductApplicationsProps {
  applications: string[];
}

export function ProductApplications({ applications }: ProductApplicationsProps) {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 p-8 sm:p-16 lg:p-24">
          {/* Background pattern */}
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl uppercase">
                Versatile <br />
                <span className="text-primary italic">Applications</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Our infrastructure solutions are designed to adapt to a wide range of sports and recreational environments, providing consistent performance across various use cases.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {applications.map((app, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center space-x-3 rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white">{app}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
