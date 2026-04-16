"use client";

import { motion } from "framer-motion";
import { ConstructionStep } from "../types";

interface ConstructionProcessProps {
  steps: ConstructionStep[];
}

export function ConstructionProcess({ steps }: ConstructionProcessProps) {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-5xl uppercase dark:text-white">
            The Building <span className="text-primary italic">Blueprint</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Our methodical approach ensures structural integrity and tournament-grade precision from the first excavation to the final marking.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="absolute left-[50%] top-0 hidden h-full w-px -translate-x-1/2 bg-zinc-100 lg:block dark:bg-white/5" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Visual Step Indicator */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary font-black text-white shadow-xl shadow-primary/20 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  0{idx + 1}
                </div>

                {/* Content Side */}
                <div className="lg:w-[45%]">
                  <div className={`space-y-4 ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <h3 className="text-2xl font-black text-zinc-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Aesthetic Spacer for Desktop Grid */}
                <div className="hidden lg:block lg:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
