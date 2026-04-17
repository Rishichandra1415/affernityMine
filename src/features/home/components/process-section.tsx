"use client";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Ruler, 
  HardHat, 
  Layout, 
  PencilLine, 
  CheckCircle2
} from "lucide-react";
import { cn } from "@/shared/lib/utils";

// Refined, richer color palette for a premium corporate look
const steps = [
  {
    title: "Consultation",
    description: "In-depth understanding of your needs followed by precise site analysis.",
    icon: MessageSquare,
    iconColor: "text-amber-600 dark:text-amber-500",
    iconBg: "bg-amber-50 dark:bg-amber-500/10",
    arrowBg: "bg-amber-500",
    arrowBorder: "border-l-amber-500",
    step: "1",
  },
  {
    title: "Design & Planning",
    description: "Engineering blueprints and selecting the perfect surface materials.",
    icon: Ruler,
    iconColor: "text-indigo-600 dark:text-indigo-500",
    iconBg: "bg-indigo-50 dark:bg-indigo-500/10",
    arrowBg: "bg-indigo-600",
    arrowBorder: "border-l-indigo-600",
    step: "2",
  },
  {
    title: "Base Work",
    description: "Expert civil work including excavation and asphalt/concrete base construction.",
    icon: HardHat,
    iconColor: "text-cyan-600 dark:text-cyan-500",
    iconBg: "bg-cyan-50 dark:bg-cyan-500/10",
    arrowBg: "bg-cyan-600",
    arrowBorder: "border-l-cyan-600",
    step: "3",
  },
  {
    title: "Surface Install",
    description: "Precision laying of ITF/BWF standard synthetic, wooden, or acrylic flooring.",
    icon: Layout,
    iconColor: "text-blue-600 dark:text-blue-500",
    iconBg: "bg-blue-50 dark:bg-blue-500/10",
    arrowBg: "bg-blue-600",
    arrowBorder: "border-l-blue-600",
    step: "4",
  },
  {
    title: "Marking & Fence",
    description: "Accurate line mapping and installation of professional lighting systems.",
    icon: PencilLine,
    iconColor: "text-emerald-600 dark:text-emerald-500",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
    arrowBg: "bg-emerald-500",
    arrowBorder: "border-l-emerald-500",
    step: "5",
  },
  {
    title: "Handover",
    description: "Final quality checks and certification before the official start of play.",
    icon: CheckCircle2,
    iconColor: "text-zinc-700 dark:text-zinc-300",
    iconBg: "bg-zinc-100 dark:bg-zinc-800",
    arrowBg: "bg-zinc-200 dark:bg-zinc-800",
    arrowBorder: "border-l-zinc-200 dark:border-l-zinc-800",
    step: "6",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-12 sm:py-16 dark:bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-10 lg:mb-14">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 backdrop-blur-md">
            <span className="text-sm font-black uppercase tracking-widest text-primary">
              Our Journey
            </span>
          </div>
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            Professional <span className="text-primary">Construction</span> Process
          </h2>
          <p className="max-w-3xl text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-medium mt-4">
            From initial site visit to the final whistle, our meticulous 6-step process ensures world-class results for every facility.
          </p>
        </div>

        {/* Infographic Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-6 lg:gap-4 relative w-full max-w-[90rem] mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center group">
              
              {/* STEP Label (Above Box) */}
              <span className="mb-5 flex h-6 items-center text-sm font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.25em]">
                STEP &nbsp;{step.step}
              </span>

              {/* White Icon Box - Slightly larger for better presence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative z-10 flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-3xl bg-white shadow-xl shadow-zinc-200/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 dark:shadow-none"
              >
                {/* Colored Icon Background Wrapper */}
                <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110", step.iconBg)}>
                  <step.icon className={cn("h-8 w-8", step.iconColor)} strokeWidth={2} />
                </div>
              </motion.div>

              {/* Desktop Block Arrow Connector */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[calc(50%+4rem)] top-[7.25rem] flex h-[14px] w-[calc(100%-8rem)] -translate-y-1/2 items-center z-0 hidden lg:flex opacity-100">
                  <div className={cn("h-full grow transition-colors duration-300", step.arrowBg)} />
                  <div className={cn("h-0 w-0 border-y-[12px] border-y-transparent border-l-[16px] transition-colors duration-300", step.arrowBorder)} />
                </div>
              )}

              {/* Mobile Down Arrow Connector */}
              {index !== steps.length - 1 && (
                <div className="mt-6 flex h-12 w-6 flex-col items-center lg:hidden opacity-100">
                   <div className={cn("w-2.5 grow", step.arrowBg)} />
                   <div className={cn("h-0 w-0 border-x-[12px] border-x-transparent border-t-[16px]", step.arrowBorder.replace('border-l-', 'border-t-'))} />
                </div>
              )}

              {/* Typography Below Box - Much more readable now */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="mt-8 flex flex-col items-center text-center px-2 w-full max-w-[220px]"
              >
                <h3 className="text-[15px] font-black uppercase tracking-wide text-zinc-900 dark:text-white mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium">
                  {step.description}
                </p>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}