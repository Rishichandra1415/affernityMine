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
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 dark:bg-zinc-950">
      {/* Subtle Background Glows */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-4 mb-20 lg:mb-28">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            A Culture of <span className="text-primary italic">Excellence</span>
          </h2>
          <div className="h-1.5 w-24 rounded-full bg-primary/50 mt-4 mx-auto" />
          <p className="max-w-2xl text-lg text-zinc-600 mt-6 dark:text-zinc-400">
            Committed to delivering superior quality and performance in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-zinc-100 bg-white p-8 shadow-xl shadow-zinc-200/50 transition-all hover:scale-[1.02] dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-none"
            >
              {/* Subtle hover icon background */}
              <div className={cn("absolute inset-0 opacity-0 transition-opacity group-hover:opacity-5", reason.bg)} />
              
              <div className="relative flex flex-col items-center text-center space-y-6">
                <div className={cn("flex h-20 w-20 items-center justify-center rounded-3xl transition-transform duration-500 group-hover:scale-110", reason.bg)}>
                  <reason.icon className={cn("h-10 w-10", reason.color)} strokeWidth={1.5} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
