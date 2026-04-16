"use client";

import { motion } from "framer-motion";
import { ProductFeature } from "@/features/products/types";
import { 
  ShieldCheck, 
  Zap, 
  Layers, 
  Settings, 
  Droplets,
  CloudSun,
  Maximize
} from "lucide-react";

interface InfraFeaturesProps {
  features: ProductFeature[];
}

const iconMap: Record<string, any> = {
  "BWF Compliant": ShieldCheck,
  "Shock Absorption": Zap,
  "Anti-Glare Lighting": CloudSun,
  "ITF Certified": ShieldCheck,
  "All-Weather Durability": CloudSun,
  "Low Maintenance": Settings,
  "FIBA Standard": ShieldCheck,
  "Point Elasticity": Zap,
  "Reinforced Systems": Layers,
  "FIH Standard": ShieldCheck,
  "Irrigation Systems": Droplets,
  "Enhanced Traction": Zap,
  "Acoustic Insulation": Settings,
  "Equipment Protection": ShieldCheck,
  "Anti-Bacterial": Droplets,
  "IAAF Standard": ShieldCheck,
  "Force Reduction": Zap,
  "Vibrant Aesthetics": Maximize,
  "Zero Undulation": Layers,
  "Dynamic Drainage": Droplets,
  "High Load Bearing": Layers,
  "Vinyl Coating": ShieldCheck,
  "Impact Tension": Zap,
  "Integrated Gates": Settings,
  "Olympic Standards": ShieldCheck,
  "Advanced Filtration": Droplets,
  "Superior Tiling": Layers,
};

export function InfraFeatures({ features }: InfraFeaturesProps) {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl uppercase dark:text-white">
            Facility <span className="text-primary italic">Highlights</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Professional sports infrastructure requires more than just a surface; it requires a integrated system of performance features.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = iconMap[feature.title] || Settings;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex items-start space-x-6 rounded-3xl bg-white p-8 shadow-lg shadow-zinc-200/50 transition-all hover:shadow-xl dark:bg-zinc-950 dark:shadow-none dark:border dark:border-white/5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:rotate-12">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
