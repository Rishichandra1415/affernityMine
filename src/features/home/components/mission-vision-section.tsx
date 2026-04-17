"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";
import { cn } from "@/shared/lib/utils";

const items = [
  {
    title: "Our Mission",
    description: "To enhance and ease our client’s business by providing them with extraordinary, creative quality sports infrastructure solutions.",
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Our Vision",
    description: "To bring together opportunities, creativeness, and persistence to transform our client’s project economics through relentless drive.",
    icon: Eye,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Our Values",
    description: "Success is measured not only in numbers but also in achieving Total Customer Satisfaction and valuing the growth of our clients and employees.",
    icon: Rocket,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
];

export function MissionVisionSection() {
  return (
    <section className="py-12 bg-white dark:bg-zinc-950 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 dark:bg-zinc-900/50 -skew-x-12 translate-x-1/2" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-widest text-green-600 dark:text-green-500">
                A Culture of Excellence
              </span>
            </div>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
              Leading Sports Infrastructure in <span className="text-green-600 italic">Bihar & Jharkhand</span>
            </h2>
            
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
              Aaffinity Sports Infra is the fastest growing sports infrastructure company in the region. 
              We are passionate about sports and provide complete solutions for all indoor and outdoor 
              sports infrastructure needs.
            </p>

            <div className="space-y-6">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={cn("mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-110", item.bg)}>
                    <item.icon className={cn("h-6 w-6", item.color)} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src="/images/serviceimage/badminton.png" 
                alt="Our Vision" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" 
              />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-white dark:bg-zinc-800 p-8 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-700 max-w-xs"
            >
              <div className="text-4xl font-black text-green-600 mb-2">10+</div>
              <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-widest mb-2">
                Years of Expertise
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Leveraging years of industry experience to achieve total customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
