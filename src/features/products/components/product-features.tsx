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
  Timer
} from "lucide-react";

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
    <section className="bg-white py-24 sm:py-32 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl uppercase dark:text-white">
            Technical <span className="text-primary italic">Excellence</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Engineered for elite performance and safety, our surfacing systems integrate advanced material science with practical durability.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.title] || Settings;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl border border-zinc-100 bg-zinc-50 p-8 transition-all hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 dark:border-white/5 dark:bg-white/5 dark:hover:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
