"use client";

import { motion } from "framer-motion";
import { ProductSpec } from "../types";
import { TableProperties } from "lucide-react";

interface ProductSpecTableProps {
  specs: ProductSpec[];
}

export function ProductSpecTable({ specs }: ProductSpecTableProps) {
  return (
    <section className="relative overflow-hidden bg-zinc-50 py-16 sm:py-20">
      {/* Subtle green glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <TableProperties className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Engineering Data</p>
            <h2 className="text-xl font-black tracking-tight text-zinc-900">
              Technical <span className="text-primary italic">Specifications</span>
            </h2>
          </div>
          <p className="ml-auto hidden max-w-xs text-right text-sm text-zinc-400 sm:block">
            Precise data for professional facility planning.
          </p>
        </div>

        {/* Spec Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/60"
        >
          {/* Table header */}
          <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50 px-6 py-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">Parameter</span>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-zinc-400">Value</span>
          </div>

          {/* Rows */}
          <div className="divide-y divide-zinc-100">
            {specs.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-zinc-50"
              >
                <div className="flex items-center gap-4">
                  {/* Index dot */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-black tabular-nums text-primary">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-zinc-700">
                    {spec.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-base font-black text-zinc-900">
                    {spec.value}
                  </span>
                  {/* Green active bar */}
                  <div className="h-4 w-[3px] rounded-full bg-primary/0 transition-all duration-300 group-hover:bg-primary" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer strip */}
          <div className="border-t border-zinc-100 bg-primary/5 px-6 py-3">
            <p className="text-center text-xs font-medium text-primary/60 uppercase tracking-widest">
              All specifications subject to product variant
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
