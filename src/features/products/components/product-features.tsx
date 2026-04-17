"use client";

import { motion } from "framer-motion";
import { ProductFeature } from "../types";
import {
  ShieldCheck,
  Zap,
  Layers,
  Settings,
  Activity,
  CloudRain,
  Timer,
  Sparkles,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface ProductFeaturesProps {
  features: ProductFeature[];
}

const iconMap: Record<string, any> = {
  "Point Elasticity": Activity,
  "High Grip Finish": Zap,
  "Grade-A Maple": Layers,
  "Easy Maintenance": Settings,
  "Impact Shield": ShieldCheck,
  "Ultra Durable": ShieldCheck,
  "Eco-Friendly": ShieldCheck,
  "Non-Slip Surface": Zap,
  "ITF Certified": ShieldCheck,
  "UV Resistance": CloudRain,
  "Rapid Drainage": CloudRain,
  "Thermal Stability": Timer,
  "High Shock Absorption": Activity,
};

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">What Sets Us Apart</p>
            <h2 className="text-xl font-black tracking-tight text-zinc-900">
              Technical <span className="text-primary italic">Excellence</span>
            </h2>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.title] || Settings;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 p-7 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/10"
              >
                {/* Green corner accent */}
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/8 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className={cn(
                  "relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary",
                  "ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20"
                )}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Number badge */}
                <div className="mb-3 text-xs font-black tabular-nums tracking-widest text-zinc-400">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <h3 className="text-base font-black tracking-tight text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>

                {/* Bottom green line on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
