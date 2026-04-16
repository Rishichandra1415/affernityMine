"use client";

import { motion } from "framer-motion";
import { ProductSpec } from "@/features/products/types";

interface InfraSpecTableProps {
  specs: ProductSpec[];
}

export function InfraSpecTable({ specs }: InfraSpecTableProps) {
  return (
    <section className="bg-white py-24 sm:py-32 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl uppercase dark:text-white">
              Field <span className="text-primary italic">Specifications</span>
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Precise dimensioning and material requirements meeting tournament standards.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-xl dark:border-white/5 dark:bg-zinc-950"
          >
            <div className="divide-y divide-zinc-100 dark:divide-white/5">
              {specs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col space-y-2 p-6 transition-colors hover:bg-zinc-50 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 dark:hover:bg-white/5"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
                    {spec.label}
                  </span>
                  <span className="text-lg font-bold text-zinc-900 dark:text-white">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
